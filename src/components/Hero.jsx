import React from 'react';
import styles from './Hero.module.css';

const photo = '/assets/images/photo cv.png';

const Hero = () => (
  <section id="hero" className={styles.hero}>
    <div className={styles.inner}>

      {/* ── Colonne gauche : photo + contact ── */}
      <div className={styles.leftCol}>
        <div className={styles.photoBlock}>
          <img src={photo} alt="Mathieu Akoubia" className={styles.photo} />
        </div>
        <div className={styles.photoName}>MATHIEU</div>
        <div className={styles.contactWidget}>
          <div className={styles.widgetHeader}>
            <span className={styles.widgetX}>✕</span>
            <span className={styles.widgetTitle}>CONTACT</span>
          </div>
          <div className={styles.widgetRows}>
            <a href="mailto:mathieuakoubia@gmail.com" className={styles.widgetRow}>
              <span className={styles.widgetIcon}>✉</span>
              <span>mathieuakoubia@gmail.com</span>
            </a>
            <a href="tel:+33622566158" className={styles.widgetRow}>
              <span className={styles.widgetIcon}>☎</span>
              <span>06 22 56 61 58</span>
            </a>
            <a href="https://linkedin.com/in/mathieu-akoubia" target="_blank" rel="noopener noreferrer" className={styles.widgetRow}>
              <span className={styles.widgetIcon}>in</span>
              <span>@mathieu-akoubia</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Colonne droite : typographie pure, pas de boîte ── */}
      <div className={styles.rightCol}>
        <span className={styles.tag}>{'// Full Stack Developer'}</span>
        <h1 className={styles.name}>
          Mathieu<br />
          <span className={styles.nameAccent}>Akoubia.</span>
        </h1>
        <p className={styles.tagline}>
          Je donne vie à vos idées,<br />
          du prototype au produit final.
        </p>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statVal}>2+</span>
            <span className={styles.statLabel}>ans d'expérience</span>
          </div>
        </div>
        <div className={styles.btnRow}>
          <a href="#projects" className={styles.btn}>Voir mes projets</a>
          <a href="#contact" className={styles.btnAlt}>Me contacter</a>
        </div>
      </div>

    </div>
  </section>
);

export default Hero;
