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
  SiLinux,
  SiGithub,
  SiPostman,
} from 'react-icons/si';

import { FaAws, FaCode, FaServer } from 'react-icons/fa';

const skillsData = [
  {
    id: 'react',
    name: 'React.js',
    description:
      'I architect component-based user interfaces with React — reusable, clean, and lightning fast. I follow best practices in state management, performance tuning, and accessibility.',
    Icon: SiReact,
  },
  {
    id: 'python',
    name: 'Python',
    description:
      'I use Python to build robust, scalable backend systems. From APIs and authentication to business logic, I write clean, maintainable code for real-world applications.',
    Icon: SiPython,
  },
  {
    id: 'node',
    name: 'Node.js',
    description:
      'I build efficient backend systems with Node.js, focusing on clean architecture, scalability, and API-driven development.',
    Icon: SiNodedotjs,
  },
  {
    id: 'next',
    name: 'Next.js',
    description:
      'I use Next.js to build full-stack applications with server-side rendering, API routes, and production-ready performance.',
    Icon: SiNextdotjs,
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    description:
      'MongoDB allows me to design flexible, scalable NoSQL data models for modern applications.',
    Icon: SiMongodb,
  },
  {
    id: 'django',
    name: 'Django',
    description:
      'Django is my go-to framework for fast, secure, and scalable Python backends, including REST APIs and admin dashboards.',
    Icon: SiDjango,
  },
  {
    id: 'sql',
    name: 'SQL / MySQL',
    description:
      'I design relational databases using SQL and MySQL, writing optimized queries and maintaining schema integrity.',
    Icon: SiMysql,
  },
  {
    id: 'js',
    name: 'JavaScript',
    description:
      'JavaScript is my daily driver across frontend and backend, using modern syntax, async patterns, and clean design.',
    Icon: SiJavascript,
  },
  {
    id: 'html',
    name: 'HTML / CSS',
    description:
      'I write semantic HTML and responsive CSS with modern best practices and utility-first styling.',
    Icon: SiHtml5,
  },
  {
    id: 'git',
    name: 'Git',
    description:
      'Git is central to my workflow for version control, collaboration, and clean project history.',
    Icon: SiGit,
  },

  // 🔥 Software Dev / Infra Skills (SAFE ICONS)

  {
    id: 'github',
    name: 'GitHub',
    description:
      'I manage repositories, pull requests, and collaboration workflows using GitHub in professional development environments.',
    Icon: SiGithub,
  },
  {
    id: 'linux',
    name: 'Linux',
    description:
      'I work comfortably in Linux environments for backend development, deployment, and terminal-based workflows.',
    Icon: SiLinux,
  },
  {
    id: 'aws',
    name: 'AWS',
    description:
      'I deploy and manage applications in cloud environments using AWS, understanding how production systems run beyond local development.',
    Icon: FaAws,
  },
  {
    id: 'rest',
    name: 'REST APIs',
    description:
      'I design and consume RESTful APIs with clean endpoints, proper HTTP methods, and predictable client–server communication.',
    Icon: FaServer,
  },
  {
    id: 'postman',
    name: 'Postman',
    description:
      'I use Postman to test, debug, and validate APIs to ensure reliability and correct data flow.',
    Icon: SiPostman,
  },
  {
    id: 'vscode',
    name: 'VS Code',
    description:
      'VS Code is my primary development environment. I leverage extensions, debugging tools, and integrated terminals to stay productive across multiple stacks.',
    Icon: FaCode,
  },
];

const skillCategories = [
  {
    label: 'Frontend',
    color: 'text-blue-500 dark:text-blue-400',
    ids: ['react', 'next', 'js', 'html'],
  },
  {
    label: 'Backend',
    color: 'text-violet-500 dark:text-violet-400',
    ids: ['node', 'python', 'django', 'rest'],
  },
  {
    label: 'Databases',
    color: 'text-emerald-500 dark:text-emerald-400',
    ids: ['mongodb', 'sql'],
  },
  {
    label: 'Tools',
    color: 'text-orange-500 dark:text-orange-400',
    ids: ['git', 'github', 'aws', 'linux', 'postman', 'vscode'],
  },
];

export default function Skills() {
  const [active, setActive] = useState(null);

  return (
    <div className="min-h-screen page-shell text-black dark:text-white transition-colors duration-300">
      <Navbar />

      <section className="pt-28 px-4 sm:px-6 max-w-5xl mx-auto pb-16">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">My Tech Stack</h1>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
            Click any skill to see how I use it.
          </p>
        </motion.div>

        {/* Grouped skill categories */}
        <div className="space-y-10">
          {skillCategories.map(({ label, color, ids }, catIndex) => {
            const skills = skillsData.filter(s => ids.includes(s.id));
            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: catIndex * 0.1, duration: 0.45 }}
              >
                <h2 className={`text-xs font-bold uppercase tracking-widest mb-3 ${color}`}>
                  {label}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {skills.map(({ id, name, Icon }) => (
                    <button
                      key={id}
                      onClick={() => setActive(id)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg border text-sm font-medium transition hover:shadow-md ${
                        active === id
                          ? 'bg-indigo-600 text-white border-indigo-600 dark:bg-indigo-500 dark:border-indigo-500'
                          : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:border-indigo-400 dark:hover:border-indigo-500'
                      }`}
                    >
                      <Icon size={20} className="shrink-0" />
                      <span>{name}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
              onClick={() => setActive(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 16, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 16, opacity: 0 }}
                transition={{ duration: 0.22 }}
                className="surface-panel p-6 rounded-lg max-w-md w-full shadow-2xl relative border"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const skill = skillsData.find(s => s.id === active);
                  return (
                    <>
                      <div className="flex items-center gap-3 mb-3">
                        {skill && <skill.Icon size={26} className="text-indigo-500 shrink-0" />}
                        <h2 className="text-xl font-bold">{skill?.name}</h2>
                      </div>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                        {skill?.description}
                      </p>
                    </>
                  );
                })()}
                <button
                  onClick={() => setActive(null)}
                  className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-red-400 hover:bg-gray-100 dark:hover:bg-white/10 transition"
                  aria-label="Close"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
