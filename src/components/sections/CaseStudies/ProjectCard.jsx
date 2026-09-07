import React from 'react';
import MetricBadge from '../../common/MetricBadge.jsx';
import styles from '../../../styles/ProjectCard.module.css';

const ProjectCard = ({ project, onOpen, onOpenDetail }) => {
  // Les projets qui ont un `detail` ouvrent une page dediee ; les autres, la modale.
  const hasDetailPage = Boolean(project.detail);

  const handleOpen = () => {
    if (hasDetailPage && onOpenDetail) {
      onOpenDetail(project);
    } else {
      onOpen(project);
    }
  };

  return (
    <article className={styles.card}>
      <span className={styles.category}>{project.category}</span>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.tagline}>{project.tagline}</p>

      <div className={styles.techRow}>
        {project.techStack.map((tech) => (
          <span key={tech} className={styles.techChip}>{tech}</span>
        ))}
      </div>

      <div className={styles.metricsRow}>
        {project.metrics.map((metric) => (
          <MetricBadge key={metric.label} label={metric.label} value={metric.value} />
        ))}
      </div>

      <button type="button" className={styles.openBtn} onClick={handleOpen}>
        {hasDetailPage ? 'Voir le projet' : "Voir l'etude de cas"}
      </button>
    </article>
  );
};

export default ProjectCard;
