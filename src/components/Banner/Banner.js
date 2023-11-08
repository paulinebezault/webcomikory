import React from 'react';
import './banner.css';

function Banner({ backgroundImage, showText, addClassName }) {

    return (
        <div className={addClassName ? "banner bannerAbout" : "banner"} >
            <h1 style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("${backgroundImage}")` }}>
                {showText &&
                    <span>Chez vous,<br /> partout et ailleurs</span>}
            </h1>
        </div>
    )
}


export default Banner