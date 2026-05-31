import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Mail, Lock, User, Chrome } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        }
      }
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else if (data.user && !data.session) {
      // Email verification is required before logging in
      setIsSuccess(true);
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

        {isSuccess ? (
          <div className="bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-10 shadow-2xl text-center">
            <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(16,185,129,0.1)]">
              <Mail className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-black italic tracking-tight mb-4 uppercase text-emerald-500">Verify Your Identity</h2>
            <p className="text-white/80 font-medium text-sm mb-6 leading-relaxed">
              We have dispatched an institutional-grade security confirmation key to:
            </p>
            <div className="bg-white/[0.03] border border-white/5 rounded-2xl py-4 px-6 text-emerald-400 font-bold mb-8 select-all font-mono text-sm break-all">
              {email}
            </div>
            <p className="text-white/40 text-xs font-bold uppercase tracking-wider mb-8 leading-relaxed">
              Open the link contained in the secure dispatch to authenticate your account and activate terminal operations.
            </p>
            <Link 
              to="/login"
              className="inline-flex w-full justify-center bg-white text-black py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-emerald-500 transition-all shadow-[0_4px_12px_rgba(255,255,255,0.15)]"
            >
              Back to Login
            </Link>
          </div>
        ) : (
          <div className="bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-10 shadow-2xl">
            <h2 className="text-2xl font-black italic tracking-tight mb-8 uppercase text-emerald-500">Request Access</h2>

            <button 
              onClick={handleGoogleLogin}
              className="w-full bg-white text-black py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-emerald-500 transition-all mb-8 shadow-lg"
            >
              <Chrome className="w-5 h-5" />
              SIGN UP WITH GOOGLE
            </button>

            <form onSubmit={handleSignup} className="space-y-6">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-sm font-medium focus:outline-none focus:border-emerald-500/50 focus:bg-white/[0.05] transition-all"
                    required
                  />
                </div>
              </div>

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
                className="w-full bg-emerald-500 text-black py-4 rounded-2xl font-black uppercase tracking-widest hover:scale-[1.02] transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] disabled:opacity-50"
              >
                {loading ? 'Processing...' : 'Create Account'}
              </button>
            </form>

            <div className="mt-10 text-center">
              <Link to="/login" className="text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-emerald-500 transition-colors">
                Already have access? Login Here
              </Link>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Signup;
