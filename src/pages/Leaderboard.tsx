import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Trophy, 
  TrendingUp, 
  Users, 
  ArrowUpRight, 
  Medal,
  Search,
  Filter
} from 'lucide-react';
import { cn } from '../utils/utils';

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState('Profit');

  const traders = [
    { id: 1, name: 'Alex_Trader', winRate: '78%', profit: '+$12,450', trades: 142, avatar: 'https://picsum.photos/seed/u1/100/100' },
    { id: 2, name: 'ForexMaster', winRate: '72%', profit: '+$8,920', trades: 89, avatar: 'https://picsum.photos/seed/u2/100/100' },
    { id: 3, name: 'AI_Quant', winRate: '84%', profit: '+$7,100', trades: 56, avatar: 'https://picsum.photos/seed/u3/100/100' },
    { id: 4, name: 'PipHunter', winRate: '65%', profit: '+$5,400', trades: 210, avatar: 'https://picsum.photos/seed/u4/100/100' },
    { id: 5, name: 'SarahFX', winRate: '69%', profit: '+$4,800', trades: 74, avatar: 'https://picsum.photos/seed/u5/100/100' },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Trader Leaderboard</h1>
          <p className="text-white/50">Top performing strategies and traders in the AuraFX community.</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
            <input type="text" placeholder="Search traders..." className="bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-emerald-500/50" />
          </div>
          <button className="p-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all">
            <Filter className="w-5 h-5 text-white/40" />
          </button>
        </div>
      </header>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end pt-10">
        {/* 2nd Place */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center relative order-2 md:order-1"
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-slate-400 rounded-full flex items-center justify-center border-4 border-[#050505]">
            <span className="font-bold text-black">2</span>
          </div>
          <img src={traders[1].avatar} className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-slate-400/50" alt="" />
          <h3 className="text-xl font-bold">{traders[1].name}</h3>
          <p className="text-emerald-500 font-bold mb-4">{traders[1].profit}</p>
          <div className="flex justify-center gap-4 text-xs font-bold text-white/40 uppercase tracking-widest">
            <span>{traders[1].winRate} WR</span>
            <span>{traders[1].trades} Trades</span>
          </div>
        </motion.div>

        {/* 1st Place */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-10 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 text-center relative order-1 md:order-2 scale-110 z-10"
        >
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center border-4 border-[#050505] shadow-[0_0_30px_rgba(234,179,8,0.3)]">
            <Trophy className="w-8 h-8 text-black" />
          </div>
          <img src={traders[0].avatar} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-yellow-500/50" alt="" />
          <h3 className="text-2xl font-bold">{traders[0].name}</h3>
          <p className="text-emerald-500 text-xl font-bold mb-4">{traders[0].profit}</p>
          <div className="flex justify-center gap-6 text-xs font-bold text-white/40 uppercase tracking-widest">
            <span>{traders[0].winRate} WR</span>
            <span>{traders[0].trades} Trades</span>
          </div>
        </motion.div>

        {/* 3rd Place */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center relative order-3"
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center border-4 border-[#050505]">
            <span className="font-bold text-black">3</span>
          </div>
          <img src={traders[2].avatar} className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-amber-700/50" alt="" />
          <h3 className="text-xl font-bold">{traders[2].name}</h3>
          <p className="text-emerald-500 font-bold mb-4">{traders[2].profit}</p>
          <div className="flex justify-center gap-4 text-xs font-bold text-white/40 uppercase tracking-widest">
            <span>{traders[2].winRate} WR</span>
            <span>{traders[2].trades} Trades</span>
          </div>
        </motion.div>
      </div>

      {/* List */}
      <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-2">
            {['Profit', 'Win Rate', 'Total Trades'].map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={cn(
                "px-4 py-2 rounded-xl text-sm font-bold transition-all",
                activeTab === tab ? "bg-white/10 text-white" : "text-white/40 hover:text-white"
              )}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          {traders.map((trader, i) => (
            <div key={trader.id} className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-all group">
              <div className="flex items-center gap-6">
                <span className="w-6 text-sm font-bold text-white/20 group-hover:text-white/40 transition-colors">#{i + 1}</span>
                <div className="flex items-center gap-4">
                  <img src={trader.avatar} className="w-10 h-10 rounded-full" alt="" />
                  <div>
                    <p className="font-bold">{trader.name}</p>
                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Pro Trader</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-12">
                <div className="text-right hidden sm:block">
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Win Rate</p>
                  <p className="font-bold">{trader.winRate}</p>
                </div>
                <div className="text-right hidden sm:block">
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Trades</p>
                  <p className="font-bold">{trader.trades}</p>
                </div>
                <div className="text-right min-w-[100px]">
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Profit</p>
                  <p className="text-emerald-500 font-bold">{trader.profit}</p>
                </div>
                <button className="p-2 bg-emerald-500/10 text-emerald-500 rounded-lg hover:bg-emerald-500 hover:text-black transition-all opacity-0 group-hover:opacity-100">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
