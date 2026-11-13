/* Selected Work order (Step 2 reorder, 2026-11-13): real production
 * systems first — GolpoNeer, then Sweet Cravings — then the demos,
 * combined into one Responsive Lab card. The two old demo entries
 * stay in this file with hideFromGrid: true so their detail pages
 * (/projects/landing-page-demo, /projects/layout-fix-demo) keep
 * working for anyone with the link; they just no longer appear
 * as cards in the grid. Delete them only if the old URLs should
 * go away too. */
export const projectsData = [
  {
    id: "PRJ-01",
    slug: "golponeer",
    title: "GolpoNeer",
    shortDescription:
      "A live Bangla and English story platform I run, built with AI-assisted development. I directed, tested, published, and operate it.",
    idea:
      "Stories deserve a quiet nest, not a noisy feed. GolpoNeer (গল্পনীড় — a nest for stories) is a free place on the web to read and publish stories in Bangla and English, one chapter at a time. No ads inside stories, no locked chapters, nothing complicated — just a clean, calm place to read and write. It is for readers and writers equally: a reader finds their next story, and a writer finds their first readers.",
    longDescription:
      "GolpoNeer is a live bilingual story platform for reading and publishing stories in Bangla and English, chapter by chapter. It holds 37 published stories and 510 chapters — over 1.1 million words — mixing Bangla classics, English classics, and original writing. Readers browse by genre, shelf, author, or tag, keep a library with reading progress, and turn a favourite passage into a shareable keepsake card. Writers publish their own stories chapter by chapter with a rich-text editor. The whole site is built to stay clean and calm: reading and writing are free forever, there are no ads inside stories, and no chapter is ever locked. It was built with AI-assisted development — I directed the build, tested every release, handled publishing and SEO, and operate the live site. It is not presented as hand-written code.",
    features: [
      "Read and publish in Bangla and English, chapter by chapter",
      "37 stories and 510 chapters — over 1.1 million published words",
      "Discover by genre, shelf, author, and tag, with search",
      "Keepsakes: turn a favourite passage into a shareable quote card",
      "Library with reading progress, Following, and Finished tracking",
      "Writer dashboard with a rich-text chapter editor",
      "Free forever — no ads in stories, no locked chapters",
    ],
    tech: ["Vite", "Supabase", "Vercel", "AI-Assisted Development"],
    liveLink: "https://golponeer.com",
    image: "/golponeer-desktop.jpg",
    screenshots: [
      { src: "/golponeer-desktop.jpg", caption: "Homepage — featured stories and the calm reading shelf" },
    ],
    githubLink: "https://github.com/musabbirrahman/golpoghor",
    status: "DEPLOYED",
  },
  {
    id: "PRJ-02",
    slug: "sweetcravings",
    title: "Sweet Cravings",
    shortDescription:
      "A live online ordering site for a homemade dessert shop in Rajshahi — browse the menu, order, and pay by bKash or Nagad.",
    idea:
      "A homemade dessert shop should not need phone calls and chat messages to take an order. Sweet Cravings puts the whole order online: the customer browses the menu, builds an order, and pays by bKash or Nagad — and the shop gets the order instantly, with the payment already verified. It is built for a real family shop, so it has to be simple enough for the owner to run and safe enough to take real money.",
    longDescription:
      "Sweet Cravings is a live online ordering website for a homemade dessert shop in Rajshahi. Customers browse the menu with dish photos and prices in ৳, build an order, and choose delivery or pickup. They pay by bKash or Nagad with a transaction ID that is verified on the spot (a duplicate transaction ID is rejected, and the sender's number is captured), or choose Cash on Delivery. Orders can be saved as drafts and paid later. Every new order reaches the shop instantly as a Telegram alert, with the customer's number and payment details. A loyalty stamp card rewards repeat customers, and a daily order cap per phone number keeps the shop safe from abuse. The interface is Bangla-first and built to work on a phone, because that is where the customers are.",
    features: [
      "Full menu with dish photos and prices in ৳, Bangla-first design",
      "Order online: build an order, choose delivery or pickup",
      "bKash and Nagad checkout with transaction-ID verification",
      "Duplicate transaction IDs rejected; sender number captured",
      "Save-and-pay-later drafts — an order can be paid after it is placed",
      "Loyalty stamp card with tiered rewards for repeat customers",
      "Instant Telegram alert to the shop for every new order",
      "Daily order cap per phone number, with a WhatsApp fallback",
      "Cash on Delivery supported",
    ],
    tech: ["Next.js", "Cloudflare Workers", "Turso", "bKash / Nagad", "Telegram"],
    liveLink: "https://sweet-cravings.musabbirrahman.workers.dev",
    image: "/sweet-cravings.jpg",
    screenshots: [
      { src: "/sweet-cravings.jpg", caption: "Homepage — the hero and the signature caramel flan (৳400)" },
    ],
    githubLink: "https://github.com/musabbirrahman/sweetcravings",
    status: "DEPLOYED",
  },
  {
    id: "PRJ-03",
    slug: "responsive-lab",
    title: "Responsive Lab",
    shortDescription:
      "Two hands-on demos of the services I sell: a clean landing page for a local shop, and the same page's layout fixed — broken on the left, fixed on the right.",
    idea:
      "A shop owner should see what they are paying for before they pay. These two demos show the services side by side: one clear landing page for a local shop, and a before-and-after of the layout bugs that lose customers on phones — sideways scroll, cut-off titles, tiny buttons — fixed in plain view.",
    longDescription:
      "Two interactive demos of the services I sell. The landing page demo is a complete page for a fictional bakery in Jamalpur: hero, menu, order builder, FAQ, visit, and contact — labelled as a demo everywhere, with example prices and hours. The layout-fix demo shows the same bakery cards broken, then fixed: a fixed 900px container, nowrap titles, a row that never stacks, tiny buttons, and a stretched image box — five named bugs, with a code-diff view and a draggable before/after slider on the homepage. Both are mobile-first with no horizontal scroll, and both are labelled as demos, not real shops.",
    features: [
      "Complete landing page demo: hero, menu filter, order builder, FAQ, visit, contact",
      "Order total in ৳, with a message draft, demo only",
      "Before-and-after layout fix in a 360px phone frame, with a draggable slider",
      "Five named bugs, plus a code-diff view",
      "Fixed version checked for no horizontal scroll at phone width",
      "Clear demo labelling everywhere — prices and hours are examples",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    liveLink: "/demos/landing",
    demoLinks: [
      { label: "Landing demo", href: "/demos/landing" },
      { label: "Layout-fix demo", href: "/demos/layout-fix" },
    ],
    image: "/landing-demo.jpg",
    screenshots: [
      { src: "/landing-demo.jpg", caption: "Landing page demo — the same page on desktop and phone" },
      { src: "/layout-fix-demo.jpg", caption: "Layout-fix demo — the same cards, broken then fixed" },
    ],
    status: "DEPLOYED",
  },
  {
    id: "PRJ-04",
    slug: "landing-page-demo",
    hideFromGrid: true,
    title: "Landing Page Demo",
    shortDescription:
      "A clean, mobile-first landing page demo for a fictional local bakery. This is the service I sell.",
    idea:
      "A local shop does not need an app or a complicated site — it needs one clear page that says what it sells, what it costs, and how to order. This demo is that page: a fictional bakery in Jamalpur, built to show a real shop owner exactly what they would get before they pay for it.",
    longDescription:
      "A complete demo landing page for a fictional bakery: a clear hero, menu, why-us, visit, and contact sections. It is labelled as a demo everywhere, with example prices and hours, and a demo form that sends nothing. The point is to show the service, not to pretend the shop is real — a shop owner can look at it and picture their own menu and prices in the same layout.",
    features: [
      "Hero, menu filter, order builder, FAQ, visit, and contact",
      "Order total in ৳, with a message draft, demo only",
      "Mobile-first layout, no horizontal scroll",
      "Clear demo labelling everywhere — prices and hours are examples",
    ],
    tech: ["HTML5", "CSS3", "JavaScript"],
    liveLink: "/demos/landing",
    image: "/landing-demo.jpg",
    status: "DEPLOYED",
  },
  {
    id: "PRJ-05",
    slug: "layout-fix-demo",
    hideFromGrid: true,
    title: "Layout Fix Demo",
    shortDescription:
      "A before-and-after layout fix demo, with the same cards shown broken, then fixed. This shows the bug-fix service I sell.",
    idea:
      "Most layout bugs are invisible to the person who built the site — until a customer opens it on a phone and the page scrolls sideways or the text gets cut off. This demo shows the problem and the fix side by side, so a shop owner can see exactly what they are paying to have fixed.",
    longDescription:
      "A before-and-after demo in a 360px phone frame, with a toggle. The Before version is intentionally broken: a fixed 900px container, nowrap titles, and a row that never stacks. The After version fixes all three, with the changes explained in plain terms. It covers five named bugs and includes a code-diff view, so the fix is not a mystery — it is a visible, explainable change.",
    features: [
      "Before and After toggle in a 360px phone frame",
      "Five named bugs, plus a code-diff view",
      "Fixed version checked for no horizontal scroll at phone width",
      "Each bug explained in plain terms — what was wrong, what changed",
    ],
    tech: ["HTML5", "CSS3", "Responsive Design"],
    liveLink: "/demos/layout-fix",
    image: "/layout-fix-demo.jpg",
    status: "DEPLOYED",
  },
];
