import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { FiArrowRight, FiArrowLeft, FiCopy, FiMail, FiGlobe } from 'react-icons/fi';
import SiteLayout from '../components/SiteLayout';
import { contactEmail, createEnquiryDraft } from '../lib/contact.mjs';
import styles from '../styles/contact.module.css';
const empty = { name:'', email:'', company:'', tools:'', message:'' };
const fields = [
  { name:'name', label:'Your name', autoComplete:'name', max:80 },
  { name:'email', label:'Reply email', type:'email', autoComplete:'email', max:254 },
  { name:'company', label:'Company or website', optional:true, autoComplete:'organization', max:100 },
  { name:'tools', label:'Tools you use now', optional:true, max:160, placeholder:'For example, Excel and an order system' },
];
export default function Contact() {
  const router = useRouter();
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [draft, setDraft] = useState(null);
  const [copyStatus, setCopyStatus] = useState('');
  const formRef = useRef(null), draftRef = useRef(null);
  function update(e) {
    const {name,value}=e.target;
    setValues(current=>({...current,[name]:value}));
    setErrors(current=>({...current,[name]:undefined}));
  }
  function prepare(e) {
    e.preventDefault();
    const result=createEnquiryDraft(values,typeof router.query.project==='string'?router.query.project:'');
    setErrors(result.errors);
    if (!result.valid) { formRef.current?.elements.namedItem(Object.keys(result.errors)[0])?.focus(); return; }
    setDraft(result.draft); setCopyStatus('');
    requestAnimationFrame(()=>draftRef.current?.focus());
  }
  async function copyMessage() {
    try { await navigator.clipboard.writeText(draft.subject+'\n\n'+draft.body); setCopyStatus('Enquiry copied. You can paste it into your email.'); }
    catch { setCopyStatus('Copy is unavailable here. Select and copy the message below.'); }
  }
  return <SiteLayout title="Discuss a project" description="Tell Jerry Nwachi what you want to improve. Start a conversation about custom software, websites, integrations or automation." path="/contact">
    <div className="page-container">
      <header className="page-intro"><p className="section-label">LET’S START WITH THE WORK</p><h1>What are you trying to improve?</h1><p>Tell me about the task, the tools you use, and where things get difficult. We’ll start with a conversation and work out a useful first project.</p></header>
      <div className={styles.layout}>
        <section className={styles.formSection} aria-label="Project enquiry">
          {!draft ? <form ref={formRef} onSubmit={prepare} noValidate>
            <div className={styles.fields}>
              {fields.map(field=><div key={field.name}>
                <label className={styles.label} htmlFor={'contact-'+field.name}>{field.label} {field.optional&&<span className={styles.optional}>(optional)</span>}</label>
                <input id={'contact-'+field.name} name={field.name} type={field.type||'text'} autoComplete={field.autoComplete} maxLength={field.max} value={values[field.name]} onChange={update} className={styles.input} placeholder={field.placeholder} required={!field.optional} aria-invalid={Boolean(errors[field.name])} aria-describedby={errors[field.name]?field.name+'-error':undefined}/>
                {errors[field.name]&&<p id={field.name+'-error'} className={styles.error}>{errors[field.name]}</p>}
              </div>)}
              <div className={styles.wide}><label className={styles.label} htmlFor="contact-message">What would you like to improve?</label>
                <p className={styles.hint} id="message-help">A few sentences are enough. Keep customer records, passwords and other confidential details out of this first message.</p>
                <textarea id="contact-message" name="message" rows={7} maxLength={2000} value={values.message} onChange={update} className={styles.input} required aria-invalid={Boolean(errors.message)} aria-describedby={'message-help'+(errors.message?' message-error':'')} placeholder="We spend time each week… I’d like a simpler way to…"/>
                {errors.message&&<p id="message-error" className={styles.error}>{errors.message}</p>}
              </div>
            </div>
            <p className={styles.hint}>This prepares an email to Jerry. You’ll review it and send it from Gmail or your email app.</p>
            <button type="submit" className="button-primary">Prepare enquiry <FiArrowRight aria-hidden="true"/></button>
          </form> : <div>
            <p className="section-label">YOUR EMAIL DRAFT</p><h2 ref={draftRef} tabIndex={-1} className={styles.draftHeading}>Ready for you to review.</h2>
            <p>No message has been sent yet. {draft.copyFirst?'Copy the message below, then open your email and paste it before sending.':'Open the draft in Gmail or your email app, then send it there.'}</p>
            <div className={styles.draftMeta}><span>To</span><strong>{contactEmail}</strong><span>Subject</span><strong>{draft.subject}</strong></div>
            <label className={styles.label} htmlFor="draft-message">Message</label><textarea id="draft-message" readOnly value={draft.body} rows={12} className={styles.input}/>
            <div className={styles.actions}><a className="button-primary" href={draft.gmailUrl} target="_blank" rel="noopener noreferrer">{draft.copyFirst?'Open Gmail':'Open Gmail draft'} <FiArrowRight aria-hidden="true"/></a><a className="button-secondary" href={draft.mailtoUrl}>Use my email app <FiMail aria-hidden="true"/></a></div>
            <div className={styles.actions}><button type="button" className={styles.quietButton} onClick={()=>{setDraft(null);setCopyStatus('');requestAnimationFrame(()=>formRef.current?.elements.namedItem('name')?.focus());}}><FiArrowLeft aria-hidden="true"/> Edit details</button><button type="button" className={styles.quietButton} onClick={copyMessage}><FiCopy aria-hidden="true"/> Copy message</button></div>
            <p role="status" className={styles.hint}>{copyStatus}</p>
          </div>}
        </section>
        <aside className={styles.aside}><FiMail size={25} aria-hidden="true"/><h2>Prefer to email directly?</h2><a className={styles.emailLink} href={'mailto:'+contactEmail}>{contactEmail}</a>
          <div className={styles.asideBlock}><h3>What happens next</h3><p>We’ll discuss what you need, look at what’s practical, and agree on the scope and price before a build begins.</p><p>Maintenance and small improvements can be arranged after handover.</p></div>
          <div className={styles.asideBlock}><FiGlobe aria-hidden="true"/><h3>Working remotely worldwide</h3><p>Based in Toronto. Calls are arranged by email so we can find a time that works.</p></div>
          <div className={styles.asideBlock}><h3>Hiring or collaboration?</h3><p>You’re welcome to email about a role or technical collaboration, too.</p></div>
        </aside>
      </div>
    </div>
  </SiteLayout>;
}
