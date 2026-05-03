import { 
  User, 
  Lock, 
  Bell, 
  CreditCard, 
  Target, 
  Zap, 
  MessageSquare, 
  BookOpen, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  UserCheck 
} from "lucide-react";

export const SETTINGS_SIDEBAR_ITEMS = [
  { id: "identity", label: "Personal Identity", icon: User, desc: "How people see you" },
  { id: "preferences", label: "Learning Style", icon: Target, desc: "Personalize your growth" },
  { id: "security", label: "Privacy & Access", icon: Lock, desc: "Manage your credentials" },
  { id: "notifications", label: "Engagement", icon: Zap, desc: "Stay in the loop" },
  { id: "billing", label: "My Membership", icon: CreditCard, desc: "Status & history" },
];

export const LEARNING_WORKFLOW_ITEMS = [
  { title: "Dark Mode Video Player", desc: "Always start videos in theater mode.", icon: Zap, defaultChecked: true },
  { title: "Auto-Resume Courses", desc: "Pick up exactly where you left off.", icon: CheckCircle2, defaultChecked: true },
  { title: "Public Profile Progress", desc: "Allow mentors to see your curriculum focus.", icon: UserCheck, defaultChecked: true },
  { title: "Gamification Elements", desc: "Show badges and streak celebrations.", icon: Sparkles, defaultChecked: false },
];

export const ENGAGEMENT_ITEMS = [
  { title: "Mentor Feedback", desc: "Direct notifications when your assignments are reviewed.", icon: MessageSquare, defaultChecked: true },
  { title: "Weekly Curriculum Digest", desc: "A summary of your progress and upcoming milestones.", icon: BookOpen, defaultChecked: true },
  { title: "Login Alerts", desc: "Secure notifications for every new device login.", icon: ShieldCheck, defaultChecked: false },
];
