"use client";

import { useState } from "react";
import {
  getOrCreateConversation,
  saveMessage,
} from "@/lib/chat";

export default function ChatInput({
  messages,
  setMessages,
  loading,
  setLoading,
}) {
  const [input, setInput] = useState("");

  async function sendMessage(e) {
    e.preventDefault();

    if (!input.trim() || loading) return;

    const userText = input.trim();

    setInput("");

    setLoading(true);

    // Add user message to UI
    const updatedMessages = [
      ...messages,
      {
        role: "user",
        text: userText,
      },
    ];

    setMessages(updatedMessages);

    try {
      // Get/Create Conversation
      const conversation = await getOrCreateConversation();

      // Save User Message
      await saveMessage(
        conversation.id,
        "user",
        userText
      );

      // Gemini API
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages,
        }),
      });

      // Temporary Bot Reply

      const botReplytest = {
        role: "model",
        text: "Testing... Message saved successfully in Supabase 🚀",
      };

      setMessages([
        ...updatedMessages,
        botReply,
      ]);

      await saveMessage(
        conversation.id,
        "bot",
        botReply.text
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      const botReply = {
        role: "model",
        text: data.reply,
      };

      // Add Bot Reply
      setMessages([
        ...updatedMessages,
        botReply,
      ]);

      // Save Bot Reply
      await saveMessage(
        conversation.id,
        "bot",
        data.reply
      );

    } catch (error) {
      console.error(error);

      setMessages([
        ...updatedMessages,
        {
          role: "model",
          text: "Sorry, something went wrong.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={sendMessage}
      className="p-3 bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800 flex gap-2"
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask me anything..."
        className="flex-1 rounded-xl border px-3 py-2 text-sm
        bg-gray-50 dark:bg-zinc-800
        dark:border-zinc-700
        focus:outline-none
        focus:border-blue-500"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-5 rounded-xl hover:bg-blue-700 disabled:opacity-60"
      >
        Send
      </button>
    </form>
  );
}