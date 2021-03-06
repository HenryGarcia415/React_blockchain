import React from 'react';
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
                <div className="social_icons">
                    <a href="/"><img src={twitter} alt="twitter" /></a>
                    <a href="/"><img src={discord} alt="discord" /></a>
                    <a href="/"><img src={social_icon} alt="social_icon" /></a>
                    <button type="button">CONNECT WALLET</button>
                </div>
            </div>
            <div className="mint_button">
                <p>MINT</p>
            </div>
        </div>
    );
};