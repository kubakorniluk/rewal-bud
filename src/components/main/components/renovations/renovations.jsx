import React from 'react';
import './renovations.css';
export default function Renovations() {
    return (
        <section className="renovations" id="renovations">
            <ul className="renovations__gallery">
                <li className="renovations__gallery--text">
                    <h2>Prace remontowo-wykończeniowe</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab doloribus eveniet molestias modi id provident unde quibusdam. Commodi corrupti aut quo architecto ad temporibus voluptatem fugit pariatur est, reprehenderit facere.</p>
                </li>
                <li className="renovations__gallery--image">
                    <img src="https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
                </li>
                <li className="renovations__gallery--image">
                    <img src="https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
                </li>
                {/* <li className="renovations__gallery--image">
                    <img src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
                </li> */}
            </ul>
        </section>
    )
}