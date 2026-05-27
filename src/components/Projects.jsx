import React from 'react';
import { SiFlutter, SiDart, SiTypescript, SiFirebase } from 'react-icons/si';
import styles from './Projects.module.css';

const TECH_ICONS = {
  Flutter:    { icon: SiFlutter,    color: '#54C5F8' },
  Dart:       { icon: SiDart,       color: '#0175C2' },
  TypeScript: { icon: SiTypescript, color: '#3178C6' },
  Firebase:   { icon: SiFirebase,   color: '#FFCA28' },
  Firestore:  { icon: SiFirebase,   color: '#FF6D00' },
};

const PROJECTS = [
  {
    num:     '01',
    name:    'Paye Ton Kaya',
    type:    'Application Mobile · Flutter',
    tagline: 'Paiement mobile rapide, sécurisé, simple.',
    techs:   ['Flutter', 'Dart'],
    status:  'LIVE',
    img:     '/assets/images/payetonkaya.webp',
    color:   'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
    emoji:   '💸',
    stat1:   { val: '1k+', label: 'utilisateurs' },
    stat2:   { val: '99%', label: 'satisfaction' },
  },
  {
    num:     '02',
    name:    'Power Automate',
    type:    'Automatisation · TypeScript',
    tagline: 'Déposer un fichier Excel → formaté en 30 secondes.',
    techs:   ['TypeScript', 'Azure', 'Excel'],
    status:  'LIVE',
    img:     '/assets/images/power%20automate.png',
    color:   'linear-gradient(135deg, #2563EB 0%, #0EA5E9 100%)',
    emoji:   '⚡',
    stat1:   { val: '30s',  label: 'vs 2h manuel' },
    stat2:   { val: '100%', label: 'automatisé' },
  },
  {
    num:     '03',
    name:    'Sozia',
    type:    'Application Mobile · Bien-être',
    tagline: 'Exercices synchronisés en temps réel, multi-appareils.',
    techs:   ['Flutter', 'Firebase', 'Dart'],
    status:  'EN DEV',
    img:     '/assets/images/application%20Sozia.png',
    color:   'linear-gradient(135deg, #059669 0%, #10B981 100%)',
    emoji:   '🌿',
    stat1:   { val: 'Multi', label: 'devices sync' },
    stat2:   { val: 'NoSQL', label: 'Firestore RT' },
  },
];

const Projects = () => (
  <section id="projects" className={styles.projects}>
    <div className={styles.inner}>

      <div className={styles.header}>
        <span className={styles.sectionLabel}>{'// projets'}</span>
        <h2 className={styles.sectionTitle}>Mes Projets</h2>
      </div>

      <div className={styles.grid}>
        {PROJECTS.map(({ num, name, type, tagline, techs, status, img, color, emoji, stat1, stat2 }) => (
          <article key={num} className={styles.card}>

            {/* Media */}
            <div className={styles.cardMedia}>
              {img && (
                <img
                  src={img}
                  alt={name}
                  className={styles.cardImg}
                  onError={e => { e.target.style.display = 'none'; e.target.nextElementSibling.style.display = 'flex'; }}
                />
              )}
              <div
                className={styles.cardPlaceholder}
                style={{ background: color, display: img ? 'none' : 'flex' }}
              >
                <span className={styles.placeholderEmoji}>{emoji}</span>
              </div>
            </div>

            {/* Content */}
            <div className={styles.cardContent}>
              <div className={styles.cardMeta}>
                <span className={styles.cardNum}>{num}</span>
                <span className={`${styles.badge} ${status === 'EN DEV' ? styles.badgeDev : styles.badgeLive}`}>
                  {status}
                </span>
              </div>

              <h3 className={styles.cardName}>{name}</h3>
              <p className={styles.cardType}>{type}</p>
              <p className={styles.cardTagline}>{tagline}</p>

              <div className={styles.techRow}>
                {techs.map(t => {
                  const entry = TECH_ICONS[t];
                  if (!entry) return <span key={t} className={styles.techChip}>{t}</span>;
                  const Icon = entry.icon;
                  return (
                    <span key={t} className={styles.techChip} title={t}>
                      <Icon size={13} color={entry.color} />
                      {t}
                    </span>
                  );
                })}
              </div>

              <div className={styles.cardStats}>
                <div className={styles.statItem}>
                  <span className={styles.statVal}>{stat1.val}</span>
                  <span className={styles.statLabel}>{stat1.label}</span>
                </div>
                <span className={styles.statDiv} />
                <div className={styles.statItem}>
                  <span className={styles.statVal}>{stat2.val}</span>
                  <span className={styles.statLabel}>{stat2.label}</span>
                </div>
              </div>
            </div>

          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
