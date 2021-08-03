import React from 'react';

import Logo from '../components/image/Logo';
import Gnb from '../components/header/Gnb';
import SectionContainer from './SectionContainer';
import './Header.css';

const Header = () => {
    function gnb_hov_enter() {
        const hov_box = document.querySelector('.gnb_hov_box');
        hov_box.classList.add('gnb_hov_box_ac');
    }
    function gnb_hov_leave() {
        const hov_box = document.querySelector('.gnb_hov_box');
    
        hov_box.classList.remove('gnb_hov_box_ac');
    }
    return (
        <header className="header">
            <SectionContainer>
                <Logo/>
                <Gnb/>
                <div className="top_menu">
                    <ul>
                        <li className="top_li">
                            <a href="#">로그인</a>
                        </li>
                        <li className="top_li">
                            <a href="#">검색</a>
                        </li>
                        <li className="top_li">
                            <a href="#">일정</a>
                        </li>
                    </ul>
                </div>
            </SectionContainer>
            <div className="gnb_hov_box" onMouseEnter={gnb_hov_enter} onMouseLeave={gnb_hov_leave}></div>
        </header>
    )
}

export default Header;
