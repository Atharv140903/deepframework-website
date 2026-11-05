# DeepFramework website — v1 design

Date: 2026-11-05 · Status: draft for approval

## Intent

DeepFramework builds custom AI for enterprises (manufacturing, healthcare, finance, logistics, retail) on top of the systems they already run. The website is its first public face: it has to explain plainly what the company builds and show that it fits around existing systems. Getting a prospective client to make contact is the next iteration, once the form is connected.

v1 is a faithful build of the approved home-page design, minus the contact section. It is also the foundation for case-study and service pages that come next, so the structure must let a new page be added without reworking what exists.

## Sources of truth

| What | Where | Wins on |
|---|---|---|
| Home page layout, copy, spacing | `design/home.dc.html` (copied from the Design canvas "DeepFramework Website Design") | Everything visible on the page, except the v1 changes listed below |
| Website style guide | `design/styleguide.dc.html` | Website-specific tokens and component rules |
| Brand kit | `../DeepFramework-Design-Kit/` (README, `03-colour/tokens.css`, `01-logo/svg`, `02-icons`, `05-templates`) | Logos, favicons, brand colours, voice |

The `.dc.html` files are design-tool pages with inline styles. They are a visual and content reference, not code to paste: rebuild them as components.

Where the canvas style guide and the brand kit disagree, the canvas wins for the website, because it was designed for this page. Specifically: the canvas adds `coral-text #B8372A` (coral that passes contrast for small text), `tint #EFEBF7`, `on-violet-muted #D9D3EE`, and a larger web type scale (H1 64 px vs the kit's 56). Builder's call: extend the kit's `--df-*` token set with these rather than inventing a second naming scheme.

## v1 changes from the canvas

The author decided to show no contact details and to hide the contact section until the form is connected. Therefore:

- The **Contact section** (heading, email, WhatsApp, form) is not built in v1.
- The header's **Contact** button is removed; the nav keeps Solutions, Industries, How we work.
- The hero's secondary **Get in touch** button is removed; the hero keeps its primary "Explore what we build" button.
- No email address or phone number appears anywhere on the site, including metadata and the 404 page.

Everything else matches the canvas.

## Goals

1. The home page matches the canvas desktop artboard (1440) and its 390 px mobile rendering, with the v1 changes above: Header, Hero with example project-brief card, Problem, Solutions, Industries, Process, Examples, Principles, Technology on violet band, Footer — same order, same copy word for word, same tokens.
2. Every page is pre-rendered to static HTML with its own `<title>`, description, canonical URL and Open Graph/Twitter tags, so search engines and WhatsApp/LinkedIn link previews show real content.
3. The site is indexable from launch: `robots.txt` allows crawling and points to a generated `sitemap.xml`.
4. Adding a page later (a case study, a service page) means adding one route folder and its metadata; header, footer, container and section heading are shared, and the sitemap picks the page up.
5. Deployed as a Render static site in the DeepFramework workspace, served at `https://deepframework.in`.

## Non-goals (v1)

- Contact section, contact form and form backend (next iteration).
- Case-study pages, service pages, blog, CMS.
- Analytics, cookie banner, i18n, dark mode.

## Anti-goals (a failure even if it works)

- Copy that drifts from the canvas or the brand voice (plain, specific, calm; no hype words, no exclamation marks, no emoji).
- The colour logo on a dark background, or coral used beyond small accents (~10% max; text on coral is always Ink).
- A link or button that leads nowhere (e.g. a leftover `#contact` anchor).
- A page that is slow, shifts as fonts load, or breaks at phone width.
- Inaccessible markup: missing labels, non-button click targets, text under 4.5:1 contrast.

## Decisions made

| Decision | Choice | Why |
|---|---|---|
| Framework | Next.js (App Router) with `output: 'export'` | React, as the style guide specifies; file-based routes for future pages; per-page metadata; static HTML output |
| Language | TypeScript | |
| Package manager | pnpm | Matches the team's other projects |
| Styling | CSS Modules per component + global CSS variables from the brand tokens | Code mirrors the style guide's token names; no utility-class layer to translate |
| Fonts | `next/font/google` for Archivo (500, 600, 800), IBM Plex Sans (400, 500, 600), IBM Plex Mono (400, 500) | Self-hosted at build, no layout shift, no request to Google at runtime |
| Logos and icons | SVGs and favicons from the design kit, copied into the repo | Kit is the source of truth; never redraw the mark |
| Link preview image | `05-templates/link-preview-1200x630.png` as the default OG/Twitter image | Already designed for this |
| Mobile | Same layout reflowing via wrapping flex rows and `clamp()` sizes, as in the canvas; no separate mobile layout | That is how the canvas mobile artboard is produced |
| Domain | `https://deepframework.in`, from `NEXT_PUBLIC_SITE_URL` (default to that value) | One place to change; drives `metadataBase`, canonical URLs and sitemap |
| Indexing | On from launch | Nothing on the page is a placeholder |
| Header logo (my call) | Kit mark SVG + live "**Deep**Framework" text in Archivo 21 px (800/500), exactly as the canvas header | Canvas wins for the website; live text stays sharp and matches the font |
| Focus ring (my call) | 3 px outline, 2 px offset: `coral-text #B8372A` on light backgrounds, coral `#FF6B5A` on the violet band | Coral on Mist is ~2.6:1, below the 3:1 minimum for focus indicators |
| Copy the canvas lacks (my call) | Claude drafts the page title, meta description and a 404 page in the brand voice; the author reviews them before deploy | Every link preview shows them |
| Code hosting | GitHub `Atharv140903/deepframework-website` (personal account, public), branch `main` | Keeps DeepFramework separate from MedAI. No secrets in the repo; any future keys live in Render env vars |
| Hosting | Render static site in the DeepFramework workspace; build `pnpm install --frozen-lockfile && pnpm build`, publish `out/`; custom domain `deepframework.in` (+ `www` redirect) | CDN-served, no cold starts |

## Structure the builder should end up with

- A root layout with Header and Footer, fonts, global tokens, and default metadata (site name, description, OG image, `metadataBase` from `NEXT_PUBLIC_SITE_URL`).
- Home page composed from section components. The style guide's suggested list is the starting point, without ContactForm: Header, Hero, ProjectBrief, SectionHead, ProblemList, SolutionGrid, IndustryCard, ProcessSteps, ExampleCard, Principles, TechGrid, Footer.
- A shared Container and SectionHead used by every section.
- Section copy kept as typed data next to (or inside) its component, so repeated cards render from arrays rather than copy-pasted markup.
- Site constants (name, domain, nav items) in one config module.
- Header nav links point at home-page anchors (`/#solutions` etc.) so they keep working from future pages.
- `robots.txt` and `sitemap.xml` generated at build (Next.js `app/robots.ts` and `app/sitemap.ts` work with static export).
- A 404 page in the site's layout.

## Quality bar

- `pnpm build` produces `out/` with no errors or type errors; `pnpm lint` passes.
- Visual check of the built site at 1440 and 390 widths against the canvas.
- No link on the site points to a missing anchor or page.
- Keyboard: all links and buttons reachable, with a visible focus ring as specified above.
- Lighthouse on the built home page: Performance, Accessibility, Best Practices and SEO all ≥ 95.

## Left to the builder

Folder layout inside `src/`, component boundaries beyond the list above, CSS file organisation, lint config, test approach for a static content site, and how to structure the copy data.

## Steps only the author can do

- In Render, connect GitHub account `Atharv140903` to the DeepFramework workspace so it can read the repo.
- At the domain registrar for `deepframework.in`, add the DNS records Render shows when the custom domain is added.
