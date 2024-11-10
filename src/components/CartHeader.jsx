import React from 'react';
import './CartHeader.scss';
import Arrow from '../images/arrow.svg';
import Icon from '../images/icon.svg';
import { Link } from 'react-router-dom';  

const CartHeader = () => {
  return (
    <header>
      <div className="header-cart">
       
        <Link to="/product">
          <img src={Arrow} alt="arrow" />
        </Link>
        <div className="icon-container">
          <img src={Icon} alt="search icon" className="input-icon" />
          <h6 className="icon-Item">3</h6>
        </div>
      </div>
    </header>
  );
};

export default CartHeader;

