// @vitest-environment node
// Checks the static export in out/. Run via `pnpm test:build`, which builds first.
import { readFileSync } from "node:fs";
import { parse } from "node-html-parser";
import { expect, test } from "vitest";

function load(path: string) {
  return parse(readFileSync(`out/${path}`, "utf8"));
}

test("home page is exported with the site title and English lang", () => {
  const html = load("index.html");
  expect(html.querySelector("html")?.getAttribute("lang")).toBe("en");
  expect(html.querySelector("title")?.text).toContain("DeepFramework");
});
