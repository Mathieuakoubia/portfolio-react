import React from 'react';
import styles from '../../styles/Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.inner}>
      <span className={styles.copy}>2026 Mathieu Akoubia - Tous droits reserves</span>
      <div className={styles.contactLinks}>
        <a href="mailto:mathieuakoubia@gmail.com">mathieuakoubia@gmail.com</a>
        <a href="https://linkedin.com/in/mathieu-akoubia" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
