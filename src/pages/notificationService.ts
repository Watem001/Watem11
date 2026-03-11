import { supabase } from '../lib/supabase';

export const subscribeToSignals = async (userId: string, callback: (payload: any) => void) => {
  return supabase
    .channel('public:signals')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'signals' }, callback)
    .subscribe();
};

export const sendNotification = async (userId: string, title: string, message: string) => {
  // In a real app, this would call a serverless function to trigger Push/Email/Telegram
  console.log(`Notification for ${userId}: ${title} - ${message}`);
  
  const { error } = await supabase
    .from('notifications')
    .insert([{ user_id: userId, title, message, read: false }]);
    
  return { error };
};
