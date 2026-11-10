import type { MetadataRoute } from 'next';
import { isProductionSite, siteUrl } from '@/lib/seo';
export default function sitemap():MetadataRoute.Sitemap { return isProductionSite && siteUrl ? [{url:siteUrl,changeFrequency:'monthly',priority:1}] : []; }
