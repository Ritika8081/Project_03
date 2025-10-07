'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, ExternalLink, Github, Tag, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { AnimatedSection, FadeIn } from '@/components/ui/animated-section';
import { formatDate } from '@/lib/utils';
import { usePortfolioData } from '@/hooks/usePortfolioData';
import { useEffect, useState } from 'react';
import { Project } from '@/types/portfolio';

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { data: portfolioData, isLoading } = usePortfolioData();
  const [project, setProject] = useState<Project | null>(null);
  const [projectId, setProjectId] = useState<string>('');

  useEffect(() => {
    params.then(resolvedParams => {
      setProjectId(resolvedParams.id);
      const foundProject = portfolioData.projects.find(p => p.id === resolvedParams.id);
      setProject(foundProject || null);
    });
  }, [params, portfolioData.projects]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!project) {
    notFound();
  }

  const statusIcons = {
    completed: CheckCircle,
    'in-progress': Clock,
    planned: AlertCircle
  };

  const statusColors = {
    completed: 'text-green-600 bg-green-100',
    'in-progress': 'text-yellow-600 bg-yellow-100',
    planned: 'text-gray-600 bg-gray-100'
  };

  const categoryColors = {
    web: 'text-blue-600 bg-blue-100',
    mobile: 'text-green-600 bg-green-100',
    desktop: 'text-purple-600 bg-purple-100',
    ai: 'text-orange-600 bg-orange-100',
    other: 'text-gray-600 bg-gray-100'
  };

  const StatusIcon = statusIcons[project.status];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Link href="/projects" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              Back to Projects
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[project.category]}`}>
                    {project.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center ${statusColors[project.status]}`}>
                    <StatusIcon size={14} className="mr-1" />
                    {project.status.replace('-', ' ')}
                  </span>
                  {project.featured && (
                    <span className="px-3 py-1 rounded-full text-sm font-bold bg-yellow-400 text-yellow-900">
                      Featured
                    </span>
                  )}
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  {project.title}
                </h1>
                
                <p className="text-xl text-gray-600 mb-8">
                  {project.description}
                </p>

                <div className="flex items-center text-gray-600 mb-8">
                  <Calendar size={20} className="mr-3 text-blue-600" />
                  <span>
                    {project.completedDate 
                      ? `Completed ${formatDate(project.completedDate)}`
                      : `Started ${formatDate(project.createdDate)}`
                    }
                  </span>
                </div>

                <div className="flex flex-wrap gap-4">
                  {project.githubUrl && (
                    <Button
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      variant="outline"
                    >
                      <Github size={20} className="mr-2" />
                      View Code
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink size={20} className="mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>

              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <FadeIn>
                <Card>
                  <CardHeader>
                    <h2 className="text-2xl font-bold text-gray-900">Project Overview</h2>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {project.longDescription}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              {/* Image Gallery */}
              {project.images && project.images.length > 0 && (
                <FadeIn>
                  <Card>
                    <CardHeader>
                      <h2 className="text-2xl font-bold text-gray-900">Project Gallery</h2>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.images.map((image, index) => (
                          <div key={index} className="relative aspect-video">
                            <Image
                              src={image}
                              alt={`${project.title} screenshot ${index + 1}`}
                              fill
                              className="rounded-lg object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              )}

              {/* Challenges */}
              {project.challenges && project.challenges.length > 0 && (
                <FadeIn>
                  <Card>
                    <CardHeader>
                      <h2 className="text-2xl font-bold text-gray-900">Challenges Overcome</h2>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        {project.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start">
                            <AlertCircle className="text-red-600 mr-3 mt-0.5 flex-shrink-0" size={20} />
                            <span className="text-gray-600">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </FadeIn>
              )}

              {/* Learnings */}
              {project.learnings && project.learnings.length > 0 && (
                <FadeIn>
                  <Card>
                    <CardHeader>
                      <h2 className="text-2xl font-bold text-gray-900">Key Learnings</h2>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        {project.learnings.map((learning, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="text-green-600 mr-3 mt-0.5 flex-shrink-0" size={20} />
                            <span className="text-gray-600">{learning}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </FadeIn>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Technologies */}
              <FadeIn>
                <Card>
                  <CardHeader>
                    <h3 className="text-xl font-bold text-gray-900">Technologies Used</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                        >
                          <Tag size={12} className="mr-1" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>

              {/* Project Info */}
              <FadeIn>
                <Card>
                  <CardHeader>
                    <h3 className="text-xl font-bold text-gray-900">Project Info</h3>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <span className="block text-sm font-medium text-gray-500">Category</span>
                      <span className="text-gray-900 capitalize">{project.category}</span>
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-gray-500">Status</span>
                      <span className="text-gray-900 capitalize">{project.status.replace('-', ' ')}</span>
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-gray-500">Started</span>
                      <span className="text-gray-900">{formatDate(project.createdDate)}</span>
                    </div>
                    {project.completedDate && (
                      <div>
                        <span className="block text-sm font-medium text-gray-500">Completed</span>
                        <span className="text-gray-900">{formatDate(project.completedDate)}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </FadeIn>

              {/* Links */}
              <FadeIn>
                <Card>
                  <CardHeader>
                    <h3 className="text-xl font-bold text-gray-900">Project Links</h3>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github size={16} className="mr-2" />
                        Source Code
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        className="w-full justify-start"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}