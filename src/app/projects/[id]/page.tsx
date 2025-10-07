import { notFound } from 'next/navigation';
import { portfolioData } from '@/data/portfolio';
import ProjectPageClient from './project-page-client';

// Generate static params for all projects
export async function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  return <ProjectPageClient params={params} />;
}