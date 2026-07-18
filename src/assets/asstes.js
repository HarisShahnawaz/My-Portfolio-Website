import { FaCode, FaDesktop, FaMicrochip, FaMobile, FaReact, FaRProject, FaSchool } from 'react-icons/fa6'
import profileImg from '../assets/profile.png'
import fitclubImg from '../assets/fitclub.png'
import harixaiImg from '../assets/harixai.png'
import travelImg from '../assets/travel.png'
import screnshotImg from '../assets/screenshot.png'
import hmastoreImg from '../assets/hmastore.png'
import universityImg from '../assets/university.png'
import teyzixImg from '../assets/home.png'
import communityImg from '../assets/community.png'
import studentImg from '../assets/student.png'
import vendorImg from '../assets/vendor.png'
import { FaProjectDiagram } from 'react-icons/fa'



export const assets = {
  profileImg,
  fitclubImg,
  harixaiImg,
  travelImg,
  screnshotImg,
  hmastoreImg,
  universityImg,
  teyzixImg
}


export const navMenu = ['Home', 'Work', 'Skills', 'About', 'Contact']



export const skillsData = [
  {
    icon: FaReact,
    title: 'Frontend',
    technologies: ['React', 'HTML', 'CSS', 'Tailwindcss', 'JavaScript', 'React Router DOM', 'React Icons']
  },
  {
    icon: FaMicrochip,
    title: 'Backend',
    technologies: ['Node.js', 'Express', 'MongoDB', 'MongoDB Atlas', 'JWT', 'REST API', 'Socket.io', 'Multer']
  },
  {
    icon: FaCode,
    title: 'Tools',
    technologies: ['Git', 'GitHub', 'Vite', 'VS Code', 'Postman']
  },
  {
    icon: FaDesktop,
    title: 'Deployment & Cloud',
    technologies: ['Vercel', 'Cloudflare', 'Render', 'Netlify']
  },
  {
    icon: FaMobile,
    title: 'Frameworks & Scale',
    technologies: ['Next.js', 'TypeScript', 'Agentic AI']
  },
]

export const projectData = [
  {
    title: 'HmaStore',
    description: 'A fully featured full-stack e-commerce platform with product listings, shopping cart, user authentication, order management, and an admin dashboard.',
    image: hmastoreImg,
    tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    link: 'https://hma-store-e-commerce-website.vercel.app/'
  },
  {
    title: 'Smart Community',
    description: 'A full-stack community marketplace where neighbors can buy & sell products, hire skilled professionals, and chat in real time — all within a trusted, review-driven community platform.',
    image: communityImg,
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    link: 'https://github.com/HarisShahnawaz/smart-community-marketplace'
  },
  {
    title: 'TeyzixMarket',
    description: 'A multi-vendor service marketplace with standalone seller dashboards, dynamic client-provider chat systems, and a custom built-in AI assistant guide.',
    image: teyzixImg,
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    link: 'https://teyzix-marketplace-theta.vercel.app/'
  },
  {
    title: 'Fit-Club',
    description: 'A responsive fitness & gym website with smooth animations and modern energetic UI.',
    image: fitclubImg,
    tech: ['React', 'Tailwindcss', 'Javascript', 'cloudfare'],
    link: 'https://fitclubwebsitebyhariscoding.pages.dev/'
  },
  {
    title: 'HarixAi',
    description: 'An advanced conversational Gemini AI clone featuring state-driven real-time AI response rendering, intelligent dynamic prompt suggestions, and a structured local chat history system for seamless contextual persistence.',
    image: harixaiImg,
    tech: ['geminiapi', 'CSS', 'Javascript', 'React'],
    link: 'https://gemini-clone-app-seven.vercel.app/'
  },
  {
    title: 'E-commerce',
    description: 'A fully responsive e-commerce storefront with 7 pages — products, cart, account & more.',
    image: screnshotImg,
    tech: ['React', 'Tailwindcss', 'Javascript'],
    link: 'https://harisshahnawaz.github.io/e-commerce-website-frontend/'
  },
  {
    title: 'TripZee',
    description: 'A responsive travel destination app with modern UI built with React..',
    image: travelImg,
    tech: ['React', 'Tailwindcss', 'Javascript', 'versel'],
    link: 'https://travel-website-byharry.harisshahnawaz97.workers.dev/'
  },
  {
    title: 'Vendor Management',
    description: 'A full-stack web application for managing vendors, creating quotation requests, and comparing vendor proposals through a centralized platform.',
    image: vendorImg,
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://github.com/HarisShahnawaz/vendor-management-system'
  },



  {
    title: 'Student Management',
    description: 'A responsive student system for registration, attendance tracking, marks/results calculation, and visual dashboard analytics.',
    image: studentImg,
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
    link: 'https://github.com/HarisShahnawaz/Student-Management-System'
  },

]
export const profileData = [
  {
    icon: FaCode,
    title: 'Tech Stack',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS']
  },
  {
    icon: FaSchool,
    title: 'Education',
    technologies: ['BS Information Technology', 'University of Okara', '2022 – 2026']
  },
  {
    icon: FaProjectDiagram,
    title: 'Projects',
    technologies: ['10+ Projects Built', 'Frontend & Full-Stack', 'Deployed & Live']
  },
]
