-- SIMPLE ONE-CLICK SETUP FOR MAPRANX
-- Just copy ALL of this and paste in Supabase SQL Editor, then click RUN

-- Enable UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create ONE simple table to start
CREATE TABLE IF NOT EXISTS public.user_data (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id),
    business_name TEXT,
    address TEXT,
    phone TEXT,
    keywords TEXT,
    points INTEGER DEFAULT 100,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Allow users to see their own data
ALTER TABLE public.user_data ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can do everything with own data" 
ON public.user_data 
FOR ALL 
USING (auth.uid() = user_id);

-- That's it! Done!