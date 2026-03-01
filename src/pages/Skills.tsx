import styles from './Skills.module.css';
import FadeIn from '../components/FadeIn';
import SkillCard from '../components/SkillCard';
import QualificationCard from '../components/QualificationCard';
import { skillsData, qualificationsData } from '../data/skills';

const categories = ['Web', 'Hardware', 'Other'] as const;

function Skills() {
  return (
    <div className={styles.skillsContainer}>
      <FadeIn>
        <p className={styles.sectionLabel}>Skills & Qualifications</p>
        <h2 className={styles.sectionTitle}>技術スタック</h2>
      </FadeIn>

      {categories.map((category) => {
        const filteredSkills = skillsData.filter(s => s.category === category);
        if (filteredSkills.length === 0) return null;
        return (
          <div key={category} className={styles.categorySection}>
            <FadeIn>
              <h3 className={styles.categoryTitle}>{category}</h3>
            </FadeIn>
            <div className={styles.skillsGrid}>
              {filteredSkills.map((skill, index) => (
                <FadeIn key={index} delay={index * 0.05}>
                  <SkillCard skill={skill} />
                </FadeIn>
              ))}
            </div>
          </div>
        );
      })}

      <FadeIn>
        <h3 className={styles.categoryTitle}>Qualifications</h3>
      </FadeIn>
      <div className={styles.qualGrid}>
        {qualificationsData.map((qualification, index) => (
          <FadeIn key={index} delay={index * 0.05}>
            <QualificationCard qualification={qualification} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

export default Skills;
