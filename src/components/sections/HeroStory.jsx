import React from 'react';
import Reveal from '../common/Reveal.jsx';
import { heroStory } from '../../data/storytellingData';
import styles from '../../styles/HeroStory.module.css';

const HeroStory = () => (
  <section id="hero" className={styles.hero}>
    <div className={styles.inner}>
      <Reveal>
        <span className={styles.tag}>{heroStory.tag}</span>
        <h1 className={styles.name}>{heroStory.name}</h1>
        <p className={styles.role}>{heroStory.role}</p>
        <p className={styles.summary}>{heroStory.summary}</p>

        <div className={styles.metaRow}>
          {heroStory.location && <span className={styles.metaChip}>{heroStory.location}</span>}
          {heroStory.contract && <span className={styles.metaChip}>{heroStory.contract}</span>}
        </div>

        <div className={styles.btnRow}>
          <a href="#case-studies" className={styles.btnAlt}>
            Voir les etudes de cas
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);

export default HeroStory;
