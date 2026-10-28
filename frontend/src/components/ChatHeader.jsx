import { ArrowLeftIcon, XIcon } from "lucide-react";
import { useChatStore } from "../store/useChatStore";
import { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";

function ChatHeader() {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const isOnline = onlineUsers.includes(selectedUser._id);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") setSelectedUser(null);
    };
    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [setSelectedUser]);

  return (
    <div className="flex justify-between items-center bg-slate-800/50 border-b border-slate-700/50 h-[72px] px-4 md:px-6 flex-shrink-0 w-full gap-3">

      <div className="flex items-center gap-3 min-w-0">
        {/* Back arrow — only visible on mobile */}
        <button
          onClick={() => setSelectedUser(null)}
          className="md:hidden text-slate-400 hover:text-slate-200 transition-colors flex-shrink-0"
          aria-label="Back to contacts"
        >
          <ArrowLeftIcon className="w-5 h-5" />
        </button>

        {/* Avatar */}
        <div className={`avatar avatar-${isOnline ? "online" : "offline"} flex-shrink-0`}>
          <div className="w-10 md:w-12 rounded-full">
            <img src={selectedUser.profilePic || "/avatar.png"} alt={selectedUser.fullName} />
          </div>
        </div>

        {/* Name & status */}
        <div className="min-w-0">
          <h3 className="text-slate-200 font-medium truncate text-sm md:text-base">
            {selectedUser.fullName}
          </h3>
          <p className="text-slate-400 text-xs">{isOnline ? "Online" : "Offline"}</p>
        </div>
      </div>

      {/* Close button — desktop only */}
      <button
        onClick={() => setSelectedUser(null)}
        className="hidden md:block text-slate-400 hover:text-slate-200 transition-colors flex-shrink-0"
        aria-label="Close chat"
      >
        <XIcon className="w-5 h-5" />
      </button>
    </div>
  );
}
export default ChatHeader;