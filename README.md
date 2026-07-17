# Elena Hart — Life & Mindset Coach (one-page marketing site)

A modern, high-converting, single-page marketing website for a life/mindset
coach. **One job: get visitors to book a free discovery call.** Built with
plain HTML, CSS, and vanilla JS — no frameworks, no build step.

> **Note:** "Elena Hart" is a **mockup brand** created for this template.
> Swap the name, copy, photos, prices, and booking link for the real coach.
> All placeholders are marked with `TODO` comments in the code.

---

## ✨ Highlights

- **Conversion-first layout** — Promise → Proof → Process → Path, with the
  discovery-call CTA repeated after the hero, after testimonials, and in the footer.
- **Fully responsive & accessible** — semantic HTML, skip link, keyboard-navigable
  nav + FAQ accordion, visible focus states, WCAG-AA contrast, `alt` text, and
  `prefers-reduced-motion` support.
- **Tasteful micro-interactions** — sticky nav, smooth scroll, subtle scroll-reveal,
  hover states — all vanilla JS/CSS, no libraries.
- **SEO ready** — title, meta description, Open Graph + Twitter cards, favicon
  placeholder, and JSON-LD (`Person` + `ProfessionalService`) schema.
- **GHL-ready embed** — `embed.html` is a single self-contained, fully namespaced
  file to paste into a GoHighLevel custom HTML/JS block.

---

## 🎨 Brand palette (change it in one place)

All colors live as CSS variables at the top of **`styles.css`** (`:root`) — and,
for the GHL version, at the top of the `<style>` block in **`embed.html`**
(scoped to `.ehc-root`). Edit once to re-skin the whole site.

| Token          | Hex        | Role                                   |
| -------------- | ---------- | -------------------------------------- |
| `--cream`      | `#FAF6F0`  | Page background (soft warm off-white)  |
| `--sand`       | `#F1E9DD`  | Alternating section background         |
| `--sand-2`     | `#E9DECE`  | Subtle card borders / dividers         |
| `--ink`        | `#2A2521`  | Headings & primary text (espresso)     |
| `--muted`      | `#6E645B`  | Secondary text                         |
| `--clay`       | `#C25E3C`  | **The accent** — CTAs, links, highlights |
| `--clay-600`   | `#A94E2F`  | Accent hover / pressed                 |
| `--clay-tint`  | `#F3E0D6`  | Faint accent wash                      |
| `--line`       | `#E4D8C9`  | Hairline borders                       |

**Why this direction:** a warm, premium, calming feel that fits life/mindset
coaching — soft neutrals to feel safe and grounded, with a single confident
terracotta accent to draw the eye straight to "Book a Call." Terracotta reads as
warm and human (not corporate blue, not salesy red), which suits a trust-based,
personal service.

**Fonts:** [Fraunces](https://fonts.google.com/specimen/Fraunces) (elegant serif
headings) + [Inter](https://fonts.google.com/specimen/Inter) (clean modern body),
loaded from Google Fonts.

---

## 📁 Project structure

```
life-coach-website/
├── index.html        # The static site (all sections, SEO, schema)
├── styles.css        # Design system + responsive + a11y styles
├── script.js         # Nav, mobile menu, scroll-reveal, FAQ accordion
├── embed.html        # ⭐ Self-contained, namespaced file for GoHighLevel
├── render.yaml       # Render static-site blueprint
├── .gitignore
├── assets/           # Put your real images/favicon here (see assets/README.md)
└── README.md
```

---

## 🔧 Things to customize (search the code for `TODO`)

1. **Booking link** — every CTA currently points to `#book` (a placeholder anchor).
   Replace with your **Calendly / GHL calendar URL**. In `embed.html` the anchor is
   `#ehc-book`; search for `TODO-BOOKING`.
2. **Coach details** — name, bio, email (`hello@elenahart.co`), social links.
3. **Photos** — hero + about headshots, testimonial avatars, OG share image
   (placeholders use Unsplash; see `assets/README.md`).
4. **Testimonials** — ⚠️ the three quotes are **clearly-labeled placeholders**,
   not real people. Replace with genuine, permission-granted client results before launch.
5. **Prices & packages** — the three package prices are examples.
6. **Domain** — update `elenahart.co` in the `<link rel="canonical">`, OG tags, and JSON-LD.

---

## 💻 Run locally

It's a static site — just open `index.html` in a browser. Or serve it:

```bash
# Node (no install needed)
npx serve .
# → http://localhost:3000
```

---

## 🚀 Deploy to Render (Static Site)

This repo includes **`render.yaml`**, a Blueprint that deploys the repo root as a
static site (no build command).

**Option A — Dashboard (recommended, ~2 min):**

1. Push this repo to GitHub (see below).
2. Go to <https://dashboard.render.com> → **New +** → **Static Site**.
3. Connect your GitHub account and pick the **`life-coach-website`** repo.
4. Settings (Render auto-detects most from `render.yaml`):
   - **Build Command:** *(leave empty)*
   - **Publish Directory:** `.`
5. Click **Create Static Site**. Render builds and gives you a live URL like
   `https://life-coach-website.onrender.com`.
6. Every future `git push` auto-deploys.

**Option B — Blueprint:** New + → **Blueprint** → pick the repo → Render reads
`render.yaml` and provisions it automatically.

---

## 📥 Paste into GoHighLevel (GHL)

Use **`embed.html`** (not `index.html`) for GHL:

1. In the funnel/page builder, add a **Custom HTML / JavaScript** element.
2. Open `embed.html`, copy the **entire** file, and paste it into that element.
3. Replace the booking anchors (`#ehc-book`) with your real scheduler URL — or
   drop your GHL calendar `<iframe>` directly under the final CTA button.
4. Save & preview.

**Why it's safe:** everything is wrapped in `<div class="ehc-root">` and every CSS
rule is namespaced under `.ehc-root`, so the styles can't leak into the rest of
your funnel. All JS runs in an IIFE scoped to that wrapper. Fonts load via a
self-contained `@import`, and there's no `<html>/<head>/<body>` wrapper (GHL
provides those).

---

## ♿ Accessibility notes

- Semantic landmarks (`header`, `main`, `nav`, `section`, `footer`) + skip link.
- FAQ accordion uses real `<button>`s with `aria-expanded` / `aria-controls`;
  fully keyboard operable, Escape closes the mobile menu.
- Focus-visible outlines everywhere; motion is disabled for users who request it.
- Color pairings target WCAG-AA contrast.

---

## 📄 License

Do whatever you like with this template for the coaching business it's built for.
Replace all placeholder content and imagery before going live.
