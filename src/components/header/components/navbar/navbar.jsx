import React from 'react';
import './navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <section>
                <a href="#" className="navbar__item navbar__item--logo">rewalbud</a>
            </section>
            <section>
                <a href="#" className="navbar__item">O nas</a>
                <a href="#" className="navbar__item">Portfolio</a>
                <a href="#" className="navbar__item">Oferta</a>
                <a href="#" className="navbar__item">Kontakt</a>    
            </section>
        </nav>
    )
}