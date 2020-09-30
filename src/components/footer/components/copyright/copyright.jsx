import React from 'react';
import './copyright.css';

let date = new Date();

export default function Copyright() {
    return (
        <section className="copyright">
            <small className="copyright__text">Wszelkie prawa zastrzeżone. &copy; REWAL-BUD {date.getFullYear()}</small>
            <small className="copyright__text">NIP: 5322074490</small>
        </section>
    )
}