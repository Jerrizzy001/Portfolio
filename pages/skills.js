import { useId, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import useModalA11y from '../hooks/useModalA11y';
import PageMeta from '../components/PageMeta';

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
      'I build reusable interface components, stateful views, and accessible page flows with React.',
    Icon: SiReact,
  },
  {
    id: 'python',
    name: 'Python',
    description:
      'I use Python for automation scripts, data work, APIs, and machine learning workflows.',
    Icon: SiPython,
  },
  {
    id: 'node',
    name: 'Node.js',
    description:
      'I use Node.js for API routes, server logic, and JavaScript backends.',
    Icon: SiNodedotjs,
  },
  {
    id: 'next',
    name: 'Next.js',
    description:
      'I build routed React apps with static pages, API routes, image optimization, and Vercel deployment.',
    Icon: SiNextdotjs,
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    description:
      'I model document data for apps that need flexible records and fast iteration.',
    Icon: SiMongodb,
  },
  {
    id: 'django',
    name: 'Django',
    description:
      'I use Django for structured Python backends, REST APIs, and admin-style tools.',
    Icon: SiDjango,
  },
  {
    id: 'sql',
    name: 'SQL / MySQL',
    description:
      'I design relational schemas, write joins, and keep data constraints clear.',
    Icon: SiMysql,
  },
  {
    id: 'js',
    name: 'JavaScript',
    description:
      'I use JavaScript across browser and server code, with async patterns and API work.',
    Icon: SiJavascript,
  },
  {
    id: 'html',
    name: 'HTML / CSS',
    description:
      'I write semantic markup and responsive layouts that hold up across screen sizes.',
    Icon: SiHtml5,
  },
  {
    id: 'git',
    name: 'Git',
    description:
      'I use Git to track changes, review diffs, and keep project history clean.',
    Icon: SiGit,
  },

  // Software development and infrastructure tools.

  {
    id: 'github',
    name: 'GitHub',
    description:
      'I use GitHub for repositories, issues, pull requests, and deployment-linked workflows.',
    Icon: SiGithub,
  },
  {
    id: 'linux',
    name: 'Linux',
    description:
      'I use Linux terminals for development, scripts, environment setup, and deployment work.',
    Icon: SiLinux,
  },
  {
    id: 'aws',
    name: 'AWS',
    description:
      'I understand the basics of deploying and operating apps in AWS-backed environments.',
    Icon: FaAws,
  },
  {
    id: 'rest',
    name: 'REST APIs',
    description:
      'I design and test predictable endpoints with clear methods, payloads, and responses.',
    Icon: FaServer,
  },
  {
    id: 'postman',
    name: 'Postman',
    description:
      'I use Postman to test endpoints, inspect payloads, and document API behavior.',
    Icon: SiPostman,
  },
  {
    id: 'vscode',
    name: 'VS Code',
    description:
      'I use VS Code for editing, debugging, terminals, and AI-assisted development.',
    Icon: FaCode,
  },
];

const skillCategories = [
  {
    label: 'Frontend',
    color: 'text-blue-700 dark:text-blue-300',
    ids: ['react', 'next', 'js', 'html'],
  },
  {
    label: 'Backend',
    color: 'text-violet-700 dark:text-violet-300',
    ids: ['node', 'python', 'django', 'rest'],
  },
  {
    label: 'Databases',
    color: 'text-emerald-700 dark:text-emerald-300',
    ids: ['mongodb', 'sql'],
  },
  {
    label: 'Tools',
    color: 'text-orange-700 dark:text-orange-300',
    ids: ['git', 'github', 'aws', 'linux', 'postman', 'vscode'],
  },
];

export default function Skills() {
  const [active, setActive] = useState(null);
  const modalTitleId = useId();
  const modalDescriptionId = useId();
  const activeSkill = skillsData.find((skill) => skill.id === active);

  return (
    <div className="min-h-screen page-shell text-black dark:text-white transition-colors duration-300">
      <PageMeta
        title="Technical Skills"
        description="Jerry Nwachi's technical skills across React, Next.js, Python, Node.js, databases, APIs, GitHub, Linux, and developer tooling."
        path="/skills"
        image="/projects/portfolio.png"
      />
      <Navbar />

      <main id="main-content" className="safe-x pt-28 max-w-5xl mx-auto pb-16">
        {/* Header */}
        <div
          className="mb-12 text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">Technical skills</h1>
          <p className="mx-auto max-w-xl text-sm sm:text-base text-slate-700 dark:text-slate-300">
            Select a skill to see where it fits in my work.
          </p>
        </div>

        {/* Grouped skill categories */}
        <div className="space-y-10">
          {skillCategories.map(({ label, color, ids }) => {
            const skills = skillsData.filter(s => ids.includes(s.id));
            return (
              <div
                key={label}
              >
                <h2 className={`font-mono text-xs font-semibold uppercase tracking-widest mb-3 ${color}`}>
                  {label}
                </h2>
                <div className="grid grid-cols-1 min-[460px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
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
                      <Icon size={20} className="shrink-0" aria-hidden="true" focusable="false" />
                      <span>{name}</span>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal */}
        {activeSkill && (
          <SkillDialog
            skill={activeSkill}
            titleId={modalTitleId}
            descriptionId={modalDescriptionId}
            onClose={() => setActive(null)}
          />
        )}
      </main>
    </div>
  );
}

function SkillDialog({ skill, titleId, descriptionId, onClose }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useModalA11y({
    dialogRef,
    initialFocusRef: closeButtonRef,
    onClose,
  });

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center px-3 pb-3 pt-16 sm:items-center sm:px-4 sm:py-6">
      <button
        type="button"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Dismiss skill details"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        tabIndex={-1}
        className="surface-panel relative max-h-[calc(100svh-1.5rem)] w-full max-w-md overflow-y-auto rounded-t-lg border p-6 shadow-2xl sm:rounded-lg"
      >
        <div className="mb-3 flex items-center gap-3 pr-11">
          <skill.Icon size={26} className="shrink-0 text-indigo-500" aria-hidden="true" />
          <h2 id={titleId} className="text-xl font-bold">{skill.name}</h2>
        </div>
        <p id={descriptionId} className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
          {skill.description}
        </p>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute right-2 top-2 inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-100 hover:text-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:text-gray-300 dark:hover:bg-white/10"
          aria-label="Close skill details"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
