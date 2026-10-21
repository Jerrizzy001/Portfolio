import { useId, useRef, useState } from 'react';
import { FiArrowRight, FiCheckCircle, FiInfo, FiRefreshCw } from 'react-icons/fi';
import { CUSTOMERS, EMAIL_SAMPLES, inspectEmail, previewRecord } from '../../lib/demos/email-to-erp.mjs';
import DemoSteps from './DemoSteps';
import styles from '../../styles/demos.module.css';

export default function EmailToErpDemo() {
  const id = useId();
  const [sampleId, setSampleId] = useState('normal');
  const [step, setStep] = useState(0);
  const [inspection, setInspection] = useState(null);
  const [customerId, setCustomerId] = useState('');
  const [record, setRecord] = useState(null);
  const [error, setError] = useState('');
  const [announcement, setAnnouncement] = useState('');
  const stageHeading = useRef(null);
  const customerSelect = useRef(null);
  const sample = EMAIL_SAMPLES.find((item) => item.id === sampleId);
  function focusStage() { window.requestAnimationFrame(() => stageHeading.current?.focus()); }
  function goTo(next) { setStep(next); setError(''); if (next < 2) setRecord(null); focusStage(); }
  function reset() { setSampleId('normal'); setStep(0); setInspection(null); setRecord(null); setCustomerId(''); setError(''); setAnnouncement('Demo reset to the original fictional email.'); focusStage(); }
  function process() {
    const inspected = inspectEmail(sampleId);
    setInspection(inspected); setCustomerId(inspected.sample.customerId); setError(''); setRecord(null); setStep(1);
    setAnnouncement(inspected.state === 'duplicate' ? 'Duplicate detected. No new record will be prepared.' : inspected.state === 'needs-review' ? 'Request extracted. A customer match needs your review.' : 'Request extracted and matched. Ready for your review.'); focusStage();
  }
  function preview(event) {
    event.preventDefault();
    const result = previewRecord(sampleId, customerId);
    if (!result.ok) { setError(result.error); setAnnouncement(result.error); customerSelect.current?.focus(); return; }
    setRecord(result.record); setError(''); setStep(2); setAnnouncement('Simulated record preview ready. Nothing was sent to an ERP.'); focusStage();
  }

  return <section className={styles.panel} aria-labelledby={`${id}-title`}>
    <header className={styles.panelHeader}><h2 id={`${id}-title`}>From email to a useful record</h2><p className={styles.disclosure}>Interactive preview · Fictional data <FiInfo aria-hidden="true" /></p></header>
    <DemoSteps labels={['Sample email', 'Review request', 'Record preview']} step={step} onStep={goTo} />
    <p className={styles.srOnly} role="status" aria-live="polite">{announcement}</p>
    {step === 0 && <div className={styles.stage}>
      <h3 tabIndex={-1} ref={stageHeading}>Choose a sample email</h3>
      <p className={styles.caption}>Try a complete request, a duplicate, or a request that needs a human decision. This demo never connects to an inbox or ERP.</p>
      <fieldset className={styles.sampleChoices}><legend className={styles.srOnly}>Sample email</legend>{EMAIL_SAMPLES.map((item) => <label className={`${styles.sampleChoice} ${item.id === sampleId ? styles.selected : ''}`} key={item.id}><input type="radio" name={`${id}-sample`} value={item.id} checked={sampleId === item.id} onChange={() => { setSampleId(item.id); setRecord(null); }} />{item.title}</label>)}</fieldset>
      <article className={styles.email}><dl><div><dt>From</dt><dd>{sample.sender}</dd></div><div><dt>Subject</dt><dd>{sample.subject}</dd></div></dl><p>{sample.body}</p></article>
      <div className={styles.actions}><button type="button" className={styles.primary} onClick={process}>Process sample email <FiArrowRight aria-hidden="true" /></button></div>
    </div>}
    {step === 1 && inspection && <div className={styles.stage}>
      <h3 tabIndex={-1} ref={stageHeading}>Review the extracted request</h3>
      <p className={styles.caption}>The original email stays available alongside the proposed record.</p>
      <div className={styles.columns}>
        <aside className={styles.request}><h4>{sample.subject}</h4><p className={styles.emailBody}>{sample.body}</p><dl className={styles.requestFields}><div><dt>Item</dt><dd>{inspection.item.description}</dd></div><div><dt>Dimensions</dt><dd>{inspection.item.width} × {inspection.item.height} in</dd></div><div><dt>Quantity</dt><dd>{inspection.item.quantity}</dd></div></dl></aside>
        <div className={styles.review}>
          {inspection.state === 'duplicate' ? <><div className={styles.notice}><FiInfo aria-hidden="true" /><div><strong>Duplicate detected</strong><p>Reference {sample.reference} already exists in the fictional records. This request is stopped to avoid creating it twice.</p></div></div><p className={styles.blocked}>No new record is prepared.</p><button type="button" className={styles.primary} onClick={() => goTo(0)}>Try another sample <FiArrowRight aria-hidden="true" /></button></> : <form onSubmit={preview} noValidate>
            <div className={styles.notice}><FiInfo aria-hidden="true" /><div><strong>{inspection.state === 'needs-review' ? 'Customer match needs review' : 'Request matched'}</strong><p>{inspection.state === 'needs-review' ? 'The sender did not match a sample customer. Choose the correct fictional customer before continuing.' : 'The email matches a fictional customer. Review the details before preparing a record preview.'}</p></div></div>
            <div className={styles.customerField}><label htmlFor={`${id}-customer`}>Customer</label><select id={`${id}-customer`} ref={customerSelect} value={customerId} onChange={(event) => { setCustomerId(event.target.value); setError(''); }} aria-invalid={error ? true : undefined} aria-describedby={error ? `${id}-error` : undefined}><option value="">Select a fictional customer</option>{CUSTOMERS.map((customer) => <option key={customer.id} value={customer.id}>{customer.name}</option>)}</select>{error && <p id={`${id}-error`} className={styles.error}>{error}</p>}</div>
            <p className={styles.caption}>This prepares a local preview only. Nothing is submitted.</p><div className={styles.actions}><button type="submit" className={styles.primary}>Preview the record <FiArrowRight aria-hidden="true" /></button></div>
          </form>}
        </div>
      </div>
      <div className={styles.actions}><button type="button" className={styles.reset} onClick={reset}><FiRefreshCw aria-hidden="true" /> Reset</button></div>
    </div>}
    {step === 2 && record && <div className={styles.stage}>
      <h3 tabIndex={-1} ref={stageHeading}>A structured request, ready to review</h3>
      <div className={styles.notice}><FiCheckCircle aria-hidden="true" /><div><strong>Simulated record preview</strong><p>No record was sent or saved in an external system.</p></div></div>
      <dl className={styles.recordFields}><div><dt>Customer</dt><dd>{record.customer}</dd></div><div><dt>Customer reference</dt><dd>{record.reference}</dd></div><div><dt>Item</dt><dd>{record.item.description}</dd></div><div><dt>Dimensions</dt><dd>{record.item.width} × {record.item.height} in</dd></div><div><dt>Quantity</dt><dd>{record.item.quantity}</dd></div><div><dt>Status</dt><dd>{record.status}</dd></div></dl>
      <details className={styles.details}><summary>View the sample data structure</summary><pre>{JSON.stringify(record, null, 2)}</pre></details>
      <div className={styles.actions}><button type="button" className={styles.reset} onClick={() => goTo(1)}>Back to review</button><button type="button" className={styles.primary} onClick={reset}>Try another sample <FiArrowRight aria-hidden="true" /></button></div>
    </div>}
  </section>;
}
