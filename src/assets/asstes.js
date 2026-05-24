import { FaCode, FaDesktop, FaMicrochip, FaMobile, FaReact, FaRProject, FaSchool } from 'react-icons/fa6'
import profileImg from '../assets/profile.png'
import fitclubImg from '../assets/fitclub.png'
import harixaiImg from '../assets/harixai.png'
import travelImg from '../assets/travel.png'
import screnshotImg from '../assets/screenshot.png'
import hmastoreImg from '../assets/hmastore.png'
import universityImg from '../assets/university.png'
import { FaProjectDiagram } from 'react-icons/fa'



export const assets = {
    profileImg,
    fitclubImg,
    harixaiImg,
    travelImg,
    screnshotImg,
    hmastoreImg,
    universityImg,
}


export const navMenu = ['Home', 'Work', 'Skills', 'About', 'Contact']


export const skillsData = [
    {
        icon: FaReact,
        title: 'Frontend',
        technologies: ['React', 'HTML', 'CSS', 'Tailwindcss', 'JavaScript']
    },
    {
        icon: FaMicrochip,
        title: 'Backend',
        technologies: ['Node.js', 'Express', 'REST API']
    },
    {
        icon: FaCode,
        title: 'Tools',
        technologies: ['Git', 'GitHub', 'Vite', 'VS Code']
    },
    {
        icon: FaDesktop,
        title: 'Deployment',
        technologies: ['Vercel', 'Cloudflare', 'Netlify']
    },
    {
        icon: FaMobile,
        title: 'Currently Learning',
        technologies: ['TypeScript', 'Next.js', 'MongoDB']
    },
]



export const projectData = [
    {
  title: 'HmaStore',
  description: 'A fully featured full-stack e-commerce platform with product listings, shopping cart, user authentication, order management, and an admin dashboard.',
  image: assets.hmastoreImg,   // add your screenshot to assets
  tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT'],
  link: 'https://hma-store-e-commerce-website.vercel.app/'
},
 {
        title: 'HarixAi',
        description: 'A Gemini AI clone with real AI responses, prompt suggestions and chat history.',
        image: harixaiImg,
        tech: ['geminiapi', 'CSS', 'Javascript', 'React'],
          link: 'https://gemini-clone-app-seven.vercel.app/'
    },
    {
  title: 'University Website',
  description: 'A clean and responsive university website frontend with smooth navigation and modern UI.',
  image: assets.universityImg,
  tech: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
  link: 'https://harisshahnawaz.github.io/university-website-frontend/'
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
