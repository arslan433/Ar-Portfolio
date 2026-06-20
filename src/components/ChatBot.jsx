"use client";
import { useState, useRef, useEffect } from "react";

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {
            role: "model",
            text: "Hello! I am Arslan's AI Assistant. Feel free to ask me anything about his technical skills, professional experience, or web development projects."
        }
    ]);

    const [loading, setLoading] = useState(false);
    const chatEndRef = useRef(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim() || loading) return;

        const userText = input;
        setInput("");
        setLoading(true);

        const updatedMessages = [...messages, { role: "user", text: userText }];
        setMessages(updatedMessages);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ messages: updatedMessages }),
            });

            if (!res.ok) {
                const errorData = await res.json().catch(() => ({}));
                console.error("Server Error Response:", errorData);
                setMessages([...updatedMessages, { role: "model", text: `Server response error (${res.status}). Please check console.` }]);
                return;
            }

            const data = await res.json();
            setMessages([...updatedMessages, { role: "model", text: data.reply }]);

        } catch (err) {
            console.error("Fetch Catch Error Details:", err);
            setMessages([...updatedMessages, { role: "model", text: "Connection error! Check if npm run dev is active or view console." }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 font-sans">
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center focus:outline-none"
                >
                    <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.222 3.419.169A1.5 1.5 0 0 0 10.5 18v2.872c0 .69.734 1.13 1.344.806l3.856-2.036a1.5 1.5 0 0 1 .674-.165c.343 0 .685.012 1.025.037a3.375 3.375 0 0 0 3.601-3.133 48.953 48.953 0 0 0 0-7.36 3.375 3.375 0 0 0-3.601-3.133 48.954 48.954 0 0 0-16.5 0A3.375 3.375 0 0 0 2.25 5.18v7.36Z" />
                    </svg>
                </button>
            )}

            {isOpen && (
                <div className="bg-white dark:bg-zinc-900 w-80 md:w-96 h-[460px] rounded-2xl shadow-2xl border border-gray-200 dark:border-zinc-800 flex flex-col overflow-hidden transition-all duration-300">

                    {/* Header */}
                    <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
                            <div>
                                <h3 className="font-bold text-sm">Arslan's AI Companion</h3>
                                <p className="text-xs text-blue-100">Online | Ask me anything</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:text-gray-200 focus:outline-none"
                        >
                            <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 dark:bg-zinc-950">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm ${msg.role === 'user'
                                            ? 'bg-blue-600 text-white rounded-br-none'
                                            : 'bg-white dark:bg-zinc-800 text-gray-800 dark:text-zinc-100 rounded-bl-none border border-gray-100 dark:border-zinc-700'
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}

                        {loading && (
                            <div className="flex justify-start">
                                <div className="bg-white dark:bg-zinc-800 p-3 rounded-2xl rounded-bl-none border border-gray-100 dark:border-zinc-700 flex gap-1 items-center">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                </div>
                            </div>
                        )}
                        <div ref={chatEndRef} />
                    </div>

                    <form onSubmit={sendMessage} className="p-3 bg-white dark:bg-zinc-900 border-t border-gray-100 dark:border-zinc-800 flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-1 border dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-zinc-100 px-3 py-2 rounded-xl text-sm focus:outline-none focus:border-blue-500"
                            placeholder="Ask me anything about Arslan..."
                            disabled={loading}
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors focus:outline-none"
                        >
                            Send
                        </button>
                    </form>

                </div>
            )}
        </div>
    );
}
