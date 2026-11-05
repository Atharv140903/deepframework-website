export type NavItem = { label: string; href: string };

// Site-wide constants. The URL comes from the environment so the same build
// can target a preview host or the production domain.
export const siteConfig = {
  name: "DeepFramework",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://deepframework.in",
  description:
    "DeepFramework designs and builds custom AI for enterprises in manufacturing, healthcare and beyond, on top of the systems you already run.",
  // Absolute home anchors, so the links work from any page, not just home.
  nav: [
    { label: "Solutions", href: "/#solutions" },
    { label: "Industries", href: "/#industries" },
    { label: "How we work", href: "/#process" },
  ] satisfies NavItem[],
} as const;
