import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Bell, User, LogOut, Sun, Moon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, signOut } = useAuth();

  return (
    <nav className="h-16 border-b border-white/10 bg-[#050505] flex items-center justify-between px-6 sticky top-0 z-[50]">
      <div className="flex items-center gap-8">
        <Link to="/dashboard" className="flex items-center gap-2">
          <Zap className="text-emerald-500 w-6 h-6 fill-current" />
          <span className="text-xl font-black tracking-tighter">WATEM<span className="text-emerald-500">FX</span></span>
        </Link>
        
        <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5">
          <button className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-emerald-500 text-black">Free Tier</button>
          <button className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors">Upgrade</button>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <button className="p-2 text-white/40 hover:text-white transition-colors"><Sun className="w-4 h-4" /></button>
          <button className="p-2 text-white/40 hover:text-white transition-colors relative">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-emerald-500 rounded-full border border-black" />
          </button>
        </div>

        <div className="h-8 w-px bg-white/10" />

        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-black uppercase tracking-widest leading-none mb-1">{user?.user_metadata?.full_name || 'Trader'}</p>
            <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest leading-none">Market Associate</p>
          </div>
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center overflow-hidden">
              <img 
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.email}`} 
                alt="Avatar" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-black" />
          </div>
          <button 
            onClick={() => signOut()}
            className="p-2 text-white/20 hover:text-red-500 transition-colors"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
