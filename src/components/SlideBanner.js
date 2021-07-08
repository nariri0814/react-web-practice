import React, { useEffect, useState } from 'react';
import './SlideBanner.css'

const SlideBanner = () => {
    
    
    const [ state, setState ] = useState({opacity:1});


    useEffect ( () => {

        const slide = document.querySelectorAll('.main_slide');
        state.style.opacity=1;
// console.log(slide)
        setInterval( () => {
            slide.forEach(banner => {
                banner.style.opacity = 0;
                // console.log(banner)
            })
            
        }, 1000);
    },[]);
    

    return (
        <div>
            <section className="main_slide_sec">
                <div className="main_slide_box">
                    <div className="main_slide" id="slide1">
                        <div className="slide_txt">
                            <p className="s_txt1">경기도 생활문화의 중심</p>
                            <p className="s_txt2">일상에 문화를<br/>물들이다</p>
                        </div>
                        <img src="./img/garland.gif" alt="garland"/>
                    </div>
                    <div className="main_slide" id="slide2">
                        <div className="slide_txt">
                            <p className="s_txt1">경기도민을 위한 생활문화의 허브</p>
                            <p className="s_txt2">문화의 주체자로<br/>성장하다</p>
                        </div>
                        <img src="./img/vane.gif" alt="vane"/>
                    </div>
                    <div className="main_slide" id="slide3">
                        <div className="slide_txt">
                            <p className="s_txt1">지역주민 누구나 자유롭게 이용할 수 있는<br/>생활문화공간</p>
                            <p className="s_txt2">경기도민과<br/>만나다</p>
                        </div>
                        <img src="./img/fire.gif" alt="fire"/>
                    </div>
                </div>
                <div className="indi_box">
                    <div className="indi_line"></div>
                    <div className="indi_num">1</div>
                    <div className="indi_line"></div>
                    <div className="indi_num">2</div>
                    <div className="indi_line"></div>
                    <div className="indi_num">3</div>
                </div>
            </section>
        </div>
    )
}

export default SlideBanner;
