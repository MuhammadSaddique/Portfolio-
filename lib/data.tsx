import React from 'react';
import { Code, CodepenIcon, Database, FramerIcon, Globe, Layers, LucideRepeat as LucideReact, Palette, Server, Wallet } from 'lucide-react';

// Navigation Items
export const navigationItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

// Projects Data
export const projects = [
  {
    title: "FGRF Platform",
    description: "A comprehensive platform for resource management with payment integration",
    technologies: ["Next.js", "Firebase", "Stripe", "Tailwind CSS"],
    image: "/projects/fgrf.png",
    github: "https://github.com/MuhammadSaddique/fgrf",
    live: "https://www.fgrf.uk/",
  },
  {
    title: "AGUA Web3 Application",
    description: "Decentralized application with cryptocurrency payment system",
    technologies: ["Next.js", "MongoDB", "Web3.js", "Ethereum", "Solidity"],
    image: "/projects/agua.png",
    github: "https://github.com/MuhammadSaddique/Agua",
    live: "https://agua-new-web.vercel.app/",
  },
  {
    title: "Attendance Tracking System",
    description: "Role-based attendance management system for organizations",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    image: "/projects/attendance.png",
    github: "https://github.com/MuhammadSaddique/attendance_app",
    live: "https://attendance-app-lovat.vercel.app/",
  },
  {
    title: "E-commerce Dashboard",
    description: "Admin dashboard for managing products, orders and customers",
    technologies: ["React", "Redux", "Chart.js", "Material UI", "Firebase"],
    image: "/projects/ecommerce.png",
    github: "https://github.com/MuhammadSaddique/apple_website_clone",
    live: "https://ecommerce-dashboard.vercel.app",
  },
  {
    title: "Portfolio Website",
    description: "Interactive personal portfolio with 3D elements and animations",
    technologies: ["Next.js", "Three.js", "Framer Motion", "Tailwind CSS"],
    image: "/projects/portfolio.png",
    github: "https://github.com/msaddique/portfolio",
    live: "https://msaddique-portfolio.vercel.app",
  },
  {
    title: "Weather App",
    description: "Real-time weather forecast application with location tracking",
    technologies: ["React", "OpenWeather API", "Geolocation", "CSS Modules"],
    image: "/projects/weather.png",
    github: "https://github.com/MuhammadSaddique/weather_app/tree/main/weather-app",
    live: "https://weather-app-demo.vercel.app",
  },
];

// Skills Data
export const skillsData = [
  {
    name: "React.js",
    icon: <LucideReact className="h-7 w-7" />,
  },
  {
    name: "Next.js",
    icon: <Globe className="h-7 w-7" />,
  },
  {
    name: "JavaScript",
    icon: <Code className="h-7 w-7" />,
  },
  {
    name: "TypeScript",
    icon: <CodepenIcon className="h-7 w-7" />,
  },
  {
    name: "Tailwind CSS",
    icon: <Palette className="h-7 w-7" />,
  },
  {
    name: "Web3",
    icon: <Wallet className="h-7 w-7" />,
  },
  {
    name: "Redux",
    icon: <Layers className="h-7 w-7" />,
  },
  {
    name: "Firebase",
    icon: <Server className="h-7 w-7" />,
  },
  {
    name: "MongoDB",
    icon: <Database className="h-7 w-7" />,
  },
  {
    name: "Framer Motion",
    icon: <FramerIcon className="h-7 w-7" />,
  },
];

// Experience Data
export const experienceData = [
  {
    role: "Frontend Developer",
    company: "BawdicSoft LLC Pvt. Ltd.",
    location: "Karachi, Pakistan",
    period: "2nd September 2024 – Present",
    responsibilities: [
      "Developed responsive web applications using React, Next.js and Web3 technologies",
      "Implemented cryptocurrency payment solutions using Ethereum and other blockchains",
      "Collaborated with UX designers to create intuitive interfaces with Framer Motion animations",
      "Optimized application performance and reduced loading times by 40%"
    ],
  },
  {
    role: "React Developer",
    company: "360XpertSolutions",
    location: "Karachi, Pakistan",
    period: "6th February – 19th July 2024",
    responsibilities: [
      "Built and maintained multiple React applications from concept to deployment",
      "Created reusable component libraries improving development efficiency by 30%",
      "Implemented UI/UX designs with Tailwind CSS and styled-components",
      "Integrated RESTful APIs and managed state with Redux and Context API"
    ],
  },
  // {
  //   role: "Junior Frontend Developer",
  //   company: "TechNova",
  //   location: "Lahore, Pakistan",
  //   period: "2020 - 2021",
  //   responsibilities: [
  //     "Assisted in developing responsive websites using HTML, CSS, and JavaScript",
  //     "Worked with senior developers to improve website functionality and user experience",
  //     "Participated in code reviews and implemented feedback to improve code quality",
  //     "Learned and implemented best practices for web accessibility and SEO"
  //   ],
  // },
  // {
  //   role: "Web Development Intern",
  //   company: "CodeCraft Academy",
  //   location: "Lahore, Pakistan",
  //   period: "2019 - 2020",
  //   responsibilities: [
  //     "Learned fundamentals of web development including HTML, CSS, and JavaScript",
  //     "Built small projects to demonstrate understanding of core concepts",
  //     "Participated in team projects to develop collaboration skills",
  //     "Received mentorship from senior developers"
  //   ],
  // },
];