import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '../../lib/gsap';
import styles from '../../styles/FlightPath.module.css';

// Section anchors the flight path travels through, in narrative order.
const CHECKPOINT_IDS = ['hero', 'company', 'case-studies', 'retrospective', 'vision'];

function buildFlightCurve(points) {
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i += 1) {
    const from = points[i];
    const to = points[i + 1];
    const midY = from.y + (to.y - from.y) / 2;
    d += ` C ${from.x} ${midY}, ${to.x} ${midY}, ${to.x} ${to.y}`;
  }
  return d;
}

const FlightPath = () => {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const planeRef = useRef(null);
  const [geometry, setGeometry] = useState(null);

  const measure = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const width = container.clientWidth;
    const height = container.scrollHeight;

    const points = CHECKPOINT_IDS.map((id, index) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const rect = el.getBoundingClientRect();
      return {
        x: index % 2 === 0 ? width * 0.24 : width * 0.76,
        y: rect.top - containerRect.top + rect.height * 0.35,
      };
    }).filter(Boolean);

    if (points.length < 2 || !width || !height) return;

    const next = { width, height, d: buildFlightCurve(points) };
    setGeometry((prev) => (
      prev && prev.d === next.d && prev.width === next.width && prev.height === next.height
        ? prev
        : next
    ));
  }, []);

  // Runs once on mount (plus after images finish loading and on resize) so the path is
  // measured after every section - including the CaseStudies pin spacer - has settled.
  // Deliberately does NOT listen to ScrollTrigger's own "refresh" event: doing so while
  // this effect also calls ScrollTrigger.refresh() would set up a measure -> refresh ->
  // measure feedback loop that keeps resetting the draw progress mid-scroll.
  useLayoutEffect(() => {
    measure();
    const raf = requestAnimationFrame(measure);
    window.addEventListener('load', measure);

    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(measure, 150);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      window.removeEventListener('load', measure);
      window.removeEventListener('resize', onResize);
    };
  }, [measure]);

  useGSAP(() => {
    if (!geometry || !pathRef.current || !planeRef.current) return;

    const path = pathRef.current;
    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

    gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    })
      .to(path, { strokeDashoffset: 0, ease: 'none' }, 0)
      .to(planeRef.current, {
        ease: 'none',
        motionPath: {
          path,
          align: path,
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
        },
      }, 0);

    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, { scope: containerRef, dependencies: [geometry] });

  return (
    <div ref={containerRef} className={styles.flightPath} aria-hidden="true">
      {geometry && (
        <svg
          className={styles.svg}
          viewBox={`0 0 ${geometry.width} ${geometry.height}`}
          preserveAspectRatio="none"
        >
          <path ref={pathRef} className={styles.path} d={geometry.d} />
          <g ref={planeRef}>
            <path className={styles.planeBody} d="M 22 0 L -16 13 L -5 0 L -16 -13 Z" />
            <path className={styles.planeFold} d="M -16 13 L -5 0 L -16 -13" />
          </g>
        </svg>
      )}
    </div>
  );
};

export default FlightPath;
