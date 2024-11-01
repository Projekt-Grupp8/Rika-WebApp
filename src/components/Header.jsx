import React, { useState } from 'react';
import './Header.scss'
import Arrow from '../images/arrow.svg'
import Search from '../images/search.svg'


function Header() {
    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    return (
        <header>
            <div className="header">
                <a href="/">
                    <img src={Arrow} alt="arrow" />
                </a>
                <div className="input-container">
                    <input 
                        type="text" 
                        value={searchText} 
                        onChange={handleSearchChange} 
                        placeholder="Search..."
                    />
                    <img src={Search} alt="search icon" className="input-icon" />
                </div>
            </div>
        </header>
    );
}

export default Header;
