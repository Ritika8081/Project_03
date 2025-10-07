import { Portfolio } from '@/types/portfolio';
import { placeholderImages } from '@/lib/placeholder-images';

export const portfolioData: Portfolio = {
  personalInfo: {
    name: "Your Name",
    title: "Full Stack Developer",
    bio: "I'm a passionate full-stack developer with expertise in modern web technologies. I love creating beautiful, functional, and user-friendly applications that solve real-world problems.",
    avatar: placeholderImages.avatar,
    resume: "/resume.pdf",
    tagline: "Building the web, one pixel at a time",
    yearsOfExperience: 5
  },
  contact: {
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    linkedin: "https://linkedin.com/in/yourname",
    github: "https://github.com/yourusername",
    website: "https://yourwebsite.com",
    twitter: "https://twitter.com/yourusername"
  },
  skills: [
    {
      id: "1",
      name: "TypeScript",
      category: "languages",
      proficiency: 5,
      yearsOfExperience: 4,
      icon: "typescript"
    },
    {
      id: "2",
      name: "React",
      category: "frontend",
      proficiency: 5,
      yearsOfExperience: 4,
      icon: "react"
    },
    {
      id: "3",
      name: "Next.js",
      category: "frameworks",
      proficiency: 5,
      yearsOfExperience: 3,
      icon: "nextjs"
    },
    {
      id: "4",
      name: "Node.js",
      category: "backend",
      proficiency: 4,
      yearsOfExperience: 4,
      icon: "nodejs"
    },
    {
      id: "5",
      name: "TailwindCSS",
      category: "frontend",
      proficiency: 5,
      yearsOfExperience: 3,
      icon: "tailwind"
    },
    {
      id: "6",
      name: "PostgreSQL",
      category: "database",
      proficiency: 4,
      yearsOfExperience: 3,
      icon: "postgresql"
    },
    {
      id: "7",
      name: "MongoDB",
      category: "database",
      proficiency: 4,
      yearsOfExperience: 2,
      icon: "mongodb"
    },
    {
      id: "8",
      name: "Python",
      category: "languages",
      proficiency: 4,
      yearsOfExperience: 5,
      icon: "python"
    },
    {
      id: "9",
      name: "Docker",
      category: "tools",
      proficiency: 3,
      yearsOfExperience: 2,
      icon: "docker"
    },
    {
      id: "10",
      name: "AWS",
      category: "tools",
      proficiency: 3,
      yearsOfExperience: 2,
      icon: "aws"
    }
  ],
  projects: [
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with real-time inventory management and payment processing.",
      longDescription: "Built a comprehensive e-commerce solution using Next.js and TypeScript. Features include user authentication, product catalog, shopping cart, order management, payment integration with Stripe, real-time inventory updates, admin dashboard, and analytics. The platform handles thousands of products and processes hundreds of orders daily.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "TailwindCSS", "Prisma", "Redis"],
      image: placeholderImages.ecommerceMain,
      images: [placeholderImages.ecommerce1, placeholderImages.ecommerce2, placeholderImages.ecommerce3],
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.vercel.app",
      category: "web",
      featured: true,
      createdDate: "2024-01-15",
      completedDate: "2024-06-30",
      status: "completed",
      challenges: [
        "Implementing real-time inventory synchronization",
        "Optimizing database queries for large product catalogs",
        "Ensuring PCI compliance for payment processing"
      ],
      learnings: [
        "Advanced PostgreSQL optimization techniques",
        "Real-time data synchronization with WebSockets",
        "Security best practices for financial applications"
      ]
    },
    {
      id: "2",
      title: "AI-Powered Task Manager",
      description: "Smart task management app with AI-driven prioritization and scheduling suggestions.",
      longDescription: "Developed an intelligent task management application that uses machine learning to analyze user behavior and suggest optimal task prioritization and scheduling. Features include natural language task entry, smart categorization, deadline prediction, productivity analytics, and integration with popular calendar applications.",
      technologies: ["React", "TypeScript", "Python", "FastAPI", "OpenAI API", "PostgreSQL", "Docker"],
      image: placeholderImages.taskmanagerMain,
      images: [placeholderImages.taskmanager1, placeholderImages.taskmanager2, placeholderImages.taskmanager3],
      githubUrl: "https://github.com/yourusername/ai-task-manager",
      liveUrl: "https://smart-tasks.vercel.app",
      category: "ai",
      featured: true,
      createdDate: "2024-03-01",
      completedDate: "2024-08-15",
      status: "completed",
      challenges: [
        "Training accurate priority prediction models",
        "Handling natural language processing for task entry",
        "Balancing AI suggestions with user preferences"
      ],
      learnings: [
        "Machine learning model deployment and scaling",
        "Natural language processing techniques",
        "User experience design for AI-powered features"
      ]
    },
    {
      id: "3",
      title: "Real-Time Analytics Dashboard",
      description: "Interactive dashboard for monitoring business metrics with real-time data visualization.",
      longDescription: "Created a comprehensive analytics dashboard for business intelligence with real-time data processing and interactive visualizations. The dashboard aggregates data from multiple sources, provides customizable widgets, supports real-time notifications, and includes advanced filtering and export capabilities.",
      technologies: ["Next.js", "D3.js", "WebSockets", "Node.js", "MongoDB", "Redis", "Chart.js"],
      image: placeholderImages.dashboardMain,
      images: [placeholderImages.dashboard1, placeholderImages.dashboard2, placeholderImages.dashboard3],
      githubUrl: "https://github.com/yourusername/analytics-dashboard",
      liveUrl: "https://analytics-demo.vercel.app",
      category: "web",
      featured: true,
      createdDate: "2024-05-01",
      status: "in-progress",
      challenges: [
        "Processing large datasets in real-time",
        "Creating responsive data visualizations",
        "Implementing efficient caching strategies"
      ],
      learnings: [
        "Advanced data visualization techniques",
        "Real-time data streaming architecture",
        "Performance optimization for data-heavy applications"
      ]
    },
    {
      id: "4",
      title: "Mobile Fitness Tracker",
      description: "React Native app for tracking workouts, nutrition, and health metrics.",
      longDescription: "Developed a comprehensive fitness tracking mobile application using React Native. Features include workout logging, nutrition tracking, progress visualization, social sharing, custom workout plans, integration with wearable devices, and offline functionality for uninterrupted usage.",
      technologies: ["React Native", "TypeScript", "Firebase", "Expo", "Redux", "SQLite"],
      image: placeholderImages.fitnessMain,
      images: [placeholderImages.fitness1, placeholderImages.fitness2, placeholderImages.fitness3],
      githubUrl: "https://github.com/yourusername/fitness-tracker",
      liveUrl: "https://fitness-app-demo.expo.dev",
      category: "mobile",
      featured: false,
      createdDate: "2024-07-01",
      status: "in-progress",
      challenges: [
        "Implementing offline-first architecture",
        "Integrating with various fitness APIs",
        "Optimizing battery usage for background tracking"
      ],
      learnings: [
        "Mobile app performance optimization",
        "Offline data synchronization patterns",
        "Health data privacy and security requirements"
      ]
    }
  ],
  experience: [
    {
      id: "1",
      company: "Tech Innovations Inc.",
      position: "Senior Full Stack Developer",
      startDate: "2022-01-15",
      description: "Lead developer for multiple high-impact web applications serving thousands of users daily.",
      achievements: [
        "Increased application performance by 40% through code optimization and caching strategies",
        "Led a team of 4 developers in migrating legacy PHP applications to modern React/Node.js stack",
        "Implemented CI/CD pipelines reducing deployment time from hours to minutes"
      ],
      technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS", "Docker"],
      type: "full-time"
    },
    {
      id: "2",
      company: "StartupXYZ",
      position: "Full Stack Developer",
      startDate: "2020-06-01",
      endDate: "2021-12-30",
      description: "Built the core product from ground up for a fintech startup focusing on digital payments.",
      achievements: [
        "Developed MVP that secured $2M in Series A funding",
        "Implemented secure payment processing handling $1M+ in transactions",
        "Created responsive admin dashboard used by 50+ business clients"
      ],
      technologies: ["Next.js", "Python", "FastAPI", "PostgreSQL", "Stripe", "Redis"],
      type: "full-time"
    },
    {
      id: "3",
      company: "Freelance",
      position: "Web Developer",
      startDate: "2019-01-01",
      endDate: "2020-05-30",
      description: "Provided web development services to small and medium businesses.",
      achievements: [
        "Delivered 15+ websites and web applications for various clients",
        "Maintained 100% client satisfaction rate with on-time project delivery",
        "Specialized in e-commerce solutions and business automation tools"
      ],
      technologies: ["React", "WordPress", "PHP", "MySQL", "JavaScript", "CSS"],
      type: "freelance"
    }
  ],
  education: [
    {
      id: "1",
      institution: "University of Technology",
      degree: "Bachelor of Science",
      field: "Computer Science",
      startDate: "2015-09-01",
      endDate: "2019-05-15",
      gpa: "3.8/4.0",
      achievements: [
        "Magna Cum Laude",
        "Dean's List for 6 semesters",
        "President of Computer Science Club"
      ],
      coursework: [
        "Data Structures and Algorithms",
        "Database Systems",
        "Web Development",
        "Software Engineering",
        "Computer Networks",
        "Artificial Intelligence"
      ]
    }
  ]
};