import { render, screen, within } from "@testing-library/react";
import { expect, test } from "vitest";
import { Examples } from "@/components/home/Examples";
import { Industries } from "@/components/home/Industries";
import { Principles } from "@/components/home/Principles";
import { ProblemList } from "@/components/home/ProblemList";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { SolutionGrid } from "@/components/home/SolutionGrid";
import { TechGrid } from "@/components/home/TechGrid";

test.each([
  ["ProblemList", ProblemList, "problem", 3],
  ["SolutionGrid", SolutionGrid, "solutions", 6],
  ["Examples", Examples, "examples", 3],
  ["Principles", Principles, "principles", 4],
  ["TechGrid", TechGrid, "technology", 6],
] as const)("%s renders its section with the right number of h3 items", (_name, Component, id, count) => {
  const { container } = render(<Component />);
  expect(container.querySelector(`section#${id}`)).not.toBeNull();
  expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(count);
});

test("each section is labelled by its own h2", () => {
  const { container } = render(<SolutionGrid />);
  const section = container.querySelector("section#solutions")!;
  expect(section).toHaveAttribute("aria-labelledby", "solutions-title");
  expect(screen.getByRole("heading", { level: 2 })).toHaveAttribute("id", "solutions-title");
});

test("process renders four steps as an ordered list", () => {
  render(<ProcessSteps />);
  const list = screen.getByRole("list");
  expect(list.tagName).toBe("OL");
  expect(within(list).getAllByRole("listitem")).toHaveLength(4);
});

test("industries shows two featured industries and three others", () => {
  render(<Industries />);
  expect(screen.getAllByRole("article")).toHaveLength(2);
  ["Finance and accounting", "Logistics", "Retail and distribution"].forEach((t) =>
    expect(screen.getByText(t)).toBeInTheDocument(),
  );
});

test("technology band uses the violet band class", () => {
  const { container } = render(<TechGrid />);
  expect(container.querySelector("section#technology")).toHaveClass("band");
});
