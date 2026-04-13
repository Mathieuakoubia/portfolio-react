function Hero() {
    return (
        
  <header className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="hero-pretitle">Bienvenue sur mon site web</span>
          <h1>Bonjour, je suis Akoubia Mathieu</h1>
          <p>
            Développeur web passionné par différents langages et applications mobiles. Je crée des expériences
            modernes, fluides et orientées utilisateur.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">Voir mes travaux</button>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-image">
            <img src="/logo192.png" alt="Photo de profil" />
          </div>
          <div className="hero-card-details">
            <p className="hero-card-name">Akoubia Mathieu</p>
            <p className="hero-card-role">Développeur Full Stack & Mobile</p>
          </div>
        </div>
      </div>
    </header>
    );
}

export default Hero;