# Picko Design System & Brand Identity

**Document Version:** 1.0.0  
**Product:** PickoGo (`pickoforme.com`)  
**Tagline:** "Let Picko decide."  

---

## Executive Summary

Picko is a decision and discovery companion mascot. This document defines the core design specifications, UI color palette, component design tokens, and asset usage rules needed to implement the Picko visual identity consistently across web, app, and marketing materials.

---

## 1. Primary Brand Colors

| Token Name | Hex Code | RGB | Usage |
| :--- | :--- | :--- | :--- |
| `color-primary-orange` | `#FF9F1C` | `255, 159, 28` | Primary CTAs, decision highlights, active states |
| `color-tech-blue` | `#2B7FFF` | `43, 127, 255` | App icon background, headers, primary buttons |
| `color-bear-brown` | `#8B5A2B` | `139, 90, 43` | Picko fur, dark typography, borders |
| `color-snout-cream` | `#FFE5B4` | `255, 229, 180` | Card fills, snout highlight, secondary backgrounds |

---

## 2. Interface & Neutral Palette

| Token Name | Hex Code | RGB | Usage |
| :--- | :--- | :--- | :--- |
| `color-bg-sand` | `#FAF8F5` | `250, 248, 245` | Main app background, canvas fill |
| `color-surface-white` | `#FFFFFF` | `255, 255, 255` | Modal cards, recommendation containers |
| `color-text-dark` | `#2C1E16` | `44, 30, 22` | Primary headings, body copy |
| `color-text-muted` | `#6E6259` | `110, 98, 89` | Secondary captions, metadata, timestamps |
| `color-border-soft` | `#E6DFD5` | `230, 223, 213` | Divider lines, card outlines |

---

## 3. Category Color Mapping

* 🍔 **Eat:** `#FF6B35` (Warm Amber)
* 🎬 **Watch:** `#5A189A` (Deep Violet)
* 📚 **Read:** `#2EC4B6` (Sage Green)
* 🎉 **Go Out:** `#00B4D8` (Vibrant Cyan)

---

## 4. Technical Implementation

### Tailwind CSS (`tailwind.config.js`)

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        picko: {
          orange: '#FF9F1C',
          blue: '#2B7FFF',
          brown: '#8B5A2B',
          cream: '#FFE5B4',
          sand: '#FAF8F5',
          dark: '#2C1E16',
          muted: '#6E6259',
          border: '#E6DFD5',
        },
        category: {
          eat: '#FF6B35',
          watch: '#5A189A',
          read: '#2EC4B6',
          go: '#00B4D8',
        }
      },
      borderRadius: {
        'picko-card': '24px',
        'picko-btn': '16px',
      }
    }
  }
}
```

### CSS Variables

```css
:root {
  --picko-orange: #FF9F1C;
  --picko-blue: #2B7FFF;
  --picko-brown: #8B5A2B;
  --picko-cream: #FFE5B4;
  --picko-sand: #FAF8F5;
  --picko-white: #FFFFFF;
  --picko-dark: #2C1E16;
  --picko-muted: #6E6259;
  --picko-border: #E6DFD5;
}
```

---

## 5. Asset Rules

* **App Icon:** High-contrast close-up of Picko on `#2B7FFF` Tech Blue with rounded corners (`22.5%` radius).
* **Hero Section:** Full-body Picko greeting state (`What are we doing today?`).
* **Loading State:** Thinking posture (paw on chin) while computing recommendations.
