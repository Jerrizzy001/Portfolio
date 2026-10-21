import { useId, useRef, useState } from 'react';
import { FiArrowRight, FiInfo, FiRefreshCw } from 'react-icons/fi';
import { SAMPLE_REQUESTS, MATERIAL_RATES, calculateEstimate } from '../../lib/demos/estimator.mjs';
import DemoSteps from './DemoSteps';
import styles from '../../styles/demos.module.css';

const money = (cents) => new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(cents / 100);

export default function EstimatorDemo() {
  const id = useId();
  const [step, setStep] = useState(1);
  const [sample, setSample] = useState(SAMPLE_REQUESTS[0]);
  const [values, setValues] = useState({ ...SAMPLE_REQUESTS[0] });
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);
  const [announcement, setAnnouncement] = useState('');
  const form = useRef(null);
  const stageHeading = useRef(null);

  function focusStage() { window.requestAnimationFrame(() => stageHeading.current?.focus()); }
  function goTo(next) { setStep(next); setErrors({}); if (next < 2) setResult(null); focusStage(); }
  function reset() {
    setSample(SAMPLE_REQUESTS[0]); setValues({ ...SAMPLE_REQUESTS[0] }); setErrors({}); setResult(null); setStep(1);
    setAnnouncement('Demo reset to the original sample request.'); focusStage();
  }
  function selectSample(item) {
    setSample(item); setValues({ ...item }); setErrors({}); setResult(null); setStep(1);
    setAnnouncement(`${item.title} selected. Review its details.`); focusStage();
  }
  function update(event) { setValues((current) => ({ ...current, [event.target.name]: event.target.value })); setResult(null); }
  function submit(event) {
    event.preventDefault();
    const calculation = calculateEstimate(values);
    if (!calculation.ok) {
      setErrors(calculation.errors);
      setAnnouncement('Please correct the highlighted fields.');
      form.current?.elements.namedItem(Object.keys(calculation.errors)[0])?.focus();
      return;
    }
    setErrors({}); setResult(calculation); setStep(2); setAnnouncement('Your fictional sample estimate is ready.'); focusStage();
  }
  const fieldAttributes = (name) => ({ id: `${id}-${name}`, name, value: values[name], onChange: update, 'aria-invalid': errors[name] ? true : undefined, 'aria-describedby': errors[name] ? `${id}-${name}-error` : undefined });
  const errorMessage = (name) => errors[name] && <span id={`${id}-${name}-error`} className={styles.error}>{errors[name]}</span>;

  return <section className={styles.panel} aria-labelledby={`${id}-title`}>
    <header className={styles.panelHeader}>
      <h2 id={`${id}-title`}>See a workflow come together</h2>
      <p className={styles.disclosure}>Interactive preview · Fictional data <FiInfo aria-hidden="true" /></p>
    </header>
    <DemoSteps labels={['Sample request', 'Review details', 'Sample estimate']} step={step} onStep={goTo} />
    <p className={styles.srOnly} role="status" aria-live="polite">{announcement}</p>

    {step === 0 && <div className={styles.stage}>
      <h3 tabIndex={-1} ref={stageHeading}>Choose a sample request</h3>
      <p className={styles.caption}>Explore how a request becomes an estimate, including information that needs a human decision.</p>
      <div className={styles.sampleList}>{SAMPLE_REQUESTS.map((item) => <button type="button" key={item.id} className={styles.sampleButton} onClick={() => selectSample(item)}><strong>{item.title}</strong><span>{item.description}</span><FiArrowRight aria-hidden="true" /></button>)}</div>
    </div>}

    {step === 1 && <div className={styles.columns}>
      <aside className={styles.request} aria-label="Original sample request">
        <h3>Request details</h3>
        <p className={styles.caption}>A customer has submitted a request for a custom metal panel.</p>
        <dl className={styles.requestFields}>
          <div><dt>Part type</dt><dd>{sample.part}</dd></div>
          <div><dt>Dimensions</dt><dd>{sample.width} × {sample.height} in</dd></div>
          <div><dt>Quantity</dt><dd>{sample.quantity}</dd></div>
          <div><dt>Material (requested)</dt><dd>{sample.material || 'Not specified'}</dd></div>
        </dl>
      </aside>
      <div className={styles.review}>
        <h3 tabIndex={-1} ref={stageHeading}>Review details</h3>
        <p className={styles.caption}>Confirm the information and make any needed changes before generating an estimate.</p>
        <form ref={form} onSubmit={submit} noValidate>
          <div className={styles.formFields}>
            <div className={styles.field}><label htmlFor={`${id}-part`}>Part type</label><div><select {...fieldAttributes('part')}><option>Flat panel</option><option>Folded panel</option></select>{errorMessage('part')}</div></div>
            <fieldset className={styles.dimensionField}><legend>Dimensions (inches)</legend><div className={styles.dimensionInputs}><div><label className={styles.srOnly} htmlFor={`${id}-width`}>Width in inches</label><input type="number" min="0.01" max="240" step="any" inputMode="decimal" {...fieldAttributes('width')} />{errorMessage('width')}</div><span aria-hidden="true">×</span><div><label className={styles.srOnly} htmlFor={`${id}-height`}>Height in inches</label><input type="number" min="0.01" max="240" step="any" inputMode="decimal" {...fieldAttributes('height')} />{errorMessage('height')}</div></div></fieldset>
            <div className={styles.field}><label htmlFor={`${id}-quantity`}>Quantity</label><div><input type="number" min="1" max="1000" step="1" inputMode="numeric" {...fieldAttributes('quantity')} />{errorMessage('quantity')}</div></div>
            <div className={styles.field}><label htmlFor={`${id}-material`}>Material</label><div><select {...fieldAttributes('material')}><option value="">Choose a material</option>{Object.keys(MATERIAL_RATES).map((material) => <option key={material}>{material}</option>)}</select>{errorMessage('material')}</div></div>
          </div>
          <div className={styles.notice}><FiInfo aria-hidden="true" /><div><strong>{sample.material ? 'Confirm the material' : 'A human decision is needed'}</strong><p>{sample.material ? `The customer requested ${sample.material.toLowerCase()}. Let me know if you’d like to use a different material.` : 'This sample has no material specified. Choose a material above to continue.'}</p></div></div>
          <div className={styles.actions}><button type="button" className={styles.reset} onClick={reset}><FiRefreshCw aria-hidden="true" /> Reset</button><button type="submit" className={styles.primary}>Continue to sample estimate <FiArrowRight aria-hidden="true" /></button></div>
        </form>
      </div>
    </div>}

    {step === 2 && result && <div className={styles.stage}>
      <h3 tabIndex={-1} ref={stageHeading}>Your sample estimate</h3>
      <p className={styles.caption}>Illustrative CAD pricing only. These fictional rates are not a quote or a commercial pricing model.</p>
      <div className={styles.resultGrid}>
        <div><p className={styles.eyebrow}>Reviewed request</p><h4>{values.quantity} × {values.material.toLowerCase()} {values.part.toLowerCase()}s</h4><p>{values.width} × {values.height} inches per panel</p><dl className={styles.breakdown}><div><dt>Area per panel</dt><dd>{result.area.toFixed(2)} sq ft</dd></div><div><dt>Fictional material rate</dt><dd>{money(result.rate * 100)} / sq ft</dd></div><div><dt>Fictional fabrication fee</dt><dd>{money(result.fabrication * 100)} / panel</dd></div><div><dt>Unit price</dt><dd>{money(result.unitCents)}</dd></div></dl></div>
        <div className={styles.total}><span>Sample total</span><strong>{money(result.totalCents)}</strong><p>{result.quantity} panels · before any tax or delivery</p><p className={styles.caption}>Nothing has been ordered or sent.</p></div>
      </div>
      <details className={styles.details}><summary>How the sample is calculated</summary><p>Area = width × height ÷ 144. Unit price = area × fictional material rate + fictional fabrication fee, rounded to cents. Total = unit price × quantity.</p></details>
      <div className={styles.actions}><button type="button" className={styles.reset} onClick={reset}><FiRefreshCw aria-hidden="true" /> Reset</button><button type="button" className={styles.primary} onClick={() => goTo(1)}>Edit the details <FiArrowRight aria-hidden="true" /></button></div>
    </div>}
  </section>;
}
