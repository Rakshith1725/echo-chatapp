import { useChatStore } from "../store/useChatStore";

function ActiveTabSwitch() {
  const { activeTab, setActiveTab } = useChatStore();

  return (
    <div className="flex gap-1 p-2 mx-2 mb-1 flex-shrink-0 bg-slate-900/30 rounded-xl">
      <button
        onClick={() => setActiveTab("chats")}
        className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${
          activeTab === "chats"
            ? "bg-cyan-500/20 text-cyan-400 shadow-sm"
            : "text-slate-400 hover:text-slate-300 hover:bg-slate-700/30"
        }`}
      >
        💬 Chats
      </button>

      <button
        onClick={() => setActiveTab("contacts")}
        className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${
          activeTab === "contacts"
            ? "bg-cyan-500/20 text-cyan-400 shadow-sm"
            : "text-slate-400 hover:text-slate-300 hover:bg-slate-700/30"
        }`}
      >
        👥 Contacts
      </button>
    </div>
  );
}
export default ActiveTabSwitch;