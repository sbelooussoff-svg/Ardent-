---
name: ardent-configurator
description: Design, build, or review the Ardent watch configurator. Use for component selection, compatibility rules, configuration state, product visualization, dynamic pricing, or the handoff of a configured watch to the Shopify cart.
---

# ARDENT CONFIGURATOR SKILL

Build a configurator that lets a customer understand, personalize, and confidently buy a real Ardent watch. The visible watch, selected components, final price, cart line, and eventual order must describe the same configuration.

## Sources and ownership

Read the latest available Ardent Product Truth, Website Vision, Design System, and Brand Bible before making product or interaction decisions. Prefer current verified component and store data over old conversation drafts. A newer explicit decision from Sacha takes priority.

Use `ardent-ui-ux` for shared visual rules and interaction patterns. Use `ardent-shopify` for theme and commerce integration. This skill governs the configuration model, compatibility, watch representation, and end-to-end selection behavior.

The three collections are **Méridian**, **Bastille**, and **Élysée**. Their worlds are fire, water, and air respectively. The customer has already chosen a collection before entering its configurator; start with that collection rather than asking again.

## Product truth first

- Offer only active components and variants that Ardent actually proposes for the selected collection.
- Permit only combinations with confirmed technical compatibility. Mark unknown compatibility as **à vérifier** in internal data; do not present it as a valid purchase choice.
- Distinguish available, out of stock, incompatible, and not offered. Explain unavailable choices in plain language where useful.
- Never infer dimensions, materials, movement specifications, color, finish, inventory, supplier, lead time, or price from an image or an old supplier record.
- Keep packaging, internal costs, and invisible assembly parts out of customer option lists unless Ardent explicitly decides otherwise.
- Give each component a stable internal identity and connect its collection, option group, status, compatibility evidence, current price source, and approved visual asset.

## Selection model

- Determine the available steps from real components for that collection. Possible groups include case, dial, hands, movement, bracelet, and approved extras; do not show an empty or fictional step.
- Keep one canonical configuration state. The watch view, selected controls, summary, price, and cart payload must derive from it.
- When one choice invalidates another, resolve the state predictably and tell the customer what changed. Never silently submit an incompatible combination.
- Preserve valid selections when navigating backward, changing a component, reloading, or moving between supported views.
- Show clear option names, useful thumbnails, selection state, and any verified price difference. Avoid long dropdowns and hover-only controls.
- Show a readable configuration summary and final price before adding to cart.

## Product visualization

- The sold watch is the reference. Check geometry, proportions, dial, hands, case, bracelet, logo, component placement, and color against real approved assets.
- An AI-generated watch image or a reconstruction from one photo is not proof of what will be delivered. Use such assets only as a prototype until validated.
- A high-quality 2D or layered view is an acceptable stage before accurate interactive 3D. Do not ship weak 3D merely to claim the feature exists.
- If 3D is used, keep rotation and zoom controlled, loading progressive, and the model usable on mobile. Provide a reliable static fallback if rendering fails.
- Collection scenery supports the watch: restrained volcanic light for Méridian, underwater depth for Bastille, and sky atmosphere for Élysée. Environmental lighting must not distort the actual product color.

## Price and Shopify handoff

- Calculate displayed prices from current authoritative commercial data. Treat historic component costs and supplier quotes as dated observations, not selling prices.
- Do not rely on a client-side price alone to authorize a purchase. Recheck the selected sellable item, availability, and final price through the commerce integration.
- Map the configuration to the real Shopify product or variant arrangement chosen for the store. Carry the customer-visible choices into the cart and order using supported Shopify fields where appropriate.
- Keep a traceable link from every cart line to the selected configuration so Ardent can assemble the correct watch.
- If the store cannot represent a proposed combination or price, resolve the data model before enabling its add-to-cart action.

## Interaction and resilience

- Make the watch the visual focus. Desktop controls can sit beside it; mobile controls should be designed for touch, with the watch visible and price and add-to-cart easy to reach.
- Apply short, controlled transitions when a part changes. Customer actions must remain responsive while scenes or assets load.
- Support keyboard use, visible focus, readable labels, sufficient contrast, and `prefers-reduced-motion`.
- Keep essential selection, summary, and purchase information available when video, 3D, autoplay, or advanced effects fail.
- Load only the product assets needed for the current view; defer heavier models and environmental media.

## Verification

Test at least one valid path per collection and the important invalid, unavailable, and out-of-stock states. Check that changing a selection updates the watch, summary, and price together. Verify backward navigation, reload behavior when supported, mobile touch, keyboard use, reduced motion, and visual fallbacks.

For purchase flows, confirm that the actual cart line and order data retain the intended configuration and verified price. Report which product facts and compatibility rules were confirmed, which remain **à vérifier**, and which parts were tested only in a prototype.

## Shopify references

- [Product forms and variant selection](https://shopify.dev/docs/storefronts/themes/architecture/templates/product/overview)
- [Cart lines and item properties](https://shopify.dev/docs/storefronts/themes/architecture/templates/cart)
- [Cart Ajax API](https://shopify.dev/docs/api/ajax/reference/cart)
