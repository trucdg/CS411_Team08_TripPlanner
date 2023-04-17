import { createClient } from "@supabase/supabase-js";

// Supabase Project URL
const URL = "https://noltkejfjldnlhfnwnsc.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vbHRrZWpmamxkbmxoZm53bnNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE2MDU4MjEsImV4cCI6MTk5NzE4MTgyMX0.WZ5NZtaKcWeJx0OZdwMrB1u9s1xDVPWUDel-__ApDJM";
export const supabase = createClient(URL, API_KEY);
