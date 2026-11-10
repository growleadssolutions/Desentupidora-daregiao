// Fail closed: a preview never becomes indexable through inherited production variables.
export const isProductionSite = process.env.SITE_MODE === 'production' && (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === 'production');
const configuredUrl = process.env.SITE_URL;
if (isProductionSite && (!configuredUrl || !configuredUrl.startsWith('https://'))) throw new Error('Production requires an explicit HTTPS SITE_URL.');
export const siteUrl = configuredUrl ? new URL(configuredUrl).origin : undefined;
export const title = 'Desentupidora em Curitiba 24 Horas | DAREGIÃO';
export const description = 'Precisa de desentupidora em Curitiba? A DAREGIÃO atende 24 horas com serviços de desentupimento de pias, vasos, ralos e esgotos. Solicite um orçamento.';
