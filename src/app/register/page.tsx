"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/providers/LanguageProvider";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Eye, EyeOff, User as UserIcon, Camera, Loader2 } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";

// Components
import AuthHero from "@/components/auth/AuthHero";

export default function RegisterPage() {
  const { t } = useLanguage();
  const router = useRouter();
  const r = t.registerPage;
  const fileInputRef = useRef<HTMLInputElement>(null);

  // State
  const [dataRegister, setDataRegister] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    avatarUrl: "",
    role: "student" as "student" | "instructor" | "admin"
  });

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // 1. Mutation untuk Upload Image
  const uploadMutation = useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append("file", file);
      const response = await axiosInstance.post("/uploads/image", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    },
    onSuccess: (data) => {
      // Simpan URL dari backend ke state dataRegister
      setDataRegister((prev) => ({ ...prev, avatarUrl: data.url }));
    },
    onError: (error) => {
      console.error("Upload failed:", error);
      alert("Failed to upload image. Please try again.");
    }
  });

  // Handle File Change & Trigger Upload
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Buat preview lokal segera
      const localPreview = URL.createObjectURL(file);
      setPreviewUrl(localPreview);

      // Jalankan upload ke server
      uploadMutation.mutate(file);
    }
  };

  // 2. Mutation untuk Register User
  const registerMutation = useMutation({
    mutationFn: async (payload: any) => {
      const response = await axiosInstance.post("/auth/register", payload);
      return response.data;
    },
    onSuccess: () => {
      router.push("/login");
    },
    onError: (error: any) => {
      console.error("Register Error:", error);
    },
  });

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (dataRegister.password !== dataRegister.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!agreedToTerms) {
      alert("Please agree to the terms.");
      return;
    }

    // Tunggu upload selesai jika sedang berjalan
    if (uploadMutation.isPending) {
      alert("Please wait for image upload to complete.");
      return;
    }

    // Transform data for backend (split name)
    const nameParts = dataRegister.fullName.trim().split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "-";

    const payload = {
      email: dataRegister.email,
      password: dataRegister.password,
      firstName,
      lastName,
      // Gunakan avatarUrl yang sudah diisi oleh uploadMutation.onSuccess
      avatarUrl: dataRegister.avatarUrl,
      role: dataRegister.role,
    };

    registerMutation.mutate(payload);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row relative">
      <AuthHero
        title={r.heroTitle}
        subtitle={r.heroSubtitle}
        stats={r.heroStats}
      />

      <div className="flex-1 bg-white flex items-center justify-center p-6 sm:p-12 md:p-16 relative">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md space-y-8 md:space-y-10 mt-0"
        >
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary tracking-tighter">{r.title}</h2>
            <p className="text-sm md:text-base text-gray-500 font-medium">{r.subtitle}</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-5 md:space-y-6">
            {/* Profile Photo Section */}
            <div className="flex flex-col items-center space-y-4 pb-2">
              <div
                onClick={() => fileInputRef.current?.click()}
                className={`relative w-28 h-28 rounded-full bg-gray-50 border-2 border-dashed flex items-center justify-center cursor-pointer transition-all overflow-hidden group shadow-inner ${uploadMutation.isPending ? 'border-secondary animate-pulse' : 'border-gray-200 hover:border-secondary'}`}
              >
                {previewUrl ? (
                  <img src={previewUrl} alt="Preview" className={`w-full h-full object-cover ${uploadMutation.isPending ? 'opacity-50' : 'opacity-100'}`} />
                ) : (
                  <div className="flex flex-col items-center text-gray-400">
                    <UserIcon className="w-8 h-8 mb-1" />
                    <span className="text-[8px] font-black uppercase tracking-widest">{r.imageLabel}</span>
                  </div>
                )}

                {/* Upload Loading Overlay */}
                {uploadMutation.isPending && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                    <Loader2 className="w-6 h-6 text-secondary animate-spin" />
                  </div>
                )}

                <div className="absolute inset-0 bg-secondary/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera className="w-6 h-6 text-white" />
                </div>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />
              {uploadMutation.isSuccess && <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">Image Uploaded!</span>}
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{r.nameLabel}</label>
              <Input
                type="text"
                required
                placeholder="Lord Alistair Vaughn"
                className="h-14 rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white transition-all text-base px-6"
                value={dataRegister.fullName}
                onChange={(e) => setDataRegister({ ...dataRegister, fullName: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{r.emailLabel}</label>
              <Input
                type="email"
                required
                placeholder="name@corporate.com"
                className="h-14 rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white transition-all text-base px-6"
                value={dataRegister.email}
                onChange={(e) => setDataRegister({ ...dataRegister, email: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{r.passwordLabel}</label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="••••••••"
                    className="h-14 rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white transition-all text-base px-6 pr-12"
                    value={dataRegister.password}
                    onChange={(e) => setDataRegister({ ...dataRegister, password: e.target.value })}
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300">
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{r.confirmPasswordLabel}</label>
                <div className="relative">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    placeholder="••••••••"
                    className="h-14 rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white transition-all text-base px-6 pr-12"
                    value={dataRegister.confirmPassword}
                    onChange={(e) => setDataRegister({ ...dataRegister, confirmPassword: e.target.value })}
                  />
                  <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300">
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="terms"
                checked={agreedToTerms}
                onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                className="rounded-md border-gray-200 mt-0.5"
              />
              <label htmlFor="terms" className="text-[11px] font-bold text-gray-400 cursor-pointer select-none leading-relaxed">
                {r.termsText}
              </label>
            </div>

            <Button
              type="submit"
              disabled={registerMutation.isPending || uploadMutation.isPending}
              className="w-full h-16 rounded-2xl bg-secondary hover:bg-secondary/90 text-white font-black text-lg shadow-xl shadow-secondary/10 transition-all active:scale-95 gap-3"
            >
              {registerMutation.isPending ? "REGISTERING..." : r.submitButton}
              {!registerMutation.isPending && <ArrowRight className="w-5 h-5" />}
            </Button>
          </form>

          <div className="text-center pt-4">
            <Link href="/login" className="text-sm font-bold text-gray-500 hover:text-primary transition-colors">
              {r.alreadyHaveAccount}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
