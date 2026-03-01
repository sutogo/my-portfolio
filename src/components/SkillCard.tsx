import styles from './SkillCard.module.css';
import type { Skill } from '../data/skills';

type Props = {
  skill: Skill;
};

function SkillCard({ skill }: Props) {
  return (
    <div className={styles.card}>
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
          style={{ width: `${(skill.level / 5) * 100}%` }}
        />
      </div>
      <p className={styles.description}>{skill.description}</p>
    </div>
  );
}

export default SkillCard;