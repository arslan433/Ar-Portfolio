import Message from "./Message";
import TypingIndicator from "./TypingIndicator";

export default function ChatMessages({
    messages,
    loading,
    chatEndRef,
}) {
    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 dark:bg-zinc-950">

            {messages.map((message, index) => (
                <Message
                    key={index}
                    message={message}
                />
            ))}

            {loading && <TypingIndicator />}

            <div ref={chatEndRef}></div>

        </div>
    );
}