'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Star, Users, Coffee, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProjectCard from "@/components/project-card";
import SkillsSection from "@/components/skills-section";
import { AnimatedSection, FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { usePortfolioData } from "@/hooks/usePortfolioData";

export default function Home() {
  const { data: portfolioData, isLoading } = usePortfolioData();
  const { personalInfo, projects, skills, experience } = portfolioData;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);
  
  // Calculate stats
  const stats = [
    { icon: Award, label: "Years Experience", value: personalInfo.yearsOfExperience },
    { icon: Star, label: "Projects Completed", value: projects.filter(p => p.status === 'completed').length },
    { icon: Users, label: "Happy Clients", value: 25 },
    { icon: Coffee, label: "Cups of Coffee", value: "∞" }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <FadeIn direction="left">
              <div className="text-center lg:text-left">
                <motion.h1 
                  className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {personalInfo.name}
                  </span>
                </motion.h1>
                
                <motion.h2 
                  className="text-xl md:text-2xl text-gray-600 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {personalInfo.title}
                </motion.h2>
                
                <motion.p 
                  className="text-lg text-gray-600 mb-8 max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {personalInfo.bio}
                </motion.p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Link href="/projects">
                    <Button size="lg" className="w-full sm:w-auto">
                      View My Work
                      <ArrowRight size={20} className="ml-2" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <Download size={20} className="mr-2" />
                    Download Resume
                  </Button>
                </motion.div>
              </div>
            </FadeIn>

            {/* Avatar/Image */}
            <FadeIn direction="right" className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <div className="w-72 h-72 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center text-6xl font-bold text-gray-700">
                      {personalInfo.name.charAt(0)}
                    </div>
                  </div>
                </div>
                {/* Floating elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Coffee className="text-orange-500" size={24} />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3"
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Award className="text-yellow-500" size={24} />
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <StaggerItem key={stat.label}>
                  <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="text-white" size={24} />
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A selection of my best work showcasing different technologies and problem-solving approaches
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <StaggerItem key={project.id}>
                <ProjectCard project={project} index={index} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="text-center">
            <Link href="/projects">
              <Button size="lg">
                View All Projects
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection skills={skills} />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to work together?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Let's create something amazing together!
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Get In Touch
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
