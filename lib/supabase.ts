import { createClient } from "@supabase/supabase-js";

// Use placeholders during build time if environment variables are missing
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  console.warn(
    "Supabase credentials missing. Using placeholder values for build/prerender."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
