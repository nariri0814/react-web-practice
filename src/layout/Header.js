import React from 'react';

import Logo from '../components/imge/Logo';
import Gnb from '../components/header/Gnb';
import './Header.css';
// import logo from './img/main-logo.png';



const Header = () => {
    return (
        <header className="header">
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
            

            
        </header>
    )
}

export default Header;
