import React from 'react';
import styles from './Skills.module.css';

const SKILLS = [
  { cat: 'Front-End',   bg: '#FFD93D', tags: ['React', 'Vue.js', 'Next.js', 'HTML/CSS', 'JavaScript', 'TypeScript'] },
  { cat: 'Back-End',    bg: '#F5A8C0', tags: ['Node.js', 'PHP/Symfony', 'Python', 'REST APIs', 'MySQL'] },
  { cat: 'DevOps',      bg: '#A8D8EA', tags: ['Azure', 'CI/CD', 'Docker', 'Git', 'GitHub Actions'] },
  { cat: 'ITSM',        bg: '#C3F0CA', tags: ['ServiceNow', 'ITIL', 'CMDB', 'Incident Mgmt'] },
  { cat: 'IA + Data',   bg: '#FFD93D', tags: ['Machine Learning', 'Scikit-learn', 'Pandas', 'Python'] },
  { cat: 'Soft Skills', bg: '#F5A8C0', tags: ['Communication', 'Teamwork', 'Adaptabilité', 'Autonomie'] },
];

const Skills = () => (
  <section id="skills" className={styles.skills}>
    <div className={styles.inner}>
      <div className={styles.header}>
        <span className={styles.pill}>Stack Technique</span>
      </div>
      <div className={styles.grid}>
        {SKILLS.map(({ cat, bg, tags }) => (
          <div key={cat} className={styles.card}>
            <div className={styles.cardTitle} style={{ backgroundColor: bg }}>{cat}</div>
            <div className={styles.tags}>
              {tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
