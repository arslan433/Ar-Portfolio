import ReactMarkdown from "react-markdown";

export default function Message({ message }) {
    const isUser = message.role === "user";

    return (
        <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
            <div
                className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm
                ${
                    isUser
                        ? "bg-blue-600 text-white rounded-br-none"
                        : "bg-white dark:bg-zinc-800 text-gray-800 dark:text-white rounded-bl-none border border-gray-200 dark:border-zinc-700"
                }`}
            >
                <ReactMarkdown>{message.text}</ReactMarkdown>
            </div>
        </div>
    );
}