"use client";

export default function ConversationItem({
  conversation,
  activeConversation,
  onSelect,
}) {
  const isActive = activeConversation?.id === conversation.id;

  return (
    <div
      onClick={() => onSelect(conversation)}
      className={`cursor-pointer p-4 border-b transition-all duration-200
      ${
        isActive
          ? "bg-blue-100 dark:bg-zinc-700"
          : "hover:bg-gray-100 dark:hover:bg-zinc-800"
      }`}
    >
      <div className="flex items-center justify-between">

        <h3 className="font-semibold text-sm">
          {conversation.visitor_name || "Anonymous Visitor"}
        </h3>

        <span
          className={`w-3 h-3 rounded-full ${
            conversation.status === "live"
              ? "bg-green-500"
              : "bg-gray-400"
          }`}
        />

      </div>

      <p className="text-xs text-gray-500 truncate mt-1">
        {conversation.last_message || "No messages yet"}
      </p>

      <p className="text-[11px] text-gray-400 mt-1">
        {new Date(conversation.updated_at).toLocaleString()}
      </p>
    </div>
  );
}