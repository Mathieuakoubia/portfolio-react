import React from 'react';
import styles from './Projects.module.css';

const PROJECTS = [
  {
    num:      '01',
    name:     'Paye Ton Kaya',
    type:     'Application Mobile',
    desc:     'Application de paiement mobile développée en Flutter. Transactions rapides et sécurisées entre utilisateurs avec une interface fluide et une expérience optimisée.',
    techs:    ['Flutter', 'Dart', 'Mobile', 'UX/UI'],
    status:   'LIVE',
    headerBg: '#f8c344',
    stat1:    { val: '1k+', label: 'Utilisateurs' },
    stat2:    { val: '99%', label: 'Satisfaction' },
  },
  {
    num:      '02',
    name:     'Power Automate',
    type:     'Automatisation',
    desc:     'Pipeline automatisé : déposer un fichier Excel déclenche des scripts TypeScript qui le transforment et formatent aux normes entreprise en quelques secondes.',
    techs:    ['Power Automate', 'TypeScript', 'Excel', 'Azure'],
    status:   'LIVE',
    headerBg: '#ff4d6d',
    stat1:    { val: '30s',  label: 'vs 2h manuelles' },
    stat2:    { val: '100%', label: 'Automatisé' },
  },
  {
    num:      '03',
    name:     'Wellness App',
    type:     'Application Mobile',
    desc:     'App de bien-être avec exercices synchronisés en temps réel multi-appareils, gestion des souscriptions et base de données NoSQL Firestore.',
    techs:    ['Flutter', 'Firebase', 'Firestore', 'NoSQL'],
    status:   'EN DEV',
    headerBg: '#4caf50',
    stat1:    { val: 'Multi', label: 'Devices sync' },
    stat2:    { val: 'NoSQL', label: 'Firestore RT' },
  },
];

const Projects = () => (
  <section id="projects" className={styles.projects}>
    <div className={styles.inner}>
      <div className={styles.header}>
        <span className={styles.pill}>Mes Projets</span>
      </div>

      <div className={styles.grid}>
        {PROJECTS.map(({ num, name, type, desc, techs, status, headerBg, stat1, stat2 }) => (
          <article key={num} className={styles.card}>

            <div className={styles.cardHeader} style={{ backgroundColor: headerBg }}>
              <span className={styles.num}>{num}</span>
              <span className={`${styles.badge} ${status === 'EN DEV' ? styles.badgeDev : styles.badgeLive}`}>
                {status}
              </span>
            </div>

            <h3 className={styles.cardName}>{name}</h3>
            <p className={styles.cardType}>{type}</p>
            <p className={styles.cardDesc}>{desc}</p>

            <div className={styles.techs}>
              {techs.map(t => <span key={t} className={styles.tech}>{t}</span>)}
            </div>

            <div className={styles.cardStats}>
              <div className={styles.statItem}>
                <span className={styles.statVal}>{stat1.val}</span>
                <span className={styles.statLabel}>{stat1.label}</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statVal}>{stat2.val}</span>
                <span className={styles.statLabel}>{stat2.label}</span>
              </div>
            </div>

          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
