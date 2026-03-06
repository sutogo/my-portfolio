import styles from './Research.module.css';
import FadeIn from '../components/FadeIn';
import { useLang } from '../i18n/LangContext';

function Research() {
  const { t } = useLang();

  return (
    <div className={styles.researchContainer}>
      <FadeIn>
        <p className={styles.sectionLabel}>{t('research.label')}</p>
        <h2 className={styles.sectionTitle}>{t('research.title')}</h2>
        <p className={styles.sectionSubtitle}>{t('research.subtitle')}</p>
      </FadeIn>

      <div className={styles.researchGrid}>
        {/* 研究概要 */}
        <FadeIn delay={0.1}>
          <div className={styles.researchCard}>
            <div className={styles.cardIcon}>🔬</div>
            <h3>{t('research.overview.title')}</h3>
            <p>
              {t('research.overview.text').split('{strong}')[0]}
              <strong>{t('research.overview.strong')}</strong>
              {t('research.overview.text').split('{strong}')[1]}
            </p>
          </div>
        </FadeIn>

        {/* 背景と課題 */}
        <FadeIn delay={0.2}>
          <div className={styles.researchCard}>
            <div className={styles.cardIcon}>🎯</div>
            <h3>{t('research.background.title')}</h3>
            <p>{t('research.background.text')}</p>
          </div>
        </FadeIn>

        {/* Technical Approach */}
        <FadeIn delay={0.3}>
          <div className={styles.researchCard}>
            <div className={styles.cardIcon}>⚙️</div>
            <h3>{t('research.approach.title')}</h3>
            <div className={styles.approachGrid}>
              <div className={styles.approachItem}>
                <span className={styles.approachLabel}>{t('research.approach.hw.label')}</span>
                <p>
                  {t('research.approach.hw.text')
                    .replace('{s1}', t('research.approach.hw.s1'))
                    .replace('{s2}', t('research.approach.hw.s2'))
                    .replace('{s3}', t('research.approach.hw.s3'))}
                </p>
              </div>
              <div className={styles.approachItem}>
                <span className={styles.approachLabel}>{t('research.approach.sw.label')}</span>
                <p>
                  {t('research.approach.sw.text')
                    .replace('{s1}', t('research.approach.sw.s1'))
                    .replace('{s2}', t('research.approach.sw.s2'))}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* 膝モデル */}
        <FadeIn delay={0.15}>
          <div className={styles.researchCard}>
            <div className={styles.cardIcon}>🦴</div>
            <h3>{t('research.knee.title')}</h3>
            <p>
              {t('research.knee.text').replace('{s1}', t('research.knee.s1'))}
            </p>
          </div>
        </FadeIn>

        {/* 実験結果 */}
        <FadeIn delay={0.25}>
          <div className={styles.researchCard}>
            <div className={styles.cardIcon}>📊</div>
            <h3>{t('research.results.title')}</h3>
            <div className={styles.resultGrid}>
              <div className={styles.resultItem}>
                <span className={styles.resultMetric}>{t('research.results.pfj')}</span>
                <p>
                  {t('research.results.pfj.text').replace('{s1}', t('research.results.pfj.s1'))}
                </p>
              </div>
              <div className={styles.resultItem}>
                <span className={styles.resultMetric}>{t('research.results.tfj')}</span>
                <p>
                  {t('research.results.tfj.text').replace('{s1}', t('research.results.tfj.s1'))}
                </p>
              </div>
            </div>
            <p className={styles.resultSummary}>
              {t('research.results.summary').replace('{s1}', t('research.results.summary.s1'))}
            </p>
          </div>
        </FadeIn>

        {/* 成果 */}
        <FadeIn delay={0.35}>
          <div className={styles.researchCard}>
            <div className={styles.cardIcon}>🏆</div>
            <h3>{t('research.achievements.title')}</h3>
            <ul className={styles.achievementList}>
              <li>
                <strong>{t('research.achievements.wcb')}</strong>
                {t('research.achievements.wcb.text')}
              </li>
              <li>
                <strong>{t('research.achievements.jsme')}</strong>
                {t('research.achievements.jsme.text')}
              </li>
              <li>
                <strong>{t('research.achievements.icbme')}</strong>
                {t('research.achievements.icbme.text')}
              </li>
            </ul>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.3}>
        <div className={styles.slideSection}>
          <h3>{t('research.slide.title')}</h3>
          <div className={styles.slideContainer}>
            <iframe
              className="speakerdeck-iframe"
              style={{
                border: 'none',
                background: 'rgba(0, 0, 0, 0.2)',
                borderRadius: '12px',
                width: '100%',
                height: 'auto',
                aspectRatio: '560 / 315',
              }}
              src="https://speakerdeck.com/player/ffcc7a7df3874b8ca71421c9b9dfde44"
              title="研究発表スライド"
              allowFullScreen
              data-ratio="1.7777777777777777"
            />
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default Research;