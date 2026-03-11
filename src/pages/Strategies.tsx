import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Zap, BrainCircuit, LineChart, ChevronRight } from 'lucide-react';

const Strategies = () => {
  const strategies = [
    {
      name: "Institutional Flow",
      winRate: "78%",
      riskReward: "1:3",
      type: "Trend Following",
      desc: "Based on bank accumulation and manipulation cycles.",
      indicators: ["Order Blocks", "Fair Value Gaps", "Liquidity"]
    },
    {
      name: "Scalping Alpha",
      winRate: "65%",
      riskReward: "1:1.5",
      type: "Scalping",
      desc: "High frequency trades based on momentum breakouts.",
      indicators: ["RSI", "EMA 20/50", "Volume"]
    },
    {
      name: "Swing Master",
      winRate: "82%",
      riskReward: "1:5",
      type: "Swing",
      desc: "Long term positions based on weekly/daily structure.",
      indicators: ["Fibonacci", "Market Structure", "DXY"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h1 className="text-4xl font-black tracking-tighter uppercase italic mb-2">Trading <span className="text-emerald-500">Strategies</span></h1>
          <p className="text-white/30 font-bold uppercase tracking-widest text-xs">Proven institutional frameworks for consistent market execution.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {strategies.map((strategy, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-8 group hover:border-emerald-500/30 transition-all"
          >
            <div className="flex items-start justify-between mb-8">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center">
                <ShieldCheck className="text-emerald-500 w-8 h-8" />
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-1">Win Rate</p>
                <p className="text-xl font-black italic text-emerald-500">{strategy.winRate}</p>
              </div>
            </div>

            <h3 className="text-2xl font-black italic tracking-tight mb-2 uppercase">{strategy.name}</h3>
            <p className="text-white/30 text-sm font-medium mb-8 leading-relaxed">{strategy.desc}</p>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                <span className="text-white/20">Type</span>
                <span>{strategy.type}</span>
              </div>
              <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                <span className="text-white/20">Risk/Reward</span>
                <span className="text-blue-500">{strategy.riskReward}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {strategy.indicators.map((ind, j) => (
                <span key={j} className="px-3 py-1 bg-white/5 rounded-full text-[8px] font-black uppercase tracking-widest text-white/40">
                  {ind}
                </span>
              ))}
            </div>

            <button className="w-full py-4 bg-white text-black rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-emerald-500 transition-all">
              View Strategy <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Strategies;
