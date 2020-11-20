import React from 'react';
import Form from './components/form/form';
import Copyright from './components/copyright/copyright';
import Info from './components/info/info';
import './footer.css';

export default function Footer() {
    return (
        <footer className="footer" id="contact">
            <section className="footer__content">
                <section className="footer__content--form">
                    <Form />
                </section>
                <seciton className="footer__content--info">
                    <Info />
                </seciton>
            </section>
            <Copyright />
        </footer>
    )
}