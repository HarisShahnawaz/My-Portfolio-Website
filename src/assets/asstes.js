import { FaCode, FaDesktop, FaMicrochip, FaMobile, FaReact, FaRProject, FaSchool } from 'react-icons/fa6'
import profileImg from '../assets/profile.png'
import fitclubImg from '../assets/fitclub.png'
import harixaiImg from '../assets/harixai.png'
import travelImg from '../assets/travel.png'
import screnshotImg from '../assets/screenshot.png'


import { FaProjectDiagram } from 'react-icons/fa'



export const assets = {
    profileImg,
}


export const navMenu = ['Home', 'Work', 'Skills', 'About', 'Contact']


export const skillsData = [
    {
        icon: FaMicrochip,
        title: 'Backend',
        technologies: ['Python', 'Postgres', 'Redis', 'Next.js']
    },
    {
        icon: FaReact,
        title: 'Frontend',
        technologies: ['React', 'Html', 'Css', 'Tailwindcss']
    },
    {
        icon: FaDesktop,
        title: 'Web',
        technologies: ['Nginx', 'Linux', 'Wsgi', 'Server']
    },
    {
        icon: FaCode ,
        title: 'DevOps',
        technologies: ['Linux', 'Git', 'Github', 'Docker', 'Jenkins', 'CI/CD']
    },
    {
        icon: FaMobile,
        title: 'Mobile',
        technologies: ['React Native', 'Android', 'Flutter', 'Java']
    },
]



export const projectData = [
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
        title: 'HarixAi',
        description: 'A Gemini AI clone with real AI responses, prompt suggestions and chat history.',
        image: harixaiImg,
        tech: ['geminiapi', 'CSS', 'Javascript', 'React'],
          link: 'https://gemini-clone-app-seven.vercel.app/'
    }
]

export const profileData = [
    {
        icon: FaCode ,
        title: 'Language',
        technologies : ['Python', 'Django', 'Rest', 'React', 'Tailwindcss']
    },
    {
        icon: FaSchool ,
        title: 'Education',
        technologies : ['B.Tech in Compuer Science']
    },
    {
        icon: FaProjectDiagram ,
        title: 'Projects',
        technologies : ['Built more than 25+']
    },
]