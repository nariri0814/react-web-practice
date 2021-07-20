import React from 'react';
import TopBtn from '../components/button/TopBtn';
import Header from './Header';
import Footer from './Footer';

const MainLayout = ({children}) => {
    return (
        <>
            <TopBtn/>
            <Header/>

            {children}
            <Footer/>
        </>
    )
}

export default MainLayout;
