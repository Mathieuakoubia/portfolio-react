import React from 'react';
import styles from './Education.module.css';

const DIPLOMAS = [
  { degree: 'MSc Intelligence Artificielle', school: 'EPSI',           period: '2023 — 2026', detail: 'Expert en IA & Data Science' },
  { degree: 'Bachelor Développeur',          school: 'EPSI',           period: '2021 — 2022', detail: 'Développement Full Stack' },
  { degree: 'Baccalauréat ES',               school: 'Lycée — Abidjan',period: '2018',        detail: 'Mention Bien' },
];

const Education = () => (
  <section id="education" className={styles.education}>
    <div className={styles.inner}>
      <div className={styles.header}>
        <span className={styles.pill}>Formations</span>
      </div>
      <div className={styles.grid}>
        {DIPLOMAS.map(({ degree, school, period, detail }) => (
          <div key={degree} className={styles.card}>
            <div className={styles.cardPeriod}>{period}</div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardDegree}>{degree}</h3>
              <p className={styles.cardSchool}>{school}</p>
              <p className={styles.cardDetail}>{detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
