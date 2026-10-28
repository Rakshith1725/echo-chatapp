import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import { MessageCircleIcon, MailIcon, LoaderIcon, LockIcon } from "lucide-react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="w-full h-full flex items-center justify-center px-4">
      {/* Card container — full height on mobile, capped on desktop */}
      <div
        className="relative w-full max-w-5xl"
        style={{ height: 'min(calc(100vh - 2rem), 640px)' }}
      >
        <BorderAnimatedContainer>
          <div className="w-full h-full flex flex-col md:flex-row overflow-hidden">

            {/* ── FORM COLUMN ── */}
            <div className="flex-1 md:flex-none md:w-1/2 flex items-center justify-center p-6 md:p-10 md:border-r border-slate-600/30 overflow-y-auto">
              <div className="w-full max-w-sm">

                {/* Heading */}
                <div className="text-center mb-6 md:mb-8">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto mb-3">
                    <MessageCircleIcon className="w-6 h-6 md:w-7 md:h-7 text-cyan-400" />
                  </div>
                  <h1 className="text-xl md:text-2xl font-bold text-slate-200 mb-1">Welcome Back</h1>
                  <p className="text-slate-400 text-sm">Login to access your account</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                  {/* Email */}
                  <div>
                    <label className="auth-input-label">Email</label>
                    <div className="relative">
                      <MailIcon className="auth-input-icon" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="input text-sm md:text-base"
                        placeholder="johndoe@gmail.com"
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="auth-input-label">Password</label>
                    <div className="relative">
                      <LockIcon className="auth-input-icon" />
                      <input
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="input text-sm md:text-base"
                        placeholder="Enter your password"
                        autoComplete="current-password"
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <button className="auth-btn mt-2" type="submit" disabled={isLoggingIn}>
                    {isLoggingIn
                      ? <LoaderIcon className="w-5 h-5 animate-spin mx-auto" />
                      : "Sign In"
                    }
                  </button>
                </form>

                <div className="mt-5 text-center">
                  <Link to="/signup" className="auth-link text-sm">
                    Don't have an account? <span className="font-medium">Sign Up</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* ── ILLUSTRATION COLUMN — hidden on mobile ── */}
            <div className="hidden md:flex md:w-1/2 items-center justify-center p-8 bg-gradient-to-bl from-slate-800/30 to-transparent">
              <div className="text-center">
                <img
                  src="/login.png"
                  alt="Chat illustration"
                  className="w-full max-w-xs h-auto object-contain mx-auto"
                />
                <h2 className="text-lg font-medium text-cyan-400 mt-6">Connect anytime, anywhere</h2>
                <p className="text-slate-400 text-sm mt-2">Real-time chat with the people that matter</p>
              </div>
            </div>

          </div>
        </BorderAnimatedContainer>
      </div>
    </div>
  );
}
export default LoginPage;