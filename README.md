# Shopify Furniture Storefront (Scaffold)

Production-oriented, mobile-first Next.js scaffold for a premium furniture storefront.

## Tech stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- ESLint
- Prettier

## Folder structure

```text
src/
  app/                 # App Router routes and layout
  components/          # Reusable UI and layout components
  lib/                 # Shared helpers (reserved for domain utilities)
  services/
    shopify/           # Typed Shopify client + queries
  styles/              # Global and shared styles
  types/               # Shared TypeScript models and env declarations
```

## Local setup

1. Install dependencies

```bash
npm install
```

2. Configure environment variables

```bash
cp .env.example .env.local
```

3. Start development server

```bash
npm run dev
```

## Code quality commands

- `npm run lint` — run ESLint checks.
- `npm run lint:fix` — auto-fix ESLint issues, including import sorting.
- `npm run typecheck` — run TypeScript compiler checks with strict settings.
- `npm run format` — format the codebase with Prettier.
- `npm run format:check` — verify formatting without modifying files.

## Shopify Storefront client (typed)

Implemented in `src/services/shopify`:

- `client.ts` — typed GraphQL fetch wrapper with cache/revalidate/tags support.
- `config.ts` — environment-driven runtime config (`server-only`).
- `queries/*.ts` — query modules for:
  - menu by handle
  - collection by handle
  - product by handle
  - featured collections
  - featured products
- `errors.ts` — typed error classes for config, network, and GraphQL response failures.
- `index.ts` — re-exports + centralized error logging helper.

### Error handling strategy

- Configuration issues throw `ShopifyConfigError`.
- Non-2xx HTTP responses throw `ShopifyNetworkError`.
- GraphQL-level errors or missing `data` throw `ShopifyGraphQLResponseError`.
- Use `logShopifyError` in route/components to safely log handled failures and preserve graceful UI fallbacks.

## Mobile-first styling rules

- Base styles target small screens first.
- Desktop/tablet behavior is additive via `sm:`, `md:`, `lg:` utilities.
- Layout primitives use compact spacing and thumb-friendly defaults.
