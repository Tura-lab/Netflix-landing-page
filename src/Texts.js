import React from 'react';
import './Texts.css';

function Texts() {
    return (
        <div className="bellow__header">
            <div className='inside_bellow_header'>
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h3>Watch anywhere. Cancel anytime.</h3>
                <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
                <div className="final__texts"></div>
                <input type="text" placeholder='Email address'/>
                <button>Get Started ></button>
            </div>
        </div>
    )
}

export default Texts;
