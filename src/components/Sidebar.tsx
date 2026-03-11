import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Zap, 
  GraduationCap, 
  Gamepad2, 
  Settings, 
  LineChart,
  ShieldCheck,
  User as UserIcon,
  CreditCard
} from 'lucide-react';
import { cn } from '../utils/utils';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Zap, label: 'AI Signals', path: '/signals' },
    { icon: ShieldCheck, label: 'Strategies', path: '/strategies' },
    { icon: Gamepad2, label: 'Simulator', path: '/simulator' },
    { icon: GraduationCap, label: 'Academy', path: '/academy' },
    { icon: UserIcon, label: 'Profile', path: '/profile' },
    { icon: CreditCard, label: 'Subscription', path: '/subscriptions' },
  ];

  return (
    <aside className="w-64 border-r border-white/10 h-[calc(100vh-64px)] sticky top-16 hidden lg:flex flex-col p-4 bg-[#050505]">
      <div className="space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
              isActive 
                ? "bg-emerald-500/10 text-emerald-500" 
                : "text-white/50 hover:text-white hover:bg-white/5"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </div>

      <div className="mt-auto p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl">
        <p className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-1">Market Status</p>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm font-medium">London Session Open</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
