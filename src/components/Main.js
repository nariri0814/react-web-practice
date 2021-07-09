import React from 'react';
import SlideBanner from './SlideBanner';
import Education from './Education';
import './Main.css'

function Main() {
    return (
        <div className="main">
            <SlideBanner/>
            <Education/>
        </div>
    )
}

export default Main;
