"use client";
import { useState } from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import Flag from 'react-world-flags';
import { Tabs, TabsContent, TabsTrigger, TabsList } from '@radix-ui/react-tabs'; // Ensure correct import path
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";

const about = {
  title: 'About Me',
  description: "Adarsh Shukla is a final-year B.Tech student with expertise in full-stack development, specializing in the MERN stack. His key project, ‘Judgement in Beat,’ focuses on creating AI-driven legal judgment software aligned with Indian law, aiming to address the judge shortage in the country. He is applying for a backend developer position at Oliven Tech while working on several other significant projects, including a self-driven car and a YouTube clone.",
  info: [
    { fieldName: "Name", fieldValue: 'Adarsh Shukla' },
    { fieldName: "Phone", fieldValue: '(+91)-9170097576' },
    { fieldName: "Experience", fieldValue: '2+ Years Exp.' },
    { fieldName: "Skype", fieldValue: 'Adarsh2410' },
    {
      fieldName: "Nationality",
      fieldValue: (
        <span>
          Indian <Flag code="IN" style={{ width: '20px', marginLeft: '8px' }} /> {/* Indian Flag */}
        </span>
      )
    },
    { fieldName: "E-mail", fieldValue: 'Adarshbalmukundshukla@gmail.com' },
    { fieldName: "Freelancer", fieldValue: 'Available' },
    { fieldName: "Language", fieldValue: 'English, Hindi' },
  ]
};

const experience = {
  icons: '/assets/resume/badge.svg',
  title: 'My Experience',
  description: "Hi, I'm Adarsh Shukla, a final-year B.Tech student with a passion for full-stack development. I specialize in the MERN stack—MongoDB, Express.js, React, and Node.js—and I'm driven to leverage technology for meaningful impact. My current project, 'Judgement in Beat,' aims to address the shortage of judges in India with AI-driven legal judgment software.",
  items: [
    { company: "Krite Tech", position: "Frontend Developer Intern", description: "Jan 2024 - July 2024" },
    { company: "Ocean Tech", position: "Full Stack Developer Intern", description: "Aug 2023 - Nov 2023" },
    { company: "Internshala", position: "Full Stack Developer Trainee", description: "Jan 2023 - July 2023" },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "I’m currently a final-year B.Tech student at Veer Bahadur Singh Purvanchal University, Jaunpur, with my graduation set to complete in June 2025. My academic journey has been deeply focused on full-stack development, particularly with the MERN stack, which has equipped me with a solid foundation in both front-end and back-end technologies. Additionally, I’ve pursued further learning through various online courses, including a full-stack bootcamp from Udemy by Angela Yu and Internshala Training. These courses have significantly enhanced my skills and prepared me to tackle complex development challenges.",
  items: [
    { institution: "Veer Bahadur Singh Purvanchal University", course: "Bachelor of Technology", duration: "2021- Present", details: "Expected Graduation in June 2025" },
    { institution: "Udemy", course: "Bootcamp of Web Development By Angela Yu", duration: "June 2024- Aug 2024" },
    { institution: "Udemy", course: "Data Structure By Abdul Bari", duration: "Oct 2022 - Dec 2024" },
    { institution: "J D P Sch, Jangiganj", course: "Intermediate", duration: "2021- Present", details: "87%" },
  ]
};

const skills = {
  title: "My Skills",
  description: "I'm skilled in full-stack development using the MERN stack (MongoDB, Express.js, React, Node.js). I excel in backend and frontend technologies, including Django and AWS. I’m adept with TailwindCSS for styling and Cloudinary for file management. My projects showcase my ability to innovate and solve complex problems.",
  skillList: [
    { icons: <FaHtml5 />, name: "HTML5" },
    { icons: <FaCss3 />, name: "CSS3" },
    { icons: <FaJs />, name: "JavaScript" },
    { icons: <FaReact />, name: "React" },
    { icons: <FaNodeJs />, name: "Node.js" },
    { icons: <SiNextdotjs />, name: "Next.js" },
    { icons: <SiTailwindcss />, name: "Tailwind CSS" },
    { icons: <FaFigma />, name: "Figma" }
  ]
};

const Resume = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.6, ease: "easeIn" } }}
      className="min-h-screen flex flex-col p-6 bg-transparent text-black"
    >
      <button
        onClick={toggleNav}
        className="p-4 bg-teal-500 text-white rounded-lg mb-4 shadow-lg hover:bg-teal-600 transition-colors duration-300 ease-in-out"
      >
        {isNavOpen ? 'Close Navigation' : 'Open Navigation'}
      </button>

      {isNavOpen && (
        <Tabs defaultValue="about">
          <TabsList className="flex space-x-4 mb-4">
            <TabsTrigger
              value="about"
              className="p-4 border-b-2 border-teal-300 font-bold text-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-teal-700 hover:text-white shadow-lg"
            >
              About Me
            </TabsTrigger>
            <TabsTrigger
              value="experience"
              className="p-4 border-b-2 border-teal-300 font-bold text-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-teal-700 hover:text-white shadow-lg"
            >
              Experience
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="p-4 border-b-2 border-teal-300 font-bold text-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-teal-700 hover:text-white shadow-lg"
            >
              Education
            </TabsTrigger>
            <TabsTrigger
              value="skills"
              className="p-4 border-b-2 border-teal-300 font-bold text-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-teal-700 hover:text-white shadow-lg"
            >
              Skills
            </TabsTrigger>
          </TabsList>

          <ScrollArea className="h-[calc(100vh-80px)] p-4 overflow-hidden">
            <TabsContent value="about" className="mt-4 bg-white bg-opacity-80 text-black rounded-lg shadow-xl p-6 transition-all duration-300 ease-in-out">
              <h2 className="text-3xl font-extrabold mb-4">{about.title}</h2>
              <p className="mb-4 text-lg leading-relaxed">{about.description}</p>
              <ul className="list-disc pl-5">
                {Array.isArray(about.info) && about.info.map((item, index) => (
                  <li key={index} className="mb-2 text-lg hover:text-teal-600 transition-colors duration-300">
                    <strong>{item.fieldName}:</strong> {item.fieldValue}
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="experience" className="mt-4 bg-white bg-opacity-80 text-black rounded-lg shadow-xl p-6 transition-all duration-300 ease-in-out">
              <h2 className="text-3xl font-extrabold mb-4">{experience.title}</h2>
              <p className="mb-4 text-lg leading-relaxed">{experience.description}</p>
              <ul className="list-disc pl-5">
                {experience.items.map((item, index) => (
                  <li key={index} className="mb-2 text-lg hover:text-teal-600 transition-colors duration-300">
                    <strong>{item.company}</strong> - {item.position} ({item.description})
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="education" className="mt-4 bg-white bg-opacity-80 text-black rounded-lg shadow-xl p-6 transition-all duration-300 ease-in-out">
              <h2 className="text-3xl font-extrabold mb-4">{education.title}</h2>
              <p className="mb-4 text-lg leading-relaxed">{education.description}</p>
              <ul className="list-disc pl-5">
                {education.items.map((item, index) => (
                  <li key={index} className="mb-2 text-lg hover:text-teal-600 transition-colors duration-300">
                    <strong>{item.institution}</strong> - {item.course} ({item.duration}) {item.details && ` - ${item.details}`}
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="skills" className="mt-4 bg-white bg-opacity-80 text-black rounded-lg shadow-xl p-6 transition-all duration-300 ease-in-out">
              <h2 className="text-3xl font-extrabold mb-4">{skills.title}</h2>
              <p className="mb-4 text-lg leading-relaxed">{skills.description}</p>
              <div className="flex flex-wrap gap-4">
                {skills.skillList.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2 text-lg">
                    <span>{skill.icons}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          </ScrollArea>
        </Tabs>
      )}
    </motion.div>
  );
};

export default Resume;
