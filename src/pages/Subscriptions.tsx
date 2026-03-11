import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, BrainCircuit, LineChart, Check, X, ArrowRight } from 'lucide-react';

const Subscriptions = () => {
  const plans = [
    {
      name: "MINI PLAN",
      price: "₦16,500",
      period: "/mo",
      tier: "ESSENTIAL",
      icon: ShieldCheck,
      color: "emerald",
      features: [
        "Fundamental Training Program",
        "Major Pairs AI Signals",
        "Essential Strategy Library",
        "AI Text Assistant"
      ],
      buttonText: "SELECT MINI"
    },
    {
      name: "PRO ALPHA",
      price: "₦30,000",
      period: "/mo",
      tier: "PRO TIER",
      icon: Zap,
      color: "blue",
      featured: true,
      features: [
        "Full Advanced Academy",
        "Premium Signals (Gold, Crypto)",
        "AI Voice Mentorship",
        "Daily Market Video Briefs",
        "On-Demand Signal Generation",
        "Professional Concept Visualizer"
      ],
      buttonText: "GO PRO"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="text-center mb-16">
        <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-500 mb-4">Choose Your Membership Plan</h2>
        <h1 className="text-5xl font-black uppercase italic tracking-tighter mb-4">Professional Access</h1>
        <p className="text-white/30 font-bold uppercase tracking-widest text-xs">Select the plan that fits your goals</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`relative bg-[#0A0A0A] border ${plan.featured ? 'border-blue-500/50 shadow-[0_0_50px_rgba(59,130,246,0.1)]' : 'border-white/5'} rounded-[3rem] p-10 flex flex-col group overflow-hidden`}
          >
            {plan.featured && (
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-6 py-1.5 rounded-bl-2xl text-[8px] font-black uppercase tracking-widest">
                Full Access
              </div>
            )}

            <div className="flex items-start justify-between mb-8">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${plan.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-blue-500/10 text-blue-500'}`}>
                <plan.icon className="w-8 h-8" />
              </div>
              <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white/20">{plan.tier}</span>
            </div>

            <h3 className="text-2xl font-black italic tracking-tight mb-2 uppercase">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-black italic">{plan.price}</span>
              <span className="text-sm font-bold text-white/20 uppercase tracking-widest">{plan.period}</span>
            </div>

            <div className="space-y-4 mb-12 flex-1">
              {plan.features.map((feature, j) => (
                <div key={j} className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className={`w-3 h-3 ${plan.color === 'emerald' ? 'text-emerald-500' : 'text-blue-500'}`} />
                  </div>
                  <span className="text-[11px] font-bold text-white/50 uppercase tracking-tight leading-tight">{feature}</span>
                </div>
              ))}
            </div>

            <button className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest transition-all ${
              plan.color === 'emerald' 
                ? 'bg-white/5 border border-white/5 text-white hover:bg-emerald-500 hover:text-black' 
                : 'bg-blue-500 text-white hover:scale-[1.02] shadow-lg'
            }`}>
              {plan.buttonText}
            </button>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="flex items-center justify-center gap-4 opacity-30">
          <span className="text-[8px] font-black uppercase tracking-widest">Secure Payments By</span>
          <img src="https://paystack.com/assets/img/v3/logo-blue.svg" alt="Paystack" className="h-4 grayscale" />
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
