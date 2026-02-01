import React from 'react';
import Card from "./Card";

function Projects() {
    return (
       
        <section className="projets-section">
        <h2>Mes Réalisations</h2>
        
        {/* je rajoute les carte du fichier Card */}
        
        <Card 
                title="Site E-commerce" 
                desc="Un site de vente en ligne créé avec HTML et CSS." 
            />

            <Card 
                title="To-Do List" 
                desc="Une application pour gérer ses tâches en JavaScript." 
            />

            <Card 
                title="Mon Portfolio" 
                desc="Le site que tu es en train de regarder, fait avec React !" 
            />
      </section>


    );
}

export default Projects;
