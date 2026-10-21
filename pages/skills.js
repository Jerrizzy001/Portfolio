import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import SiteLayout from '../components/SiteLayout';
import styles from '../styles/content.module.css';

const groups = [
  { title: 'Interfaces and applications', tools: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML / CSS'], description: 'Reusable components, responsive layouts, and clear routes through an application. I connect interfaces to data and make loading, review, and error states part of the flow.', href: '/work', link: 'Explore application work' },
  { title: 'Backends and data', tools: ['Python', 'Node.js', 'FastAPI', 'Django', 'REST APIs', 'SQL / MySQL', 'PostgreSQL / Supabase', 'MongoDB'], description: 'API endpoints, structured records, database models, and document transformations that support the work a team needs to do.', href: '/work/sop-converter', link: 'See a document automation' },
  { title: 'AI and workflow design', tools: ['Prompt design', 'Structured extraction', 'Human review', 'AI-assisted development'], description: 'Turning unstructured inputs into usable information, with checks and human decisions where the output needs review.', href: '/work/estimator', link: 'See the estimating workflow' },
  { title: 'Integration and delivery', tools: ['Git', 'GitHub Actions', 'Postman', 'Linux', 'Automated testing'], description: 'Connecting services, inspecting API behaviour, reviewing changes, and running appropriate checks before release. I consider credentials, permissions, and recovery as part of delivery.', href: '/work/email-to-erp', link: 'See an integration example' },
];

export default function Skills() {
  return <SiteLayout title="Technical skills" description="Jerry Nwachi’s technical skills in web development, Python automation, APIs, data, and AI workflows, connected to practical project examples." path="/skills"><div className={`page-container ${styles.page}`}><header className="page-intro"><p className="section-label">Technical background</p><h1>The tools behind the work.</h1><p>I choose tools around the problem, the existing systems, and what will be practical to maintain.</p></header>{groups.map(group => <section className={styles.skillRow} key={group.title}><div><h2>{group.title}</h2><ul className={styles.tags} aria-label={`${group.title} skills`}>{group.tools.map(tool => <li key={tool}>{tool}</li>)}</ul></div><div><p>{group.description}</p><Link href={group.href} className="text-link">{group.link} <FiArrowRight aria-hidden="true" /></Link></div></section>)}<section className={styles.callout}><h2>See the context behind the skills.</h2><p>Explore my experience and education, or get in touch about a role, collaboration, or project.</p><div className={styles.actions}><Link href="/about#experience" className="button-primary">Experience and education <FiArrowRight aria-hidden="true" /></Link><Link href="/contact?interest=hiring" className="text-link">Discuss an opportunity</Link></div></section></div></SiteLayout>;
}
