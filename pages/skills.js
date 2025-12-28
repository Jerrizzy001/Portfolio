import { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiReact,
  SiPython,
  SiMongodb,
  SiJavascript,
  SiDjango,
  SiNextdotjs,
  SiNodedotjs,
  SiGit,
  SiHtml5,
  SiMysql,
} from 'react-icons/si';

const skillsData = [
  {
    id: 'react',
    name: 'React.js',
    description: 'I architect component-based user interfaces with React — reusable, clean, and lightning fast. Whether building personal projects or production-grade apps, I follow best practices in state management (Redux/Context), performance tuning, and accessibility to deliver highly interactive experiences.',
    Icon: SiReact,
  },
  {
    id: 'python',
    name: 'Python',
    description: 'My focus is on using Python for robust, scalable web backends. I specialize in Django for building full-stack apps and optimizing client-server interaction. Whether it’s REST APIs, user auth, or server-side rendering, I write clean, maintainable code that powers seamless web experiences.',
    Icon: SiPython,
  },
  {
    id: 'node',
    name: 'Node.js',
    description: 'Node.js lets me build efficient backend systems using the language I love — JavaScript. I create fast, real-time, API-driven applications with Express.js and other frameworks, optimizing everything from data flow to auth and middleware. I keep things lean, modular, and scalable.',
    Icon: SiNodedotjs,
  },
  {
    id: 'next',
    name: 'Next.js',
    description: 'I use Next.js to build powerful, full-stack web applications with server-side rendering, API routing, and seamless deployment. From landing pages to dashboards, I’ve shipped projects that are fast, SEO-friendly, and production-ready — all built with the performance-first mindset that Next.js encourages.',
    Icon: SiNextdotjs,
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    description: 'As a modern NoSQL solution, MongoDB lets me build flexible, schema-less data structures. I use it to design backends that scale with ease, whether I’m working on user profiles, product data, or real-time updates. Seamless integration with Node and Mongoose makes it my go-to for JS-first stacks.',
    Icon: SiMongodb,
  },
  {
    id: 'django',
    name: 'Django',
    description: 'Django is my tool of choice for fast, secure, and scalable web backends. I build RESTful APIs, admin dashboards, and full-stack apps using its powerful ORM and modular structure — all with Python’s elegance and simplicity. It lets me focus on delivering value, fast.',
    Icon: SiDjango,
  },
  {
    id: 'sql',
    name: 'SQL/MySQL',
    description: 'I use SQL and MySQL for structured, relational data — the backbone of many of my backend projects. I write optimized queries, design normalized schemas, and handle migrations and joins like second nature. Whether paired with Django or Node, I make data work beautifully.',
    Icon: SiMysql,
  },
  {
    id: 'js',
    name: 'JavaScript',
    description: "A language I live in daily — I build scalable applications for desktop, mobile, tablet, and server. My deep grasp of JavaScript, combined with a strong eye for UX and design, means I take apps from scratch to full deployment. I architect solutions in React, React Native, and modern JS frameworks, and bring expert-level consulting to any front-end challenge.",
    Icon: SiJavascript,
  },
  {
    id: 'html',
    name: 'HTML/CSS',
    description: 'The foundation of every interface. I write semantic HTML and maintain scalable, responsive layouts with modern CSS, Tailwind, and utility-first approaches. From layout to animation, I care about every pixel and how it feels on every device.',
    Icon: SiHtml5,
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    description: 'Git is how I collaborate, version, and organize — whether solo or with a team. I write clean commit messages, structure feature branches properly, and push to GitHub with confidence. I’ve worked on projects from MVP to production using Agile workflows.',
    Icon: SiGit,
  },
];

export default function Skills() {
  const [active, setActive] = useState(null);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 relative overflow-hidden">
      <Navbar />

      <section className="pt-28 px-6 max-w-6xl mx-auto text-center">
        {/* Planet */}
        <motion.div
          className="w-36 h-36 mx-auto mb-8 rounded-full border-4 border-gray-300 dark:border-gray-600 bg-gradient-to-br from-purple-500 via-indigo-600 to-black shadow-lg animate-spin-slow"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />

        <h1 className="text-3xl md:text-4xl font-bold mb-10">My Skills</h1>

        {/* Skill Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 mb-12 px-2">
          {skillsData.map(({ id, name, Icon }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`flex flex-col items-center justify-center px-3 py-4 rounded-md border text-sm hover:shadow-md transition ${
                active === id
                  ? 'bg-indigo-600 text-white dark:bg-indigo-400'
                  : 'bg-gray-100 text-black dark:bg-gray-800 dark:text-white'
              }`}
            >
              <Icon size={24} className="mb-1" />
              {name}
            </button>
          ))}
        </div>

        {/* Animated Description Card */}
        <AnimatePresence>
          {active && (
            <motion.div
              key="card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.4 }}
              className="absolute top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm flex items-center justify-center px-4 z-50"
            >
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg max-w-lg w-full text-left shadow-xl relative">
                <h2 className="text-xl font-bold mb-3 text-black dark:text-white">
                  {skillsData.find(s => s.id === active)?.name}
                </h2>
                <p className="text-gray-800 dark:text-gray-300 text-sm mb-6">
                  {skillsData.find(s => s.id === active)?.description}
                </p>
                <button
                  onClick={() => setActive(null)}
                  className="absolute top-2 right-2 text-gray-400 hover:text-red-400 text-sm"
                >
                  Close ✕
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
