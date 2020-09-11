import React from 'react';
import Navbar from './components/navbar/navbar';
import Image from './components/image/image';
import './header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="header__overlay">
                <Navbar />
            </div>
        </header>
    )
}