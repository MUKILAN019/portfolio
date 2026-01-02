// Portfolio Data Structure
// Populate this file with information from your resume

export interface PortfolioData {
  personal: PersonalInfo;
  about: AboutInfo;
  skills: SkillsInfo;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  achievements: AchievementItem[];
}

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  email: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  location?: string;
}

export interface AboutInfo {
  summary: string;
  highlights: string[];
}

export interface SkillsInfo {
  categories: SkillCategory[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  location: string;
  duration: string;
  description: string[];
  technologies?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  highlights?: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  location: string;
  gpa?: string;
  achievements?: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

// Mukilan's Portfolio Data
export const portfolioData: PortfolioData = {
  personal: {
    name: "Mukilan P",
    role: "Software Engineer",
    tagline:
      "Software Engineer focused on building scalable frontend systems with strong business logic and clean UI architecture",
    email: "mukilan.p@kalvium.community",
    phone: "+91-6382767198",
    linkedin: "https://www.linkedin.com/in/mukilan-p-/",
    github: "https://github.com/MUKILAN019",
    location: "India"
  },

  about: {
    summary:
      "Software Engineering student with industry experience building scalable web applications for real-world systems. I focus on translating complex requirements into clean, maintainable frontend architectures while ensuring correctness, performance, and usability. Comfortable working across the stack, collaborating with teams, and adapting to system constraints to deliver reliable solutions.",
    highlights: [
      "Highly dedicated professional committed to delivering quality work within tight deadlines",
      "Strong focus and attention to detail in every aspect of development",
      "Proactive problem-solver who takes complete ownership of assigned tasks",
      "Team player with excellent communication skills and collaborative mindset"
    ]
  },

  skills: {
    categories: [
      {
        title: "Frontend",
        skills: [
          "React.js",
          "Next.js",
          "JavaScript",
          "TypeScript",
          "HTML",
          "Tailwind CSS",
          "Ant Design",
          "SCSS"
        ]
      },
      {
        title: "Backend & Architecture",
        skills: [
          "Django",
          "Node.js",
          "Express.js",
          "JWT",
          "REST APIs",
          "Microservices Architecture"
        ]
      },
      {
        title: "Tools & Deployment",
        skills: [
          "Vercel",
          "Railway",
          "Devtron",
          "Postman",
          "Pusher",
          "Docker",
          "Git",
          "Render",
          "Netlify",
          "Cloudinary"
        ]
      },
      {
        title: "Databases",
        skills: ["MongoDB", "SQL", "PostgreSQL", "Redis", "Firebase", "NeonDB"]
      }
    ]
  },

  experience: [
    {
      id: "exp-1",
      company: "Tata 1mg",
      position: "Software Engineer Intern",
      location: "India",
      duration: "May 2025 – Present",
      description: [
        "Actively contributed to production-grade frontend systems used in logistics operations",
        "Owned and implemented complex application-level logic to support configurable workflows and dynamic user journeys",
        "Handled extensive conditional rendering and validation logic to ensure correctness across multiple usage scenarios",
        "Focused on writing clean, modular, and maintainable frontend code aligned with long-term scalability",
        "Collaborated closely with engineers across teams to integrate frontend features with backend services",
        "Worked within a distributed, service-oriented system while following professional engineering practices"
      ],
      technologies: [
        "React",
        "TypeScript",
        "Ant Design",
        "Axios",
        "REST APIs",
        "Git",
        "Jira",
        "Confluence",
        "Devtron",
        "Postman"

      ]
    },
    {
      id: "exp-2",
      company: "AICTE – IBM SkillsBuild",
      position: "Cybersecurity Virtual Intern",
      location: "Remote / India",
      duration: "Jan 2025 – Feb 2025",
      description: [
        "Completed a 6-week intensive virtual internship focused on cybersecurity fundamentals, network security, threat detection, data privacy, and ethical hacking",
        "Gained hands-on experience with practical exercises in securing digital assets and analyzing security threats",
        "Developed a strong understanding of cybersecurity concepts including risk assessment, incident response, and ethical hacking techniques",
        "Applied theoretical knowledge to simulated real-world scenarios, strengthening problem-solving and analytical skills"
      ],
      technologies: [
        "Network Security Tools",
        "Ethical Hacking Frameworks",
        "Cyber Threat Analysis",
        "Data Privacy Tools"
      ]
    },
    {
      id: "exp-3",
      company: "Coding Blocks, KARE University",
      position: "Development Lead & Hackathon Coordinator",
      location: "Srivalliputtur, India",
      duration: "Aug 2025 – Jan 2026",
      description: [
        "Successfully conducted the 'Genesis AI 24hrs Hackathon' on August 30–31, leading technical development and coordination efforts",
        "Built and maintained the hackathon dashboard with a focus on real-time communication and smooth user experience",
        "Handled edge-case failures and ensured uninterrupted functionality throughout the event",
        "Managed and coordinated with the chief guest on all technical and development aspects during the hackathon",
        "Demonstrated leadership and problem-solving skills while guiding the team and ensuring seamless execution of the event"
      ],
      technologies: [
        "React",
        "WebSockets / Real-Time Communication",
        "Tailwind CSS",
        "UI/UX Development & Dashboard Management"
      ]
    }
  ],

  projects: [
    {
      id: "proj-ecoreef",
      title: "EcoReef",
      description:
        "A sustainable coral reef monitoring platform focused on tracking reef health, visualizing environmental data, and promoting community involvement.",
      technologies: [
        "React",
        "Django",
        "Django REST Framework",
        "PostgreSQL",
        "Tailwind CSS",
        "OpenCV"
      ],
      github: "https://github.com/MUKILAN019/EcoReef",
      highlights: [
        "Designed a data-driven dashboard to visualize reef health metrics",
        "Built frontend interfaces for monitoring and community reporting",
        "Developed backend APIs using Django REST Framework",
        "Focused on sustainability and real-world environmental impact"
      ]
    },

    {
      id: "proj-alt-life-lab",
      title: "ALT LIFE LAB – Library Management System",
      description:
        "A full-stack library management system supporting user authentication, book borrowing workflows, and administrative controls.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Prisma",
        "JWT",
        "Tailwind CSS"
      ],
      github: "https://github.com/MUKILAN019/AltLifeLabs",
      highlights: [
        "Implemented role-based access control for admin and users",
        "Built secure authentication using JWT and password hashing",
        "Used Prisma ORM and raw SQL queries for analytics",
        "Designed responsive UI for multiple device sizes"
      ]
    },

    {
      id: "proj-vibe-connect",
      title: "Vibe Connect",
      description:
        "A full-stack web application enabling seamless interaction between users through a modern frontend and RESTful backend services.",
      technologies: [
        "React",
        "Python",
        "Django",
        "Django REST Framework",
        "NenoDB"
      ],
      github: "https://github.com/MUKILAN019/Vibe_Connect",
      link: "https://vibe-connect-nine.vercel.app/",
      highlights: [
        "Built responsive user interfaces using React",
        "Developed REST APIs with Django and DRF",
        "Integrated cloud-based database for scalable data storage",
        "Deployed frontend and backend independently"
      ]
    },

    {
      id: "proj-shopblend",
      title: "ShopBlend",
      description:
        "A modern e-commerce website for premium footwear, built to showcase frontend design, animations, and responsiveness.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Framer Motion"
      ],
      github: "https://github.com/MUKILAN019/shopBlend",
      link: "https://shop-blend-aihe.vercel.app/",
      highlights: [
        "Implemented dynamic product listings and UI interactions",
        "Built auto-rotating hero banners with smooth animations",
        "Used Framer Motion for transitions and effects",
        "Ensured full responsiveness across screen sizes"
      ]
    },

    {
      id: "proj-querulous",
      title: "Querulous",
      description:
        "A collaborative web platform designed to help users solve everyday problems through secure interaction and knowledge sharing.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Firebase",
        "Docker"
      ],
      github: "https://github.com/MUKILAN019",
      highlights: [
        "Designed scalable frontend architecture using React",
        "Integrated Google authentication with Firebase",
        "Handled user data validation and security concerns",
        "Focused on clean and maintainable UI components"
      ]
    },

    {
      id: "proj-surgical-excellence",
      title: "Surgical Excellence",
      description:
        "A healthcare-focused web application aimed at improving access to surgical information and services.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Tailwind CSS"
      ],
      highlights: [
        "Built responsive and accessible user interfaces",
        "Implemented JWT-based authentication",
        "Focused on usability, performance, and UI clarity"
      ]
    },

    {
      id: "proj-cryptic",
      title: "Cryptic",
      description:
        "A web application providing an interactive and user-friendly experience for steganography-related use cases.",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS"
      ],
      github: "https://github.com/MUKILAN019/cryptic",
      highlights: [
        "Designed a clean and intuitive UI",
        "Focused on fast and responsive performance",
        "Deployed using Vercel"
      ]
    },

    {
      id: "proj-snowbound-strife",
      title: "Snowbound Strife",
      description:
        "A holiday-themed strategy game that challenges decision-making and problem-solving skills across multiple rounds.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/MUKILAN019/SnowBound-strife-game",
      highlights: [
        "Implemented interactive game logic using vanilla JavaScript",
        "Designed progressive difficulty across rounds",
        "Focused on smooth user interaction and visuals"
      ]
    },

    {
      id: "proj-sea-crab-food",
      title: "Sea Crab Food",
      description:
        "A seafood dining web application featuring an interactive menu powered by external API data.",
      technologies: ["HTML", "CSS", "JavaScript"],
      highlights: [
        "Fetched and rendered data from external APIs",
        "Built interactive menu components",
        "Improved UI responsiveness and engagement"
      ]
    }
  ],


  education: [
    {
      id: "edu-1",
      institution: "Kalvium (in collaboration with KARE)",
      degree: "Bachelor of Technology",
      field: "Software Product Engineering",
      duration: "2023 – 2027",
      location: "Srivilliputhur, India",
      achievements: [
        "Industry-oriented software engineering curriculum",
        "Hands-on experience with real-world projects"
      ]
    },
    {
      id: "edu-2",
      institution: "Maharishi Vidya Mandir School",
      degree: "Higher Secondary Education (CBSE)",
      field: "Computer Science & Mathematics",
      duration: "2022 – 2023",
      location: "Madurai District, Tamil Nadu, India",
      achievements: [
        "Completed CBSE higher secondary education with Computer Science and Mathematics specialization",
        "Secured 75% in board examinations"
      ]
    }
  ],

  achievements: [
    {
      id: "ach-1",
      title: "Production Software Engineering Experience",
      issuer: "Industry Internship",
      date: "2025",
      description:
        "Contributed to production-grade web applications following professional engineering standards"
    },
    {
      id: "ach-2",
      title: "Honors Diploma in Full Stack Development",
      issuer: "CSC Computer Education",
      date: "2024"
    },
    {
      id: "ach-3",
      title: "Tritiya Sopan Certification  Scouts and Guides",
      issuer: "The Bharat Scouts and Guides",
      date: "2017",
      description:
        "Completed Tritiya Sopan training, developing leadership, teamwork, discipline, and survival skills through structured outdoor activities and community service."
    }
  ]
};