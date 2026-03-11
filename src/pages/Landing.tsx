import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Shield, GraduationCap, LineChart, ArrowRight, ChevronRight } from 'lucide-react';

const Landing = () => {
  return (
    <div className="bg-[#050505] min-h-screen overflow-hidden">
      {/* Hero Section */}
      <header className="relative pt-20 pb-32 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
        
        <nav className="max-w-7xl mx-auto flex justify-between items-center mb-24 relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Zap className="text-black w-6 h-6 fill-current" />
            </div>
            <span className="text-2xl font-bold tracking-tighter">WATEM<span className="text-emerald-500">FX</span></span>
          </div>
          <div className="flex items-center gap-8">
            <Link to="/login" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Terminal Login</Link>
            <Link to="/signup" className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-emerald-500 hover:text-black transition-all">Sign Up</Link>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
              INTELLIGENT<br />
              <span className="text-emerald-500">MARKET TERMINAL</span>
            </h1>
            <p className="text-xl text-white/50 max-w-2xl mx-auto mb-12 font-medium">
              Advanced AI-powered Forex signals, institutional-grade technical analysis, and a comprehensive learning ecosystem for the modern trader.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Link to="/signup" className="group bg-emerald-500 text-black px-8 py-4 rounded-full text-lg font-bold flex items-center gap-2 hover:scale-105 transition-all">
                Access Terminal <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="px-8 py-4 rounded-full text-lg font-bold border border-white/10 hover:bg-white/5 transition-all">
                View Live Signals
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Zap,
              title: "AI Signals",
              desc: "High-probability trade setups verified by our proprietary neural network models."
            },
            {
              icon: GraduationCap,
              title: "Academy",
              desc: "From beginner to institutional concepts. A structured roadmap to market mastery."
            },
            {
              icon: Shield,
              title: "Simulator",
              desc: "Risk-free demo environment with live market data to sharpen your execution."
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all group"
            >
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="text-emerald-500 w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-white/40 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-emerald-500 py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-black">
          {[
            { label: "Accuracy", value: "84.2%" },
            { label: "Active Traders", value: "12K+" },
            { label: "Daily Signals", value: "25+" },
            { label: "Success Rate", value: "92%" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-6xl font-black tracking-tighter mb-2">{stat.value}</div>
              <div className="text-sm font-bold uppercase tracking-widest opacity-60">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <Zap className="text-emerald-500 w-5 h-5 fill-current" />
          <span className="font-bold tracking-tighter">WATEM<span className="text-emerald-500">FX</span></span>
        </div>
        <div className="text-white/30 text-sm">
          © 2026 Watem FX. All rights reserved. Trading involves significant risk.
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-white/30 hover:text-white transition-colors">Terms</a>
          <a href="#" className="text-white/30 hover:text-white transition-colors">Privacy</a>
          <a href="#" className="text-white/30 hover:text-white transition-colors">Risk Disclosure</a>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
