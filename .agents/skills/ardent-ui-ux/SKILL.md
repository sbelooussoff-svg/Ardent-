---
name: ardent-ui-ux
description: Design, implement, review, or improve any Ardent website interface, page, section, navigation, animation, responsive behavior, visual system, or interaction. Use whenever work affects the visual experience, UX, layout, motion, components, collection environments, homepage, mobile presentation, or configurator interface.
---

# ARDENT UI / UX SKILL

Use this skill whenever work changes what an Ardent customer sees, feels, clicks, scrolls through, or interacts with.

The objective is not merely to produce a functional interface.

The objective is to create a coherent premium Ardent experience.

---

# 1. Read the Ardent sources first

Before making an important design decision, use the current Ardent master sources when available:

1. `01 — ARDENT Brand Bible`
2. `02 — ARDENT Product Truth`
3. `03 — ARDENT Website Vision`
4. `04 — ARDENT Design System`

When equivalent repository documents exist, prefer the newest repository versions.

Never silently override a more recent explicit decision.

---

# 2. Core experience

Ardent uses one global visual identity with three collection universes:

## Méridian

Element:

**FIRE**

Meaning:

- intensity
- energy
- matter
- heat

Visual language:

- volcanic rock
- lava light
- ember particles
- smoke
- warm reflections

---

## Bastille

Element:

**WATER**

Meaning:

- depth
- movement
- control

Visual language:

- ocean
- underwater light
- subtle particles
- fluid movement
- depth

---

## Élysée

Element:

**AIR / SKY**

Meaning:

- elevation
- lightness
- elegance

Visual language:

- clouds
- atmosphere
- altitude
- diffuse light
- sky
- eventual progression toward the upper atmosphere

---

# 3. Fundamental visual rule

The environment may be spectacular.

The interface must remain restrained.

Use:

**immersive environment + minimal interface**

not:

**immersive environment + complicated interface**

The watch is always more important than the UI.

---

# 4. Never default to generic ecommerce design

Avoid by default:

- Shopify-template appearance
- generic SaaS cards
- excessive rounded rectangles
- pill buttons everywhere
- generic luxury gold gradients
- purple gradients
- oversized shadows
- excessive glassmorphism
- bouncing animations
- meaningless particles
- cluttered product grids
- fake luxury styling

Do not add visual effects merely because they are technically possible.

---

# 5. Ardent global UI

Keep these elements consistent across collections:

- typography system
- button system
- spacing
- navigation architecture
- header structure
- layout logic
- configurator controls
- iconography
- component behavior

The collection environment changes.

The brand interface does not become a different website.

---

# 6. Header

Target architecture:

```text
Menu                    ARDENT                    Search   Cart
```

Logo centered.

Header should feel extremely lightweight.

On immersive hero sections:

- transparent when possible
- strong enough contrast to remain usable

After scrolling:

a subtle translucent background may appear if required for readability.

Do not introduce unnecessary controls.

---

# 7. Homepage hero

The homepage hero uses the three elemental worlds.

Sequence:

```text
Méridian
FIRE

↓

Bastille
WATER

↓

Élysée
AIR
```

Do not hard-cut from one scene to another.

Transitions should visually transform one environment into another.

Typical exposure target:

approximately 4 seconds per scene.

Typical cinematic transition:

approximately 1–1.5 seconds.

These timings are starting values rather than immutable requirements.

---

# 8. Homepage hero interaction

Each collection displays:

collection name;

short hook;

two actions.

Actions:

**Discover the collection**

**Configure mine**

The automatic sequence must pause or adapt when the user actively interacts.

Allow manual navigation.

Desktop may use subtle navigation controls.

Mobile may support swipe.

---

# 9. Collection storytelling

Collection pages may use scroll-based environmental progression.

## Bastille

Progress downward through the ocean.

Surface

→

mid-depth

→

deeper water

Each major stage can introduce another watch configuration.

---

## Méridian

Progress toward increasing volcanic intensity.

Dark rock

→

warmer environment

→

strong volcanic glow

Do not rely on explosions or excessive flames.

---

## Élysée

Progress upward.

Cloud layer

→

high altitude

→

upper atmosphere

→

possibly near-space visual language

Maintain elegance and realism.

---

# 10. Configurator experience

The customer has already selected a collection before entering its configurator.

Do not ask them to select the collection again unless there is a clear reason.

Primary layout hierarchy:

```text
WATCH
↓
CONFIGURATION CONTROLS
↓
PRICE
↓
ADD TO CART
```

The watch must dominate the experience.

---

# 11. Configurator environments

## Méridian

Volcanic environment.

Subtle:

- ember movement
- distant lava
- smoke
- atmospheric light

---

## Bastille

Underwater environment.

Subtle:

- water movement
- rays
- particles
- distant marine movement where appropriate

Never turn it into an aquarium.

---

## Élysée

Sky environment.

Subtle:

- moving clouds
- atmospheric depth
- light variation

---

# 12. Product color accuracy

Environmental lighting must never prevent customers from understanding the actual product color.

For configurator work:

**product truth > cinematic lighting**

Example:

an argent watch in the Méridian environment must still clearly look argent rather than orange.

---

# 13. Desktop configurator target

Prefer an architecture similar to:

```text
┌───────────────────────────────────────────┐
│ HEADER                                    │
├─────────────────────────┬─────────────────┤
│                         │                 │
│                         │   OPTIONS       │
│         WATCH           │                 │
│                         │   Dial          │
│      ENVIRONMENT        │   Hands         │
│                         │   Movement      │
│                         │                 │
├─────────────────────────┴─────────────────┤
│ PRICE                         ADD TO CART │
└───────────────────────────────────────────┘
```

The control panel must never visually overpower the product.

---

# 14. Mobile configurator

Prefer:

```text
HEADER

WATCH
ENVIRONMENT

──────────────

BOTTOM SHEET

Dial
Hands
Movement

PRICE

ADD TO CART
```

Mobile is not a scaled-down desktop layout.

Design specifically for touch.

---

# 15. Product option interactions

Prefer:

- clear thumbnails
- short labels
- obvious selected state
- optional price difference
- direct feedback

Avoid:

- long dropdown lists
- hidden states
- tiny swatches without labels
- controls requiring hover

---

# 16. Motion system

Use four general motion scales.

## Micro

Approximately:

150–250 ms.

For:

- hover
- focus
- button states

---

## UI

Approximately:

250–500 ms.

For:

- option switching
- drawers
- menus
- configurator component changes

---

## Scene

Approximately:

800–1500 ms.

For:

- environment changes
- major transitions

---

## Atmospheric

Approximately:

4–20 seconds.

For:

- clouds
- smoke
- water
- environmental movement

---

# 17. Animation philosophy

Motion should communicate:

- precision
- material
- mechanics
- depth
- transformation

Avoid:

- bounce
- elastic movement without reason
- constant motion everywhere
- exaggerated zoom
- animation that delays customer actions

Do not artificially slow interactions to create fake luxury.

---

# 18. Scrolling

Native scrolling should remain understandable.

Allowed:

- sticky sections
- scroll-linked animation
- parallax
- cinematic progression
- pinned product sequences

Avoid globally replacing native scrolling unless a compelling technical reason exists.

Never trap the customer in an animation.

---

# 19. Typography

Use the current Design System.

General direction:

Display:

elegant contemporary serif.

Interface:

highly readable sans-serif.

Typography should feel editorial rather than decorative.

Avoid excessive bold weights.

Use whitespace aggressively.

---

# 20. Spacing

Do not compress premium layouts.

Prefer fewer elements with more breathing room.

Use the Ardent spacing scale where available.

Avoid random pixel values when a design token exists.

---

# 21. Components

Before creating a new component:

check whether an existing component already performs the same role.

Prefer extending reusable components over duplicating interfaces.

Common reusable components should include eventually:

- header
- menu drawer
- elemental scene
- collection hero
- CTA
- product selector
- option swatch
- configurator panel
- price display
- collection navigation
- footer

---

# 22. Design tokens

Use centralized variables.

Do not scatter important colors or timings throughout individual files.

Examples:

```text
--ardent-black
--ardent-white
--ardent-accent

--meridian-fire
--bastille-water
--elysee-air

--space-sm
--space-md
--space-lg

--motion-fast
--motion-ui
--motion-scene
```

When modifying an existing implementation, use the project's actual naming conventions rather than blindly introducing these exact names.

---

# 23. Assets

Separate product assets from atmospheric assets.

Product assets require high fidelity.

Atmospheric assets may be more creative.

Never use an AI-generated interpretation of the watch as the authoritative configurator product representation.

---

# 24. Performance

Treat performance as part of design quality.

For immersive experiences:

- preload only what is immediately needed
- lazy-load later scenes
- compress video
- optimize textures
- reduce particle counts
- provide poster images
- avoid unnecessary JavaScript
- remove unused libraries

Mobile may use reduced environmental complexity.

Preserve the product first.

---

# 25. Progressive enhancement

An Ardent page must remain usable if:

- WebGL fails
- autoplay is blocked
- reduced motion is enabled
- a video fails
- the device is low-powered

Provide graceful fallbacks.

---

# 26. Reduced motion

Respect:

`prefers-reduced-motion`

When enabled:

- minimize parallax
- reduce automatic movement
- remove unnecessary cinematic transitions
- preserve navigation and content

Never hide information because motion is disabled.

---

# 27. Accessibility

Every implementation must consider:

- readable contrast
- keyboard navigation
- visible focus
- touch target size
- semantic HTML
- text alternatives where necessary
- screen-reader-friendly controls

Immersive does not mean inaccessible.

---

# 28. Responsive verification

Always inspect at least:

- mobile
- tablet
- normal desktop
- large desktop

Do not validate only the development viewport.

---

# 29. Before implementing a redesign

Inspect the current implementation first.

Determine:

1. what already exists;
2. what can be reused;
3. what causes the problem;
4. which components are affected;
5. whether the requested change affects other pages.

Do not rewrite a working section from scratch without reason.

---

# 30. Implementation workflow

For significant UI work:

```text
Inspect
↓
Understand
↓
Plan
↓
Implement
↓
Review visually
↓
Test responsive
↓
Test interactions
↓
Check performance
↓
Check accessibility
↓
Check regressions
```

---

# 31. Definition of done

UI work is not complete because it renders.

It must be:

- visually coherent
- aligned with Ardent
- responsive
- interactive
- accessible enough for its role
- performant
- maintainable
- free of obvious regressions

---

# 32. Final self-review

Before finishing, ask:

### Brand

Does this unmistakably belong to Ardent?

### Product

Is the watch still the hero?

### Luxury

Does it feel controlled rather than overloaded?

### Element

Does the collection environment support the correct identity?

### UX

Can a new customer immediately understand what to do?

### Mobile

Does it still work properly on a phone?

### Performance

Did visual ambition create unnecessary technical weight?

### Consistency

Did I reuse the existing system rather than create a second one?

If any answer is no, improve the implementation before considering it complete.
