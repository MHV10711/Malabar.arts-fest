/* =========================================================
   MIS ART FEST 2026
   SUPABASE CONNECTION
========================================================= */

window.SUPABASE_URL =
    "https://jlitghsdscahpxjfywnr.supabase.co";

window.SUPABASE_KEY =
    "sb_publishable_Nwa9_cZlhLpEPCOERsYQw_JgROWSPW";

if (!window.supabase) {
    throw new Error(
        "Supabase library did not load before supabase.js."
    );
}

window.supabaseClient =
    window.supabase.createClient(
        window.SUPABASE_URL,
        window.SUPABASE_KEY
    );

console.log("Supabase client initialized.");
