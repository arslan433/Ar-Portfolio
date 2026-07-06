"use client";

import { useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/supabase";
import MessageBubble from "./MessageBubble";
import ReplyBox from "./ReplyBox";

export default function ChatWindow({ conversation }) {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (conversation) {
      fetchMessages();
    }
  }, [conversation]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  async function fetchMessages() {
    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .eq("conversation_id", conversation.id)
      .order("created_at", {
        ascending: true,
      });

    if (error) {
      console.error(error);
      return;
    }

    setMessages(data);
  }

  if (!conversation) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-500">
        Select a conversation
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">

      {/* Header */}

      <div className="border-b p-4 dark:border-zinc-800">

        <h2 className="font-bold">
          {conversation.visitor_name || "Anonymous Visitor"}
        </h2>

        <p className="text-sm text-gray-500">
          {conversation.visitor_email || "No Email"}
        </p>

      </div>

      {/* Messages */}

      <div className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-zinc-900">

        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
          />
        ))}

        <div ref={messagesEndRef}></div>

      </div>

      {/* Reply */}

      <ReplyBox
        conversation={conversation}
        refreshMessages={fetchMessages}
      />

    </div>
  );
}