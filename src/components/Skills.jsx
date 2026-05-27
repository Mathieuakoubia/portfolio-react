import React from 'react';
import {
  SiReact, SiVuedotjs, SiNextdotjs, SiHtml5, SiJavascript, SiTypescript,
  SiNodedotjs, SiSymfony, SiPython, SiMysql,
  SiDocker, SiGit, SiGithubactions,
  SiScikitlearn, SiPandas, SiFlutter, SiFirebase,
} from 'react-icons/si';
import styles from './Skills.module.css';

const ICONS = {
  'React':          { icon: SiReact,         color: '#61DAFB' },
  'Vue.js':         { icon: SiVuedotjs,      color: '#4FC08D' },
  'Next.js':        { icon: SiNextdotjs,     color: '#0F172A' },
  'HTML/CSS':       { icon: SiHtml5,         color: '#E34F26' },
  'JavaScript':     { icon: SiJavascript,    color: '#F7DF1E' },
  'TypeScript':     { icon: SiTypescript,    color: '#3178C6' },
  'Node.js':        { icon: SiNodedotjs,     color: '#339933' },
  'PHP/Symfony':    { icon: SiSymfony,       color: '#000000' },
  'Python':         { icon: SiPython,        color: '#3776AB' },
  'MySQL':          { icon: SiMysql,         color: '#4479A1' },
  'Docker':         { icon: SiDocker,        color: '#2496ED' },
  'Git':            { icon: SiGit,           color: '#F05032' },
  'GitHub Actions': { icon: SiGithubactions, color: '#2088FF' },
  'Scikit-learn':   { icon: SiScikitlearn,   color: '#F7931E' },
  'Pandas':         { icon: SiPandas,        color: '#150458' },
  'Flutter':        { icon: SiFlutter,       color: '#54C5F8' },
  'Firebase':       { icon: SiFirebase,      color: '#FFCA28' },
};

const SKILLS = [
  { cat: 'Front-End',   tags: ['React', 'Vue.js', 'Next.js', 'HTML/CSS', 'JavaScript', 'TypeScript'] },
  { cat: 'Back-End',    tags: ['Node.js', 'PHP/Symfony', 'Python', 'REST APIs', 'MySQL'] },
  { cat: 'DevOps',      tags: ['Docker', 'Git', 'GitHub Actions', 'Azure', 'CI/CD'] },
  { cat: 'Mobile',      tags: ['Flutter', 'Firebase', 'Dart'] },
  { cat: 'IA + Data',   tags: ['Python', 'Scikit-learn', 'Pandas', 'Machine Learning'] },
  { cat: 'Soft Skills', tags: ['Communication', 'Autonomie', 'Adaptabilité', 'Travail d\'équipe'] },
];

const Skills = () => (
  <section id="skills" className={styles.skills}>
    <div className={styles.inner}>
      <div className={styles.header}>
        <span className={styles.pill}>Stack Technique</span>
      </div>
      <div className={styles.grid}>
        {SKILLS.map(({ cat, tags }) => (
          <div key={cat} className={styles.card}>
            <div className={styles.cardTitle}>{cat}</div>
            <div className={styles.tags}>
              {tags.map(tag => {
                const entry = ICONS[tag];
                return (
                  <span key={tag} className={styles.tag}>
                    {entry && <entry.icon size={14} color={entry.color} />}
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
