import styles from './SkillCard.module.css';
import type { Skill } from '../data/skills';


// 星を描画するヘルパー関数
const renderStars = (level: number) => {
  let stars = '';
  for (let i = 0; i < 5; i++) {
    stars += i < level ? '★' : '☆';
  }
  return stars;
};

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.icon}>{skill.icon}</span>
        <h3 className={styles.title}>{skill.name}</h3>
      </div>
      <div className={styles.meta}>
        <span>経験年数: {skill.experience}</span>
        {' | '}
        <span className={styles.stars}>{renderStars(skill.level)}</span>
      </div>
      <p className={styles.description}>{skill.description}</p>
    </div>
  );
}

export default SkillCard;