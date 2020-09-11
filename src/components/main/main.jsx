import React from 'react';
import About from './components/about/about';
import Features from './components/features/features';
import './main.css';
import Statistics from './components/statistics/statistics';

export default function Main() {
    return (
        <main className="main">
            
            <About />
            <Features />
            <Statistics />
        </main>
    )
}