import { FaCode, FaDesktop, FaMicrochip, FaMobile, FaReact, FaRProject, FaSchool } from 'react-icons/fa6'
import profileImg from '../assets/profile.avif'
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
        title: 'Health Care',
        description: 'Immersive shopping experience with python tailwind and react',
        image: 'https://plus.unsplash.com/premium_photo-1661293879952-c5c093282801?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D',
        tech: ['React', 'Tailwindcss', 'Python']
    },
    {
        title: 'FurniCraft',
        description: 'A modern furniture e-commerce platform offering customizable home and office furniture .',
        image: 'https://plus.unsplash.com/premium_photo-1684769161054-2fa9a998dcb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2plY3R8ZW58MHx8MHx8fDA%3D',
        tech: ['React', 'Tailwindcss', 'Python']
    },
    {
        title: 'Collaboration',
        description: 'A real-time collaborative platform for artists and designers to co-create digital art',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2plY3R8ZW58MHx8MHx8fDA%3D',
        tech: ['React', 'Tailwindcss', 'Python']
    },
    {
        title: 'Abmbivista',
        description: 'A mood-based interior design suggestion tool that uses AI',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2plY3R8ZW58MHx8MHx8fDA%3D',
        tech: ['Django', 'Tailwindcss', 'Python', 'Rest']
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