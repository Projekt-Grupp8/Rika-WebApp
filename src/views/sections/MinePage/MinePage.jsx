import React, { useState } from 'react';
import CategoryPage from '../categoryPage/CategoryPage'
import Reviews from '../client-reviews/client-reviews'
import Search from '../../../images/search.svg'
import Menu from '../../../images/menu.svg'
import { Link } from 'react-router-dom';

function MinePage () {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e) => {
      setSearchText(e.target.value);
  };


  return (
    <section id="mine-page">
        <div className="container">
          <div className="mine-welcome">
            <h1>Welcome,</h1>
            <p>Our Rika Fashion App</p>
          </div>
          <div className="mine-filter">
            <div className="input-container">
            <img src={Search} alt="search icon" className="input-search" />
              <input 
                className="input-field"
                type="text" 
                value={searchText} 
                onChange={handleSearchChange} 
                placeholder="Search..."   
              />
            </div> 
            <Link to="/categorylist">
              <img src={Menu} alt="button for category menu" className="category-icon" />
            </Link>
          </div>
        </div>
        <CategoryPage />
        <Reviews />
    </section>
  )

};
export default MinePage;