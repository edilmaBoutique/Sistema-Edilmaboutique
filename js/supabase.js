const SUPABASE_URL = 'https://fwouztquisexduojgawv.supabase.co';

const SUPABASE_ANON_KEY = 'sb_publishable_2pw0xvWMcMz28cwfaAt1dQ_b1U0Ok46';

const SUPABASE_CONFIGURED =
    SUPABASE_URL.startsWith('https://') &&
    SUPABASE_ANON_KEY.startsWith('sb_');

const supabaseClient =
    SUPABASE_CONFIGURED && window.supabase
        ? window.supabase.createClient(
            SUPABASE_URL,
            SUPABASE_ANON_KEY
        )
        : null;

window.SUPABASE_CONFIGURED = SUPABASE_CONFIGURED;
window.supabaseClient = supabaseClient;