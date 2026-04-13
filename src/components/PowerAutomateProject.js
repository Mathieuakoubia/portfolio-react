import React from 'react';

function PowerAutomateProject() {
  return (
    <div className="project-card power-automate">
      <div className="card-header">
        <div className="card-title">
          <h3>Automatisation Excel</h3>
          <span className="badge-automation">Power Automate</span>
        </div>
      </div>

      <div className="animation-container pipeline-animation">
        <div className="pipeline">
          <div className="pipeline-stage">
            <div className="stage-icon excel-icon">XL</div>
            <p>Excel</p>
          </div>
          <div className="pipeline-arrow">→</div>
          <div className="pipeline-stage">
            <div className="stage-icon process-icon">TS</div>
            <p>TypeScript</p>
          </div>
          <div className="pipeline-arrow">→</div>
          <div className="pipeline-stage">
            <div className="stage-icon output-icon">OK</div>
            <p>Formaté</p>
          </div>
        </div>
        
        <div className="particles">
          <div className="particle p1"></div>
          <div className="particle p2"></div>
          <div className="particle p3"></div>
          <div className="particle p4"></div>
        </div>
      </div>

      <div className="card-content">
        <h4>De 2h de travail manuel à 30 secondes</h4>
        <p className="description">
          Dispositif Power Automate qui lance des scripts TypeScript pour transformer et formater les fichiers Excel selon les normes de l'entreprise.
        </p>

        <div className="features">
          <div className="feature-item">Automatisation complète</div>
          <div className="feature-item">Gain de temps 240 min → 30 sec</div>
          <div className="feature-item">Sans erreur</div>
        </div>

        <div className="comparison">
          <div className="before">
            <strong>Avant :</strong> 2 heures
          </div>
          <div className="after">
            <strong>Après :</strong> 30 secondes
          </div>
        </div>
      </div>

      <div className="card-footer">
        <button className="btn-primary">Voir le projet</button>
      </div>
    </div>
  );
}

export default PowerAutomateProject;
