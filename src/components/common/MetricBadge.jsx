import React from 'react';
import styles from '../../styles/MetricBadge.module.css';

const MetricBadge = ({ label, value }) => (
  <div className={styles.badge}>
    <span className={styles.value}>{value}</span>
    <span className={styles.label}>{label}</span>
  </div>
);

export default MetricBadge;
