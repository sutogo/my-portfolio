import styles from './Timeline.module.css';
import FadeIn from './FadeIn';
import { timelineData } from '../data/timeline';

function Timeline() {
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
              <h4 className={styles.timelineTitle}>{item.title}</h4>
              {'subtitle' in item && item.subtitle && (
                <p className={styles.timelineSubtitle}>{item.subtitle}</p>
              )}
              {item.description && (
                <p className={styles.timelineDescription}>{item.description}</p>
              )}
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

export default Timeline;