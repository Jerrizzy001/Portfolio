import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import PageMeta from '../components/PageMeta';
import EstimatorDemo from '../components/demos/EstimatorDemo';
import { featuredProjects } from '../content/projects';

const workHeadlines = {
  estimator: 'A clearer path from request to estimate.',
  'email-to-erp': 'Turn incoming requests into useful records.',
  'sop-converter': 'Give everyday procedures a consistent format.',
};

const selectedWork = featuredProjects.map((project, index) => ({
  ...project,
  number: String(index + 1).padStart(2, '0'),
  headline: workHeadlines[project.slug],
  href: `/work/${project.slug}`,
}));

export default function Home() {
  return (
    <div className="home-page">
      <PageMeta title="Jerry Nwachi | Custom Software, Websites & Automation" description="Custom software, websites, and connected workflows built around your business. Explore Jerry Nwachi’s work and discuss a practical first project." path="/" />
      <Navbar overlay />
      <main id="main-content">
        <section className="home-hero" aria-labelledby="hero-title">
          <div className="hero-heading page-container">
            <div className="hero-byline">
              <Image src="/jerry-nwachi.jpg" alt="Jerry Nwachi" width={56} height={56} className="hero-portrait" priority />
              <p>Independent developer <span aria-hidden="true">·</span> Toronto <span aria-hidden="true">·</span> Working remotely worldwide</p>
            </div>
            <h1 id="hero-title">Turn a complicated process<br className="hero-line-break" /> into a <span>useful tool.</span></h1>
            <p className="hero-description">Custom software, websites, and connected workflows—built around your business.</p>
            <div className="hero-actions">
              <Link href="/contact" className="button-primary">Discuss a project <FiArrowRight aria-hidden="true" /></Link>
              <Link href="/work" className="hero-work-link">Explore my work <FiArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
          <div className="hero-demo page-container"><EstimatorDemo /></div>
        </section>

        <section className="home-capabilities page-container" aria-labelledby="capabilities-title">
          <div className="capabilities-copy">
            <h2 id="capabilities-title">Tools that fit your team.<br /><span>Websites that serve your customers.</span></h2>
            <p>From internal tools and automations to customer-facing websites,<br className="desktop-break" /> I help small businesses work more smoothly with practical, reliable software.</p>
            <div className="capabilities-links">
              <Link href="/work/email-to-erp" className="text-link">Email-to-ERP workflow <FiArrowRight aria-hidden="true" /></Link>
              <Link href="/work/sop-converter" className="text-link">SOP document converter <FiArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
          <div className="capabilities-art"><Image src="/assets/workflow-illustration.webp" alt="" fill sizes="(max-width: 760px) 80vw, 360px" /></div>
        </section>

        <section className="home-work" aria-labelledby="selected-work-title">
          <div className="page-container">
            <div className="section-heading-row"><div><p className="section-label">Selected work</p><h2 id="selected-work-title">Built around real tasks.</h2></div><Link className="text-link" href="/work">See all work <FiArrowRight aria-hidden="true" /></Link></div>
            <div className="work-list">
              {selectedWork.map((project) => <article className="work-row" key={project.href}>
                <div className="work-row-category"><span className="work-number">{project.number}</span><span>{project.title}</span><span className="work-status">{project.status}</span></div>
                <div className="work-row-description"><h3><Link href={project.href}>{project.headline}</Link></h3><p>{project.summary}</p></div>
                <Link href={project.href} className="work-row-link" aria-label={`Read the ${project.title} case study`}><FiArrowRight aria-hidden="true" /></Link>
              </article>)}
            </div>
          </div>
        </section>

        <section className="home-process page-container" aria-labelledby="process-title">
          <div><p className="section-label">A practical first step</p><h2 id="process-title">Start with one thing<br />you want to improve.</h2><p className="process-intro">You bring the problem and the context. I work with you to find a useful, achievable first project.</p><Link href="/services" className="text-link">How we can work together <FiArrowRight aria-hidden="true" /></Link></div>
          <ol className="process-steps">
            <li><span>01</span><div><h3>Understand the work</h3><p>A short introductory conversation about your team, your tools, and where the process gets difficult.</p></div></li>
            <li><span>02</span><div><h3>Agree on a focused project</h3><p>A clear scope, price, and definition of what a successful result looks like before building begins.</p></div></li>
            <li><span>03</span><div><h3>Build, test, and hand over</h3><p>A solution you can review and use, with instructions and optional ongoing maintenance.</p></div></li>
          </ol>
        </section>

        <section className="home-contact" aria-labelledby="home-contact-title"><div className="page-container"><p className="section-label">Let’s work together</p><h2 id="home-contact-title">What could work better<br />in your business?</h2><p>Tell me about the task, the idea, or the tool you wish you had.</p><Link href="/contact" className="button-primary">Discuss a project <FiArrowRight aria-hidden="true" /></Link></div></section>
      </main>
    </div>
  );
}
