import React from 'react';
import Reveal from '../common/Reveal.jsx';
import { visionFuture } from '../../data/storytellingData';
import styles from '../../styles/VisionFuture.module.css';

const VisionFuture = () => (
  <section id="vision" className={styles.vision}>
    <div className={styles.inner}>
      <Reveal>
        <div className={styles.header}>
          <span className={styles.pill}>{visionFuture.tag}</span>
        </div>

        <p className={styles.summary}>{visionFuture.summary}</p>

        <ul className={styles.goals}>
          {visionFuture.goals.map((goal) => (
            <li key={goal}>{goal}</li>
          ))}
        </ul>
      </Reveal>
    </div>
  </section>
);

export default VisionFuture;
