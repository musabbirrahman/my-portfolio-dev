export const projectsData = [
  {
    id: "PRJ-01",
    slug: "landing-page-demo",
    title: "Landing Page Demo",
    shortDescription:
      "A clean, mobile-first landing page demo for a fictional local bakery. This is the service I sell.",
    longDescription:
      "A complete demo landing page for a fictional bakery: a clear hero, menu, why-us, visit, and contact sections. It is labelled as a demo everywhere, with example prices and hours, and a demo form that sends nothing.",
    features: [
      "Hero, menu filter, order builder, FAQ, visit, and contact",
      "Order total in ৳, with a message draft, demo only",
      "Mobile-first layout, no horizontal scroll"
    ],
    tech: ["HTML5", "CSS3", "JavaScript"],
    liveLink: "/demos/landing",
    status: "DEPLOYED",
  },
  {
    id: "PRJ-02",
    slug: "golponeer",
    title: "GolpoNeer",
    shortDescription:
      "A live Bangla and English story platform I run, built with AI-assisted development. I directed, tested, published, and operate it.",
    longDescription:
      "GolpoNeer is a live story platform for reading and publishing stories in Bangla and English. It was built with AI-assisted development: I directed the build, tested every release, handled publishing and SEO, and operate the live site. It is not presented as hand-written code.",
    features: [
      "Live at golponeer.com with published stories and chapters",
      "Bangla and English reading, with author and genre pages",
      "Search, discover, and keepsake features, tested on phone and desktop",
    ],
    tech: ["Vite", "Supabase", "Vercel", "AI-Assisted Development"],
    liveLink: "https://golponeer.com",
    image: "/golponeer-desktop.jpg",
    githubLink: "https://github.com/musabbirrahman/golpoghor",
    status: "DEPLOYED",
  },
  {
    id: "PRJ-03",
    slug: "layout-fix-demo",
    title: "Layout Fix Demo",
    shortDescription:
      "A before-and-after layout fix demo, with the same cards shown broken, then fixed. This shows the bug-fix service I sell.",
    longDescription:
      "A before-and-after demo in a 360px phone frame, with a toggle. The Before version is intentionally broken: a fixed 900px container, nowrap titles, and a row that never stacks. The After version fixes all three, with the changes explained in plain terms.",
    features: [
      "Before and After toggle in a 360px phone frame",
      "Five named bugs, plus a code-diff view",
      "Fixed version checked for no horizontal scroll at phone width"
    ],
    tech: ["HTML5", "CSS3", "Responsive Design"],
    liveLink: "/demos/layout-fix",
    status: "DEPLOYED",
  },
];
