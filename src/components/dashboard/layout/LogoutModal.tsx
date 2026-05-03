"use client";

import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/store";
import { setLogoutModalOpen } from "@/store/slices/uiSlice";
import { logout } from "@/store/slices/authSlice";
import { useRouter } from "next/navigation";

export default function LogoutModal() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const isLogoutModalOpen = useAppSelector((state) => state.ui.isLogoutModalOpen);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(setLogoutModalOpen(false));
    router.push("/auth/login");
  };

  return (
    <AnimatePresence>
      {isLogoutModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch(setLogoutModalOpen(false))}
            className="absolute inset-0 bg-secondary/40 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-[440px] bg-white rounded-[2.5rem] p-10 shadow-[0_50px_100px_rgba(0,0,0,0.15)] border border-gray-100 z-10"
          >
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 bg-rose-50 rounded-3xl flex items-center justify-center text-rose-500">
                <AlertCircle className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-secondary tracking-tight">Confirm Sign Out</h3>
                <p className="text-gray-400 font-medium">Are you sure you want to terminate your current session? You will need to log in again to access your dashboard.</p>
              </div>
              <div className="flex flex-col w-full gap-3 pt-4">
                <Button 
                  onClick={handleLogout}
                  className="h-14 rounded-2xl bg-rose-500 text-white font-black text-xs uppercase tracking-widest hover:bg-rose-600 shadow-xl shadow-rose-500/20 transition-all"
                >
                  Yes, Sign Out
                </Button>
                <Button 
                  variant="ghost"
                  onClick={() => dispatch(setLogoutModalOpen(false))}
                  className="h-14 rounded-2xl text-gray-400 font-bold hover:bg-gray-50 transition-all"
                >
                  Stay Logged In
                </Button>
              </div>
            </div>
            <button 
              onClick={() => dispatch(setLogoutModalOpen(false))}
              className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-gray-100 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
