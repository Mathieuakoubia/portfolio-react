import React from 'react';
import styles from './Ticker.module.css';

const ITEMS = ['React', 'Flutter', 'TypeScript', 'Node.js', 'Firebase', 'Python', 'Next.js', 'MongoDB', 'Dart', 'Azure', 'Docker', 'PostgreSQL'];
const DOUBLED = [...ITEMS, ...ITEMS];

const Ticker = () => (
  <div className={styles.ticker} aria-hidden="true">
    <div className={styles.track}>
      {DOUBLED.map((item, i) => (
        <span key={i} className={styles.item}>
          {item}<span className={styles.dot}>·</span>
        </span>
      ))}
    </div>
  </div>
);

export default Ticker;
