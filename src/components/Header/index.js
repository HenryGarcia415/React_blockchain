import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../../assets/css/header.css';
import logo from '../../assets/images/M9E decals.png';
import twitter from '../../assets/images/twitter_icon.png';
import discord from '../../assets/images/discord_icons.png';
import social_icon from '../../assets/images/social icon.png';

export default function Header() {
    return(
        <div className="header_section">
            <div className="header">
                <div className="logo_image">
                    <img src={logo} alt="logo_image" />
                </div>
                <div class="social_icons">
                    <Router>
                        <Link to="/"><img src={twitter} alt="twitter" /></Link>
                        <Link to="/"><img src={discord} alt="discord" /></Link>
                        <Link to="/"><img src={social_icon} alt="social_icon" /></Link>
                        <Link to="/"> 
                            <button type="button">CONNECT WALLET</button>
                        </Link>
                    </Router>   
                </div>
            </div>
            <div className="mint_button">
                <p>MINT</p>
            </div>
        </div>
    );
};