// Home page copy, verbatim from the approved canvas (design/home.dc.html).
// tests/build/output.test.ts diffs the built page against that file, so any
// edit here must match the canvas or the design must change first.

export type Section = { id: string; title: string; intro: string };

export const hero = {
  eyebrow: "AI solutions for enterprise",
  titleLead: "AI that fits the business ",
  titleAccent: "you already run.",
  lead: "We design and build custom AI for enterprises in manufacturing, healthcare and beyond, on top of the systems you have today. Your ERP, hospital software and spreadsheets stay. The manual work around them goes.",
  cta: { label: "Explore what we build", href: "/#solutions" },
  industries: "Manufacturing · Healthcare · Finance · Logistics · Retail",
};

export const projectBrief = {
  rows: [
    { label: "CLIENT", value: "Multi-plant auto-parts manufacturer, 900 staff" },
    {
      label: "PROBLEM",
      value: "Line inspectors log defects on paper; quality reports reach managers two days late",
    },
    {
      label: "WE BUILT",
      value: "Camera-based defect detection plus a daily quality summary on WhatsApp and email",
    },
    { label: "FITS INTO", value: "Existing line cameras and their ERP, with nothing replaced" },
  ],
  timeline: [
    { when: "Week 1", phase: "Discover", live: false },
    { when: "Week 2–3", phase: "Prototype", live: false },
    { when: "Week 4–8", phase: "Build", live: false },
    { when: "Week 9", phase: "Live", live: true },
  ],
  outcome:
    "defects are logged as they happen, and managers see the day's quality picture the same evening.",
  note: "Illustrative example of how a project fits into existing systems",
};
