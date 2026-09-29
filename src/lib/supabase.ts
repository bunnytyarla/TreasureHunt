import { createClient } from "@supabase/supabase-js";

// ⚠️ SETUP REQUIRED: Create your own Supabase project at https://supabase.com
// Then paste your project URL and anon key below (or use .env — see .env.example)
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "YOUR_SUPABASE_URL_HERE";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || "YOUR_SUPABASE_ANON_KEY_HERE";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
