/* =========================================================
   MIS ART FEST 2026
   RESULTS TABLE — COMPLETE SETUP
   ========================================================= */

CREATE TABLE IF NOT EXISTS public.results (
    id text primary key,
    name text not null,
    student_class text not null,
    section text not null,
    activity_type text not null,
    program_category text not null,
    event text not null,
    team text not null,
    place text not null,
    participant_count integer,
    created_at timestamptz default now()
);


/* =========================================================
   ADD MISSING COLUMNS IF TABLE ALREADY EXISTS
   ========================================================= */

ALTER TABLE public.results
ADD COLUMN IF NOT EXISTS name text;

ALTER TABLE public.results
ADD COLUMN IF NOT EXISTS student_class text;

ALTER TABLE public.results
ADD COLUMN IF NOT EXISTS section text;

ALTER TABLE public.results
ADD COLUMN IF NOT EXISTS activity_type text;

ALTER TABLE public.results
ADD COLUMN IF NOT EXISTS program_category text;

ALTER TABLE public.results
ADD COLUMN IF NOT EXISTS event text;

ALTER TABLE public.results
ADD COLUMN IF NOT EXISTS team text;

ALTER TABLE public.results
ADD COLUMN IF NOT EXISTS place text;

ALTER TABLE public.results
ADD COLUMN IF NOT EXISTS participant_count integer;

ALTER TABLE public.results
ADD COLUMN IF NOT EXISTS created_at timestamptz DEFAULT now();


/* =========================================================
   ENABLE ROW LEVEL SECURITY
   ========================================================= */

ALTER TABLE public.results
ENABLE ROW LEVEL SECURITY;


/* =========================================================
   REMOVE OLD POLICIES
   ========================================================= */

DROP POLICY IF EXISTS "Public can read results"
ON public.results;

DROP POLICY IF EXISTS "Public can insert results"
ON public.results;

DROP POLICY IF EXISTS "Public can delete results"
ON public.results;


/* =========================================================
   PUBLIC READ
   ========================================================= */

CREATE POLICY "Public can read results"
ON public.results
FOR SELECT
TO anon, authenticated
USING (true);


/* =========================================================
   PUBLIC INSERT
   ========================================================= */

CREATE POLICY "Public can insert results"
ON public.results
FOR INSERT
TO anon, authenticated
WITH CHECK (true);


/* =========================================================
   PUBLIC DELETE
   ========================================================= */

CREATE POLICY "Public can delete results"
ON public.results
FOR DELETE
TO anon, authenticated
USING (true);


-- Remove the automatic identity property from id
ALTER TABLE public.results
ALTER COLUMN id DROP IDENTITY IF EXISTS;

-- Change id from bigint to text
ALTER TABLE public.results
ALTER COLUMN id TYPE text
USING id::text;

-- Refresh Supabase API schema
NOTIFY pgrst, 'reload schema';
-- Remove the old column that the current website no longer uses
ALTER TABLE public.results
DROP COLUMN IF EXISTS program;

-- Refresh Supabase API schema
NOTIFY pgrst, 'reload schema';
