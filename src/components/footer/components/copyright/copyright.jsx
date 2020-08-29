import React from 'react';
import './copyright.css';

let date = new Date();

export default function Copyright() {
    return (
        <section className="copyright">
            <small className="copyright__text">&copy; REWAL-BUD {date.getFullYear()}</small>
        </section>
    )
}