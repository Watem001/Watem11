import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, TrendingUp, TrendingDown, Clock, Target, BrainCircuit, ChevronRight, AlertCircle } from 'lucide-react';
import { getSignalExplanation } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';

interface Signal {
  id: string;
  pair: string;
  type: 'BUY' | 'SELL';
  entry: string;
  tp: string;
  sl: string;
  confidence: number;
  time: string;
  indicators: {
    rsi: number;
    macd: string;
    trend: string;
  };
}

const Signals = () => {
  const [selectedSignal, setSelectedSignal] = useState<Signal | null>(null);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loadingAnalysis, setLoadingAnalysis] = useState(false);

  const mockSignals: Signal[] = [
    {
      id: '1',
      pair: 'EUR/USD',
      type: 'BUY',
      entry: '1.0850',
      tp: '1.0920',
      sl: '1.0810',
      confidence: 88,
      time: '10 mins ago',
      indicators: { rsi: 42, macd: 'Bullish Crossover', trend: 'Strong Uptrend' }
    },
    {
      id: '2',
      pair: 'GBP/JPY',
      type: 'SELL',
      entry: '190.20',
      tp: '188.50',
      sl: '191.10',
      confidence: 76,
      time: '25 mins ago',
      indicators: { rsi: 68, macd: 'Bearish Divergence', trend: 'Weakening Momentum' }
    },
    {
      id: '3',
      pair: 'XAU/USD',
      type: 'BUY',
      entry: '2155.00',
      tp: '2180.00',
      sl: '2140.00',
      confidence: 92,
      time: '1 hour ago',
      indicators: { rsi: 35, macd: 'Oversold Bounce', trend: 'Institutional Accumulation' }
    }
  ];

  const handleAnalyze = async (signal: Signal) => {
    setSelectedSignal(signal);
    setLoadingAnalysis(true);
    setAnalysis(null);
    const result = await getSignalExplanation(signal);
    setAnalysis(result);
    setLoadingAnalysis(false);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h1 className="text-4xl font-black tracking-tighter uppercase italic mb-2">Live Terminal <span className="text-emerald-500">Signals</span></h1>
          <p className="text-white/30 font-bold uppercase tracking-widest text-xs">Real-time institutional trade setups verified by AI.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Live Feed Active</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Signal List */}
        <div className="lg:col-span-2 space-y-4">
          {mockSignals.map((signal) => (
            <motion.div
              key={signal.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`bg-[#0A0A0A] border ${selectedSignal?.id === signal.id ? 'border-emerald-500/50' : 'border-white/5'} p-6 rounded-3xl group hover:border-white/10 transition-all cursor-pointer`}
              onClick={() => handleAnalyze(signal)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${signal.type === 'BUY' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'}`}>
                    {signal.type === 'BUY' ? <TrendingUp className="w-7 h-7" /> : <TrendingDown className="w-7 h-7" />}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black italic tracking-tight leading-none mb-1">{signal.pair}</h3>
                    <div className="flex items-center gap-3">
                      <span className={`text-[10px] font-black uppercase tracking-widest ${signal.type === 'BUY' ? 'text-emerald-500' : 'text-red-500'}`}>{signal.type} ORDER</span>
                      <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {signal.time}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-12">
                  <div className="hidden md:block text-center">
                    <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-1">Confidence</p>
                    <p className="text-xl font-black italic text-emerald-500">{signal.confidence}%</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-1">Entry Price</p>
                    <p className="text-xl font-black italic">{signal.entry}</p>
                  </div>
                  <button className="p-3 rounded-xl bg-white/5 text-white/40 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Analysis Panel */}
        <div className="lg:col-span-1">
          <div className="bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-8 sticky top-24 min-h-[500px] flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center">
                <BrainCircuit className="text-cyan-500 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-black uppercase italic tracking-tight">AI Analysis</h3>
                <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Neural Network Insights</p>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {loadingAnalysis ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-1 flex flex-col items-center justify-center text-center"
                >
                  <div className="w-12 h-12 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin mb-4" />
                  <p className="text-sm font-bold text-white/40 uppercase tracking-widest">Processing Market Data...</p>
                </motion.div>
              ) : selectedSignal ? (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex-1"
                >
                  <div className="bg-white/5 rounded-2xl p-4 mb-6 border border-white/5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-1">Take Profit</p>
                        <p className="text-lg font-black text-emerald-500 italic">{selectedSignal.tp}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-1">Stop Loss</p>
                        <p className="text-lg font-black text-red-500 italic">{selectedSignal.sl}</p>
                      </div>
                    </div>
                  </div>

                  <div className="prose prose-invert prose-sm max-w-none">
                    <div className="text-white/60 leading-relaxed font-medium">
                      <ReactMarkdown>{analysis || ''}</ReactMarkdown>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <AlertCircle className="w-12 h-12 text-white/10 mb-4" />
                  <p className="text-sm font-bold text-white/20 uppercase tracking-widest">Select a signal to<br />view AI analysis</p>
                </div>
              )}
            </AnimatePresence>

            <div className="mt-8 pt-8 border-t border-white/5">
              <div className="flex items-center gap-2 text-[10px] font-bold text-white/20 uppercase tracking-widest">
                <Target className="w-3 h-3" />
                Risk/Reward Ratio: 1:2.5
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signals;
