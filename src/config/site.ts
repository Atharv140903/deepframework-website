export type NavItem = { label: string; href: string };

const PRODUCTION_URL = "https://deepframework.in";

/**
 * The site's absolute URL from an env value. Blank values fall back to the
 * production domain (a blank env var in a hosting dashboard is easy to save
 * by accident), and a trailing slash is removed so `${url}/path` never
 * produces a double slash.
 */
export function resolveSiteUrl(value: string | undefined): string {
  const trimmed = value?.trim();
  return (trimmed || PRODUCTION_URL).replace(/\/$/, "");
}

// Site-wide constants. The URL comes from the environment so the same build
// can target a preview host or the production domain.
export const siteConfig = {
  name: "DeepFramework",
  url: resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  description:
    "DeepFramework designs and builds custom AI for enterprises in manufacturing, healthcare and beyond, on top of the systems you already run.",
  // Absolute home anchors, so the links work from any page, not just home.
  nav: [
    { label: "Solutions", href: "/#solutions" },
    { label: "Industries", href: "/#industries" },
    { label: "How we work", href: "/#process" },
  ] satisfies NavItem[],
} as const;
