# Migração para Cloudflare Workers: pendente

Verificação em 10/11/2026. Nenhum deploy foi executado.

## Resultado observado

- `npx.cmd --yes vinext check` falhou antes de analisar o projeto: acesso a `https://registry.npmjs.org/vinext` rejeitado com `EACCES` neste ambiente.
- Não há vinext instalado localmente. Compatibilidade ainda não confirmada; `vinext init` não foi executado.
- `npm.cmd run typecheck` e `npm.cmd run build` passaram no Next.js existente (16.2.6).
- Não foram alterados layout, conteúdo, SEO, imagens, componentes, dependências ou scripts.
- Não há script de testes ou lint no package.json atual. Build e TypeScript não validam execução no Workers nem equivalência visual.

## Inventário para retomar

App Router, metadados, robots.txt, sitemap.xml, next/font/local e next/image com PNG/JPEG. Não foram encontrados ISR, revalidatePath, revalidateTag, use cache ou serviços @vercel no código da aplicação.

As opções indicadas pelo guia oficial para este inventário são caches desativados e otimização via Cloudflare Images. A integração Images e sua disponibilidade na conta devem ser validadas antes de publicar.

Em um terminal com acesso ao npm, execute primeiro:

```powershell
npx vinext check
```

Somente após revisar o relatório e resolver eventuais incompatibilidades:

```powershell
npx vinext init --platform=cloudflare --name desentupidora-daregiao --cdn-cache=none --data-cache=none --image-optimization=cloudflare-images
```

O initializer deve gerar as configurações Vite/Cloudflare e scripts vinext. Revisar todos os arquivos gerados, incluir `.cloudflare/types` no tsconfig e excluir artefatos locais do Git. Não substituir os imports next/* ou remover next.config.ts.

## Validação ainda necessária

Após inicialização, verificar os comandos gerados e executar:

```powershell
npm.cmd run typecheck
npm.cmd run build
npm.cmd run dev:vinext -- --port 3100
npm.cmd run build:vinext
npm.cmd run start:vinext -- --port 3100
```

Encerrar o servidor de desenvolvimento antes de iniciar o servidor do build na mesma porta. Comparar desktop/mobile, menu, links de telefone/WhatsApp, dataLayer, fonte local, imagens e otimização, 404, HTML/metadados/JSON-LD, robots.txt, sitemap.xml e cabeçalho X-Robots-Tag.

Preservar `SITE_MODE=demo` na demonstração: noindex/nofollow, sem canonical oficial e sitemap vazio. Para o site oficial, definir SITE_MODE=production e SITE_URL com o domínio HTTPS confirmado. O bloqueio de indexação por VERCEL_ENV existente não identifica previews Cloudflare: estes precisam manter SITE_MODE=demo explicitamente. Validar as variáveis no build e no Worker.

## Publicação futura (não executada)

Comandos oficiais, ainda não configurados/validados neste projeto:

```powershell
npx cf auth login
npx @vinext/cloudflare deploy --dry-run
npx @vinext/cloudflare deploy
```

Executar publicação somente mediante solicitação. O dry-run não substitui a validação local de rotas e layout.

## Fontes oficiais

- https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/
- https://developers.cloudflare.com/workers/static-assets/migration-guides/vercel-to-workers/nextjs/
