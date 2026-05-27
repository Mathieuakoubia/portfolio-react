import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.inner}>
      <span className={styles.copy}>© 2026 Mathieu Akoubia · Tous droits réservés</span>
      <span className={styles.built}>Built with React ✦</span>
    </div>
  </footer>
);

export default Footer;
