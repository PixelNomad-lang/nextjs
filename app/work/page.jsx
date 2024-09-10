"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

const projects = [
  {
    num: '01',
    category: 'AI Legal',
    title: 'Judgement in Beat',
    description: "AI-driven legal judgment software for Indian courts.",
    stack: ['AI', 'Machine Learning', 'Indian Law'],
    image: '/assets/work/thumb1.png',
    live: "https://adarshshuklavbspu.netlify.app/",
    github: "https://github.com/PixelNomad-lang/judgement-in-beat",
  },
  {
    num: '02',
    category: 'Video Platform',
    title: 'YouTube Clone',
    description: "A video streaming platform similar to YouTube.",
    stack: ['React', 'Node.js', 'MongoDB'],
    image: '/assets/work/thumb2.png',
    live: "https://adarshshuklavbspu.netlify.app/",
    github: "https://github.com/PixelNomad-lang/youtube-clone",
  },
  {
    num: '03',
    category: 'Communication',
    title: 'Chat App',
    description: "A real-time chat application for seamless communication.",
    stack: ['Socket.IO', 'React', 'Node.js'],
    image: '/assets/work/thumb3.png',
    live: "https://adarshshuklavbspu.netlify.app/",
    github: "https://github.com/PixelNomad-lang/chat-app",
  },
  {
    num: '04',
    category: 'Design',
    title: 'Creative Portfolio',
    description: "A portfolio website showcasing creative works.",
    stack: ['Next.js', 'TailwindCSS', 'Framer Motion'],
    image: '/assets/work/jobit.png',
    live: "https://adarshshuklavbspu.netlify.app/",
    github: "https://github.com/PixelNomad-lang/creative-portfolio",
  },
  {
    num: '05',
    category: 'eCommerce',
    title: 'E-commerce Store',
    description: "An online store built with modern eCommerce features.",
    stack: ['Vue.js', 'Tailwind CSS', 'Firebase'],
    image: '/assets/work/carrent.png',
    live: "https://adarshshuklavbspu.netlify.app/",
    github: "https://github.com/PixelNomad-lang/ecommerce-store",
  },
  {
    num: '06',
    category: 'Data Analysis',
    title: 'Analytics Dashboard',
    description: "A dashboard for visualizing and analyzing data.",
    stack: ['Python', 'Django', 'PostgreSQL'],
    image: '/assets/work/thumb1.png',
    live: "https://adarshshuklavbspu.netlify.app/",
    github: "https://github.com/PixelNomad-lang/analytics-dashboard",
  },
  {
    num: '07',
    category: 'Productivity',
    title: 'Task Management App',
    description: "An app to manage daily tasks and productivity.",
    stack: ['React', 'Node.js', 'Firebase'],
    image: '/assets/work/thumb2.png',
    live: "https://adarshshuklavbspu.netlify.app/",
    github: "https://github.com/PixelNomad-lang/task-management-app",
  },
  {
    num: '08',
    category: 'Social Network',
    title: 'Social Media Platform',
    description: "A platform to connect and share with others.",
    stack: ['React', 'Node.js', 'MongoDB'],
    image: '/assets/work/thumb3.png',
    live: "https://adarshshuklavbspu.netlify.app/",
    github: "https://github.com/PixelNomad-lang/social-media-platform",
  },
];

const Work = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.num} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg relative hover:bg-green-500 transition duration-300">
            <Image src={project.image} alt={project.title} width={500} height={300} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech, index) => (
                  <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">{tech}</span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.live && (
                  <Link href={project.live} target="_blank" className="text-blue-500 hover:text-white flex items-center">
                    <BsArrowUpRight className="mr-1" /> Live
                  </Link>
                )}
                {project.github && (
                  <Link href={project.github} target="_blank" className="text-gray-700 hover:text-white flex items-center">
                    <BsGithub className="mr-1" /> GitHub
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8 space-x-4">
        <Link href="https://adarshshuklavbspu.netlify.app/" target="_blank" className="bg-blue-500 text-white px-6 py-3 rounded-full flex items-center hover:bg-blue-600">
          <BsArrowUpRight className="mr-2" /> Portfolio
        </Link>
        <Link href="https://github.com/PixelNomad-lang" target="_blank" className="bg-gray-800 text-white px-6 py-3 rounded-full flex items-center hover:bg-gray-900">
          <BsGithub className="mr-2" /> GitHub
        </Link>
      </div>
    </div>
  );
};

export default Work;
