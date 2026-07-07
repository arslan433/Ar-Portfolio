"use client";

import { useState } from "react";
import {
  saveMessage,
  updateConversation,
  getOrCreateConversation,
} from "@/lib/chat";

export default function ChatInput({
  messages,
  setMessages,
  loading,
  setLoading,

  conversation,
  setConversation,

  humanStep,
  setHumanStep,

  visitorName,
  setVisitorName,

  visitorEmail,
  setVisitorEmail,
}) {
  const [input, setInput] = useState("");


  async function sendMessage(e) {
    e.preventDefault();
    let currentConversation = conversation;

    if (!currentConversation) {
      currentConversation = await getOrCreateConversation();
      setConversation(currentConversation);
    }

    const userText = input.trim();

    if (!userText || loading) return;
    // =========================
    // Collect Name
    // =========================

    if (humanStep === "name") {

      setVisitorName(userText);

      setMessages((prev) => [
        ...prev,
        {
          role: "user",
          text: userText,
        },
        {
          role: "model",
          text: "Great 😊 Now please enter your email address.",
        },
      ]);

      setInput("");

      setHumanStep("email");

      return;
    }

    // =========================
    // Collect Email
    // =========================

    if (humanStep === "email") {

      await updateConversation(currentConversation.id, {
        visitor_name: visitorName,
        visitor_email: userText,
        status: "waiting",
      });

      setVisitorEmail(userText);

      setMessages((prev) => [
        ...prev,
        {
          role: "user",
          text: userText,
        },
        {
          role: "model",
          text:
            "✅ Thank you! Arslan has been notified. Please wait while he joins the conversation.",
        },
      ]);

      setInput("");

      setHumanStep("waiting");

      return;
    }

    // =========================
    // Human Chat Mode
    // =========================
    console.log("Conversation Status:", currentConversation.status);


    if (currentConversation.status === "human") {

      await saveMessage(
        currentConversation.id,
        "user",
        userText
      );

      setInput("");

      return;
    }

    setLoading(true);
    setInput("");

    try {

      // Save user message

      const savedUser = await saveMessage(
        currentConversation.id,
        "user",
        userText
      );

      const updatedMessages = [
        ...messages,
        {
          id: savedUser.id,
          role: "user",
          text: userText,
        },
      ];

      setMessages(updatedMessages);

      // Gemini

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error || "Gemini API Error"
        );
      }

      // =========================
      // Transfer To Human
      // =========================

      if (data.reply === "TRANSFER_TO_HUMAN") {

        // User already registered
        if (
          currentConversation.visitor_name &&
          currentConversation.visitor_email
        ) {

          await updateConversation(currentConversation.id, {
            status: "waiting",
          });

          setMessages((prev) => [
            ...prev,
            {
              role: "model",
              text:
                "✅ Arslan has been notified. Please wait while he joins the conversation.",
            },
          ]);

          return;
        }

        // First time visitor
        setMessages((prev) => [
          ...prev,
          {
            role: "model",
            text:
              "Sure 😊 Before I connect you with Arslan, may I know your name?",
          },
        ]);

        setHumanStep("name");

        return;
      }

      // =========================
      // Bot Reply
      // =========================

      const savedBot = await saveMessage(
        currentConversation.id,
        "bot",
        data.reply
      );

      setMessages([
        ...updatedMessages,
        {
          id: savedBot.id,
          role: "model",
          text: data.reply,
        },
      ]);

    } catch (err) {

      console.error(err);

      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text:
            "⚠️ Sorry, something went wrong. Please try again.",
        },
      ]);

    } finally {

      setLoading(false);

    }

  }
  return (
    <div>

      {conversation?.status === "human" && (

        <div className="bg-green-100 text-green-700 text-center text-sm p-2 border-b">

          🟢 You are now chatting with Arslan.

        </div>

      )}

      <form
        onSubmit={sendMessage}
        className="p-3 flex gap-2 bg-white dark:bg-zinc-900 border-t dark:border-zinc-800"
      >

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          className="flex-1 rounded-xl border px-3 py-2 text-sm
          bg-gray-50 text-gray-50 dark:bg-zinc-800
          dark:border-zinc-700
          focus:outline-none
          focus:border-blue-500"
        />

        <button
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 rounded-xl disabled:opacity-60"
        >
          Send
        </button>

      </form>

    </div>
  );
}