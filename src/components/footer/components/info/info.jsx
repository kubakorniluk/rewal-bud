import { info } from 'autoprefixer';
import React from 'react';
import './info.css';

function Info() {
    return ( 
        <address className="info">
            <div className="info__address">
                <h1 className="info__title">Adres:</h1>
                <p className="info__text">ul. Kard. St. Wyszyńskiego 14, 05-400 Józefów</p>
            </div>
            <div className="info__contact">
                <div className="info_phone">
                    <h1 className="info__title">Telefon:</h1>
                    <p className="info__text">886 157 489</p>
                </div>
                <div className="info__mail">
                    <h1 className="info__title">E-mail:</h1>
                    <p className="info__text">kontakt@rewalbud.pl</p>
                </div>
            </div>
        </address> 
    );
}
 
export default Info;