import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { description, title, siteUrl, isProductionSite } from '@/lib/seo';
import './globals.css';
const manrope = localFont({ src: '../fonts/manrope.woff2', variable: '--font-manrope', display: 'swap', weight: '200 800' });
export const metadata: Metadata = {
 title, description, ...(siteUrl ? {metadataBase:new URL(siteUrl)}:{}),
 robots: { index: isProductionSite, follow: isProductionSite },
 ...(isProductionSite ? {alternates:{canonical:siteUrl}}:{}),
 openGraph: { title, description, locale:'pt_BR', type:'website', siteName:'Desentupidora da Região', ...(siteUrl?{url:siteUrl,images:[{url:'/images/about.jpg',width:598,height:382,alt:'Caminhão da Desentupidora da Região'}]}:{}) },
 twitter: {card:'summary',title,description},
};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="pt-BR"><body className={manrope.variable}>{children}</body></html>; }
