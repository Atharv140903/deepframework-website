import type { Metadata } from "next";
import { Examples } from "@/components/home/Examples";
import { Hero } from "@/components/home/Hero";
import { Industries } from "@/components/home/Industries";
import { Principles } from "@/components/home/Principles";
import { ProblemList } from "@/components/home/ProblemList";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { SolutionGrid } from "@/components/home/SolutionGrid";
import { TechGrid } from "@/components/home/TechGrid";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/", type: "website", siteName: "DeepFramework" },
  twitter: { card: "summary_large_image" },
};

export default function HomePage() {
  return (
    <main id="top">
      <Hero />
      <ProblemList />
      <SolutionGrid />
      <Industries />
      <ProcessSteps />
      <Examples />
      <Principles />
      <TechGrid />
    </main>
  );
}
