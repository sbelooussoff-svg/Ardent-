---
name: ardent-media
description: Create, edit, select, or prepare Ardent watch photography, video, 3D models, and atmospheric assets. Use for product imagery, configurator assets, collection scenes, campaigns, or web media delivery.
---

# ARDENT MEDIA SKILL

Create media that makes Ardent watches desirable while preserving the truth of the product. Separate the fidelity required for a purchasable watch from the creative freedom allowed in its environment.

## Read the current sources

Consult the latest available Ardent Brand Bible, Product Truth, Website Vision, and Design System. Use verified component references and real watch photographs or measurements whenever the media depicts a watch or a purchasable option. A newer explicit decision from Sacha takes priority over an older draft.

Use `ardent-configurator` for component identity and approval of configuration views. Use `ardent-ui-ux` for the visual behavior of media in an interface. Use `ardent-shopify` for theme and product-media integration. This skill governs asset creation, selection, fidelity, preparation, and delivery.

## Product truth

- The actual watch and approved component references are the standard for case shape, proportions, dial, hands, crown, bracelet, logo, finish, and color.
- Do not present an AI image or a reconstruction from a single photo as proof of the watch a customer will receive. Verify product-facing assets against real components before using them for a product page or configurator.
- Mark unknown dimensions, finishes, materials, movement details, and compatibility as **à vérifier**. An attractive render does not resolve missing product facts.
- Keep distinct assets for each real configuration. Do not recolor a different component or disguise an unavailable variant as an approved one.
- Review the right to use supplier, third-party, and generated material before including it in a published asset.

## Asset roles

- **Reference:** original supplier or Ardent source used to identify a component; retain its provenance and date.
- **Product:** accurate packshot, detail, ecommerce view, or validated configurator layer/model.
- **Editorial:** a real watch in a controlled setting, with truthful product details.
- **Atmospheric:** fire, water, sky, texture, light, or motion that supports a collection without claiming to depict a specific product.

Keep masters and web exports separate. Label each deliverable with its role, collection, component or configuration ID when relevant, view, version, and approval status. Avoid ambiguous filenames such as `final-2-new.png`.

## Ardent visual direction

The watch remains the subject. Favor macros, dial and metal details, controlled reflections, material texture, and a clear sense of physical depth. The result should feel precise and contemporary, not like a generic luxury template.

- **Méridian — fire:** dark rock, distant volcanic light, restrained embers and smoke. Preserve the real watch color.
- **Bastille — water:** ocean depth, soft rays, subtle particles and fluid motion. Avoid an aquarium effect.
- **Élysée — air:** clouds, altitude, diffuse light and calm atmospheric movement. Keep it elegant and believable.

The environment may be cinematic; the purchasable watch must remain accurate and easy to inspect. Avoid deformed logos, impossible hands, inconsistent reflections, invented mechanics, and effects that hide the product.

## Video and motion

Plan each asset for a specific placement and duration. Use controlled camera movement and purposeful transitions. Prepare a still poster or other non-moving fallback for web use. Do not make sound necessary to understand the content.

Higgsfield or other generative tools may help prototype scenes, backgrounds, and campaign concepts. Review their output frame by frame where a real watch appears. Export edited, optimized media for the site; do not make the live storefront depend on generation during a customer visit.

## 3D and configurator assets

For a sellable watch, validate geometry, proportions, component placement, textures, material response, and colors against real references. Keep product lighting neutral enough to judge the actual finish even inside an elemental scene.

Label experimental models as prototypes. Promote a model to product use only after the relevant watch and option views have been compared with approved references. Provide a high-quality 2D fallback when 3D is unavailable or not yet faithful.

## Web delivery

- Produce responsive image sizes and suitable video/model exports for the intended view. Keep original masters available separately.
- Load the first visible product or hero image promptly; defer later scenes and off-screen media. Do not hide essential content behind an animation.
- Use posters, reduced-motion alternatives, and simpler mobile assets where they improve clarity and speed.
- Verify the media at actual desktop and mobile display sizes. Check sharpness, compression artifacts, color, legibility, loading, looping, and fallback behavior.
- Provide descriptive text alternatives for informative product imagery; mark purely decorative atmospheres appropriately.

## Completion check

Before delivery, identify the source references, the represented watch or collection, intended placements, export variants, and any unresolved factual point. Confirm that every product-facing asset is faithful to an approved watch, and that the exported files remain usable when motion or 3D is unavailable.

## Shopify references

- [Product media support](https://shopify.dev/docs/storefronts/themes/product-merchandising/media)
- [Theme media performance](https://shopify.dev/docs/storefronts/themes/best-practices/performance/index)
