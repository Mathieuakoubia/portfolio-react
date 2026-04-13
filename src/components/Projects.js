import React from 'react';
import PayeTonKaya from "./PayeTonKaya";
import PowerAutomateProject from "./PowerAutomateProject";
import WellnessApp from "./WellnessApp";

function Projects() {
    return (
        <section className="projets-section">
            <h2>Mes Réalisations</h2>
            
            <div className='projects-grid'>
                <PayeTonKaya />
                <PowerAutomateProject />
                <WellnessApp />
            </div>
        </section>
    );
}

export default Projects;
