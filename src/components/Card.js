import React from 'react';

function Card({ title, desc }) {
    return (
        <div className="projet-card">
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    );
}

export default Card;