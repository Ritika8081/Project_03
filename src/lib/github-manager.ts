// GitHub API integration for editing portfolio data
export class GitHubPortfolioManager {
  private owner: string;
  private repo: string;
  private token: string;
  private branch: string;

  constructor(config: {
    owner: string;
    repo: string;
    token: string;
    branch?: string;
  }) {
    this.owner = config.owner;
    this.repo = config.repo;
    this.token = config.token;
    this.branch = config.branch || 'main';
  }

  async getPortfolioData() {
    try {
      const response = await fetch(
        `https://api.github.com/repos/${this.owner}/${this.repo}/contents/src/data/portfolio.ts?ref=${this.branch}`,
        {
          headers: {
            Authorization: `token ${this.token}`,
            Accept: 'application/vnd.github.v3+json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch portfolio data');
      }

      const data = await response.json();
      const content = atob(data.content);
      
      // Parse the TypeScript file to extract portfolio data
      return this.parsePortfolioFile(content);
    } catch (error) {
      console.error('Error fetching portfolio data:', error);
      throw error;
    }
  }

  async updatePortfolioData(portfolioData: any) {
    try {
      // Get current file to get SHA
      const currentFile = await fetch(
        `https://api.github.com/repos/${this.owner}/${this.repo}/contents/src/data/portfolio.ts?ref=${this.branch}`,
        {
          headers: {
            Authorization: `token ${this.token}`,
            Accept: 'application/vnd.github.v3+json',
          },
        }
      );

      const currentData = await currentFile.json();
      
      // Generate new file content
      const newContent = this.generatePortfolioFile(portfolioData);
      
      // Update the file
      const updateResponse = await fetch(
        `https://api.github.com/repos/${this.owner}/${this.repo}/contents/src/data/portfolio.ts`,
        {
          method: 'PUT',
          headers: {
            Authorization: `token ${this.token}`,
            Accept: 'application/vnd.github.v3+json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: 'Update portfolio data via admin interface',
            content: btoa(newContent),
            sha: currentData.sha,
            branch: this.branch,
          }),
        }
      );

      if (!updateResponse.ok) {
        throw new Error('Failed to update portfolio data');
      }

      return await updateResponse.json();
    } catch (error) {
      console.error('Error updating portfolio data:', error);
      throw error;
    }
  }

  private parsePortfolioFile(content: string): any {
    // Extract portfolio data from TypeScript file
    // This is a simplified version - in production, use a proper parser
    try {
      const dataMatch = content.match(/export const portfolioData:\s*Portfolio\s*=\s*({[\s\S]*?});/);
      if (dataMatch) {
        // Convert TypeScript object to JSON-compatible format
        const dataStr = dataMatch[1]
          .replace(/(\w+):/g, '"$1":')  // Quote property names
          .replace(/'/g, '"')           // Convert single quotes to double
          .replace(/,\s*}/g, '}')       // Remove trailing commas
          .replace(/,\s*]/g, ']');      // Remove trailing commas in arrays
        
        return JSON.parse(dataStr);
      }
    } catch (error) {
      console.error('Error parsing portfolio file:', error);
    }
    return null;
  }

  private generatePortfolioFile(portfolioData: any): string {
    return `import { Portfolio } from '@/types/portfolio';
import { placeholderImages } from '@/lib/placeholder-images';

export const portfolioData: Portfolio = ${JSON.stringify(portfolioData, null, 2)
  .replace(/"placeholderImages\.(\w+)"/g, 'placeholderImages.$1')};`;
  }
}

// Configuration for different hosting platforms
export const getGitHubConfig = () => {
  if (typeof window !== 'undefined') {
    return {
      owner: localStorage.getItem('github_owner') || '',
      repo: localStorage.getItem('github_repo') || '',
      token: localStorage.getItem('github_token') || '',
      branch: localStorage.getItem('github_branch') || 'main',
    };
  }
  return { owner: '', repo: '', token: '', branch: 'main' };
};