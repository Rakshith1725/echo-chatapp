import { useChatStore } from '../store/useChatStore';

import BorderAnimatedContainer from '../components/BorderAnimatedContainer';
import ProfileHeader from "../components/ProfileHeader";
import ActiveTabSwitch from "../components/ActiveTabSwitch";
import ChatsList from "../components/ChatsList";
import ContactList from "../components/ContactList";
import ChatContainer from "../components/ChatContainer";
import NoConversationPlaceholder from "../components/NoConversationPlaceholder";

function ChatPage() {
  const { activeTab, selectedUser } = useChatStore();

  return (
    <div className="w-full max-w-6xl h-screen md:h-[calc(100vh-2rem)]">
      <BorderAnimatedContainer>

        {/*
          Mobile: show sidebar OR chat (never both).
          Desktop (md+): show both side-by-side.
        */}

        {/* ── SIDEBAR ── */}
        {/* On mobile, hide sidebar when a user is selected */}
        <div
          className={`
            ${selectedUser ? 'hidden' : 'flex'} md:flex
            w-full md:w-72 lg:w-80 flex-shrink-0
            bg-slate-800/50 backdrop-blur-sm flex-col overflow-hidden
            border-r border-slate-700/30
          `}
        >
          <ProfileHeader />
          <ActiveTabSwitch />
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {activeTab === "chats" ? <ChatsList /> : <ContactList />}
          </div>
        </div>

        {/* ── MAIN CHAT AREA ── */}
        {/* On mobile, hide chat area when no user is selected */}
        <div
          className={`
            ${selectedUser ? 'flex' : 'hidden'} md:flex
            flex-1 flex-col bg-slate-900/50 backdrop-blur-sm min-w-0 overflow-hidden
          `}
        >
          {selectedUser ? <ChatContainer /> : <NoConversationPlaceholder />}
        </div>

      </BorderAnimatedContainer>
    </div>
  );
}

export default ChatPage;
