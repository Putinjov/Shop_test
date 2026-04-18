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
  app/           # App Router routes and layout
  components/    # Reusable UI and layout components
  lib/           # Shared helpers (reserved for domain utilities)
  services/      # External service clients (Shopify Storefront API)
  styles/        # Global and shared styles
  types/         # Global type declarations
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

## Mobile-first styling rules

- Base styles target small screens first.
- Desktop/tablet behavior is additive via `sm:`, `md:`, `lg:` utilities.
- Layout primitives use compact spacing and thumb-friendly defaults.

## Notes

- `src/services/shopify-storefront.ts` provides Shopify env + endpoint helpers.
- Scaffold is intentionally minimal and ready for product/collection/home feature build-out.
