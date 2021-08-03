import React, { useEffect } from 'react';
import './SlideBanner.css'

const SlideBanner = () => {

    useEffect ( () => {
        // const slide = document.querySelectorAll('.main_slide');
// console.log(slide.length)
        
            // slide.forEach(banner => {
            //     // console.log(banner)
            //     setInterval( () => {
            //         banner.style.opacity = 0;
            //     }, 1000);
            // })

            // function SlideClosure() {
            //     const slide = document.querySelectorAll('.main_slide')
            //     for(var i = 0; i < slide.length; i++) {
            //         slide[i].style.opacity = 0.2;
            //         // console.log(i)
            //         (function(sl_i) { 
            //             setInterval(function(){
            //                 slide[sl_i].style.opacity = 1;
            //                 console.log(sl_i)
            //             }, 1000)
            //         })(i)
            //     }
            // }
            // SlideClosure()
        
        function Slide() {
            let slide = document.getElementsByClassName('main_slide');
            let indi_line = document.getElementsByClassName('indi_line');
            let indi_num = document.getElementsByClassName('indi_num');

            let sl_count = slide.length;
            let curr_i = 0;
            let opt = 0
            let interval = '';
            slide[0].style.opacity = 1;
            indi_line[0].style.display = 'block';
            indi_num[0].style.opacity = 1;
            indi_num[0].style.fontWeight = '900';

            interval = setInterval(() => {
                slide[curr_i % sl_count].style.opacity = (-0.08 * opt);
                slide[(curr_i + 1) % sl_count].style.opacity = (1 * (1 - opt));
                
                indi_line[curr_i % sl_count].style.display = 'none';
                indi_line[(curr_i + 1) % sl_count].style.display = 'block';
                indi_num[curr_i % sl_count].style.opacity = 0.4;
                indi_num[curr_i % sl_count].style.fontWeight = '400';
                indi_num[(curr_i + 1) % sl_count].style.opacity = 1;
                indi_num[(curr_i + 1) % sl_count].style.fontWeight = '900';

                curr_i++;
            }, 2500);
        }
        Slide()
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
