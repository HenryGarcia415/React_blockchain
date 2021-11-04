import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import gallery from '../../assets/images/gallery.png';
import logo from '../../assets/images/M9E decals.png';
import '../../assets/css/gallery.css';

export default function Gallery() {
    return(
        <div className="carousel-wrapper">
            <Carousel >
                <div className="gallery_carousel">
                        <img src={gallery} alt="gallery"/>
                </div>
                <div  className="gallery_carousel">
                    <img src={logo} alt="logo" />
                </div>
            </Carousel>
        </div>
    )
}