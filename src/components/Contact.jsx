import React from 'react';
import styles from './Contact.module.css';

const CONTACTS = [
  { label: 'MAIL',     value: 'mathieuakoubia@gmail.com', href: 'mailto:mathieuakoubia@gmail.com', icon: '✉' },
  { label: 'TEL',      value: '06 22 56 61 58',           href: 'tel:+33622566158',                 icon: '☎' },
  { label: 'LINKEDIN', value: '@mathieu-akoubia',          href: 'https://linkedin.com/in/mathieu-akoubia', icon: 'in' },
  { label: 'TWITTER',  value: '@Mathieuakoubia',           href: 'https://twitter.com/Mathieuakoubia',      icon: '𝕏' },
];

const Contact = () => (
  <section id="contact" className={styles.contact}>
    <div className={styles.inner}>

      <div className={styles.left}>
        <span className={styles.pill}>Contact</span>
        <h2 className={styles.title}>TRAVAILLONS<br />ENSEMBLE !</h2>
        <a href="mailto:mathieuakoubia@gmail.com" className={styles.btn}>
          Envoyer un message
        </a>
      </div>

      <div className={styles.right}>
        <div className={styles.contactCard}>
          <div className={styles.cardHeader}>
            <div className={styles.cardX}>✕</div>
            <span className={styles.cardTitle}>——— CONTACT ———</span>
          </div>
          <div className={styles.rows}>
            {CONTACTS.map(({ label, value, href, icon }) => (
              <a key={label} href={href} className={styles.row} target="_blank" rel="noopener noreferrer">
                <span className={styles.rowIcon}>{icon}</span>
                <div>
                  <span className={styles.rowLabel}>{label}</span>
                  <span className={styles.rowValue}>{value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default Contact;
