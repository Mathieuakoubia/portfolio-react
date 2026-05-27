import React, { useState } from 'react';
import {
  SiFlutter, SiDart, SiTypescript, SiFirebase,
  SiGithub, SiFastapi, SiPostgresql, SiSupabase, SiRailway,
  SiNextdotjs, SiTailwindcss,
} from 'react-icons/si';
import styles from './Projects.module.css';

const TECH_ICONS = {
  Flutter:    { icon: SiFlutter,    color: '#54C5F8' },
  Dart:       { icon: SiDart,       color: '#0175C2' },
  TypeScript: { icon: SiTypescript, color: '#3178C6' },
  Firebase:   { icon: SiFirebase,   color: '#FFCA28' },
  FastAPI:    { icon: SiFastapi,    color: '#009688' },
  PostgreSQL: { icon: SiPostgresql, color: '#4169E1' },
  Supabase:   { icon: SiSupabase,   color: '#3ECF8E' },
  Railway:    { icon: SiRailway,    color: '#0B0D0E' },
  'Next.js':   { icon: SiNextdotjs,  color: '#0F172A' },
  Tailwind:    { icon: SiTailwindcss,color: '#06B6D4' },
};

const PROJECTS = [
  {
    num:     '01',
    name:    'Paye Ton Kaya',
    type:    'Application Mobile · Flutter',
    tagline: 'Application d\'achat de café et de produits, avec connexion rapide par QR code.',
    techs:   ['Flutter', 'Dart', 'FastAPI', 'PostgreSQL', 'Supabase', 'Railway'],
    status:  'LIVE',
    img:     '/assets/images/payetonkaya.webp',
    color:   'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
    emoji:   '💸',
    github:  'https://github.com/Mathieuakoubia/payetonkayamspr',
    details: [
      'Application Flutter pour l\'achat de café et de produits',
      'API développée avec FastAPI (Python)',
      'Connexion rapide via QR code',
      'Base de données PostgreSQL (relationnelle)',
      'Hébergé sur Supabase et Railway',
    ],
  },
  {
    num:     '02',
    name:    'Power Automate',
    type:    'Automatisation · TypeScript',
    tagline: 'Flow déclenché automatiquement au dépôt d\'un fichier, pour formater un fichier de comptabilité.',
    techs:   ['TypeScript', 'Azure'],
    status:  'LIVE',
    img:     '/assets/images/power%20automate.png',
    color:   'linear-gradient(135deg, #2563EB 0%, #0EA5E9 100%)',
    emoji:   '⚡',
    github:  null,
    details: [
      'Flow Power Automate avec scripts TypeScript',
      'Déclenché au dépôt d\'un fichier dans un dossier interne à l\'entreprise',
      'Formatage automatique d\'un fichier de comptabilité',
      'Réduction du traitement de 2h à 30 secondes',
    ],
    stat: { val: '30s', label: 'vs 2h manuelles' },
  },
  {
    num:     '03',
    name:    'Landing Page Client',
    type:    'Web · Conversion',
    tagline: 'Landing page conceptualisée pour un projet d\'application pour enfants, avec pour objectif la conversion de nouveaux clients.',
    techs:   ['Next.js', 'Tailwind', 'TypeScript'],
    status:  'LIVE',
    img:     '/assets/images/landing-page7.png',
    color:   'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
    emoji:   '🚀',
    github:  null,
    liveUrl: 'https://tempo-landing-kmyncmnd3-mathieu-akoubia.vercel.app/',
    details: [
      'Landing page conceptualisée pour un client',
      'Projet d\'application destinée aux enfants',
      'Objectif : conversion de nouveaux clients',
      'Développée avec Next.js et Tailwind CSS',
    ],
  },
  {
    num:     '04',
    name:    'Sozia',
    type:    'Application Mobile · Bien-être',
    tagline: 'Application Flutter d\'exercices de bien-être, en cours de développement.',
    techs:   ['Flutter', 'Firebase', 'Dart'],
    status:  'EN DEV',
    img:     '/assets/images/application%20Sozia.png',
    color:   'linear-gradient(135deg, #059669 0%, #10B981 100%)',
    emoji:   '🌿',
    github:  null,
    details: [
      'Application Flutter en cours de développement',
      'Exercices de bien-être stockés en base de données Firebase',
      'Base de données NoSQL (Firestore)',
    ],
  },
];

const Projects = () => {
  const [expanded, setExpanded] = useState({});
  const toggle = (num) => setExpanded(prev => ({ ...prev, [num]: !prev[num] }));

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.inner}>

        <div className={styles.header}>
          <span className={styles.sectionLabel}>{'// projets'}</span>
          <h2 className={styles.sectionTitle}>Mes Projets</h2>
        </div>

        <div className={styles.grid}>
          {PROJECTS.map(({ num, name, type, tagline, techs, status, img, color, emoji, github, liveUrl, details, stat }) => (
            <article key={num} className={styles.card}>

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

                {expanded[num] && details && (
                  <ul className={styles.details}>
                    {details.map((d, i) => <li key={i}>{d}</li>)}
                  </ul>
                )}

                <button className={styles.toggleBtn} onClick={() => toggle(num)}>
                  {expanded[num] ? 'Voir moins ↑' : 'Voir plus ↓'}
                </button>

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

                {stat && (
                  <div className={styles.cardStats}>
                    <div className={styles.statItem}>
                      <span className={styles.statVal}>{stat.val}</span>
                      <span className={styles.statLabel}>{stat.label}</span>
                    </div>
                  </div>
                )}

                {(github || liveUrl) && (
                  <div className={styles.linkRow}>
                    {github && (
                      <a href={github} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                        <SiGithub size={14} />
                        Voir sur GitHub
                      </a>
                    )}
                    {liveUrl && (
                      <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={styles.linkBtnPrimary}>
                        Voir le site ↗
                      </a>
                    )}
                  </div>
                )}
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
