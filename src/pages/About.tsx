import styles from './About.module.css';
import Timeline from '../components/Timeline';
import FadeIn from '../components/FadeIn';
import MetricsCard from '../components/MetricsCard';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiWantedly } from 'react-icons/si';
import { useLang } from '../i18n/LangContext';

function About() {
  const { t } = useLang();

  const metrics = [
    { value: '57', suffix: '%', label: t('about.metric.reduction') },
    { value: '10', suffix: '+', label: t('about.metric.lines') },
    { value: '3', suffix: '', label: t('about.metric.countries') },
    { value: '2026', suffix: '', label: t('about.metric.wcb') },
  ];

  return (
    <div className={styles.aboutContainer}>
      <FadeIn>
        <p className={styles.sectionLabel}>{t('about.label')}</p>
        <h2 className={styles.sectionTitle}>
          {t('about.title').split('\n').map((line, i) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </h2>
      </FadeIn>

      <MetricsCard metrics={metrics} />

      <FadeIn delay={0.2}>
        <div className={styles.introCard}>
          <p className={styles.introText}>
            {t('about.intro1').split('{bio}')[0]}
            <strong>{t('about.intro1.bio')}</strong>
            {t('about.intro1').split('{bio}')[1]?.split('{highlight}')[0]}
            <span className={styles.highlight}>{t('about.intro1.highlight')}</span>
            {t('about.intro1').split('{highlight}')[1]}
          </p>
          <p className={styles.introText}>
            {t('about.intro2').split('{cps}')[0]}
            <strong>{t('about.intro2.cps')}</strong>
            {t('about.intro2').split('{cps}')[1]}
          </p>
          <div className={styles.linkButtons}>
            <a href="https://github.com/sutogo" target="_blank" rel="noopener noreferrer" className={styles.iconButton}>
              <FaGithub /> GitHub
            </a>
            <a href="https://www.wantedly.com/id/KHO" target="_blank" rel="noopener noreferrer" className={`${styles.iconButton} ${styles.wantedlyButton}`}>
              <SiWantedly /> Wantedly
            </a>
            <a href="https://linkedin.com/in/kosuke-tokashiki-963a873b0" target="_blank" rel="noopener noreferrer" className={`${styles.iconButton} ${styles.linkedinButton}`}>
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h3 className={styles.timelineTitle}>{t('about.timelineTitle')}</h3>
      </FadeIn>
      <Timeline />
    </div>
  );
}

export default About;