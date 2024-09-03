/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        app_id: process.env.APP_ID,
        key:process.send.KEY,
        secret:process.send.SECRETE,
        cluster:process.send.CLUSTER,
        email:process.send.EMAIL,
        email_pass:process.send.EMAIL_PASS,
        supabase_pass:process.send.SUPABASE_PASS,
        supabase_project_pass:process.send.SUPABASE_PROJECT_PASS,
        NEXT_PUBLIC_SUPABASE_URL:process.send.NEXT_PUBLIC_SUPABASE_URL,
        NEXT_PUBLIC_SUPABASE_ANON_KEY:process.send.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    }
};

export default nextConfig;
