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
import collaborativeImg from '../assets/collaborative.png'
import agileflowImg from '../assets/agileflow.png'
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
      title: 'TeyzixMarket',
      description: 'A multi-vendor service marketplace with standalone seller dashboards, dynamic client-provider chat systems, and a custom built-in AI assistant guide.',
      image: teyzixImg,
      tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      link: 'https://teyzix-marketplace-theta.vercel.app/' 
    },
{
        title: 'HarixAi',
        description: 'An advanced conversational Gemini AI clone featuring state-driven real-time AI response rendering, intelligent dynamic prompt suggestions, and a structured local chat history system for seamless contextual persistence.',
        image: harixaiImg,
        tech: ['geminiapi', 'CSS', 'Javascript', 'React'],
          link: 'https://gemini-clone-app-seven.vercel.app/'
    },
    {
        title: 'Fit-Club',
        description: 'A responsive fitness & gym website with smooth animations and modern energetic UI.',
        image: fitclubImg ,
        tech: ['React', 'Tailwindcss', 'Javascript','cloudfare'],
        link: 'https://fitclubwebsitebyhariscoding.pages.dev/'
    },
    {
        title: 'TripZee',
        description: 'A responsive travel destination app with modern UI built with React..',
        image: travelImg,
        tech: ['React', 'Tailwindcss', 'Javascript','versel'],
          link: 'https://travel-website-byharry.harisshahnawaz97.workers.dev/'
    },
    {
        title: 'E-commerce',
        description: 'A fully responsive e-commerce storefront with 7 pages — products, cart, account & more.',
        image: screnshotImg,
        tech: ['React', 'Tailwindcss', 'Javascript'],
          link: 'https://harisshahnawaz.github.io/e-commerce-website-frontend/'
    },
    {
        title: 'CommunityMarket',
        description: 'A platform enabling local community members to buy, sell, or trade goods/services with dynamic client-provider maps and real-time chat.',
        image: communityImg,
        tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
        link: 'https://github.com/HarisShahnawaz/smart-community-marketplace'
    },
    {
        title: 'DevSync Editor',
        description: 'A real-time collaborative workspace for developers featuring a live-updating code editor, voice calls, and a built-in terminal simulator.',
        image: collaborativeImg,
        tech: ['React', 'Node.js', 'Socket.io', 'Monaco Editor', 'Express', 'WebRTC'],
        link: 'https://github.com/HarisShahnawaz/devsync-editor'
    },
    {
        title: 'AgileFlow Board',
        description: 'A productivity application featuring interactive drag-and-drop task boards, sprint planning analytics, and collaborative team chat.',
        image: agileflowImg,
        tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Dnd-kit'],
        link: 'https://github.com/HarisShahnawaz/agileflow-board'
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
