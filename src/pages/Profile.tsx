import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Shield, Zap, Trophy, Settings, Bell, Mic, Globe, LogOut, Edit3, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user, signOut } = useAuth();

  const badges = [
    { icon: BookOpen, label: 'Learner', active: true },
    { icon: TrendingUp, label: 'Trader', active: true },
    { icon: Clock, label: 'Master', active: false },
    { icon: Zap, label: 'Elite', active: false },
  ];

  const settings = [
    { icon: Mail, label: 'Email Alerts', desc: 'Get trade signals by email', enabled: true },
    { icon: Shield, label: 'Secure Access', desc: 'Enable two-factor login', enabled: false },
    { icon: Mic, label: 'Voice Assistant', desc: 'Enable AI audio guidance', enabled: true },
    { icon: Globe, label: 'Live Market Feed', desc: 'Show live prices on profile', enabled: true },
  ];

  return (
    <div className="max-w-5xl mx-auto py-8">
      {/* Header Profile Section */}
      <div className="bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-10 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-32 -mt-32" />
        
        <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
          <div className="relative">
            <div className="w-32 h-32 rounded-[2.5rem] bg-emerald-500/10 border-2 border-emerald-500/20 flex items-center justify-center overflow-hidden p-1">
              <img 
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.email}`} 
                alt="Profile" 
                className="w-full h-full object-cover rounded-[2rem]"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full border-4 border-black flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-black" />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-2">
              <h1 className="text-4xl font-black uppercase italic tracking-tighter">{user?.user_metadata?.full_name || 'Trader'}</h1>
              <button className="p-2 bg-white/5 rounded-lg text-white/20 hover:text-white transition-colors"><Edit3 className="w-4 h-4" /></button>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-[10px] font-black uppercase tracking-widest border border-blue-500/20">Free Plan</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-white/30 font-bold text-sm mb-6">
              <Mail className="w-4 h-4" />
              {user?.email}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-white/5 border border-white/5 p-6 rounded-[2rem] text-center min-w-[120px]">
              <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-1">Accuracy</p>
              <p className="text-2xl font-black italic text-emerald-500">84.2%</p>
            </div>
            <div className="bg-white/5 border border-white/5 p-6 rounded-[2rem] text-center min-w-[120px]">
              <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-1">Level</p>
              <p className="text-2xl font-black italic text-yellow-500">ALPHA</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Account Details */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-8">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="text-blue-500 w-5 h-5" />
              <h3 className="text-lg font-black uppercase italic tracking-tight">Account Details</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/[0.02] border border-white/5 p-8 rounded-[2rem] flex flex-col items-center justify-center text-center">
                <div className="relative w-24 h-24 mb-4">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="48" cy="48" r="44" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/5" />
                    <circle cx="48" cy="48" r="44" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="276" strokeDashoffset="276" className="text-emerald-500" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-black italic leading-none">0</span>
                    <span className="text-[8px] font-black uppercase tracking-widest text-white/30">Days Left</span>
                  </div>
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Subscription Status</p>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/30">Tier Status</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-500">Free Active</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-blue-500" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-[8px] font-black uppercase tracking-widest text-white/30 mb-1">Renewal Date</p>
                    <p className="text-xs font-black uppercase">N/A</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-[8px] font-black uppercase tracking-widest text-white/30 mb-1">Pro Features</p>
                    <p className="text-xs font-black uppercase text-yellow-500">Limited</p>
                  </div>
                </div>
                <button className="w-full py-4 bg-white/5 border border-white/5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                  Manage Plan
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-8">
            <div className="flex items-center gap-3 mb-8">
              <Settings className="text-emerald-500 w-5 h-5" />
              <h3 className="text-lg font-black uppercase italic tracking-tight">App Settings</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {settings.map((setting, i) => (
                <div key={i} className="p-6 bg-white/[0.02] border border-white/5 rounded-[2rem] flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                      <setting.icon className="w-5 h-5 text-white/40" />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-tight mb-0.5">{setting.label}</p>
                      <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">{setting.desc}</p>
                    </div>
                  </div>
                  <button className={`w-10 h-5 rounded-full relative transition-all ${setting.enabled ? 'bg-emerald-500' : 'bg-white/10'}`}>
                    <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${setting.enabled ? 'right-1' : 'left-1'}`} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Badges & Actions */}
        <div className="space-y-8">
          <div className="bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-8">
            <div className="flex items-center gap-3 mb-8">
              <Trophy className="text-yellow-500 w-5 h-5" />
              <h3 className="text-lg font-black uppercase italic tracking-tight">My Badges</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {badges.map((badge, i) => (
                <div key={i} className={`p-6 rounded-[2rem] flex flex-col items-center justify-center text-center border transition-all ${
                  badge.active ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-white/[0.02] border-white/5 opacity-40'
                }`}>
                  <badge.icon className={`w-8 h-8 mb-3 ${badge.active ? 'text-emerald-500' : 'text-white/20'}`} />
                  <p className={`text-[10px] font-black uppercase tracking-widest ${badge.active ? 'text-white' : 'text-white/20'}`}>{badge.label}</p>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={() => signOut()}
            className="w-full bg-red-500/10 border border-red-500/20 text-red-500 py-6 rounded-[2rem] font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-red-500 hover:text-white transition-all"
          >
            <LogOut className="w-5 h-5" />
            Terminate Session
          </button>
        </div>
      </div>
    </div>
  );
};

// Mock icons for badges
const BookOpen = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>;
const TrendingUp = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;
const Clock = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;

export default Profile;
