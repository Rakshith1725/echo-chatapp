import { useState, useRef } from "react";
import { LogOutIcon, VolumeOffIcon, Volume2Icon } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const mouseClickSound = new Audio("/sounds/mouse-click.mp3");

function ProfileHeader() {
  const { logout, authUser, updateProfile } = useAuthStore();
  const { isSoundEnabled, toggleSound } = useChatStore();
  const [selectedImg, setSelectedImg] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="px-4 py-4 md:px-6 border-b border-slate-700/50 flex-shrink-0">
      <div className="flex items-center justify-between gap-2">

        {/* Avatar + Name */}
        <div className="flex items-center gap-2 md:gap-3 min-w-0">
          <div className="avatar avatar-online flex-shrink-0">
            <button
              className="size-11 md:size-14 rounded-full overflow-hidden relative group"
              onClick={() => fileInputRef.current?.click()}
            >
              <img
                src={selectedImg || authUser.profilePic || "/avatar.png"}
                alt="User image"
                className="size-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <span className="text-white text-xs">Edit</span>
              </div>
            </button>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>

          {/* Name & status — truncate on small screens */}
          <div className="min-w-0">
            <h3 className="text-slate-200 font-medium text-sm md:text-base truncate max-w-[110px] md:max-w-[160px]">
              {authUser.fullName}
            </h3>
            <p className="text-slate-400 text-xs">Online</p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 items-center flex-shrink-0">
          {/* Sound toggle */}
          <button
            className="text-slate-400 hover:text-slate-200 transition-colors"
            onClick={() => {
              mouseClickSound.currentTime = 0;
              mouseClickSound.play().catch(() => {});
              toggleSound();
            }}
            aria-label="Toggle sound"
          >
            {isSoundEnabled
              ? <Volume2Icon className="size-4 md:size-5" />
              : <VolumeOffIcon className="size-4 md:size-5" />
            }
          </button>

          {/* Logout */}
          <button
            className="text-slate-400 hover:text-red-400 transition-colors"
            onClick={logout}
            aria-label="Logout"
          >
            <LogOutIcon className="size-4 md:size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProfileHeader;
