import React from 'react';
import SlideBanner from './SlideBanner';
import Education from './Education';
import SpaceInfo from './SpaceInfo';
import './Main.css'

function Main() {
    return (
        <div className="main">
            <SlideBanner/>
            <Education/>
            <SpaceInfo/>
        </div>
    )
}

export default Main;
