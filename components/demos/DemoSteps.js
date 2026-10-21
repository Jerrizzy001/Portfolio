import { FiCheck } from 'react-icons/fi';
import styles from '../../styles/demos.module.css';

export default function DemoSteps({ labels, step, onStep }) {
  return <ol className={styles.steps} aria-label="Demonstration progress">
    {labels.map((label, index) => <li key={label} className={`${styles.step} ${index === step ? styles.current : ''} ${index < step ? styles.complete : ''}`} aria-current={index === step ? 'step' : undefined}>
      <button type="button" className={styles.stepButton} disabled={index > step} onClick={() => onStep(index)}>
        <span className={styles.stepNumber}>{index < step ? <FiCheck aria-hidden="true" /> : index + 1}</span>
        <span>{label}</span>
      </button>
    </li>)}
  </ol>;
}
