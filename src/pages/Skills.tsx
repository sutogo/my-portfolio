
import styles from './About.module.css';
import FadeIn from '../components/FadeIn';
import SkillCard from '../components/SkillCard';
import QualificationCard from '../components/QualificationCard';
import { skillsData, qualificationsData } from '../data/skills';

function Skills() {{
  return (
    <div className={styles.aboutContainer}>
      <h1>Skills & Qualifications</h1>

      <h2>Skills</h2>
      <div className={styles.skillsGrid}>
        {skillsData.map((skill, index) => (
          <FadeIn key={index}>
            <SkillCard skill={skill} />
          </FadeIn>
        ))}
      </div>

       <h2>Qualifications</h2>
      <div className={styles.skillsGrid}>
        {qualificationsData.map((qualification, index) => (
          <FadeIn key={index}>
            <QualificationCard qualification={qualification} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}}

export default Skills;
