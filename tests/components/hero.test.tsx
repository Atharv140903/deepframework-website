import { render, screen, within } from "@testing-library/react";
import { expect, test } from "vitest";
import { Hero } from "@/components/home/Hero";
import { ProjectBrief } from "@/components/home/ProjectBrief";

test("hero has the canvas headline as the only h1", () => {
  render(<Hero />);
  const h1s = screen.getAllByRole("heading", { level: 1 });
  expect(h1s).toHaveLength(1);
  expect(h1s[0]).toHaveTextContent("AI that fits the business you already run.");
});

test("hero has one CTA to solutions and no contact CTA", () => {
  render(<Hero />);
  const links = screen.getAllByRole("link");
  expect(links).toHaveLength(1);
  expect(links[0]).toHaveTextContent("Explore what we build");
  expect(links[0]).toHaveAttribute("href", "/#solutions");
});

test("solution brief is labelled as an example with four rows and a four-step timeline", () => {
  render(<ProjectBrief />);
  const card = screen.getByRole("article", { name: "Example solution brief" });
  ["CLIENT", "PROBLEM", "WE BUILT", "FITS INTO"].forEach((label) =>
    expect(within(card).getByText(label)).toBeInTheDocument(),
  );
  ["Week 1", "Week 2–3", "Week 4–8", "Week 9"].forEach((week) =>
    expect(within(card).getByText(week)).toBeInTheDocument(),
  );
});
