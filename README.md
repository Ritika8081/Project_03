# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and TailwindCSS.

## Features

- ✨ Modern and responsive design
- 🎨 Beautiful animations with Framer Motion
- 📱 Mobile-first approach
- 🚀 Fast performance with Next.js 15
- 💾 JSON-based data management
- 🎯 TypeScript for type safety
- 🎪 Advanced UI components
- 📧 Contact form with validation
- 🔍 Project filtering and search
- 📖 Detailed project pages
- 🎬 Smooth animations and transitions
- **🎛️ Built-in Admin Panel** - Edit your portfolio content directly from the website!
- **🔑 Multiple Access Methods** - Keyboard shortcuts, secret codes, or direct links
- **📤 Import/Export** - Backup and restore your data easily
- **🚀 First-Time Setup Wizard** - Guides new users through customization

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

4. **Customize your portfolio:**
   - First-time setup wizard will guide you
   - Or press `Ctrl+Shift+A` to access admin panel
   - Or visit `/admin` directly

## 🎛️ Admin Panel Features

### Easy Access Methods
1. **Keyboard Shortcut**: `Ctrl+Shift+A` (or `Cmd+Shift+A` on Mac)
2. **Secret Code**: Type "admin" anywhere on the site
3. **Direct URL**: Visit `/admin` in your browser
4. **Footer Link**: Click the ⚙️ gear icon in the footer

### What You Can Edit
- ✏️ Personal information and bio
- 📁 Projects with images and descriptions
- 💼 Skills with proficiency levels
- 🏢 Work experience and education
- 📧 Contact information and social links
- 🎨 Mark projects as featured
- 📊 Track project status (completed, in-progress, planned)

### Save Options
- 💾 Local storage (browser-based)
- 📤 Export/Import JSON files
- 💻 Direct file editing (for developers)

## Customization

### Method 1: Using Admin Panel (Recommended)
1. Visit your site and press `Ctrl+Shift+A`
2. Use the intuitive interface to edit everything
3. No coding required!

### Method 2: Direct File Editing

### Adding Your Information

1. **Update personal data** in `src/data/portfolio.ts`:
   - Personal information
   - Skills and proficiency levels
   - Work experience
   - Education
   - Contact information

2. **Add your projects** to the projects array in `src/data/portfolio.ts`

3. **Add project images** to `public/images/`:
   - Project screenshots
   - Your avatar/photo
   - Any other images you want to use

### Image Requirements

Add the following images to `public/images/`:

- `avatar.jpg` - Your profile photo
- `ecommerce-main.jpg` - E-commerce project main image
- `ecommerce-1.jpg`, `ecommerce-2.jpg`, `ecommerce-3.jpg` - Additional screenshots
- `taskmanager-main.jpg` - Task manager project main image
- `taskmanager-1.jpg`, `taskmanager-2.jpg`, `taskmanager-3.jpg` - Additional screenshots
- `dashboard-main.jpg` - Dashboard project main image
- `dashboard-1.jpg`, `dashboard-2.jpg`, `dashboard-3.jpg` - Additional screenshots
- `fitness-main.jpg` - Fitness app main image
- `fitness-1.jpg`, `fitness-2.jpg`, `fitness-3.jpg` - Additional screenshots

### Adding New Projects

To add a new project, add an object to the `projects` array in `src/data/portfolio.ts`:

```typescript
{
  id: "unique-id",
  title: "Project Title",
  description: "Short description",
  longDescription: "Detailed description...",
  technologies: ["Next.js", "TypeScript", "TailwindCSS"],
  image: "/images/project-main.jpg",
  images: ["/images/project-1.jpg", "/images/project-2.jpg"],
  githubUrl: "https://github.com/username/repo",
  liveUrl: "https://project-demo.com",
  category: "web", // web | mobile | desktop | ai | other
  featured: false,
  createdDate: "2024-01-01",
  completedDate: "2024-06-01",
  status: "completed", // completed | in-progress | planned
  challenges: ["Challenge 1", "Challenge 2"],
  learnings: ["Learning 1", "Learning 2"]
}
```

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Homepage
├── components/            # Reusable components
│   ├── ui/               # UI components
│   ├── navigation.tsx    # Main navigation
│   ├── footer.tsx        # Footer component
│   └── ...
├── data/                 # Data files
│   └── portfolio.ts      # Portfolio data
├── types/                # TypeScript types
│   └── portfolio.ts      # Type definitions
└── lib/                  # Utility functions
    └── utils.ts          # Helper functions
```

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **TailwindCSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **clsx & tailwind-merge** - Conditional classes

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify
- Railway
- Render

## License

This project is open source and available under the [MIT License](LICENSE).
