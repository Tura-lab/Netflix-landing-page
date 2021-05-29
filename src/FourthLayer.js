import React from 'react';
import './FourthLayer.css';

function FourthLayer() {
    return (
        <div className="second__layer fourth__layer">
            <div className='second__layer_texts'>
                <h1>Watch everywhere.</h1>
                <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h3>
            </div>
            <div className='embedded__video'>
                <img className='tv_image' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt="video"/>
                <video autoPlay loop muted>
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4"/>
                    Can't Load Video
                </video>
            </div>
        </div>
    )
}

export default FourthLayer;
