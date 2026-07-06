"use client";

import { useEffect, useRef, useState } from "react";

import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

import {
  getOrCreateConversation,
  loadMessages,
} from "@/lib/chat";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "model",
      text: "Hello! 👋 I am Arslan's AI Assistant. Feel free to ask me anything about his skills, projects or experience.",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  // Auto Scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  // Load Chat History
  useEffect(() => {
    async function initChat() {
      try {
        const conversation =
          await getOrCreateConversation();

        const history = await loadMessages(
          conversation.id
        );

        if (history.length > 0) {
          setMessages(
            history.map((msg) => ({
              role:
                msg.sender === "user"
                  ? "user"
                  : "model",

              text: msg.message,
            }))
          );
        }
      } catch (err) {
        console.error(err);
      }
    }

    initChat();
  }, []);

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
        <div className="w-[390px] h-[600px] rounded-2xl shadow-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col overflow-hidden">

          <ChatHeader
            onClose={() => setIsOpen(false)}
          />

          <ChatMessages
            messages={messages}
            loading={loading}
            chatEndRef={chatEndRef}
          />

          <ChatInput
            messages={messages}
            setMessages={setMessages}
            loading={loading}
            setLoading={setLoading}
          />

        </div>
      )}

    </div>
  );
}