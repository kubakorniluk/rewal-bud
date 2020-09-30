import React from 'react';
import './renovations.css';
export default function Renovations() {
    return (
        <section className="renovations" id="renovations">
            <h1 className="renovations__title">Ostatnie realizacje</h1>
            <ul className="renovations__gallery">
                <li className="renovations__gallery--image">
                    <img src="https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
                </li>
                <li className="renovations__gallery--image">
                    <img src="https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
                </li>
                <li className="renovations__gallery--image">
                    <img src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
                </li>
                <li className="renovations__gallery--image">
                    <img src="https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
                </li>
            </ul>
        </section>
    )
}