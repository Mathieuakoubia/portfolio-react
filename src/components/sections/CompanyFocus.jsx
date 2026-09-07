import React from 'react';
import Reveal from '../common/Reveal.jsx';
import { companyFocus } from '../../data/storytellingData';
import styles from '../../styles/CompanyFocus.module.css';

const CompanyFocus = () => (
  <section id="company" className={styles.company}>
    <div className={styles.inner}>
      <Reveal>
        <div className={styles.header}>
          <span className={styles.pill}>{companyFocus.tag}</span>
        </div>
        <p className={styles.companyName}>{companyFocus.company}</p>
        <p className={styles.period}>{companyFocus.period}</p>
        <p className={styles.roleTitle}>{companyFocus.roleTitle}</p>
      </Reveal>

      <Reveal delay={0.15}>
        <p className={styles.context}>{companyFocus.context}</p>
        <ul className={styles.missions}>
          {companyFocus.missions.map((mission) => (
            <li key={mission}>{mission}</li>
          ))}
        </ul>
      </Reveal>
    </div>
  </section>
);

export default CompanyFocus;
