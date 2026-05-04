import React from 'react';
import styles from './About.module.css';

const INFO_CARDS = [
  { label: 'LOCALISATION', value: 'Nantes' },
  { label: 'CONTRAT',      value: 'Alternance' },
  { label: 'ANGLAIS',      value: 'Niveau C1' },
  { label: 'MOBILITÉ',     value: 'International' },
];

const EXPERIENCES = [
  {
    company: 'Solutions&co',
    period:  'Sept 2023 → 2024',
    role:    'Développeur Full Stack',
    desc:    'Développement d\'applications internes, intégration ServiceNow, déploiement Azure avec pipeline CI/CD et gestion des incidents ITIL.',
  },
  {
    company: 'Atos Engage-ESM',
    period:  'Sept 2021 → 2022',
    role:    'Développeur Alternant',
    desc:    'Gestion ITSM, développement et personnalisation de modules ServiceNow, automatisation de workflows et reporting.',
  },
];

const About = () => (
  <section id="about" className={styles.about}>
    <div className={styles.inner}>
      <div className={styles.header}>
        <span className={styles.pill}>Expériences</span>
      </div>

      <div className={styles.grid}>
        <div className={styles.infoCol}>
          {INFO_CARDS.map(({ label, value }) => (
            <div key={label} className={styles.infoCard}>
              <span className={styles.infoLabel}>{label}</span>
              <span className={styles.infoValue}>{value}</span>
            </div>
          ))}
        </div>

        <div className={styles.expCol}>
          {EXPERIENCES.map(({ company, period, role, desc }) => (
            <div key={company} className={styles.expItem}>
              <div className={styles.expHeader}>
                <span className={styles.expCompany}>{company}</span>
                <span className={styles.expPeriodBadge}>{period}</span>
              </div>
              <p className={styles.expRole}>{role}</p>
              <p className={styles.expDesc}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
