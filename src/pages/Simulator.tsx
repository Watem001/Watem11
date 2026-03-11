import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Wallet, TrendingUp, TrendingDown, History, Info, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Simulator = () => {
  const [balance, setBalance] = useState(10000);
  const [activeTrades, setActiveTrades] = useState(0);

  const chartData = [
    { time: '09:00', price: 1.0820 },
    { time: '10:00', price: 1.0845 },
    { time: '11:00', price: 1.0830 },
    { time: '12:00', price: 1.0860 },
    { time: '13:00', price: 1.0855 },
    { time: '14:00', price: 1.0880 },
    { time: '15:00', price: 1.0875 },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-12">
        <div>
          <h1 className="text-4xl font-black tracking-tighter uppercase italic mb-2">Trading <span className="text-emerald-500">Simulator</span></h1>
          <p className="text-white/30 font-bold uppercase tracking-widest text-xs">Sharpen your execution with zero risk using live market data.</p>
        </div>
        
        <div className="flex items-center gap-4 w-full lg:w-auto">
          <div className="bg-[#0A0A0A] border border-white/5 p-4 rounded-2xl flex items-center gap-4 flex-1 lg:flex-none min-w-[200px]">
            <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center">
              <Wallet className="text-emerald-500 w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-0.5">Virtual Balance</p>
              <p className="text-xl font-black italic">${balance.toLocaleString()}</p>
            </div>
          </div>
          <div className="bg-[#0A0A0A] border border-white/5 p-4 rounded-2xl flex items-center gap-4 flex-1 lg:flex-none min-w-[150px]">
            <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center">
              <TrendingUp className="text-blue-500 w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-0.5">Active Trades</p>
              <p className="text-xl font-black italic">{activeTrades}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart Section */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center font-black italic">EU</div>
                <div>
                  <h3 className="text-lg font-black uppercase italic tracking-tight">EUR / USD</h3>
                  <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3" /> +0.45% Today
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                {['1M', '5M', '15M', '1H', '4H', '1D'].map(tf => (
                  <button key={tf} className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${tf === '1H' ? 'bg-emerald-500 text-black' : 'bg-white/5 text-white/40 hover:bg-white/10'}`}>
                    {tf}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                  <XAxis dataKey="time" stroke="#ffffff20" fontSize={10} fontWeight="bold" axisLine={false} tickLine={false} />
                  <YAxis domain={['auto', 'auto']} stroke="#ffffff20" fontSize={10} fontWeight="bold" axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0A0A0A', border: '1px solid #ffffff10', borderRadius: '12px' }}
                    itemStyle={{ color: '#10b981', fontWeight: 'bold' }}
                  />
                  <Area type="monotone" dataKey="price" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorPrice)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-black uppercase italic tracking-tight">Trade History</h3>
              <button className="text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-white flex items-center gap-2">
                <History className="w-4 h-4" /> View All
              </button>
            </div>
            
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                <Info className="w-8 h-8 text-white/10" />
              </div>
              <p className="text-sm font-bold text-white/20 uppercase tracking-widest leading-relaxed">No simulated trades found.<br />Start by placing an order above.</p>
            </div>
          </div>
        </div>

        {/* Order Panel */}
        <div className="lg:col-span-1">
          <div className="bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-8 sticky top-24">
            <h3 className="text-xl font-black uppercase italic tracking-tight mb-8">Place Order</h3>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-emerald-500 text-black py-4 rounded-2xl font-black uppercase tracking-widest flex flex-col items-center gap-1 hover:scale-[1.02] transition-all">
                  <TrendingUp className="w-5 h-5" />
                  Buy
                </button>
                <button className="bg-red-500 text-white py-4 rounded-2xl font-black uppercase tracking-widest flex flex-col items-center gap-1 hover:scale-[1.02] transition-all">
                  <TrendingDown className="w-5 h-5" />
                  Sell
                </button>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 ml-1">Lot Size</label>
                <div className="flex items-center gap-2">
                  {[0.01, 0.1, 1.0, 5.0].map(lot => (
                    <button key={lot} className="flex-1 bg-white/5 border border-white/5 py-2 rounded-xl text-[10px] font-black hover:bg-white/10 transition-all">
                      {lot}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 ml-1">Custom Amount</label>
                <input 
                  type="number" 
                  placeholder="0.00"
                  className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-4 px-4 text-sm font-black focus:outline-none focus:border-emerald-500/50 transition-all"
                />
              </div>

              <div className="pt-6 border-t border-white/5 space-y-4">
                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                  <span className="text-white/20">Margin Required</span>
                  <span>$250.00</span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                  <span className="text-white/20">Estimated Profit</span>
                  <span className="text-emerald-500">+$120.00</span>
                </div>
              </div>

              <button className="w-full bg-white text-black py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-emerald-500 transition-all shadow-xl">
                Execute Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulator;
