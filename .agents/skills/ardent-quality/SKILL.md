---
name: ardent-quality
description: Audit, test, or prepare the release of an Ardent deliverable. Use for explicit quality reviews of website pages, Shopify theme changes, configurator flows, media, customer copy, and Ardent project documentation.
---

# ARDENT QUALITY SKILL

Give Sacha a precise account of what works, what fails, and what remains unverified. Review the actual deliverable against current Ardent decisions and observable evidence. Do not treat an attractive mockup, a passing build, or a plausible product claim as proof that a customer can buy the promised watch.

## Establish the review scope

Identify the changed files, page, flow, or asset and the environment available for inspection. Read the latest available Brand Bible, Product Truth, Website Vision, and Design System; prefer newer repository sources and explicit decisions. Inspect the relevant implementation and compare it with the prior state when possible.

Choose checks that fit the deliverable. A repository containing only documentation and Skills can be checked for Markdown structure, frontmatter, links, source consistency, and unintended file changes. It cannot establish that a live storefront, checkout, or configurator works. State such limits plainly.

Use `ardent-ui-ux`, `ardent-shopify`, `ardent-configurator`, `ardent-media`, and `ardent-brand-content` for their domain-specific requirements when they apply. This Skill governs verification and reporting; it does not replace the task's implementation work.

## Verify facts before appearance

- Compare customer-visible claims with current, approved product and store sources. Check materials, movement, dimensions, water resistance, origin, assembly, stock, price, delivery, returns, warranty, and compatibility wherever the deliverable mentions them.
- Treat historic supplier information, draft specifications, rendered imagery, and model-generated text as leads to verify, not authority. Record unsupported facts as **à vérifier** and keep them out of publishable customer copy.
- Check that product photographs, renders, video, and 3D accurately represent the watch, its options, colors, proportions, and branding. Separate an approved product representation from an illustrative concept.
- Confirm that the same choice and claim are expressed consistently across French and English and across related pages, summaries, and media.

## Check the customer path when it exists

- On collection and product pages, check that a customer can identify the actual watch, available choices, price, service terms, and next action without relying on scenery or animation.
- In the configurator, test a valid path for each implemented collection and important invalid, unavailable, and out-of-stock states. Check that the visible watch, selected options, summary, and price stay in sync after changes, navigation, and reload where supported.
- For a purchase flow, verify the real Shopify mapping, availability and authoritative price, cart line details, and order handoff. If the order cannot be inspected, report the exact last point verified; do not infer the remainder.
- Check that errors, slow media, missing assets, and unsupported 3D leave essential information and actions usable.

## Check interface and implementation

- Inspect the actual mobile and desktop layouts. Check touch targets, text legibility, focus visibility, keyboard operation, semantic labels, contrast, and reduced-motion behavior on the surfaces changed.
- Check that imagery and effects support product clarity and that heavy assets do not prevent the page or controls from becoming usable. Use available performance measurements rather than visual intuition alone.
- For Shopify theme code, run the repository's relevant build, tests, and Shopify Theme Check when available. Review Liquid and JSON diagnostics and exercise changed templates in a preview when access exists.
- Recheck neighboring flows affected by shared components or data. Prefer a small set of meaningful end-to-end checks over a checklist of unobserved claims.

## Report with evidence

For each material finding, give the location or flow, the observed behavior, the expected behavior, severity, and a reproducible step or supporting source. Separate **passed**, **failed**, and **not verified** checks. Say which environment and product records were used, and which checks were impossible because data, access, or implementation was absent.

Fix issues within the current authorized task when practical, then rerun the relevant checks. Do not declare a release ready while a material product-truth, compatibility, price, cart, accessibility, or purchase-path failure remains. State the remaining decision or fact Sacha must supply rather than filling it with an assumption.

## Reference standards

- [Shopify Theme Check](https://shopify.dev/docs/storefronts/themes/tools/theme-check)
- [Shopify theme accessibility](https://shopify.dev/docs/storefronts/themes/best-practices/accessibility)
- [WCAG 2.2 quick reference](https://www.w3.org/WAI/WCAG22/quickref/)
