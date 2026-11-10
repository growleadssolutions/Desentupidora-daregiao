# DAREGIÃO — demonstração de redesign

Landing page em Next.js App Router, TypeScript, Tailwind CSS e Lucide React. Conteúdo predominantemente em Server Components; somente o menu e a mensuração dos botões usam componentes de cliente.

## Executar

Node.js 22 ou superior. Na pasta do projeto:

```powershell
npm.cmd ci
npm.cmd run dev
```

Abra http://localhost:3000. Para validar e executar o build de produção:

```powershell
npm.cmd run build
npm.cmd run typecheck
npm.cmd start
```

## Publicar na Vercel

O projeto usa o preset Next.js, sem configuração especial de output. Importe o repositório na conta/equipe correta ou, com a CLI instalada e autenticada, execute `vercel` para gerar um preview. Depois de revisar o resultado e confirmar o projeto de destino, `vercel --prod` publica no ambiente Production. Nenhum deploy foi realizado durante esta implementação.

Mantenha `SITE_MODE=demo` inclusive em Production enquanto for demonstração. Opcionalmente configure `SITE_URL` com a URL HTTPS real da demonstração para URLs absolutas de Open Graph.

Para lançamento oficial, configure **somente no ambiente Production**:

```dotenv
SITE_MODE=production
SITE_URL=https://DOMINIO-OFICIAL-CONFIRMADO
```

Faça novo build/deploy. Essa alteração habilita canonical autorreferente, sitemap e indexação; remove o aviso de demonstração. Previews Vercel permanecem `noindex, nofollow` mesmo se herdarem `SITE_MODE=production`. Não use a URL oficial como `SITE_URL` de uma demonstração em outro domínio.

A demonstração usa meta robots e cabeçalho HTTP `X-Robots-Tag`. O robots.txt permite rastreamento para que os mecanismos consigam ler o `noindex`; bloquear o rastreamento impediria essa leitura. O sitemap fica vazio em modo demo. Noindex não é controle de acesso.

## Conteúdo e ativos

Informações, telefone, logo e fotografias foram conferidos em https://desentupidoradaregiao.com.br/ em 09/11/2026. Veja `docs/fontes.md`. Nenhum endereço, avaliação, certificação, prazo ou preço foi acrescentado. A fonte Manrope é local, com licença em `src/fonts/OFL.txt`; não há requisição ao Google Fonts em runtime ou no build.

`src/lib/content.ts` centraliza serviços, slugs, contatos e FAQ. Por enquanto os cards apontam para detalhes úteis na mesma página. Para criar páginas de serviço, adicionar conteúdo próprio em `app/servicos/[slug]/page.tsx`, trocar os hrefs dos cards, fornecer metadata individual e incluir as URLs no sitemap. Não publicar variações artificiais por bairro. Não foram presumidas cidades específicas na Região Metropolitana.

## Conversões

O componente `WhatsAppButton` usa o número validado `5541998366785` e a mensagem solicitada. Os cliques adicionam ao `window.dataLayer`:

```json
{"event":"whatsapp_click","cta_location":"hero","link_url":"https://wa.me/..."}
```

Posições: `header`, `hero`, `final`, `mobile_fixed`. Nenhum script de GA4/GTM é carregado. Quando houver IDs aprovados, configurar GTM e uma tag GA4 com evento personalizado `whatsapp_click`, passando `cta_location`. O evento representa clique, não envio de mensagem nem orçamento concluído. `data-event` e `data-cta-location` também estão presentes no HTML.

## Estrutura

- `src/app/page.tsx`: seções e JSON-LD LocalBusiness/Service.
- `src/app/layout.tsx`: fonte local, idioma e metadata.
- `src/lib/seo.ts`: separação demo/produção.
- `src/components/`: menu e botão reutilizável.
- `public/images/`: imagens originais, servidas por next/image.

O LocalBusiness omite endereço porque não foi confirmado. A marcação descreve os dados disponíveis, sem promessa de resultados enriquecidos no Google. Métricas reais de Core Web Vitals precisam de medição após publicação e tráfego real.
