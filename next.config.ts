import type { NextConfig } from 'next';
const indexable = process.env.SITE_MODE === 'production' && (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === 'production');
const config: NextConfig = { poweredByHeader:false, async headers(){ return indexable ? [] : [{source:'/:path*',headers:[{key:'X-Robots-Tag',value:'noindex, nofollow'}]}]; } };
export default config;
