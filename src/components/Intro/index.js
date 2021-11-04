import React from 'react';
import '../../assets/css/intro.css';
import Intro_image from '../../assets/images/M9E SILHOUETTE.png';
import Retangular from '../../assets/images/9x999.png';

export default function Intro() {
    return(
        <div className="intro_section">
            <div className="intro_image">
                <img src={Intro_image} alt="intro_image" />
                <p>NINE COLLECTIONS OF NINEHUNDRED NINETY NINE</p>
                <img src={Retangular} alt="9x999" />
                <h2>9 COLLECTIONS OF</h2><br/>
                <h1>999 UNIQUE M9Ξ</h1><br/>
                <h2>// THE NUMBER NINE </h2><br/>
                <p>The number nine is a very iconic element in the<br/> 
                Daytoner universe.Nine is an amazing and very <br/>
                unique number culturally but also mathematically. <br/>
                In some way nine is the highest of all numbers,<br/>
                because everything after that is just<br/>
                combinations of lower numbers. In that sense it<br/>
                symbolises a final frontier. The digital space<br/>
                gives us the chance to explore M9E designs that<br/>
                are not physically manufacturable and opens up<br/>
                possibilities to sell digital and maybe even<br/>
                physical one offsinspired by those new M9E creations.</p>
            </div>
        </div>
    )
}