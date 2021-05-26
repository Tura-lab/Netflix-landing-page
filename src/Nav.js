import './Nav.css';
import React from 'react';

function Nav() {
    return (
        <div className="nav">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
                alt="netflix-logo" 
                className="nav__logo"
            />
            <button className="nav__button">
                Sign In
            </button>
        </div>
    )
}

export default Nav
