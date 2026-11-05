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

type Item = { title: string; body: string };

export const problem = {
  id: "problem",
  title: "Why most enterprise AI stalls",
  intro:
    "Most companies have tried AI. Few have it running in daily operations. The same three things get in the way.",
  items: [
    {
      number: "01",
      title: "Pilots that never reach production",
      body: "A demo impresses in a meeting, then stops when it meets real data, real users and real approvals.",
    },
    {
      number: "02",
      title: "Systems you cannot replace",
      body: "Your ERP, hospital software and accounting tools run the business. Any AI has to work with them, not around them.",
    },
    {
      number: "03",
      title: "Data spread everywhere",
      body: "The information you need sits in databases, Excel files, scanned PDFs, email and WhatsApp.",
    },
  ],
} satisfies Section & { items: (Item & { number: string })[] };

export const solutions = {
  id: "solutions",
  title: "What we build",
  intro:
    "Six kinds of AI system, combined to fit the problem. The same building blocks work across industries, which is how we deliver quickly in each one.",
  items: [
    {
      title: "AI assistants and chatbots",
      body: "Assistants on WhatsApp, your website or internal tools that answer questions, take requests and hand off to your team.",
      tags: "Customer support · Staff help desk · Dealers",
    },
    {
      title: "Document AI",
      body: "Read invoices, claims, contracts, reports and forms, pull out the data and send it where it is needed.",
      tags: "Extraction · Classification · Search",
    },
    {
      title: "Workflow automation and agents",
      body: "Let AI handle the repetitive steps between your systems, with people approving what matters.",
      tags: "ERP · CRM · Email · Sheets",
    },
    {
      title: "Predictive analytics",
      body: "Forecasts and early warnings from the data you already collect, delivered as reports and alerts people act on.",
      tags: "Demand · Inventory · Maintenance",
    },
    {
      title: "Computer vision and inspection",
      body: "Use cameras and images to spot defects, count stock, read labels and check safety.",
      tags: "Quality · Safety · Stock",
    },
    {
      title: "Custom AI apps",
      body: "Web and internal apps built on large language models, connected securely to your own data and systems.",
      tags: "Knowledge bases · APIs · Integrations",
    },
  ],
} satisfies Section & { items: (Item & { tags: string })[] };

export type Industry = { name: string; title: string; points: string[]; worksWith: string };

export const industries = {
  id: "industries",
  title: "Industries we work in",
  intro:
    "We go deep in manufacturing and healthcare, and bring the same method to any industry with repetitive work in documents, messages and data.",
  featured: [
    {
      name: "Manufacturing",
      title: "From the shop floor to the owner's phone",
      points: [
        "Production, dispatch and stock reports on WhatsApp from Tally or ERP data",
        "Visual defect inspection from existing line cameras",
        "Demand and inventory forecasting to cut stock-outs and dead stock",
      ],
      worksWith: "Works with Tally, SAP Business One, Excel, MES and PLC exports",
    },
    {
      name: "Healthcare",
      title: "Less paperwork for clinical and admin teams",
      points: [
        "Drafts of discharge summaries and clinical notes for doctors to review",
        "Reading insurance claims and pre-authorisation documents",
        "Patient query and appointment assistant on WhatsApp and web",
      ],
      worksWith:
        "Works with hospital and clinic software, scanned records and WhatsApp. Supports staff; never makes diagnoses.",
    },
  ],
  also: ["Finance and accounting", "Logistics", "Retail and distribution"],
  alsoNote: "Working in another industry? The same method applies. Tell us the problem.",
} satisfies Section & { featured: Industry[]; also: string[]; alsoNote: string };

export const processSteps = {
  id: "process",
  title: "How we work",
  intro:
    "We follow the same four steps on every project, from understanding the process to running it day to day.",
  steps: [
    {
      step: "Step 1",
      title: "Discover",
      body: "We learn your process, review your data and systems, and agree on one result to measure.",
      duration: "First call, then about 1 week",
    },
    {
      step: "Step 2",
      title: "Prototype",
      body: "A working version on your real data, so you can see it before committing to the full build.",
      duration: "1 to 3 weeks",
    },
    {
      step: "Step 3",
      title: "Build",
      body: "We build the production version, connect it to your systems and train your team.",
      duration: "Usually 4 to 12 weeks",
    },
    {
      step: "Step 4",
      title: "Support",
      body: "We monitor it, fix issues and improve it as your needs change.",
      duration: "Ongoing, optional",
    },
  ],
} satisfies Section & { steps: (Item & { step: string; duration: string })[] };

export type Example = { industry: string; title: string; body: string };

export const examples = {
  id: "examples",
  title: "What this looks like in practice",
  intro:
    "A few illustrative examples of everyday problems AI can solve inside the systems companies already run.",
  items: [
    {
      industry: "Manufacturing",
      title: "Daily plant report on WhatsApp",
      body: "An assistant that reads Tally and production sheets each evening and sends owners and plant heads a short summary, with answers to follow-up questions.",
    },
    {
      industry: "Healthcare",
      title: "Insurance claim document reader",
      body: "Document AI that reads claim forms, bills and discharge papers, fills the insurer's fields and flags missing items before submission.",
    },
    {
      industry: "Finance",
      title: "Invoice and bank reconciliation",
      body: "An agent that matches invoices, payments and bank lines across systems and sends only the exceptions to the accounts team.",
    },
  ],
} satisfies Section & { items: Example[] };

export const principles = {
  id: "principles",
  title: "Our principles",
  intro: "How we approach every project, whatever its size or industry.",
  items: [
    {
      title: "No rip and replace",
      body: "We build around the software you already use, so your team does not have to change how it works.",
    },
    {
      title: "Clear scope first",
      body: "You approve a written scope, timeline and success measure before any build starts.",
    },
    {
      title: "Your data stays yours",
      body: "NDA before discovery, the least access we need, and your data is never used to train models.",
    },
    { title: "You own the work", body: "The code, models and setup we build for you belong to you." },
  ],
  security:
    "Security basics on every project: role-based access, encrypted data in transit and at rest, audit logs, and deployment on your cloud or ours. We design each project around India's DPDP Act and your own security and industry requirements.",
} satisfies Section & { items: Item[]; security: string };

export const technology = {
  id: "technology",
  title: "Technology we work with",
  intro:
    "We choose tools for the problem, not the other way round, and keep everything running on infrastructure you control.",
  items: [
    {
      title: "Language models",
      body: "Commercial and open-source large language models for assistants, document understanding and agents, with retrieval over your own data.",
    },
    {
      title: "Computer vision",
      body: "Object detection, defect classification and text reading from cameras, scans and photos.",
    },
    {
      title: "Data and forecasting",
      body: "Python, SQL and time-series models that turn ERP, sensor and spreadsheet data into forecasts and alerts.",
    },
    {
      title: "Integration",
      body: "ERP and accounting systems, hospital software, email, WhatsApp Business and REST APIs, connected without replacing anything.",
    },
    {
      title: "Deployment",
      body: "AWS, Azure, Google Cloud or your own servers, with monitoring and access control from day one.",
    },
    {
      title: "Human in the loop",
      body: "Review and approval steps wherever a decision matters, so people stay in charge of the outcome.",
    },
  ],
} satisfies Section & { items: Item[] };
