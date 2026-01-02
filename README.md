# Professional Developer Portfolio

A modern, clean, and corporate-ready developer portfolio built with React, TypeScript, and Ant Design. Features a professional blue color theme with smooth scrolling navigation and responsive design.

## 🎨 Features

- **Modern Design**: Clean and professional blue-themed UI with cyan/teal accents
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Navigation**: Smooth scrolling between sections with active section highlighting
- **Ant Design Components**: Utilizes Ant Design's comprehensive component library
- **TypeScript**: Fully typed with TypeScript for better development experience
- **Section-based Layout**: 
  - Hero section with name, role, and contact information
  - About section with professional summary
  - Skills section with categorized technologies
  - Experience timeline with detailed job descriptions
  - Projects showcase with technology tags
  - Education details
  - Achievements and certifications
  - Contact form

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

## 📝 Populating Your Portfolio

All portfolio content is managed in a single data file: `src/data/portfolioData.ts`

### Step 1: Update Personal Information

Edit the `personal` object with your details:

```typescript
personal: {
  name: "Your Full Name",
  role: "Your Professional Title",
  tagline: "Your professional tagline or motto",
  email: "your.email@example.com",
  phone: "+1 (123) 456-7890",
  linkedin: "linkedin.com/in/yourprofile",
  github: "github.com/yourusername",
  location: "City, Country"
}
```

### Step 2: Update About Section

Modify the `about` object with your professional summary:

```typescript
about: {
  summary: "Your professional summary paragraph...",
  highlights: [
    "Key highlight 1",
    "Key highlight 2",
    // Add more highlights
  ]
}
```

### Step 3: Add Your Skills

Update the `skills` categories with your technical skills:

```typescript
skills: {
  categories: [
    {
      title: "Frontend Development",
      skills: ["React", "TypeScript", "..."]
    },
    // Add more categories
  ]
}
```

### Step 4: Add Work Experience

Replace the sample experience entries with your work history:

```typescript
experience: [
  {
    id: "unique-id",
    company: "Company Name",
    position: "Your Position",
    location: "City, Country",
    duration: "Start Date - End Date",
    description: [
      "Achievement or responsibility 1",
      "Achievement or responsibility 2",
    ],
    technologies: ["Tech1", "Tech2"]
  }
]
```

### Step 5: Add Projects

Showcase your projects:

```typescript
projects: [
  {
    id: "unique-id",
    title: "Project Name",
    description: "Project description...",
    technologies: ["Tech1", "Tech2"],
    link: "https://project-url.com",
    github: "https://github.com/username/repo",
    highlights: [
      "Key feature 1",
      "Key feature 2"
    ]
  }
]
```

### Step 6: Add Education

Update with your educational background:

```typescript
education: [
  {
    id: "unique-id",
    institution: "University Name",
    degree: "Bachelor of Science",
    field: "Computer Science",
    duration: "2016 - 2020",
    location: "City, Country",
    gpa: "3.8/4.0",
    achievements: ["Achievement 1", "Achievement 2"]
  }
]
```

### Step 7: Add Achievements & Certifications

List your certifications and achievements:

```typescript
achievements: [
  {
    id: "unique-id",
    title: "Certification Name",
    issuer: "Issuing Organization",
    date: "Year",
    description: "Optional description"
  }
]
```

## 🎨 Customizing Colors

The color theme is defined using CSS variables in `src/index.css`. To customize:

```css
:root {
  --primary-blue: #1e3c72;      /* Main blue color */
  --primary-blue-light: #2a5298; /* Lighter blue */
  --accent-cyan: #00bcd4;        /* Accent color */
  --accent-teal: #00acc1;        /* Hover states */
}
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Skills.tsx         # Skills section
│   ├── Experience.tsx     # Experience timeline
│   ├── Projects.tsx       # Projects showcase
│   ├── Education.tsx      # Education section
│   ├── Achievements.tsx   # Achievements section
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Footer component
├── data/
│   └── portfolioData.ts   # All portfolio content
├── styles/
│   ├── Header.css
│   ├── Hero.css
│   ├── About.css
│   ├── Skills.css
│   ├── Experience.css
│   ├── Projects.css
│   ├── Education.css
│   ├── Achievements.css
│   ├── Contact.css
│   └── Footer.css
├── App.tsx                # Main application component
├── App.css               # App-specific styles
├── index.css             # Global styles
└── main.tsx              # Application entry point
```

## 🛠️ Built With

- **React 19** - UI Library
- **TypeScript** - Type Safety
- **Ant Design 6** - UI Component Library
- **Vite** - Build Tool
- **CSS3** - Styling

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🚀 Building for Production

To create a production build:

```bash
npm run build
```

The build files will be in the `dist/` directory, ready for deployment.

## 📦 Deployment

You can deploy this portfolio to various platforms:

- **Vercel**: Connect your repository and deploy automatically
- **Netlify**: Drag and drop the `dist` folder or connect your repository
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload the `dist` folder to an S3 bucket

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

Replace this section with your information after customizing the portfolio.

---

**Note**: Remember to update all placeholder content in `src/data/portfolioData.ts` with your actual resume information before deploying!
