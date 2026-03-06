import { useEffect, useRef, useState } from 'react';
import styles from './SkillCard.module.css';
import type { Skill } from '../data/skills';

type Props = {
  skill: Skill;
};

function SkillCard({ skill }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.card} ref={cardRef}>
      <div className={styles.cardHeader}>
        <span className={styles.icon}>{skill.icon}</span>
        <div>
          <h4 className={styles.name}>{skill.name}</h4>
          <span className={styles.experience}>{skill.experience}</span>
        </div>
      </div>
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{
            width: isVisible ? `${(skill.level / 5) * 100}%` : '0%',
          }}
        />
      </div>
      <p className={styles.description}>{skill.description}</p>
    </div>
  );
}

export default SkillCard;