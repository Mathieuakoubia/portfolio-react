import React from 'react';
import educationData from '../../data/educationData';
import styles from '../../styles/EducationTimeline.module.css';

const EducationTimeline = () => (
  <section id="education" className={styles.education}>
    <div className={styles.inner}>
      <div className={styles.header}>
        <span className={styles.pill}>Formations</span>
      </div>

      <div className={styles.timeline}>
        {educationData.map(({ id, degree, school, period, description }) => (
          <div key={id} className={styles.item}>
            <p className={styles.period}>{period}</p>
            <h3 className={styles.degree}>{degree}</h3>
            <p className={styles.school}>{school}</p>
            <p className={styles.description}>{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationTimeline;
