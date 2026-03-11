import React from 'react';
import { motion } from 'framer-motion';
import { Zap, GraduationCap, BrainCircuit, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useAuth();

  const stats = [
    { label: 'Accuracy', value: '82.4%', color: 'text-emerald-500' },
    { label: 'Markets Connected', value: 'Global', color: 'text-blue-500' },
    { label: 'Tier', value: 'Free', color: 'text-yellow-500' },
  ];

  const quickActions = [
    { icon: Zap, label: 'Live Signals', desc: 'Access high-probability trade setups verified by AI.', path: '/signals', color: 'bg-blue-500/10 text-blue-500' },
    { icon: GraduationCap, label: 'Training', desc: 'Improve your skills with our simple learning roadmap.', path: '/academy', color: 'bg-yellow-500/10 text-yellow-500' },
    { icon: BrainCircuit, label: 'AI Mentor', desc: 'Talk to the AI for help with your strategy and focus.', path: '/profile', color: 'bg-cyan-500/10 text-cyan-500' },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Account Verified</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 uppercase italic">
          Welcome Back,<br />
          <span className="text-emerald-500">{user?.user_metadata?.full_name?.split(' ')[0] || 'Trader'}</span>
        </h1>
        <p className="text-white/30 font-bold uppercase tracking-widest text-xs">Watem FX is ready for your next move.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {quickActions.map((action, i) => (
          <Link to={action.path} key={i}>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-[#0A0A0A] border border-white/5 p-8 rounded-[2.5rem] h-full flex flex-col items-center text-center group hover:border-white/10 transition-all"
            >
              <div className={`w-16 h-16 ${action.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <action.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black uppercase italic tracking-tight mb-3">{action.label}</h3>
              <p className="text-white/30 text-sm font-medium leading-relaxed">{action.desc}</p>
            </motion.div>
          </Link>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-12 mb-24">
        {stats.map((stat, i) => (
          <div key={i} className="flex items-center gap-3">
            <TrendingUp className={`w-4 h-4 ${stat.color}`} />
            <span className="text-[10px] font-black uppercase tracking-widest text-white/40">{stat.label}:</span>
            <span className="text-sm font-black uppercase italic">{stat.value}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="bg-white/5 border border-white/10 px-12 py-6 rounded-full text-sm font-black uppercase tracking-widest hover:bg-white/10 transition-all">
          Viewing live page
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
