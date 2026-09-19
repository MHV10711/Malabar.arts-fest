/* =========================================================
   MIS ART FEST 2026
   SUPABASE CONNECTION
   ========================================================= */

const SUPABASE_URL =
    "https://jlitghsdscahpxjfywnr.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_Nwa9_cZlhLpEPCOERsYeQw_JgROWSPW";

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );
