'use client';

import { useState, useEffect } from 'react';
import { Download, Upload, Save, Settings } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { Project } from '@/types/portfolio';
import ProjectManager from '@/components/project-manager';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { AnimatedSection } from '@/components/ui/animated-section';

export default function AdminPage() {
  const [projects, setProjects] = useState<Project[]>(portfolioData.projects);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    // Check if there are changes compared to original data
    const hasChanges = JSON.stringify(projects) !== JSON.stringify(portfolioData.projects);
    setHasChanges(hasChanges);
  }, [projects]);

  const handleProjectsUpdate = (updatedProjects: Project[]) => {
    setProjects(updatedProjects);
  };

  const handleExportData = () => {
    const dataToExport = {
      ...portfolioData,
      projects: projects
    };
    
    const blob = new Blob([JSON.stringify(dataToExport, null, 2)], {
      type: 'application/json'
    });
    
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfolio-data.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedData = JSON.parse(e.target?.result as string);
          if (importedData.projects && Array.isArray(importedData.projects)) {
            setProjects(importedData.projects);
            alert('Data imported successfully!');
          } else {
            alert('Invalid data format. Please ensure the file contains a valid portfolio data structure.');
          }
        } catch (error) {
          alert('Error parsing JSON file. Please check the file format.');
        }
      };
      reader.readAsText(file);
    }
  };

  const handleSaveChanges = () => {
    // In a real application, you would save to a database or API
    // For now, we'll just show a message and update localStorage
    try {
      localStorage.setItem('portfolioProjects', JSON.stringify(projects));
      alert('Changes saved to local storage! Note: In a production environment, these would be saved to a database.');
      setHasChanges(false);
    } catch (error) {
      alert('Error saving changes. Please try again.');
    }
  };

  const generateInstructions = () => {
    const instructions = `
# How to Update Your Portfolio Data

## Method 1: Using the Admin Interface (Current Page)
1. Use the "Add Project" button to create new projects
2. Click the edit icon on existing projects to modify them
3. Click "Save Changes" to persist your updates

## Method 2: Direct File Editing
1. Navigate to src/data/portfolio.ts
2. Edit the projects array directly
3. Save the file - changes will appear immediately

## Method 3: JSON Import/Export
1. Click "Export Data" to download your current portfolio data
2. Edit the JSON file with your preferred editor
3. Click "Import Data" to upload the modified file

## Adding Images
1. Add your images to the public/images/ directory
2. Reference them in your project data as "/images/your-image.jpg"
3. Or use external URLs (like Unsplash) for quick setup

## Tips:
- Always backup your data before making major changes
- Use descriptive image names for better organization
- Test your changes in development before deploying
- Keep your project descriptions concise but informative
    `;

    const blob = new Blob([instructions], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfolio-update-instructions.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Portfolio Admin
            </h1>
            <p className="text-xl text-gray-600">
              Manage your portfolio projects and data
            </p>
          </div>

          {/* Admin Actions */}
          <Card className="mb-8">
            <CardHeader>
              <h2 className="text-2xl font-bold flex items-center">
                <Settings className="mr-2" />
                Admin Actions
              </h2>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button
                  onClick={handleSaveChanges}
                  disabled={!hasChanges}
                  className="w-full"
                >
                  <Save size={16} className="mr-2" />
                  Save Changes
                  {hasChanges && <span className="ml-1 text-xs">*</span>}
                </Button>

                <Button
                  onClick={handleExportData}
                  variant="outline"
                  className="w-full"
                >
                  <Download size={16} className="mr-2" />
                  Export Data
                </Button>

                <div className="relative">
                  <Button
                    onClick={() => document.getElementById('import-file')?.click()}
                    variant="outline"
                    className="w-full"
                  >
                    <Upload size={16} className="mr-2" />
                    Import Data
                  </Button>
                  <input
                    id="import-file"
                    type="file"
                    accept=".json"
                    onChange={handleImportData}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </div>

                <Button
                  onClick={generateInstructions}
                  variant="ghost"
                  className="w-full"
                >
                  📋 Instructions
                </Button>
              </div>

              {hasChanges && (
                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-yellow-800 text-sm">
                    ⚠️ You have unsaved changes. Click "Save Changes" to persist your modifications.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Project Manager */}
          <ProjectManager 
            projects={projects} 
            onUpdate={handleProjectsUpdate}
          />

          {/* Usage Statistics */}
          <Card>
            <CardHeader>
              <h3 className="text-xl font-bold">Portfolio Statistics</h3>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {projects.length}
                  </div>
                  <div className="text-sm text-gray-600">Total Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {projects.filter(p => p.status === 'completed').length}
                  </div>
                  <div className="text-sm text-gray-600">Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">
                    {projects.filter(p => p.status === 'in-progress').length}
                  </div>
                  <div className="text-sm text-gray-600">In Progress</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {projects.filter(p => p.featured).length}
                  </div>
                  <div className="text-sm text-gray-600">Featured</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  );
}