import { render, screen, within } from "@testing-library/react";
import { expect, test } from "vitest";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SectionHead } from "@/components/layout/SectionHead";

test("header nav links are absolute home anchors", () => {
  render(<Header />);
  const nav = screen.getByRole("navigation", { name: "Main" });
  const links = within(nav).getAllByRole("link");
  expect(links.map((l) => [l.textContent, l.getAttribute("href")])).toEqual([
    ["Solutions", "/#solutions"],
    ["Industries", "/#industries"],
    ["How we work", "/#process"],
  ]);
});

test("header has no contact button", () => {
  render(<Header />);
  expect(screen.queryByRole("link", { name: /contact/i })).toBeNull();
});

test("logo links home with an accessible name", () => {
  render(<Header />);
  expect(screen.getByRole("link", { name: "DeepFramework home" })).toHaveAttribute("href", "/");
});

test("footer shows copyright and positioning line", () => {
  render(<Footer />);
  expect(screen.getByText("© 2026 DeepFramework")).toBeInTheDocument();
  expect(
    screen.getByText("Custom AI solutions for enterprise · India and worldwide"),
  ).toBeInTheDocument();
});

test("section head renders an h2 with the given id", () => {
  render(<SectionHead id="problem" title="Why most enterprise AI stalls" intro="x" />);
  expect(
    screen.getByRole("heading", { level: 2, name: "Why most enterprise AI stalls" }),
  ).toHaveAttribute("id", "problem-title");
});
