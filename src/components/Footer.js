import React from 'react';
import './Footer.scss';  
import home from '../images/home.svg'; 
import cart from '../images/cart.svg'; 
import notification from '../images/notification.svg'; 
import profile from '../images/profile.svg'; 

function Footer() {
    return (
        <footer>
            <div className="Nav-Footer container">
                <a className="home" href="/">
                    <img src={home} alt="Hem ikon" /> Home
                </a>
                <a href="/kundvagn">
                    <img src={cart} alt="Kundvagn ikon" />
                </a>
                <a href="/notifikationer">
                    <img src={notification} alt="Notifikationer ikon" />
                </a>
                <a href="/användare">
                    <img src={profile} alt="Profil ikon" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
