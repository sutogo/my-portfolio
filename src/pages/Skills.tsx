import styles from './Skills.module.css';
import FadeIn from '../components/FadeIn';
import SkillCard from '../components/SkillCard';
import QualificationCard from '../components/QualificationCard';
import { skillsData, qualificationsData } from '../data/skills';
import { useLang } from '../i18n/LangContext';

const categories = ['Web', 'Hardware', 'Other'] as const;

function Skills() {
  const { t } = useLang();

  return (
    <div className={styles.skillsContainer}>
      <FadeIn>
        <p className={styles.sectionLabel}>{t('skills.label')}</p>
        <h2 className={styles.sectionTitle}>{t('skills.title')}</h2>
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
        <h3 className={styles.categoryTitle}>{t('skills.qualTitle')}</h3>
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
