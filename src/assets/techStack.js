import { 
  SiReact, 
  SiHtml5, 
  SiJavascript, 
  SiTailwindcss, 
  SiReactrouter,
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiJsonwebtokens, 
  SiSocketdotio,
  SiGit, 
  SiGithub, 
  SiVite, 
  SiPostman, 
  SiVercel, 
  SiCloudflare, 
  SiRender, 
  SiNetlify,
  SiNextdotjs, 
  SiTypescript
} from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa6';

export const techStackData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: FaCss3Alt },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'React Router', icon: SiReactrouter }
    ]
  },
  {
    category: 'Backend & Databases',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'JWT Auth', icon: SiJsonwebtokens },
      { name: 'Socket.io', icon: SiSocketdotio }
    ]
  },
  {
    category: 'Development Tools',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Vite', icon: SiVite },
      { name: 'Postman', icon: SiPostman }
    ]
  },
  {
    category: 'Cloud & Deployment',
    skills: [
      { name: 'Vercel', icon: SiVercel },
      { name: 'Cloudflare', icon: SiCloudflare },
      { name: 'Render', icon: SiRender },
      { name: 'Netlify', icon: SiNetlify }
    ]
  },
  {
    category: 'Frameworks & Scale',
    skills: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript }
    ]
  }
];
