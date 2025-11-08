import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://lapnsgfwmnhebxkxnkec.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhcG5zZ2Z3bW5oZWJ4a3hua2VjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1OTcxMDYsImV4cCI6MjA3ODE3MzEwNn0.kFOsJ3LtH1oEFP2u76xXnoUtsYHReDPtUHAOsdxX_Hw'

export const supabase = createClient(supabaseUrl, supabaseKey)