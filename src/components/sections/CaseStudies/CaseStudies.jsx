import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../../../lib/gsap';
import Reveal from '../../common/Reveal.jsx';
import projectsData from '../../../data/projectsData';
import ProjectCard from './ProjectCard.jsx';
import CaseStudyModal from './CaseStudyModal.jsx';
import styles from '../../../styles/CaseStudies.module.css';

const CaseStudies = ({ onOpenDetail }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(() => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!track || !viewport) return;

    const mm = gsap.matchMedia();

    // Desktop: pin the section and drive the card track horizontally with scroll.
    // When the cards already fit the viewport (few projects, centred layout),
    // there is nothing to scroll, so the pin is skipped entirely.
    mm.add('(min-width: 900px)', () => {
      const distance = () => Math.max(track.scrollWidth - viewport.clientWidth, 0);
      if (distance() < 1) return;

      gsap.to(track, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });
  }, { scope: sectionRef });

  return (
    <section id="case-studies" ref={sectionRef} className={styles.caseStudies}>
      <div className={styles.inner}>
        <Reveal className={styles.header}>
          <span className={styles.label}>Etudes de cas</span>
          <h2 className={styles.title}>Projets en detail</h2>
          <p className={styles.hint}>Faites defiler pour explorer les trois projets.</p>
        </Reveal>
      </div>

      <div ref={viewportRef} className={styles.viewport}>
        <div ref={trackRef} className={styles.track}>
          {projectsData.map((project) => (
            <div key={project.id} className={styles.trackItem}>
              <ProjectCard
                project={project}
                onOpen={setSelectedProject}
                onOpenDetail={onOpenDetail}
              />
            </div>
          ))}
        </div>
      </div>

      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default CaseStudies;
