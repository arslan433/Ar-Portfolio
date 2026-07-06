export default function TypingIndicator() {
    return (
        <div className="flex justify-start">
            <div className="bg-white dark:bg-zinc-800 p-3 rounded-2xl rounded-bl-none border border-gray-200 dark:border-zinc-700 flex gap-1">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
            </div>
        </div>
    );
}