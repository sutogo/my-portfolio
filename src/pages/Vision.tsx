import styles from './Vision.module.css';
import FadeIn from '../components/FadeIn';
import { useLang } from '../i18n/LangContext';

function Vision() {
  const { t } = useLang();

  const visionSteps = [
    {
      icon: '🔩',
      label: 'Edge',
      title: t('vision.edge.title'),
      description: t('vision.edge.desc'),
    },
    {
      icon: '↔️',
      label: 'Bridge',
      title: t('vision.bridge.title'),
      description: t('vision.bridge.desc'),
    },
    {
      icon: '☁️',
      label: 'Cloud',
      title: t('vision.cloud.title'),
      description: t('vision.cloud.desc'),
    },
  ];

  return (
    <div className={styles.visionContainer}>
      <FadeIn>
        <p className={styles.sectionLabel}>{t('vision.label')}</p>
        <h2 className={styles.sectionTitle}>{t('vision.title')}</h2>
        <p className={styles.subtitle}>{t('vision.subtitle')}</p>
      </FadeIn>

      <div className={styles.pipelineGrid}>
        {visionSteps.map((step, index) => (
          <FadeIn key={step.label} delay={index * 0.15} direction="up">
            <div className={styles.pipelineCard}>
              <div className={styles.stepBadge}>{step.label}</div>
              <div className={styles.stepIcon}>{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.4}>
        <div className={styles.visionStatement}>
          <p>
            {t('vision.statement').split('{bridge}')[0]}
            <strong>{t('vision.statement.bridge')}</strong>
            {t('vision.statement').split('{bridge}')[1]?.split('{cps}')[0]}
            <strong>{t('vision.statement.cps')}</strong>
            {t('vision.statement').split('{cps}')[1]}
          </p>
        </div>
      </FadeIn>
    </div>
  );
}

export default Vision;
