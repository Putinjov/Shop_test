# Mobile-first Premium Shopify Furniture Storefront

Next.js App Router storefront frontend for a furniture store, optimized for mobile-first UX and powered by Shopify Storefront API.

## Stack
- Next.js App Router
- TypeScript everywhere
- Tailwind CSS mobile-first
- Shopify Storefront API (server-side fetch)

## Setup
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Shopify metafields used
- `custom.furniture_family` (JSON string array)
- `custom.complete_the_set` (JSON string array of product handles)
- `custom.bundle_message` (plain string)
- Collection: `custom.mobile_intro`, `custom.featured_tags`
- Home metaobject `home_content/default` field `hero_content` (JSON)

## Stage plan and architecture
1. **Scaffold project**: Next.js + TS + Tailwind foundation.
2. **Shopify API client**: typed server fetcher with reusable query layer.
3. **Design system**: reusable buttons/chips/cards with premium style tokens.
4. **Header/footer**: compact mobile navigation and trust footer.
5. **Homepage**: metafield/metaobject driven hero + collection merchandising strips.
6. **Collection page**: mobile sticky chips for sorting/family filtering.
7. **Product page**: swipeable gallery, sticky CTA, concise info above fold.
8. **Grouping & bundles**: furniture family display + complete-the-set recommendations.
9. **Metafield content**: parse metafields for family, bundle, and hero.
10. **Performance & QA**: server components by default, optimized images, minimal client JS.

## Assumptions / TODO
- Implement cart and checkout integration.
- Add robust error boundaries and loading UI.
- Add analytics, search, and inventory-aware variant selector.
- Enrich desktop enhancements after mobile conversion goals are validated.
