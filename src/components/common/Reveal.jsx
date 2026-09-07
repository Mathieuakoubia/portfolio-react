import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../../lib/gsap';
import styles from '../../styles/Reveal.module.css';

// Fades and lifts its children into place once the wrapper enters the viewport,
// acting as the "checkpoint" reveal triggered when the flight path reaches a section.
const Reveal = ({ children, as: Tag = 'div', y = 24, duration = 0.8, delay = 0, className = '' }) => {
  const elRef = useRef(null);

  useGSAP(() => {
    gsap.from(elRef.current, {
      opacity: 0,
      y,
      duration,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: elRef.current,
        start: 'top 82%',
        toggleActions: 'play none none reverse',
      },
    });
  }, { scope: elRef });

  return (
    <Tag ref={elRef} className={`${styles.reveal} ${className}`}>
      {children}
    </Tag>
  );
};

export default Reveal;
