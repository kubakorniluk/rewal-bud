import React from 'react';
import './copyright.css';

let date = new Date();

export default function Copyright() {
    return (
        <section className="copyright">
            <small className="copyright__text">&copy; Rewal-Bud {date.getFullYear()}</small>
            <small className="copyright__text">O nas</small>
            <small className="copyright__text">Realizacje</small>
            <small className="copyright__text">Kontakt</small>
            <small className="copyright__text">Created by <a href="https://kubakorniluk.pl/" target="_blank">Kuba Korniluk</a></small>
        </section>
    )
}