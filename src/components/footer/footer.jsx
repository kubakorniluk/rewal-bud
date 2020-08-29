import React from 'react';
import Copyright from './components/copyright/copyright';
import Form from './components/form/form';
import './footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <Form />
            {/* <Copyright /> */}
        </footer>
    )
}