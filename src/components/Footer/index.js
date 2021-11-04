import React from 'react';
import Arrow from '../../assets/images/arrow.png';
import twitter from '../../assets/images/twitter_icon.png';
import discord from '../../assets/images/discord_icons.png';
import social_icon from '../../assets/images/social icon.png';
import '../../assets/css/footer.css';

export default function Footer() {
    return(
        <div className="footer_section">
            <div className="footer_column">
                <div className="first_column">
                    <h1><img src={Arrow} alt="team" />THE TEAM</h1><br/>
                    <p><span>@DAYTONER: </span> ARTIST</p><br/>
                    <p><span>@ARNAUD_SPAM </span>PROJECT</p><br/>
                    <p><span>@?: </span>COMMUNITY</p><br/>
                    <p><span>@?: </span>DEV TEAM</p><br/>
                </div>
                <div className="second_column">
                    <h1><img src={Arrow} alt="join" />JOIN M9E CREW</h1><br/>
                    <p><img src={twitter} alt="twitter"/></p><br/>
                    <p><img src={discord} alt="discord"/></p><br/>
                    <p><img src={social_icon} alt="social"/></p><br/>
                </div>
            </div>
            <div className="bottom">
                <div className="copyright">
                    <p>©2021 Master9Eyes. All rights reserved</p>
                </div>
                <div className="footer_menu">
                    <a href="/">Home</a><br/>
                    <a href="/">Smart Contract</a><br/>
                    <a href="/">Terms & Conditions</a><br/>
                </div>
            </div>
        </div>
    )
}