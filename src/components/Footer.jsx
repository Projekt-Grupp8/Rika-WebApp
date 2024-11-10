import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import './Footer.scss';  
import home from '../images/home.svg'; 
import cart from '../images/cart.svg'; 
import notification from '../images/notification.svg'; 
import profile from '../images/profile.svg'; 

function Footer() {
    return (
        <footer>
            <div className="Nav-Footer container">
              
                <Link className="home" to="/home">
                    <img src={home} alt="Hem ikon" /> Home
                </Link>
                <Link to="/cart">
                    <img src={cart} alt="Kundvagn ikon" />
                </Link>
                <Link to="/notifikationer">
                    <img src={notification} alt="Notifikationer ikon" />
                </Link>
                <Link to="/user">
                    <img src={profile} alt="Profil ikon" />
                </Link>
            </div>
        </footer>
    );
}

export default Footer;
