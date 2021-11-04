import React from 'react';
import '../../assets/css/banner2.css';
import logo_left from '../../assets/images/DAYTONER logo left.png';

export default function Banner2() {
    return(
        <div className="banner2">
            <div className="image-section">
                <img src={logo_left} alt="vlogo_left" />
            </div>
        </div>
    )
}