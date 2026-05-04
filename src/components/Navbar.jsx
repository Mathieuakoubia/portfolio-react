import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.logo}>M.AKOUBIA</div>
    <ul className={styles.links}>
      <li><a href="#hero">HOME</a></li>
      <li><a href="#projects">PROJETS</a></li>
      <li><a href="#skills">SKILLS</a></li>
      <li><a href="#contact">CONTACT</a></li>
    </ul>
    <span className={styles.badge}>DISPO !</span>
  </nav>
);

export default Navbar;
