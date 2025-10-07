'use client';

import Image from 'next/image';
import { Calendar, MapPin, Award, BookOpen, Briefcase, Download } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AnimatedSection, FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/animated-section';
import { formatDate } from '@/lib/utils';
import { usePortfolioData } from '@/hooks/usePortfolioData';

export default function AboutPage() {
  const { data: portfolioData, isLoading } = usePortfolioData();
  const { personalInfo, experience, education, skills } = portfolioData;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  About Me
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  {personalInfo.bio}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin size={20} className="mr-3 text-blue-600" />
                    <span>Based in San Francisco, CA</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar size={20} className="mr-3 text-blue-600" />
                    <span>{personalInfo.yearsOfExperience}+ years of experience</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Button size="lg">
                    <Download size={20} className="mr-2" />
                    Download Resume
                  </Button>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" className="flex justify-center">
              <div className="relative">
                <div className="w-96 h-96 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-500 p-1">
                  <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                    <div className="w-80 h-80 rounded-2xl bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center text-8xl font-bold text-gray-700">
                      {personalInfo.name.charAt(0)}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My journey through different roles and companies, building expertise and delivering results
            </p>
          </AnimatedSection>

          <StaggerContainer className="space-y-8">
            {experience.map((job, index) => (
              <StaggerItem key={job.id}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-1">
                        <div className="flex items-center mb-2">
                          <Briefcase className="text-blue-600 mr-2" size={20} />
                          <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                            {job.type.replace('-', ' ')}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {job.position}
                        </h3>
                        <p className="text-gray-600 font-medium mb-2">
                          {job.company}
                        </p>
                        <p className="text-sm text-gray-500">
                          {formatDate(job.startDate)} - {job.endDate ? formatDate(job.endDate) : 'Present'}
                        </p>
                      </div>

                      <div className="lg:col-span-2">
                        <p className="text-gray-600 mb-6">
                          {job.description}
                        </p>

                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                          <ul className="space-y-2">
                            {job.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start">
                                <Award className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                                <span className="text-gray-600">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Education
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Academic foundation and continuous learning journey
            </p>
          </AnimatedSection>

          <StaggerContainer className="space-y-8">
            {education.map((edu, index) => (
              <StaggerItem key={edu.id}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-1">
                        <div className="flex items-center mb-2">
                          <BookOpen className="text-purple-600 mr-2" size={20} />
                          <span className="text-sm font-medium text-purple-600 uppercase tracking-wide">
                            Education
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-gray-600 font-medium mb-2">
                          {edu.field}
                        </p>
                        <p className="text-gray-600 mb-2">
                          {edu.institution}
                        </p>
                        <p className="text-sm text-gray-500 mb-2">
                          {formatDate(edu.startDate)} - {edu.endDate ? formatDate(edu.endDate) : 'Present'}
                        </p>
                        {edu.gpa && (
                          <p className="text-sm font-medium text-green-600">
                            GPA: {edu.gpa}
                          </p>
                        )}
                      </div>

                      <div className="lg:col-span-2">
                        {edu.achievements.length > 0 && (
                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-900 mb-3">Achievements:</h4>
                            <ul className="space-y-2">
                              {edu.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start">
                                  <Award className="text-yellow-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                                  <span className="text-gray-600">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Relevant Coursework:</h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.map((course) => (
                              <span
                                key={course}
                                className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical Skills Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive view of my technical expertise and proficiency levels
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.slice(0, 9).map((skill, index) => (
              <FadeIn key={skill.id} delay={index * 0.1}>
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">
                        {skill.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {skill.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {skill.yearsOfExperience} years experience
                    </p>
                    <div className="flex justify-center">
                      <div className="flex space-x-1">
                        {Array.from({ length: 5 }, (_, i) => (
                          <div
                            key={i}
                            className={`w-3 h-3 rounded-full ${
                              i < skill.proficiency
                                ? 'bg-blue-500'
                                : 'bg-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}