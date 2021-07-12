import React from 'react';
import SlideBanner from './SlideBanner';
import Education from './Education';
import SpaceInfo from './SpaceInfo';
import Culture from './Culture';
import Sns from './Sns';
import NewInfo from './NewInfo';
import './Main.css'

function Main() {
    return (
        <div className="main">
            <SlideBanner/>
            <Education/>
            <SpaceInfo/>
            <Culture/>
            <Sns/>
            <NewInfo/>
        </div>
    )
}

export default Main;
