import { useEffect, useRef, useState } from 'react';
import styles from './SkillCard.module.css';
import type { Skill } from '../data/skills';
import { useLang } from '../i18n/LangContext';

type Props = {
  skill: Skill;
};

function SkillCard({ skill }: Props) {
  const { t, lang } = useLang();
  const years =
    lang === 'ja'
      ? skill.years === 0 ? '1年未満' : `${skill.years}年`
      : skill.years === 0 ? '< 1 yr' : `${skill.years} yr${skill.years > 1 ? 's' : ''}`;
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
          <h4 className={styles.name}>{t(`skills.${skill.id}.name`)}</h4>
          <span className={styles.experience}>{years}</span>
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
      <p className={styles.description}>{t(`skills.${skill.id}.desc`)}</p>
    </div>
  );
}

export default SkillCard;