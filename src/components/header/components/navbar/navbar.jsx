import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import './navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <section className="navbar__logo">
                <a href="#" className="navbar__item navbar__item--logo">rewalbud</a>
            </section>
                
            <section className="navbar__menu">
                <ScrollIntoView selector="#about">
                    <button href="#" className="navbar__item">O nas</button>
                </ScrollIntoView>
                <ScrollIntoView selector="#renovations">
                    <button href="#" className="navbar__item">Realizacje</button>
                </ScrollIntoView>
                <ScrollIntoView selector="#contact">
                    <button href="#" className="navbar__item navbar__item--contact">Kontakt</button> 
                </ScrollIntoView>
            </section>
        </nav>
    )
}