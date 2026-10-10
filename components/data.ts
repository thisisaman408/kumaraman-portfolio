export type FeaturedProject = {
  name: string;
  category: string;
  description: string;
  role: string;
  details: string[];
  image: string;
  imageAlt: string;
  github?: string;
  live?: string;
  note?: string;
};

export const socials = {
  github: "https://github.com/thisisaman408",
  email: "mailto:thisisaman408@gmail.com",
  linkedin: "https://www.linkedin.com/in/thisisaman408/",
};

export const featuredProjects: FeaturedProject[] = [
  {
    name: "Resyl",
    category: "Personal AI memory · Founder",
    description:
      "A personal AI memory app that connects the details you capture to the people and topics they belong to, then brings them back when you ask.",
    role: "Founder · Product engineering",
    details: ["Capture and recall", "People-linked context", "React Native · TypeScript"],
    image: "/screenshots/resyl.jpg",
    imageAlt: "Resyl product homepage introducing its personal AI memory experience",
    live: "https://resyl.app",
    note: "Android available · iOS coming soon",
  },
  {
    name: "Renatus",
    category: "Agentic code engineering · IBM Bob Hackathon",
    description:
      "A code-engineering system for migrations, refactors, security audits, and codebase Q&A. Each run executes in a sandbox and ends in a signed, verifiable audit report.",
    role: "System design · Full-stack implementation",
    details: ["Sandboxed execution", "Ed25519 audit reports", "MCP + web app"],
    image: "/screenshots/renatus.jpg",
    imageAlt: "Renatus code-engineering web app showing agent workflows and audit details",
    github: "https://github.com/thisisaman408/renatus",
    live: "https://renatus-iota.vercel.app",
    note: "Built for the IBM Bob Hackathon",
  },
  {
    name: "ECHO",
    category: "Autonomous meeting workflows · Milan AI Week",
    description:
      "A meeting workflow prototype that routes transcripts through specialist agents to draft follow-ups and create tasks. Each executed action links back to the transcript evidence behind it.",
    role: "Founder · Agent workflow and product build",
    details: ["Multi-agent orchestration", "CRM + task integrations", "Transcript-linked audit trail"],
    image: "/project-thumbnails/echo.jpg",
    imageAlt: "Illustrative ECHO meeting-workflow cover; a product interface capture is not available",
    github: "https://github.com/thisisaman408/echo",
    note: "Hackathon project · Repository includes project documentation",
  },
  {
    name: "Tower",
    category: "Multimodal competitive intelligence",
    description:
      "A pipeline that reads competitor-page screenshots with Gemini Vision, detects meaningful changes over time, and turns signals into briefs and alerts.",
    role: "Product engineering · AI pipeline",
    details: ["Gemini Vision", "Change detection", "Prompt-injection defense"],
    image: "/screenshots/tower.jpg",
    imageAlt: "Tower competitive intelligence demo with extraction and dashboard actions",
    github: "https://github.com/thisisaman408/tower-app",
    live: "https://tower-demo.vercel.app",
    note: "Demo URL listed in the repository README",
  },
];

export const clientProjects = [
  {
    name: "Shoe Hub 83",
    category: "Retail · E-commerce",
    description: "A storefront and product catalogue for an independent sneaker retailer.",
    image: "/screenshots/shoehub.jpg",
    imageAlt: "Shoe Hub 83 online sneaker storefront",
    github: "https://github.com/thisisaman408/am-shoe-hub-83",
    live: "https://am-shoe-hub-83.vercel.app",
  },
  {
    name: "Saloni Studio",
    category: "Beauty · Local business",
    description: "A polished service and booking presence for a Delhi salon.",
    image: "/screenshots/saloni.jpg",
    imageAlt: "Saloni Studio salon website and service presentation",
    github: "https://github.com/thisisaman408/Saloni-Saloon",
    live: "https://saloni-saloon.vercel.app",
  },
  {
    name: "Fit Saket Gym",
    category: "Fitness · Local business",
    description: "A location-focused web presence for a gym at Select Citywalk, Saket.",
    image: "/screenshots/fitnes-saket.jpg",
    imageAlt: "Fit Saket Gym website for its Select Citywalk location",
    github: "https://github.com/thisisaman408/fitness-fit-saket-select-city-walk-gym",
    live: "https://fitness-fit-saket-select-city-walk.vercel.app",
  },
];

export const secondaryProjects = [
  {
    name: "MiroFish MCP Server",
    description: "A Node.js stdio MCP server exposing MiroFish knowledge-graph and multi-agent simulation tools to compatible AI clients.",
    domain: "MCP · Agent tooling",
    imageTile: 1,
    github: "https://github.com/thisisaman408/mirofish-mcp-server",
  },
  {
    name: "C4GT Invoice Tool",
    description: "An invoice-management tool built with Ionic and Firebase for Code for GovTech.",
    domain: "Civic tech · Mobile",
    imageTile: 3,
    github: "https://github.com/thisisaman408/invoice-c4gt-firebase",
  },
];

export const skillGroups = [
  { title: "AI & agentic systems", items: "LLM workflows · Multi-agent orchestration · MCP · Multimodal AI" },
  { title: "Backend & data", items: "Node.js · Python · FastAPI · PostgreSQL · REST APIs · Data pipelines" },
  { title: "Product engineering", items: "TypeScript · React · Next.js · React Native · Tailwind CSS" },
  { title: "Foundations", items: "Python · JavaScript · SQL · Data structures · Algorithms" },
];
