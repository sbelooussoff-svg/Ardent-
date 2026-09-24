# ARDENT — DESIGN SYSTEM

**Statut : source maîtresse UI/UX**  
**Version : 1.0**

Ce document définit l'apparence et le comportement de l'écosystème digital Ardent.

Il doit servir de référence pour :

- Shopify ;
- configurateur ;
- pages collections ;
- animations ;
- contenus marketing ;
- Codex ;
- futurs composants UI.

Le système repose sur deux niveaux :

**1. Identité Ardent globale**  
**2. Univers élémentaires propres à chaque collection**

---

# 1. Principe fondamental

L'interface Ardent doit être :

**luxueuse, immersive, minimale, précise et contemporaine.**

L'immersion vient :

- de la lumière ;
- du mouvement ;
- des matières ;
- de la profondeur ;
- des transitions.

Elle ne vient pas de l'accumulation d'éléments graphiques.

La règle :

> **Plus l'environnement est spectaculaire, plus l'interface doit être simple.**

---

# 2. Identité globale Ardent

Tous les univers utilisent la même structure UI.

Ce qui change entre Méridian, Bastille et Élysée :

- lumière ;
- environnement ;
- couleur secondaire ;
- mouvement ;
- texture.

Ce qui ne change pas :

- typographie ;
- boutons ;
- navigation ;
- grille ;
- proportions ;
- logique UX ;
- logo ;
- composants.

Ainsi, l'utilisateur comprend toujours qu'il est chez **Ardent**.

---

# 3. Palette principale

Palette globale proposée.

## Noir Ardent

```text
#080808
```

Utilisation :

fonds sombres, menus, overlays, footer.

---

## Noir secondaire

```text
#111111
```

Sections secondaires.

---

## Blanc Ardent

```text
#F5F3EE
```

Blanc légèrement chaud.

À préférer au blanc pur.

---

## Gris texte

```text
#A7A7A7
```

Informations secondaires.

---

## Gris subtil

```text
#737373
```

Labels et données secondaires.

---

## Métal clair

```text
#D3D0C8
```

Séparateurs, détails et accents.

---

# 4. Couleur accent globale

Ardent ne doit pas utiliser de gros aplats dorés comme signe automatique de luxe.

L'or est utilisé avec parcimonie.

Accent proposé :

```text
#B49A68
```

Utilisation :

- détail ;
- ligne ;
- état sélectionné ;
- petite icône ;
- survol ;
- séparateur.

Jamais :

gros bouton doré brillant + texte noir façon boutique générique.

---

# 5. MÉRIDIAN — FEU

Palette d'environnement.

## Braise

```text
#D85C27
```

## Lave

```text
#FF7A2C
```

## Rouge profond

```text
#5D1A10
```

## Roche

```text
#16100E
```

## Cendre

```text
#75645D
```

Ces couleurs servent principalement :

- aux lumières ;
- aux particules ;
- aux gradients ;
- aux transitions.

Les boutons Ardent restent globalement neutres.

---

# 6. BASTILLE — EAU

## Bleu abyssal

```text
#061927
```

## Bleu profond

```text
#0B334A
```

## Eau

```text
#257295
```

## Reflet

```text
#8CC4D6
```

## Lumière sous-marine

```text
#C4E4E7
```

Pas de bleu électrique saturé façon interface gaming.

---

# 7. ÉLYSÉE — AIR

## Ciel profond

```text
#526F8F
```

## Ciel clair

```text
#A9C9DE
```

## Nuage

```text
#E8EBEC
```

## Lumière

```text
#F6F3EA
```

## Haute atmosphère

```text
#182332
```

L'ambiance doit évoluer du clair vers le profond avec l'altitude.

---

# 8. Règle des couleurs produit

Les palettes d'environnement ne doivent jamais fausser la perception réelle de la montre.

Dans le configurateur :

la montre doit bénéficier d'une lumière suffisamment neutre.

Exemple :

une montre argentée placée dans le feu ne doit pas apparaître orange.

On peut ajouter des reflets environnementaux subtils, mais la couleur réelle doit rester identifiable.

---

# 9. Typographie — principe

Ardent utilise deux familles.

## Display

Pour :

- grands titres ;
- collections ;
- storytelling ;
- hooks.

Direction :

serif élégante et contemporaine.

Candidat actuel :

**Cormorant Garamond**

ou équivalent premium validé ultérieurement.

---

## Interface / contenu

Pour :

- boutons ;
- navigation ;
- caractéristiques ;
- configurateur ;
- textes.

Direction :

sans-serif extrêmement lisible.

Candidat :

**Inter**

ou

**Manrope**.

---

# 10. Hiérarchie typographique

## Hero Display

Desktop :

```text
64–96 px
```

Mobile :

```text
42–56 px
```

Poids léger.

---

## H1

```text
48–64 px desktop
36–44 px mobile
```

---

## H2

```text
36–48 px
```

---

## H3

```text
24–30 px
```

---

## Texte

```text
16–18 px
```

---

## UI

```text
13–15 px
```

---

## Labels

```text
11–13 px
```

Capitales.

Tracking élevé :

```text
0.12em – 0.20em
```

---

# 11. Règle typographique

Éviter :

- bold très lourd ;
- énormes blocs de texte ;
- trop de majuscules ;
- plus de deux familles principales ;
- texte collé aux bords.

Le luxe digital repose énormément sur l'espace.

---

# 12. Grille

Desktop :

```text
12 colonnes
```

Largeur maximale principale :

```text
1440 px
```

Marges :

```text
48–80 px
```

selon écran.

Mobile :

```text
16–24 px
```

---

# 13. Système d'espacement

Base :

```text
4 px
```

Échelle :

```text
4
8
12
16
24
32
48
64
96
128
160
```

Pour les grandes sections immersives :

```text
120–200 px
```

de respiration possible.

---

# 14. Border radius

Ardent doit éviter le style SaaS rempli de cartes arrondies.

Rayons principaux :

```text
0 px
4 px
8 px
```

Utiliser les grands arrondis uniquement pour des composants fonctionnels spécifiques.

Pas de :

```text
border-radius: 30px
```

partout.

---

# 15. Bordures

Bordures extrêmement discrètes.

Exemple :

```text
1px solid rgba(255,255,255,0.12)
```

ou équivalent sombre.

---

# 16. Boutons

Deux familles principales.

## Primary

Fond :

blanc Ardent sur fond sombre.

Texte :

noir.

Hauteur :

```text
48–54 px
```

Padding horizontal généreux.

Pas de gros radius.

---

## Secondary

Fond transparent.

Bordure fine.

Texte adapté au contraste.

---

# 17. Hover des boutons

Animation :

```text
200–300 ms
```

Effets possibles :

- changement léger de fond ;
- glissement subtil ;
- apparition d'une flèche ;
- très faible changement d'échelle.

Éviter :

- bounce ;
- glow énorme ;
- grossissement spectaculaire.

---

# 18. Boutons hero

Méridian / Bastille / Élysée :

**Découvrir**

**Configurer**

Les deux boutons doivent être facilement identifiables.

Le CTA configurateur peut être légèrement plus important.

---

# 19. Header

Hauteur cible desktop :

```text
72–88 px
```

Structure :

```text
Menu                  ARDENT             Search   Cart
```

Position :

fixe ou absolute selon section.

Fond :

transparent au hero.

Puis éventuellement :

```text
rgba(8,8,8,0.65)
```

avec blur léger lorsque l'utilisateur descend.

---

# 20. Logo

Le logo reste centré.

Sa largeur et sa position ne doivent pas changer d'une collection à l'autre.

Couleur :

principalement blanc ou noir selon contraste.

Pas de glow.

Pas d'effet métallique systématique.

---

# 21. Menu hamburger

Ouverture :

environ

```text
400–550 ms
```

Transition fluide.

Le panneau peut occuper :

```text
35–45 %
```

du desktop.

Mobile :

plein écran.

---

# 22. Sous-navigation visuelle

Pour Collections et Configurateur :

chaque modèle dispose d'une vignette.

Méridian :

feu.

Bastille :

eau.

Élysée :

air.

Les images doivent être différentes des héros principaux.

---

# 23. Cards

Limiter fortement les cartes traditionnelles.

Lorsqu'elles sont nécessaires :

- fond transparent ;
- grandes images ;
- peu de bordures ;
- beaucoup d'espace ;
- information minimale.

Le produit doit ressembler à un objet exposé, pas à une fiche Amazon.

---

# 24. Images produit

Ratio recommandé selon usage :

### Collection

```text
4:5
```

### Hero

```text
16:9 / plein écran
```

### Packshot

```text
1:1
```

### Menu

```text
3:4
```

---

# 25. Overlays

Pour rendre le texte lisible :

utiliser des gradients très doux.

Exemple conceptuel :

```text
transparent
→
rgba(0,0,0,0.15)
→
rgba(0,0,0,0.55)
```

Ne jamais recouvrir entièrement un beau visuel avec une couche noire à 70 %.

---

# 26. Motion System

Le mouvement Ardent possède quatre vitesses.

## Micro

```text
150–250 ms
```

Boutons, hover, contrôles.

---

## Interface

```text
250–500 ms
```

Menus, changements d'option.

---

## Cinématique

```text
800–1500 ms
```

Transitions de scènes.

---

## Atmosphérique

```text
4–20 secondes
```

Nuages, fumée, eau, particules.

---

# 27. Easing

Direction recommandée :

```text
cubic-bezier(0.22, 1, 0.36, 1)
```

pour transitions élégantes.

Les mouvements doivent :

démarrer proprement ;

ralentir naturellement.

---

# 28. Méridian Motion

Caractéristiques :

- montée ;
- chaleur ;
- particules ascendantes ;
- lumière pulsante très lente ;
- fumée.

Pas de flammes qui sautent partout.

---

# 29. Bastille Motion

Caractéristiques :

- flottement ;
- profondeur ;
- ondulation ;
- lumière descendante ;
- particules lentes.

Mouvements plus continus que Méridian.

---

# 30. Élysée Motion

Caractéristiques :

- translation lente ;
- élévation ;
- nuages ;
- grande profondeur ;
- lumière diffuse.

C'est l'univers le plus calme.

---

# 31. Curseur desktop

Le curseur système reste acceptable.

Sur certaines zones immersives :

possibilité d'utiliser un indicateur discret :

```text
DRAG
```

ou

```text
EXPLORE
```

Pas de custom cursor permanent qui dégrade l'utilisation.

---

# 32. Scroll

Le scroll reste naturel.

Le site peut utiliser :

- sticky ;
- scrub animation ;
- parallaxe ;
- scroll storytelling.

Mais la position réelle du scroll doit rester compréhensible.

Éviter le remplacement global du comportement natif.

---

# 33. Configurateur — layout desktop

Structure cible :

```text
┌─────────────────────────────────────────────┐
│                  HEADER                     │
├──────────────────────────────┬──────────────┤
│                              │              │
│                              │  OPTIONS     │
│          WATCH               │              │
│                              │  Cadran      │
│       + ENVIRONMENT          │  Aiguilles   │
│                              │  Mouvement   │
│                              │              │
│                              │              │
├──────────────────────────────┴──────────────┤
│               PRICE / CART                  │
└─────────────────────────────────────────────┘
```

Le panneau options ne doit pas prendre plus de place que la montre.

---

# 34. Configurateur mobile

Structure :

```text
HEADER

WATCH
ENVIRONMENT

──────────────

BOTTOM SHEET
Cadran
Aiguilles
Mouvement

PRICE
ADD TO CART
```

Le bottom sheet peut être glissé.

---

# 35. Options configurateur

Chaque choix utilise :

- miniature ;
- nom court ;
- éventuellement supplément.

État sélectionné :

petit contour ou indicateur Ardent.

Pas de gros check vert.

---

# 36. Prix configurateur

Toujours visible ou facilement accessible.

Exemple :

```text
Votre Élysée

189 €
```

Puis :

**Ajouter au panier**

---

# 37. Chargement

Pas de spinner générique si possible.

Utiliser :

logo Ardent ;

ligne de progression ;

ou animation minimale inspirée d'une aiguille.

Durée d'attente réelle seulement.

Ne jamais artificiellement faire attendre l'utilisateur pour « faire luxe ».

---

# 38. États d'erreur

Simple.

Exemple :

**Cette configuration n'est pas disponible.**

Puis proposer les options compatibles.

Pas de message technique.

---

# 39. Iconographie

Style :

- lignes fines ;
- géométrie simple ;
- cohérence d'épaisseur.

Utiliser peu d'icônes.

Recherche.

Panier.

Menu.

Fermer.

Flèche.

Plus / moins.

---

# 40. Photographie

La photographie réelle Ardent doit privilégier :

- lumière contrôlée ;
- macro ;
- métal ;
- texture ;
- profondeur ;
- détails.

Le site doit régulièrement alterner :

**univers spectaculaire**

et

**photo réelle extrêmement propre.**

---

# 41. UI dans les univers

Méridian :

texte généralement blanc.

Bastille :

blanc légèrement froid.

Élysée :

selon luminosité, noir ou blanc.

Les composants UI ne changent jamais complètement de design selon la collection.

---

# 42. Effets glass

Utilisables avec parcimonie.

Exemple :

```text
background: rgba(10,10,10,0.35)
backdrop-filter: blur(16px)
```

Pour :

menu ;

panneaux configurateur ;

overlay.

Pas de glassmorphism partout.

---

# 43. Ombres

Très faibles.

Le site privilégie :

lumière réelle ;

contraste ;

profondeur photographique.

Plutôt qu'une énorme box-shadow CSS.

---

# 44. Accessibilité

Contraste texte/fond suffisant.

Navigation clavier.

Focus visible.

Alt text.

Boutons suffisamment grands.

Aucun contenu uniquement visible au hover.

Respect :

```text
prefers-reduced-motion
```

---

# 45. Breakpoints de référence

```text
Mobile
< 768 px

Tablet
768–1023 px

Desktop
1024–1439 px

Large
≥ 1440 px
```

Les composants doivent rester fluides plutôt que dépendre uniquement de ces seuils.

---

# 46. Performance visuelle

Priorités :

1. produit net ;
2. texte net ;
3. interaction fluide ;
4. décor.

Si le GPU ou le réseau ne suit pas :

réduire d'abord le décor.

Jamais la lisibilité du produit.

---

# 47. Hiérarchie des couches

Conceptuellement :

```text
Z5 — UI / navigation
Z4 — Texte
Z3 — Produit
Z2 — effets atmosphériques proches
Z1 — environnement
Z0 — background
```

La montre doit rester parfaitement identifiable.

---

# 48. Design tokens futurs

Le code devra progressivement centraliser les valeurs.

Exemple :

```text
--ardent-black
--ardent-white
--ardent-gold
--meridian-fire
--bastille-water
--elysee-air

--space-xs
--space-sm
--space-md
--space-lg
--space-xl

--motion-fast
--motion-ui
--motion-scene
```

Aucune valeur importante ne doit être répétée arbitrairement dans cinquante fichiers.

---

# 49. Règles anti-template

Refuser par défaut :

- grosses cards arrondies ;
- gradients violets SaaS ;
- boutons pill partout ;
- animations bounce ;
- textes centrés sur toutes les sections ;
- 15 styles de boutons différents ;
- icônes colorées ;
- faux témoignages ;
- compteurs marketing génériques ;
- popups agressives.

---

# 50. Test ultime

Avant validation d'un écran, demander :

**Si on enlève le logo ARDENT, est-ce que cet écran possède encore une personnalité identifiable ?**

Puis :

**Si oui, cette personnalité appartient-elle vraiment à Ardent ?**

Si la réponse est non :

le design doit être retravaillé.

---

# 51. État des choix

## Validé conceptuellement

- architecture immersive ;
- Méridian = Feu ;
- Bastille = Eau ;
- Élysée = Air ;
- header minimaliste ;
- logo centré ;
- configurateur immersif ;
- UI minimaliste ;
- alternance spectacle / calme.

## Proposition Design System v1

- couleurs exactes ;
- familles typographiques ;
- espacements précis ;
- timings précis.

Ces valeurs peuvent évoluer pendant les premiers prototypes.

Les principes visuels ne doivent cependant pas être modifiés sans raison.

---

# 52. Signature du système

**Ardent ne doit pas sembler luxueux parce qu'il imite le luxe.**

Il doit sembler luxueux parce que :

**tout est maîtrisé.**
