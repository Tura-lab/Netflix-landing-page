import React from 'react';
import './SecondLayer.css';
import './ThirdLayer.css';

function ThirdLayer() {
    return (
        <div className="second__layer">
            <div className='embedded__video embedded__video_third'>
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="video"/>
                <div className="downloader__animation">
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="stranger things"/>
                    <div className="downloader__animation_text">
                        <h3>Stranger Things</h3>
                        <h4>Downloading...</h4>
                    </div>
                    <div className="gif">
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="olla"/>
                    </div>
                </div>
            </div>
            <div className='second__layer_texts'>
                <h1>Download your shows to watch offline.</h1>
                <h3>Save your favorites easily and always have something to watch.</h3>
            </div>
           
        </div>
    )
}

export default ThirdLayer;
