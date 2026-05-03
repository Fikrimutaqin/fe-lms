import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  CreditCard, 
  Settings 
} from "lucide-react";

export const DASHBOARD_SIDEBAR_ITEMS = [
  { id: 'dashboard', icon: LayoutDashboard, label: 'dashboard', href: '/dashboard' },
  { id: 'courses', icon: BookOpen, label: 'myCourses', href: '/dashboard/courses' },
  { id: 'mentors', icon: Users, label: 'mentors', href: '/dashboard/mentors' },
  { id: 'transactions', icon: CreditCard, label: 'transactions', href: '/dashboard/transactions' },
  { id: 'settings', icon: Settings, label: 'settings', href: '/dashboard/settings' },
];
