// @vitest-environment node
// Checks the static export in out/. Run via `pnpm test:build`, which builds first.
import { readFileSync } from "node:fs";
import { type HTMLElement, parse } from "node-html-parser";
import { expect, test } from "vitest";

/** Parses a file from out/, or from the repo when the path starts with "../". */
function load(path: string) {
  return parse(readFileSync(path.startsWith("../") ? path.slice(3) : `out/${path}`, "utf8"));
}

/**
 * Visible text of an element, whitespace-collapsed. Each element's text is
 * joined with a space so adjacent blocks ("01" + "Pilots…") don't run together,
 * then spaces before punctuation are removed so inline spans don't add gaps.
 */
function text(el: HTMLElement): string {
  const parts: string[] = [];
  const walk = (node: HTMLElement) => {
    for (const child of node.childNodes) {
      if (child.nodeType === 3) parts.push(child.rawText);
      else if (child.nodeType === 1) {
        const tag = (child as HTMLElement).tagName;
        if (tag === "SCRIPT" || tag === "STYLE") continue;
        parts.push(" ");
        walk(child as HTMLElement);
        parts.push(" ");
      }
    }
  };
  walk(el);
  return parts
    .join("")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/\s+/g, " ")
    .replace(/ ([.,;:])/g, "$1")
    .trim();
}

const SECTION_IDS = [
  "problem",
  "solutions",
  "industries",
  "process",
  "examples",
  "principles",
  "technology",
];

test("home page is exported with the site title and English lang", () => {
  const html = load("index.html");
  expect(html.querySelector("html")?.getAttribute("lang")).toBe("en");
  expect(html.querySelector("title")?.text).toContain("DeepFramework");
});

test.each(SECTION_IDS)("section text matches the canvas: %s", (id) => {
  const canvas = load("../design/home.dc.html").querySelector(`section#${id}`)!;
  const built = load("index.html").querySelector(`section#${id}`);
  expect(built).not.toBeNull();
  expect(text(built!)).toBe(text(canvas));
});

test("hero text matches the canvas minus the removed contact CTA", () => {
  const canvasHero = text(load("../design/home.dc.html").querySelector("main > section")!).replace(
    " Get in touch",
    "",
  );
  expect(text(load("index.html").querySelector("main > section")!)).toBe(canvasHero);
});

test("sections appear in canvas order", () => {
  const ids = load("index.html")
    .querySelectorAll("main section[id]")
    .map((s) => s.id);
  expect(ids).toEqual(SECTION_IDS);
});

test("no contact details or contact anchors anywhere in the output", () => {
  for (const f of ["index.html", "404.html"]) {
    const raw = readFileSync(`out/${f}`, "utf8");
    expect(raw).not.toMatch(/mailto:|tel:|#contact|@deepframework\.in|\+91/);
  }
});

test("every internal anchor on every page resolves to an id on the home page", () => {
  const homeIds = new Set(
    load("index.html")
      .querySelectorAll("[id]")
      .map((e) => e.id),
  );
  for (const f of ["index.html", "404.html"]) {
    for (const a of load(f).querySelectorAll("a[href*='#']")) {
      const [path, hash] = a.getAttribute("href")!.split("#");
      expect(["", "/"]).toContain(path);
      expect(homeIds.has(hash), `#${hash} in ${f}`).toBe(true);
    }
  }
});

test("404 page nav uses absolute home anchors", () => {
  const hrefs = load("404.html")
    .querySelectorAll("nav a")
    .map((a) => a.getAttribute("href"));
  expect(hrefs).toEqual(["/#solutions", "/#industries", "/#process"]);
});

test("home page has canonical, description and social tags on the production URL", () => {
  const head = load("index.html").querySelector("head")!;
  const meta = (sel: string) => head.querySelector(sel)?.getAttribute("content");
  const noSlash = (u?: string | null) => u?.replace(/\/$/, "");
  expect(noSlash(head.querySelector("link[rel=canonical]")?.getAttribute("href"))).toBe(
    "https://deepframework.in",
  );
  expect(meta("meta[name=description]")).toBeTruthy();
  expect(meta("meta[property='og:image']")).toMatch(/^https:\/\/deepframework\.in\/opengraph-image/);
  expect(noSlash(meta("meta[property='og:url']"))).toBe("https://deepframework.in");
  expect(meta("meta[name='twitter:card']")).toBe("summary_large_image");
});

test("robots allows crawling and points to the sitemap; sitemap lists home", () => {
  const robots = readFileSync("out/robots.txt", "utf8");
  expect(robots).toMatch(/Allow: \//);
  expect(robots).toContain("Sitemap: https://deepframework.in/sitemap.xml");
  expect(readFileSync("out/sitemap.xml", "utf8")).toContain("<loc>https://deepframework.in</loc>");
});
