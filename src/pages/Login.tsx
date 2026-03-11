import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Mail, Lock, ArrowRight, Chrome } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      navigate('/dashboard');
    }
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin
      }
    });
    if (error) setError(error.message);
  };

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <div className="flex flex-col items-center mb-12">
          <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
            <Zap className="text-black w-10 h-10 fill-current" />
          </div>
          <h1 className="text-4xl font-black tracking-tighter">WATEM<span className="text-emerald-500">FX</span></h1>
          <p className="text-white/40 font-medium uppercase tracking-[0.2em] text-xs mt-2">Intelligent Market Terminal</p>
        </div>

        <div className="bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-10 shadow-2xl">
          <h2 className="text-2xl font-black italic tracking-tight mb-8 uppercase">Terminal Login</h2>

          <button 
            onClick={handleGoogleLogin}
            className="w-full bg-white text-black py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-emerald-500 transition-all mb-8 shadow-lg"
          >
            <Chrome className="w-5 h-5" />
            SIGN IN WITH GOOGLE
          </button>

          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
            <div className="relative flex justify-center text-xs uppercase tracking-widest"><span className="bg-[#0A0A0A] px-4 text-white/20 font-bold">Secure Credentials</span></div>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="trader@watem.fx"
                  className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-sm font-medium focus:outline-none focus:border-emerald-500/50 focus:bg-white/[0.05] transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-sm font-medium focus:outline-none focus:border-emerald-500/50 focus:bg-white/[0.05] transition-all"
                  required
                />
              </div>
            </div>

            {error && <p className="text-red-500 text-xs font-bold text-center">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#00A3FF] text-white py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-emerald-500 transition-all shadow-[0_0_30px_rgba(0,163,255,0.3)] disabled:opacity-50"
            >
              {loading ? 'Authenticating...' : 'Enter Terminal'}
            </button>
          </form>

          <div className="mt-10 text-center">
            <Link to="/signup" className="text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-emerald-500 transition-colors">
              Need Access? Sign Up Here
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
