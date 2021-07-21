import React, { useState, useEffect } from 'react'
import { RiArrowDropDownFill } from "react-icons/ri";

import SectionHeader from '../../../components/text/SectionHeader';
import SectionContainer from '../../../layout/SectionContainer';
import CultureSlide from '../../../components/slide/CultureSlide';
import './Culture.css';


const Culture = () => {
    // let culDescSec;
    let culDescBox;
    let culDescBoxWidth;
    // let culIndex = 0;
    // let culPos = 0;

    // let culBoxLength = Array(3).fill().map((v,i) => i+1);
    // let arr = Array(url.length*3).fill('');

    useEffect(() => {
        const culImg1 = document.querySelectorAll('.cul_img1');
        const culImg2 = document.querySelectorAll('.cul_img2');
        const culImg3 = document.querySelectorAll('.cul_img3');
        const culImg4 = document.querySelectorAll('.cul_img4');


        for(let i=0; i<culImg1.length; i++) {
            culImg1[i].style.background = 'url(./img/pcFile_1625632151_0.png) no-repeat center / cover';
        }
        for(let i=0; i<culImg2.length; i++) {
            culImg2[i].style.background = 'url(./img/pcFile_1625632746_0.jpg) no-repeat center / cover';
        }
        for(let i=0; i<culImg3.length; i++) {
            culImg3[i].style.background = 'url(./img/pcFile_1625648663_0.jpg) no-repeat center / cover';
        }
        for(let i=0; i<culImg4.length; i++) {
            culImg4[i].style.background = 'url(./img/pcFile_1625799571_0.jpg) no-repeat center / cover';
        }


        // culDescSec = document.querySelector('.cul_desc_sec');
        culDescBox = document.getElementsByClassName('cul_desc_box');
        culDescBoxWidth = culDescBox[0].clientWidth + 40;
        // // culDescSec.style.left = -culDescBox * culIndex + 'px'
        // culPos = culDescBoxWidth;
        
    }, [])

    function onClickL() {
        // culIndex ++;
        // culDescSec.style.left = -(culPos * culIndex) + 'px';
        
        Array(culDescBox.length).fill().map((v,i) => 
            culDescBox[i].style.left === 
            -(culDescBoxWidth)+'px' ? 
            culDescBox[i].style.transition='none' :
            culDescBox[i].style.transition='left 1s');
        
    }

    function onClickR() {
        // culDescSec.style.left = +(culPos * culIndex) + 'px';
        // culIndex --;

    }
    
    return (
        <SectionContainer>
            <div className="culture">
                <div className="cul_tit">
                    <SectionHeader
                        align="left"
                        color="#222"
                        description="나와 꼭 맞는 생활문화를 검색해 보세요"
                        title1="나와 꼭 맞는 생활 문화"
                        title2=""
                    />
                </div>
                <div className="cul_opt_sec">
                    <div className="cul_arrow cul_arrow_R" onClick={onClickL}>
                        <img src="./img/arrow_left.svg" alt="arrow"/>
                    </div>
                    <div className="cul_opt_box">
                        <div className="cul_opt cul_opt1">
                            <div className="opt_select">구분</div>
                            <div className="opt_arrow"><RiArrowDropDownFill/></div>
                        </div>
                        <div className="cul_opt cul_opt2">
                            <div className="opt_select">장르</div>
                            <div className="opt_arrow"><RiArrowDropDownFill/></div>
                        </div>
                    </div>
                    <div className="cul_arrow cul_arrow_L" onClick={onClickR}>
                        <img src="./img/arrow_right.svg" alt="arrow"/>
                    </div>
                </div>
                
                <div className="culture_slide_wrap">
                    <div className="cul_desc_sec">
                        <CultureSlide/>
                        <CultureSlide/>
                        <CultureSlide/>
                    </div>
                    <div className="cul_more_btn">더보기</div>
                </div>
            </div>
        </SectionContainer>
    )
}

export default Culture
