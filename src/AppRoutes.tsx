import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { AlertTriangle } from 'lucide-react';

// Pages
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Signals from './pages/Signals';
import Academy from './pages/Academy';
import Simulator from './pages/Simulator';
import Profile from './pages/Profile';
import Strategies from './pages/Strategies';
import Subscriptions from './pages/Subscriptions';

// Components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AIMentorChat from './components/AIMentorChat';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div className="flex items-center justify-center h-screen bg-black text-white">Loading...</div>;
  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
};

const AppRoutes = () => {
  const { user, isConfigured } = useAuth();

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans">
      {!isConfigured && (
        <div className="bg-yellow-500/10 border-b border-yellow-500/20 p-3 flex items-center justify-center gap-3 text-yellow-500 text-sm font-medium sticky top-0 z-[100] backdrop-blur-md">
          <AlertTriangle className="w-4 h-4" />
          Supabase is not configured. Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your environment variables.
        </div>
      )}
      {user && <Navbar />}
      <div className="flex">
        {user && <Sidebar />}
        <main className={user ? "flex-1 p-6" : "w-full"}>
          <Routes>
            <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            
            <Route path="/signals" element={
              <ProtectedRoute>
                <Signals />
              </ProtectedRoute>
            } />

            <Route path="/academy" element={
              <ProtectedRoute>
                <Academy />
              </ProtectedRoute>
            } />

            <Route path="/simulator" element={
              <ProtectedRoute>
                <Simulator />
              </ProtectedRoute>
            } />

            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />

            <Route path="/strategies" element={
              <ProtectedRoute>
                <Strategies />
              </ProtectedRoute>
            } />

            <Route path="/subscriptions" element={
              <ProtectedRoute>
                <Subscriptions />
              </ProtectedRoute>
            } />
          </Routes>
        </main>
      </div>
      {user && <AIMentorChat />}
    </div>
  );
};

export default AppRoutes;
