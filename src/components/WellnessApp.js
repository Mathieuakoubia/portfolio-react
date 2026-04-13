import React from 'react';

function WellnessApp() {
  return (
    <div className="project-card wellness-app">
      <div className="card-header">
        <div className="card-title">
          <h3>App Bien-être</h3>
          <span className="badge-flutter">Flutter</span>
        </div>
        <span className="status-badge">En développement</span>
      </div>

      <div className="animation-container circular-animation">
        <div className="circular-progress">
          <div className="progress-ring">
            <div className="ring-value">72%</div>
          </div>
        </div>
        
        <div className="stats-visual">
          <div className="stat-circle orange"><span>1</span></div>
          <div className="stat-circle green"><span>2</span></div>
          <div className="stat-circle blue"><span>3</span></div>
        </div>
      </div>

      <div className="card-content">
        <h4>Suivi intelligent synchronisé</h4>
        <p className="description">
          Application mobile complète de bien-être en cours de développement avec synchronisation multi-appareils.
        </p>

        <div className="features features-wellness">
          <div className="feature-item">Gestion d'exercices synchronisés</div>
          <div className="feature-item">Gestion de souscription</div>
          <div className="feature-item">Multi-appareil</div>
          <div className="feature-item">Base Firestore NoSQL</div>
        </div>

        <div className="tech-stack">
          <div className="tech-badge">Flutter</div>
          <div className="tech-badge">Firestore</div>
          <div className="tech-badge">Firebase</div>
          <div className="tech-badge">NoSQL</div>
        </div>
      </div>

      <div className="card-footer">
        <button className="btn-primary">Voir le projet</button>
      </div>
    </div>
  );
}

export default WellnessApp;
