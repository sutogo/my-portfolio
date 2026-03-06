import KneeScene from '../components/KneeScene';
import styles from './Home.module.css';
import FadeIn from '../components/FadeIn';
import { useLang } from '../i18n/LangContext';

function Home() {
  const { t } = useLang();

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.heroContainer}>
      {/* 3D Background */}
      <div className={styles.canvasWrapper}>
        <KneeScene />
        <span className={styles.modelCaption}>{t('home.modelCaption')}</span>
      </div>

      {/* Hero Content */}
      <div className={styles.heroContent}>
        <FadeIn delay={0.3}>
          <p className={styles.greeting}>
            {t('home.greeting')}
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <h1 className={styles.name}>
            Kosuke <span className={styles.nameAccent}>Tokashiki</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.9}>
          <p className={styles.catchphrase}>
            {t('home.catchphrase').split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </p>
        </FadeIn>

        <FadeIn delay={1.2}>
          <p className={styles.subtitle}>
            {t('home.subtitle')}
          </p>
        </FadeIn>

        <FadeIn delay={1.5}>
          <div className={styles.heroCta}>
            <button className={styles.ctaPrimary} onClick={scrollToAbout}>
              {t('home.cta')}
            </button>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
        <span className={styles.scrollText}>{t('home.scroll')}</span>
      </div>
    </div>
  );
}

export default Home;