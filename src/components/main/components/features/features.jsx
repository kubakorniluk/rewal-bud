import React from 'react';
import './features.css';

export default function Features() {
    return (
        <section className="features">
            <section className="features__card">
                <p>01</p>
                <p>Nasz zespół tworzą doświadczeni pracownicy, którym wykonywanie pracy sprawia przyjemność.</p>
            </section>
            <section className="features__card">
                <p>02</p>
                <p>Gwarantujemy wysoką jakość świadczonych usług oraz poważne podejście do Klienta.</p>
            </section>
            <section className="features__card">
                <p>03</p>
                <p>Zachęcamy do osobistego kontaktu, w ramach którego przedstawimy warunki współpracy.</p>
            </section>
        </section>
    )
}