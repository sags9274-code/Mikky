import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://sgpjygrzpebeigdqkqcf.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNncGp5Z3J6cGViZWlnZHFrcWNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA0MjY3MTYsImV4cCI6MjEwNjAwMjcxNn0.UOQ6L7DAvU-HvA7T5gFWd5bs3xlvAuoTCaUHS4OMjIk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
