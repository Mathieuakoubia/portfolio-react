import React from 'react';
import styles from './Hero.module.css';

let photo = null;
try { photo = require('../assets/photo.jpg'); } catch (_) {}

const Hero = () => (
  <section id="hero" className={styles.hero}>
    <div className={styles.inner}>

      {/* ── Colonne gauche (260px) ── */}
      <div className={styles.leftCol}>

        <div className={styles.photoBlock}>
          {photo
            ? <img src={photo} alt="Mathieu Akoubia" className={styles.photo} />
            : <div className={styles.photoPlaceholder}>M.A</div>
          }
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
            <a href="https://twitter.com/Mathieuakoubia" target="_blank" rel="noopener noreferrer" className={styles.widgetRow}>
              <span className={styles.widgetIcon}>𝕏</span>
              <span>@Mathieuakoubia</span>
            </a>
          </div>
        </div>

      </div>

      {/* ── Colonne droite ── */}
      <div className={styles.rightCol}>

        <div className={styles.introBlock}>
          <h1 className={styles.hello}>Bonjour !</h1>
          <p className={styles.introText}>
            Je m'appelle <strong>Mathieu Akoubia</strong>. Développeur{' '}
            <strong>Full Stack</strong> passionné, spécialisé en{' '}
            <strong>React</strong>, <strong>Node.js</strong> et{' '}
            <strong>Intelligence Artificielle</strong>. Basé à{' '}
            <strong>Nantes</strong>, en alternance chez{' '}
            <strong>Solutions&amp;co</strong>, je conçois des apps mobiles,
            des outils d'automatisation et des solutions IA sur mesure.
            Explore mon portfolio pour découvrir ce que je construis !
          </p>
          <div className={styles.btnRow}>
            <a href="#projects" className={styles.btn}>VOIR MES PROJETS</a>
            <a href="#contact" className={styles.btnAlt}>ME CONTACTER</a>
          </div>
        </div>

        <div className={styles.statsGrid}>
          <div className={`${styles.statBox} ${styles.statYellow}`}>
            <span className={styles.statVal}>2+</span>
            <span className={styles.statLabel}>ANS D'EXP</span>
          </div>
          <div className={`${styles.statBox} ${styles.statRouge}`}>
            <span className={styles.statVal}>5+</span>
            <span className={styles.statLabel}>TECHNOS</span>
          </div>
          <div className={`${styles.statBox} ${styles.statCream}`}>
            <span className={styles.statVal}>C1</span>
            <span className={styles.statLabel}>ANGLAIS</span>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default Hero;
