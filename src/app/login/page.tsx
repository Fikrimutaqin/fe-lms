"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/providers/LanguageProvider";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Eye, EyeOff, Loader2 } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";

// Components
import AuthHero from "@/components/auth/AuthHero";

export default function LoginPage() {
  const { t } = useLanguage();
  const router = useRouter();
  const l = t.loginPage;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // TanStack Query Mutation
  const loginMutation = useMutation({
    mutationFn: async (credentials: any) => {
      const response = await axiosInstance.post("/auth/login", credentials);
      return response.data.data;
    },
    onSuccess: (data) => {
      // Simpan token ke localStorage
      localStorage.setItem("token", data.access_token);

      // Redirect ke dashboard
      router.push("/dashboard");
    },
    onError: (error: any) => {
      console.error("Login Error:", error);
    },
  });

  const handleSignin = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate({ email, password });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row relative">
      <AuthHero
        title={l.heroTitle}
        subtitle={l.heroSubtitle}
        stats={l.heroStats}
      />

      {/* Right Side: Login Form */}
      <div className="flex-1 bg-white flex items-center justify-center p-6 sm:p-12 md:p-16 relative">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md space-y-8 md:space-y-10 mt-0"
        >
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary tracking-tighter">{l.title}</h2>
            <p className="text-sm md:text-base text-gray-500 font-medium">{l.subtitle}</p>
          </div>

          <form className="space-y-6" onSubmit={handleSignin}>
            {loginMutation.isError && (
              <div className="p-4 rounded-xl bg-red-50 text-red-500 text-sm font-bold border border-red-100">
                {(loginMutation.error as any)?.response?.data?.message || "Login failed. Please try again."}
              </div>
            )}

            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{l.emailLabel}</label>
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@corporate.com"
                className="h-14 rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white transition-all text-base px-6"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{l.passwordLabel}</label>
                <Link href="#" className="text-[10px] font-bold text-primary hover:underline uppercase tracking-widest">
                  {l.forgotPassword}
                </Link>
              </div>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="h-14 rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white transition-all text-base px-6 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-secondary"
                >
                  {showPassword === true ? (
                    <EyeOff className={`w-5 h-5 ${showPassword ? 'text-secondary' : ''}`} />
                  ) : (
                    <Eye className={`w-5 h-5 ${showPassword ? 'text-secondary' : ''}`} />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Checkbox id="remember" className="rounded-md border-gray-200" />
              <label htmlFor="remember" className="text-xs font-bold text-gray-400 cursor-pointer select-none">
                {l.rememberMe}
              </label>
            </div>

            <Button
              type="submit"
              disabled={loginMutation.isPending}
              className="w-full h-16 rounded-2xl bg-secondary hover:bg-secondary/90 text-white font-black text-lg shadow-xl shadow-secondary/10 transition-all active:scale-95 gap-3"
            >
              {loginMutation.isPending ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  {l.submitButton}
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </Button>
          </form>

          <div className="text-center">
            <Link href="/register" className="text-xs font-bold text-gray-400 hover:text-primary transition-colors italic">
              {l.footerText}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
