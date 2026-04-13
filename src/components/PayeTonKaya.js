import React from 'react';

function PayeTonKaya() {
  return (
    <div className="project-card paye-ton-kaya">
      <div className="card-header">
        <div className="card-title">
          <h3>Paye Ton Kaya</h3>
          <span className="badge-flutter">Flutter</span>
        </div>
      </div>

      <div className="animation-container wave-animation">
        <div className="wave wave-1"></div>
        <div className="wave wave-2"></div>
        <div className="wave wave-3"></div>
        <div className="money-icon">Paye</div>
      </div>

      <div className="card-content">
        <h4>Simplifier les paiements en un coup</h4>
        <p className="description">
          Application mobile intuitive dédiée à la gestion simplifiée des paiements.
        </p>
        
        <div className="features">
          <div className="feature-item">Transactions rapides</div>
          <div className="feature-item">Sécurisé</div>
          <div className="feature-item">Interface fluide</div>
        </div>

        <div className="stats">
          <div className="stat">
            <div className="stat-value animated-number">1k+</div>
            <div className="stat-label">Utilisateurs</div>
          </div>
          <div className="stat">
            <div className="stat-value animated-number">99%</div>
            <div className="stat-label">Satisfaction</div>
          </div>
        </div>
      </div>

      <div className="card-footer">
        <button className="btn-primary">Voir le projet</button>
      </div>
    </div>
  );
}

export default PayeTonKaya;
