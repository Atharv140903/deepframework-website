import { expect, test } from "vitest";
import { resolveSiteUrl } from "@/config/site";

test("falls back to the production domain when the env var is unset", () => {
  expect(resolveSiteUrl(undefined)).toBe("https://deepframework.in");
});

test("falls back to the production domain when the env var is empty or blank", () => {
  expect(resolveSiteUrl("")).toBe("https://deepframework.in");
  expect(resolveSiteUrl("   ")).toBe("https://deepframework.in");
});

test("strips a trailing slash so joined paths have a single slash", () => {
  expect(resolveSiteUrl("https://deepframework.in/")).toBe("https://deepframework.in");
});

test("keeps a valid custom URL as given", () => {
  expect(resolveSiteUrl("https://deepframework-website.onrender.com")).toBe(
    "https://deepframework-website.onrender.com",
  );
});
