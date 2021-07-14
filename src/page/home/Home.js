import React from 'react';
import MainLayout from '../../layout/MainLayout';
import SlideBanner from './template/SlideBanner';
import Education from './template/Education';
import SpaceInfo from './template/SpaceInfo';
import Culture from './template/Culture';
import Sns from './template/Sns';
import NewInfo from './template/NewInfo';

const Home = () => {
    return (
        <MainLayout>
            <SlideBanner/>
            <Education/>
            <SpaceInfo/>
            <Culture/>
            <Sns/>
            <NewInfo/>
        </MainLayout>
    )
}

export default Home;
