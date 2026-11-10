import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "../../../data/projectsData";
import ProjectDetailClient from "../../../components/ProjectDetailClient";

/* Static export: pre-render one page per project slug at build time.
 * This file is a Server Component on purpose — a "use client" page
 * cannot export generateStaticParams, and without it this [slug]
 * route is the one dynamic route that keeps a serverless function
 * in the deployment. That function cold-starts after idle, which
 * is what makes the site time out sometimes. With generateStaticParams
 * + output: 'export' in next.config.mjs, every page is a static
 * file on the CDN and there is no function at all. */
export function generateStaticParams() {
  return projectsData.map((p) => ({ slug: p.slug }));
}

/* Only the slugs above exist — anything else is a 404, never a
 * server render. (With a static export there is no server to
 * render it anyway; this just makes the intent explicit.) */
export const dynamicParams = false;

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
