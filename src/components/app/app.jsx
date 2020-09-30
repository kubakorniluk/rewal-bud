import React from 'react';
import Header from '../header/header';
import Main from '../main/main';
import Footer from '../footer/footer';
import './app.css';

export default function App() {
    return (
        <React.Fragment>
            <Header />
            <Main />
            <Footer />
        </React.Fragment>
    );
}