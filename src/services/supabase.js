import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ghynoaqhxeqtfaqowreu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdoeW5vYXFoeGVxdGZhcW93cmV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0MTU3NzcsImV4cCI6MjA3Nzk5MTc3N30.lZzVMs1eheoRGg1U7DiwREw9MYFyq_W6-zzAA2nXVy0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
