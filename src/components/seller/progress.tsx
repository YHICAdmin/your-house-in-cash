import styles from "./seller-form.module.css";

export function Progress({ step }: { step: 1 | 2 }) {
  return <ol aria-label="Form progress" className={`text-body-small ${styles.progress}`}>
    <li aria-current={step === 1 ? "step" : undefined}>Your details</li>
    <li aria-hidden="true">→</li>
    <li aria-current={step === 2 ? "step" : undefined}>About the house</li>
  </ol>;
}

