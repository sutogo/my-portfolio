import styles from './Timeline.module.css';
import FadeIn from './FadeIn';
import { timelineData } from '../data/timeline';
import { useLang } from '../i18n/LangContext';

function Timeline() {
  const { t } = useLang();

  return (
    <div className={styles.timeline}>
      {timelineData.map((item, index) => (
        <FadeIn key={index} delay={index * 0.1} direction={index % 2 === 0 ? 'left' : 'right'}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineMarker}>
              <div className={styles.markerDot} />
              {index < timelineData.length - 1 && <div className={styles.markerLine} />}
            </div>
            <div className={styles.timelineContent}>
              <span className={styles.timelineDate}>{item.date}</span>
              <h4 className={styles.timelineTitle}>{t(item.titleKey)}</h4>
              <p className={styles.timelineSubtitle}>{t(item.subtitleKey)}</p>
              <p className={styles.timelineDescription}>{t(item.descriptionKey)}</p>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

export default Timeline;