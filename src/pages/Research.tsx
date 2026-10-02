import { FaArrowRight, FaBalanceScale, FaChartLine, FaUserMd } from 'react-icons/fa';
import styles from './Research.module.css';
import FadeIn from '../components/FadeIn';
import MetricsCard from '../components/MetricsCard';
import { useLang } from '../i18n/LangContext';

function Research() {
  const { t } = useLang();

  const problem = ['background', 'issue', 'goal'];
  const features = [
    { icon: <FaBalanceScale />, key: 'f1' },
    { icon: <FaUserMd />, key: 'f2' },
    { icon: <FaChartLine />, key: 'f3' },
  ];
  const flow = ['s1', 's2', 's3', 's4'];
  const results = [
    { value: '48', suffix: ' N', label: t('research.results.m1') },
    { value: '20', suffix: '°', label: t('research.results.m2') },
    { value: '±0.5', suffix: ' N', label: t('research.results.m3') },
  ];

  return (
    <div className={styles.researchContainer}>
      <FadeIn>
        <p className={styles.sectionLabel}>{t('research.label')}</p>
        <h2 className={styles.sectionTitle}>{t('research.title')}</h2>
        <p className={styles.sectionSubtitle}>
          {/* 折り返すときは \n の位置で折り返し、語の途中では切らない */}
          {t('research.subtitle').split('\n').map((part) => (
            <span key={part} className={styles.nowrapChunk}>{part}</span>
          ))}
        </p>
      </FadeIn>

      {/* 背景・課題・目的 */}
      <FadeIn delay={0.1}>
        <div className={styles.researchCard}>
          <h3>{t('research.problem.title')}</h3>
          <dl className={styles.problemList}>
            {problem.map((k) => (
              <div key={k}>
                <dt>{t(`research.problem.${k}Label`)}</dt>
                <dd>{t(`research.problem.${k}`)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </FadeIn>

      {/* システムの特徴 */}
      <h3 className={styles.blockTitle}>{t('research.features.title')}</h3>
      <div className={styles.featureGrid}>
        {features.map((f, i) => (
          <FadeIn key={f.key} delay={0.1 + i * 0.1}>
            <div className={styles.researchCard}>
              <div className={styles.cardIcon}>{f.icon}</div>
              <h3>{t(`research.${f.key}.title`)}</h3>
              <p>{t(`research.${f.key}.desc`)}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* システム構成（装置写真はセキュリティ上載せないため、構成図で示す） */}
      <FadeIn delay={0.1}>
        <div className={styles.researchCard}>
          <h3>{t('research.flow.title')}</h3>
          <ol className={styles.flow}>
            {flow.map((k, i) => (
              <li key={k}>
                {i > 0 && <FaArrowRight className={styles.flowArrow} aria-hidden />}
                <div className={styles.flowStep}>
                  <strong>{t(`research.flow.${k}`)}</strong>
                  <span>{t(`research.flow.${k}.sub`)}</span>
                </div>
              </li>
            ))}
          </ol>
          <p>{t('research.flow.eval')}</p>
        </div>
      </FadeIn>

      {/* 結果 */}
      <h3 className={styles.blockTitle}>{t('research.results.title')}</h3>
      <MetricsCard metrics={results} />
      <FadeIn>
        <p className={styles.resultSummary}>{t('research.results.summary')}</p>
      </FadeIn>

      {/* 展望・成果 */}
      <div className={styles.featureGrid}>
        <FadeIn delay={0.1}>
          <div className={styles.researchCard}>
            <h3>{t('research.outlook.title')}</h3>
            <p>{t('research.outlook.text')}</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className={styles.researchCard}>
            <h3>{t('research.achievements.title')}</h3>
            <ul className={styles.achievementList}>
              {['wcb', 'jsme', 'icbme'].map((k) => (
                <li key={k}>
                  <strong>{t(`research.achievements.${k}`)}</strong>
                  {t(`research.achievements.${k}.text`)}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

export default Research;
