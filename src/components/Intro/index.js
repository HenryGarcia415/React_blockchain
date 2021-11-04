import React from 'react';
import '../../assets/css/intro.css';
import Intro_image from '../../assets/images/M9E SILHOUETTE.png';

export default function Intro() {
    return(
        <div className="intro_section">
            <div className="intro_image">
                <img src={Intro_image} alt="intro_image" />
                <p>NINE COLLECTIONS OF NINEHUNDRED NINETY NINE</p>
            </div>
        </div>
    )
}