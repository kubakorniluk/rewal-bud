import React from 'react';
import Features from './components/features/features';
import Renovations from './components/renovations/renovations';
import About from './components/about/about';
import './main.css';

export default function Main() {
    return (
        <main className="main">
            <Features />
            <About />
            <Renovations />
        </main>
    )
}