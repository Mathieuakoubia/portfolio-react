import React from 'react';
import styles from '../../styles/Navbar.module.css';

const NAV_LINKS = [
  { href: '#hero', label: 'Parcours' },
  { href: '#company', label: 'Alternance' },
  { href: '#case-studies', label: 'Projets' },
  { href: '#education', label: 'Formation' },
  { href: '#skills', label: 'Competences' },
  { href: '#retrospective', label: 'Bilan' },
];

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.logo}>M.AKOUBIA</div>
    <ul className={styles.links}>
      {NAV_LINKS.map(({ href, label }) => (
        <li key={href}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
