import React, { useEffect } from 'react';
import styles from '../../../styles/ProjectDetailPage.module.css';

// Page dediee affichee plein ecran quand on clique sur "Voir le projet" depuis une carte.
// App.jsx la monte a la place du portfolio tant qu'un projet avec `detail` est actif.
const ProjectDetailPage = ({ project, onClose }) => {
  const { detail } = project;
  const theme = detail.theme || {};

  useEffect(() => {
    window.scrollTo(0, 0);
    const previous = document.body.style.backgroundColor;
    if (theme.bg) document.body.style.backgroundColor = theme.bg;

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.backgroundColor = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [theme.bg, onClose]);

  return (
    <div
      className={styles.page}
      style={{
        '--project-accent': detail.accent,
        '--project-bg': theme.bg || 'var(--bg)',
        '--project-surface': theme.surface || 'var(--bg-secondary)',
        '--project-ink': theme.ink || 'var(--text)',
        '--project-muted': theme.muted || 'var(--text-muted)',
      }}
    >
      <header className={styles.topbar}>
        <button type="button" className={styles.back} onClick={onClose}>
          &larr; Retour au portfolio
        </button>
        <span className={styles.crumb}>{project.category}</span>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroText}>
          <span className={styles.kicker}>
            {[project.period, project.role].filter(Boolean).join(' · ')}
          </span>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.tagline}>{project.tagline}</p>

          <div className={styles.metrics}>
            {project.metrics.map((metric) => (
              <div key={metric.label} className={styles.metric}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.tech}>
            {project.techStack.map((tech) => (
              <span key={tech} className={styles.techChip}>
                {tech}
              </span>
            ))}
          </div>

          {(project.links?.live || project.links?.github) && (
            <div className={styles.links}>
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkBtn}
                >
                  Voir en ligne
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkBtn}
                >
                  Voir sur GitHub
                </a>
              )}
            </div>
          )}
        </div>

        {detail.hero?.image && (
          <div className={styles.heroImage}>
            <img src={detail.hero.image} alt={detail.hero.alt || project.title} />
          </div>
        )}
      </section>

      <div className={styles.body}>
        {detail.sections.map((section) => (
          <section key={section.id} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>

            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph} className={styles.para}>
                {paragraph}
              </p>
            ))}

            {section.list && (
              <ul className={styles.list}>
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}

            {section.image && (
              <img className={styles.sectionImage} src={section.image} alt={section.title} />
            )}

            {section.video?.youtube && (
              <div className={styles.videoWrap}>
                <iframe
                  src={`https://www.youtube.com/embed/${section.video.youtube}`}
                  title={`${project.title} - video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}

            {section.todo && (
              <p className={styles.todo}>Section en cours de redaction &mdash; a completer.</p>
            )}
          </section>
        ))}

        {detail.palette && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Palette de couleurs</h2>
            <div className={styles.swatches}>
              {detail.palette.map((color) => (
                <div key={color.hex} className={styles.swatch}>
                  <span className={styles.chip} style={{ background: color.hex }} />
                  <strong>{color.name}</strong>
                  <span className={styles.hex}>{color.hex}</span>
                </div>
              ))}
            </div>
            {detail.paletteImage && (
              <img
                className={styles.wideImage}
                src={detail.paletteImage}
                alt={`Palette de couleurs ${project.title}`}
              />
            )}
          </section>
        )}

        {detail.typographyImage && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Typographie</h2>
            <img
              className={styles.wideImage}
              src={detail.typographyImage}
              alt={`Typographie ${project.title}`}
            />
          </section>
        )}

        {detail.gallery && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Le produit en images</h2>
            <div className={styles.gallery}>
              {detail.gallery.map((shot) => (
                <figure key={shot.src} className={styles.shot}>
                  <img src={shot.src} alt={shot.caption} />
                  <figcaption>{shot.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}
      </div>

      <footer className={styles.footer}>
        <button type="button" className={styles.back} onClick={onClose}>
          &larr; Retour au portfolio
        </button>
      </footer>
    </div>
  );
};

export default ProjectDetailPage;
