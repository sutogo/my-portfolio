import FadeIn from './FadeIn';
import styles from './Timeline.module.css';
import { timelineData } from '../data/timeline';

function Timeline() {
  return (
    <div className={styles.timelineContainer}>
      {timelineData.map((item, index) => (
        <FadeIn key={index}>
          <div className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <span className={styles.timelineDate}>{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

export default Timeline;