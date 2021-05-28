import React from 'react';
import './SecondLayer.css';

function SecondLayer() {
    return (
        <div className="second__layer">
            <div className='second__layer_texts'>
                <h1>Enjoy on your TV.</h1>
                <h3>Watch on Smart TVs, Playstation, Xbox, Chromecast. Apple TV, Blu-ray players, and more.</h3>
            </div>
            <div className='embedded__video'>
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="video"/>
                <video autoPlay loop muted>
                    <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4"/>
                    Can't Load Video
                </video>
            </div>
        </div>
    )
}

export default SecondLayer;
