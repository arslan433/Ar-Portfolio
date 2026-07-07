"use client";

import { useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/supabase";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import { usePathname } from "next/navigation";
import { getOrCreateConversation, loadMessages } from "@/lib/chat";

export default function ChatBot() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  const [isOpen, setIsOpen] = useState(false);
  const [conversation, setConversation] = useState(null);
  const [messages, setMessages] = useState([
    {
      role: "model",
      text: "Hello! 👋 I am Arslan's AI Assistant. Feel free to ask me anything about his skills, projects or experience.",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [humanStep, setHumanStep] = useState(null);
  const [visitorName, setVisitorName] = useState("");
  const [visitorEmail, setVisitorEmail] = useState("");
  const chatEndRef = useRef(null);

  // 1. On mount, check for a saved conversation ID
  useEffect(() => {
    const savedId = localStorage.getItem("chat_conversation_id");
    if (!savedId) return; // no previous chat – ChatInput will create one later

    // fetch the existing conversation from Supabase (optional, you can also just set { id: savedId })
    const fetchConversation = async () => {
      const { data, error } = await supabase
        .from("conversations")
        .select("*")
        .eq("id", savedId)
        .single();

      if (error) {
        console.error("Failed to fetch conversation:", error);
        localStorage.removeItem("chat_conversation_id");
        return;
      }
      setConversation(data);
    };

    fetchConversation();
  }, []);

  // 2. Whenever the conversation changes (new or updated), store its ID
  useEffect(() => {
    if (conversation?.id) {
      localStorage.setItem("chat_conversation_id", conversation.id);
    } else {
      localStorage.removeItem("chat_conversation_id");
    }
  }, [conversation?.id]);

  // 3. Load messages once we have a valid conversation
  useEffect(() => {
    if (!conversation?.id) return;

    async function initChat() {
      try {
        const history = await loadMessages(conversation.id);
        if (history.length > 0) {
          setMessages(
            history.map((msg) => ({
              id: msg.id,
              role: msg.sender === "user" ? "user" : "model",
              text: msg.message,
            }))
          );
        }
      } catch (err) {
        console.error("Failed to load messages:", err);
      }
    }

    initChat();
  }, [conversation?.id]); // re‑run when conversation.id becomes available

  useEffect(() => {
    if (!conversation) return;

    const channel = supabase
      .channel(`chat-${conversation.id}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
          filter: `conversation_id=eq.${conversation.id}`,
        },
        (payload) => {


          const newMessage = payload.new;

          setMessages(prev => {

            if (prev.some((m) => m.id === newMessage.id)) {
              return prev;
            }

            return [
              ...prev,
              {
                id: newMessage.id,
                role:
                  newMessage.sender === "user"
                    ? "user"
                    : "model",
                text: newMessage.message,
              },
            ];
          });

        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };

  }, [conversation]);

  useEffect(() => {
    if (!conversation?.id) return;

    console.log("SUBSCRIBE");

    const statusChannel = supabase
      .channel(`conversation-${conversation.id}`)
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "conversations",
          filter: `id=eq.${conversation.id}`,
        },
        (payload) => {
          console.log("UPDATE EVENT");
          setConversation(payload.new);
        }
      )
      .subscribe();

    return () => {
      console.log("UNSUBSCRIBE");
      supabase.removeChannel(statusChannel);
    };
  }, [conversation?.id]);


  // useEffect(() => {
  //   chatEndRef.current?.scrollIntoView();
  // }, [messages, loading]);

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* Floating Button */}

      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-xl transition hover:scale-110"
        >
          💬
        </button>
      )}

      {/* Chat Window */}

      {isOpen && (
        <div className="w-[390px] h-[490px] max-md:w-[350px] rounded-2xl shadow-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col overflow-hidden">

          <ChatHeader
            onClose={() => setIsOpen(false)}
          />

          <ChatMessages
            messages={messages}
            loading={loading}
            chatEndRef={chatEndRef}
          />

          <ChatInput
            conversation={conversation}
            setConversation={setConversation}

            messages={messages}
            setMessages={setMessages}
            loading={loading}
            setLoading={setLoading}

            humanStep={humanStep}
            setHumanStep={setHumanStep}

            visitorName={visitorName}
            setVisitorName={setVisitorName}

            visitorEmail={visitorEmail}
            setVisitorEmail={setVisitorEmail}



          />

        </div>
      )}

    </div>
  );
}