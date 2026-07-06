export default function ChatHeader({ onClose }) {
    return (
        <div className="bg-blue-600 text-white p-4 flex justify-between items-center">

            <div className="flex gap-2 items-center">

                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

                <div>
                    <h3 className="font-bold text-sm">
                        Arslan AI Assistant
                    </h3>

                    <p className="text-xs text-blue-100">
                        Online
                    </p>

                </div>

            </div>

            <button onClick={onClose}>
                ✕
            </button>

        </div>
    );
}