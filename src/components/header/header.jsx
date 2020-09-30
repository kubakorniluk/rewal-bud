import React from 'react';
import Navbar from './components/navbar/navbar';
import Title from './components/title/title';
import './header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="header__overlay">
              <Navbar />
              <Title />
            </div>
        </header>
    )
}