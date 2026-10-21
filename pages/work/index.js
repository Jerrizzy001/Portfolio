import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import SiteLayout from '../../components/SiteLayout';
import { featuredProjects, additionalProjects } from '../../content/projects';
import styles from '../../styles/content.module.css';

export default function Work() {
  return (
    <SiteLayout title="Work" description="Explore Jerry Nwachi’s internal tools, workflow automations, and web applications. Business problems, practical solutions, and fictional interactive demos." path="/work">
      <div className={`page-container ${styles.page}`}>
        <header className="page-intro"><p className="section-label">Selected work</p><h1>Useful software starts with a real problem.</h1><p>A closer look at the processes I have worked on, the tools I built, and how they fit into everyday work.</p></header>
        <div className={styles.workList}>
          {featuredProjects.map((project) => (
            <article className={styles.workCard} key={project.slug}>
              <div><span className={styles.badge}>{project.status}</span><h2><Link href={`/work/${project.slug}`}>{project.title}</Link></h2><p>{project.summary}</p><Link className="text-link" href={`/work/${project.slug}`}>Read the case study <FiArrowRight aria-hidden="true" /></Link></div>
              <div className={styles.cardSide}><strong>{project.category}</strong><p>{project.audience}</p><ul className={styles.tags} aria-label="Project focus">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div>
            </article>
          ))}
        </div>
        <section className={styles.section} aria-labelledby="additional-work"><p className={styles.label}>More of my work</p><h2 id="additional-work">Applications, assistants, and experiments.</h2><p>Supporting projects across web, mobile, and AI development.</p><div className={styles.additional}>{additionalProjects.map((project) => <article key={project.slug}><span className={styles.badge}>{project.status}</span><h3>{project.title}</h3><p>{project.summary}</p><p><strong>My role:</strong> {project.role}</p><ul className={styles.tags} aria-label={`${project.title} technologies`}>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></article>)}</div></section>
        <section className={styles.callout}><h2>Have a process worth improving?</h2><p>Tell me what your team does, which tools you use, and where the work gets difficult. We can identify a useful first project.</p><div className={styles.actions}><Link href="/contact" className="button-primary">Discuss a project <FiArrowRight aria-hidden="true" /></Link></div></section>
      </div>
    </SiteLayout>
  );
}
