import React from 'react';
import '../../assets/css/roadmap.css';
import arrow from '../../assets/images/arrow.png';
import line from '../../assets/images/line.png';
import foundation from '../../assets/images/foundation LOGO.png';

export default function Roadmap() {
    return(
        <div className="roadmap">
            <h1>
                <img src={arrow} alt="arrow" />
                ROADMAP 2021
            </h1>
            <div className="roadmap_image">
                <img src={line} alt="line" />
                <div className="points">
                    <div className="point1">
                        <p className="date1">09/11</p>
                        <h3>M9Ξ website</h3>
                    </div>
                    <div className="point2">
                        <div className="dates">
                            <p className="date2">12/11</p>
                            <p className="date3">14/11</p>
                        </div>
                        <div className="subtitles">
                            <h3 className="subtitle">DesignerCon</h3>
                            <p>9 M9Ξ 1:1</p>
                            <img src={foundation} alt="foundation" />
                            <p className="foundationapp">(on Foundation.app)</p>
                        </div>
                    </div>
                    <div className="point4">
                        <p className="date4">29/11</p>
                        <h3>COLLECTION 1</h3>
                        <p className="mint">MINT DAY</p>
                    </div>
                    <div className="point5">
                        <p className="date5">09/12</p>
                        <h3>COLLECTION 2 & 3 REVEALED </h3>
                    </div>
                </div>
                
            </div>
        </div>
    )
}