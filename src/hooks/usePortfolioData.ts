'use client';

import { useState, useEffect } from 'react';
import { portfolioData } from '@/data/portfolio';
import { Portfolio } from '@/types/portfolio';

// Custom hook to manage portfolio data with localStorage persistence
export function usePortfolioData() {
  const [data, setData] = useState<Portfolio>(portfolioData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load data from localStorage on client side
    try {
      const savedProjects = localStorage.getItem('portfolioProjects');
      const savedPersonalInfo = localStorage.getItem('portfolioPersonalInfo');
      const savedContact = localStorage.getItem('portfolioContact');
      const savedSkills = localStorage.getItem('portfolioSkills');
      const savedExperience = localStorage.getItem('portfolioExperience');
      const savedEducation = localStorage.getItem('portfolioEducation');

      const updatedData = { ...portfolioData };

      if (savedProjects) {
        updatedData.projects = JSON.parse(savedProjects);
      }
      if (savedPersonalInfo) {
        updatedData.personalInfo = { ...updatedData.personalInfo, ...JSON.parse(savedPersonalInfo) };
      }
      if (savedContact) {
        updatedData.contact = { ...updatedData.contact, ...JSON.parse(savedContact) };
      }
      if (savedSkills) {
        updatedData.skills = JSON.parse(savedSkills);
      }
      if (savedExperience) {
        updatedData.experience = JSON.parse(savedExperience);
      }
      if (savedEducation) {
        updatedData.education = JSON.parse(savedEducation);
      }

      setData(updatedData);
    } catch (error) {
      console.error('Error loading portfolio data from localStorage:', error);
      setData(portfolioData);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateProjects = (projects: Portfolio['projects']) => {
    try {
      localStorage.setItem('portfolioProjects', JSON.stringify(projects));
      setData(prev => ({ ...prev, projects }));
    } catch (error) {
      console.error('Error saving projects to localStorage:', error);
    }
  };

  const updatePersonalInfo = (personalInfo: Portfolio['personalInfo']) => {
    try {
      localStorage.setItem('portfolioPersonalInfo', JSON.stringify(personalInfo));
      setData(prev => ({ ...prev, personalInfo }));
    } catch (error) {
      console.error('Error saving personal info to localStorage:', error);
    }
  };

  const updateContact = (contact: Portfolio['contact']) => {
    try {
      localStorage.setItem('portfolioContact', JSON.stringify(contact));
      setData(prev => ({ ...prev, contact }));
    } catch (error) {
      console.error('Error saving contact to localStorage:', error);
    }
  };

  const updateSkills = (skills: Portfolio['skills']) => {
    try {
      localStorage.setItem('portfolioSkills', JSON.stringify(skills));
      setData(prev => ({ ...prev, skills }));
    } catch (error) {
      console.error('Error saving skills to localStorage:', error);
    }
  };

  const updateExperience = (experience: Portfolio['experience']) => {
    try {
      localStorage.setItem('portfolioExperience', JSON.stringify(experience));
      setData(prev => ({ ...prev, experience }));
    } catch (error) {
      console.error('Error saving experience to localStorage:', error);
    }
  };

  const updateEducation = (education: Portfolio['education']) => {
    try {
      localStorage.setItem('portfolioEducation', JSON.stringify(education));
      setData(prev => ({ ...prev, education }));
    } catch (error) {
      console.error('Error saving education to localStorage:', error);
    }
  };

  const clearAllData = () => {
    try {
      localStorage.removeItem('portfolioProjects');
      localStorage.removeItem('portfolioPersonalInfo');
      localStorage.removeItem('portfolioContact');
      localStorage.removeItem('portfolioSkills');
      localStorage.removeItem('portfolioExperience');
      localStorage.removeItem('portfolioEducation');
      setData(portfolioData);
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  };

  const exportAllData = () => {
    return data;
  };

  const importAllData = (importedData: Portfolio) => {
    try {
      localStorage.setItem('portfolioProjects', JSON.stringify(importedData.projects));
      localStorage.setItem('portfolioPersonalInfo', JSON.stringify(importedData.personalInfo));
      localStorage.setItem('portfolioContact', JSON.stringify(importedData.contact));
      localStorage.setItem('portfolioSkills', JSON.stringify(importedData.skills));
      localStorage.setItem('portfolioExperience', JSON.stringify(importedData.experience));
      localStorage.setItem('portfolioEducation', JSON.stringify(importedData.education));
      setData(importedData);
    } catch (error) {
      console.error('Error importing data:', error);
      throw error;
    }
  };

  return {
    data,
    isLoading,
    updateProjects,
    updatePersonalInfo,
    updateContact,
    updateSkills,
    updateExperience,
    updateEducation,
    clearAllData,
    exportAllData,
    importAllData
  };
}