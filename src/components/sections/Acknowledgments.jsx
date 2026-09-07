import React from 'react';
import { acknowledgments } from '../../data/storytellingData';
import styles from '../../styles/Acknowledgments.module.css';

const Acknowledgments = () => (
  <section id="acknowledgments" className={styles.acknowledgments}>
    <div className={styles.inner}>
      <div className={styles.header}>
        <span className={styles.pill}>{acknowledgments.tag}</span>
      </div>

      <div className={styles.list}>
        {acknowledgments.entries.map(({ label, message }) => (
          <div key={label} className={styles.entry}>
            <p className={styles.entryLabel}>{label}</p>
            <p className={styles.entryMessage}>{message}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Acknowledgments;
