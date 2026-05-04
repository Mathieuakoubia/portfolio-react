import React from 'react';
import styles from './Ticker.module.css';

const ITEM = 'ABOUT ME';
const COUNT = 14;

const Ticker = () => (
  <div className={styles.tickerOuter} aria-hidden="true">
    <div className={styles.tickerInner}>
      <div className={styles.track}>
        {Array.from({ length: COUNT }).map((_, i) => (
          <span key={i} className={styles.item}>
            {ITEM}&nbsp;<span className={styles.star}>★</span>&nbsp;
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default Ticker;
