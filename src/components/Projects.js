import React from 'react';
import Card from "./Card";

function Projects() {

    const projetsData = [
        {
            id :"3",
            title : "projet",
            desc : "premier projet"

        },

        {
            id :"3",
            title : "troisime projet",
            desc : "premier projet"

        },

        {
            id :"3",
            title : "deuxieme projet",
            desc : "premier projet"

        },
    ]
    return (
       
        <section className="projets-section">
        <h2>Mes Réalisations</h2>
        
        {/* je rajoute les carte du fichier Card */}
        
       <div className='projects-grid'>
        <Card
            key={Projects.id}
            title = {Projects.title}
            desc = {Projects.desc}
        />

       </div>
      </section>
  
    );
}

export default Projects;
