---
name: ardent-shopify
description: Build, modify, or review Ardent's Shopify theme and commerce integration. Use for Liquid, theme sections, product and variant data, cart behavior, checkout integration, FR/EN storefront content, or theme release work.
---

# ARDENT SHOPIFY SKILL

Use this skill for Ardent's Shopify storefront and its connection to the store's products, cart, and checkout. Keep the storefront credible, usable, and consistent with the Ardent brand.

## Sources and boundaries

Before making product or brand decisions, consult the latest available Ardent sources: Brand Bible, Product Truth, Website Vision, and Design System. Prefer current repository or store data over older conversation drafts. A newer explicit decision from Sacha takes priority.

Use `ardent-ui-ux` for visual and interaction decisions. Use `ardent-configurator` when its instructions exist and the work concerns configuration rules, watch rendering, or component compatibility. This skill owns the Shopify integration of those experiences.

Do not treat an earlier supplier list, component cost, selling price, delivery time, warranty, or technical claim as current without checking its authoritative source.

## Inspect before changing

1. Identify the actual theme and store connection. The repository may contain documentation without theme code.
2. Read the existing theme structure, settings, templates, sections, snippets, assets, and locales relevant to the task.
3. Identify any app, custom code, or merchant setting that already provides the requested behavior.
4. Check which theme is live and which environment is safe for preview when store access is involved.

If the needed theme or store data is unavailable, complete any useful repository work within scope and state precisely what cannot yet be verified. Do not describe an untested mockup as a working Shopify feature.

## Theme implementation

- Follow the existing theme's architecture and naming. Prefer a focused change to reusable sections, blocks, snippets, templates, assets, or settings over duplicating page code.
- Keep content that merchants must update in Shopify editable through suitable theme settings or store data. Avoid burying prices, inventory, or product facts in Liquid, CSS, or JavaScript.
- Preserve existing merchant settings and customizations when changing schemas or templates.
- Keep the watch and its real configuration clear. Atmospheric effects may support the experience but must not obscure product details, options, price, or calls to action.
- Use Shopify's current documentation when implementing a platform behavior whose API, availability, or syntax may have changed.

## Product and configuration data

- Treat the current Shopify catalog and the maintained Product Truth as the source for purchasable products, variants, prices, availability, and component claims. Resolve disagreements before presenting a fact as certain.
- Never invent a SKU, material, movement, compatibility, stock level, discount, or price.
- Make every selected configuration traceable through the cart and order. Use the store's actual product and variant model; do not assume a visual selection is purchasable.
- Show price changes from authoritative store data. Validate the final selection before adding it to the cart.
- Do not let a cinematic rendering replace accurate watch imagery or misrepresent a color or finish.

## Cart and checkout

- Preserve the path from product selection to cart and checkout. Check quantity, availability, selected options, price display, and error states.
- Keep cart behavior consistent on mobile and desktop, including when scripts fail or load slowly.
- Treat checkout customization as a separate Shopify capability. Verify the store's plan and the current extension options before promising or implementing an in-checkout change; changing a theme does not by itself change checkout.
- Do not alter payment, tax, shipping, or legal copy based on assumptions.

## FR/EN storefront

- Use the theme's localization system for customer-facing interface strings. Maintain both French and English when a shared interface changes.
- Check translated product and editorial content in its actual store source; interface locale files alone do not translate all catalog content.
- Keep terminology, collection names, prices, currencies, and calls to action consistent across languages.
- Review long text and mobile layouts in both languages.

## Safe delivery

- Keep changes narrow and reversible. Preserve the README, existing theme code, and merchant data.
- Preview store changes in a development or unpublished theme when available. A repository edit is not a store deployment.
- Publish or change the live store only when that action is within the current user's authorization.
- Avoid installing apps or adding external scripts merely to achieve a visual effect. Check the performance and maintenance cost of new dependencies.

## Verify the result

For theme code, run Shopify Theme Check and any relevant project checks. Preview affected pages and test product selection, add-to-cart, cart persistence, and checkout handoff as applicable. Inspect mobile and desktop, French and English, keyboard use, contrast, loading, and failure states. Compare against the existing experience for regressions.

Report the files changed, what the customer or merchant can now do, what was verified in the repository versus a store preview, and any remaining access or product-data gap.

## Shopify references

- [Theme architecture](https://shopify.dev/docs/storefronts/themes/architecture)
- [Theme development practices](https://shopify.dev/docs/storefronts/themes/best-practices)
- [Theme Check](https://shopify.dev/docs/storefronts/themes/tools/theme-check)
- [Checkout apps and extensions](https://shopify.dev/docs/apps/build/checkout)
