import React, { useState } from 'react';
import MetricBadge from '../../common/MetricBadge.jsx';
import styles from '../../../styles/CaseStudyModal.module.css';

const TABS = [
  { id: 'context', label: 'Contexte' },
  { id: 'strategyAndChoices', label: 'Choix techniques' },
  { id: 'deliverable', label: 'Livrable' },
  { id: 'critiqueAndLearnings', label: 'Autocritique' },
];

const CaseStudyModal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  if (!project) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.headerRow}>
          <div>
            <span className={styles.category}>{project.category}</span>
            <h3 className={styles.title}>{project.title}</h3>
          </div>
          <button type="button" className={styles.closeBtn} onClick={onClose}>
            Fermer
          </button>
        </div>

        <div className={styles.metricsRow}>
          {project.metrics.map((metric) => (
            <MetricBadge key={metric.label} label={metric.label} value={metric.value} />
          ))}
        </div>

        <div className={styles.tabs}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <p className={styles.tabContent}>{project.content[activeTab]}</p>

        {(project.links.github || project.links.live) && (
          <div className={styles.linkRow}>
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                Voir sur GitHub
              </a>
            )}
            {project.links.live && (
              <a href={project.links.live} target="_blank" rel="noopener noreferrer" className={styles.linkBtnPrimary}>
                Voir le site
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudyModal;
