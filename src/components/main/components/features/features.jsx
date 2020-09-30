import React from 'react';
import './features.css';

export default function Features() {
    return (
        <section className="features" id="features">
            <div className="features__card">
                <p className="features__card--text">Nasz zespół tworzą doświadczeni pracownicy, którym wykonywanie pracy sprawia przyjemność.</p>
            </div>  
            <div className="features__card">
                <p className="features__card--text">Gwarantujemy wysoką jakość świadczonych usług oraz poważne podejście do Klienta.</p>
            </div>
            <div className="features__card">
                <p className="features__card--text">Zachęcamy do osobistego kontaktu, w ramach którego przedstawimy warunki współpracy.</p>
            </div>
        </section>
    )
}