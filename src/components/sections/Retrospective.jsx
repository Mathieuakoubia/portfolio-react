import React from 'react';
import Reveal from '../common/Reveal.jsx';
import { retrospective } from '../../data/storytellingData';
import styles from '../../styles/Retrospective.module.css';

const Retrospective = () => (
  <section id="retrospective" className={styles.retrospective}>
    <div className={styles.inner}>
      <Reveal>
        <div className={styles.header}>
          <span className={styles.pill}>{retrospective.tag}</span>
        </div>

        <p className={styles.summary}>{retrospective.summary}</p>
      </Reveal>

      <Reveal as="div" className={styles.grid} delay={0.1}>
        <div className={styles.block}>
          <p className={styles.blockTitle}>Reussites</p>
          <ul className={styles.list}>
            {retrospective.achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.block}>
          <p className={styles.blockTitle}>Lecons apprises</p>
          <ul className={styles.list}>
            {retrospective.lessons.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal className={styles.softSkills} delay={0.2}>
        {retrospective.softSkills.map((skill) => (
          <span key={skill} className={styles.softSkillTag}>{skill}</span>
        ))}
      </Reveal>
    </div>
  </section>
);

export default Retrospective;
