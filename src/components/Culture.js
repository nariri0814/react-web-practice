import React from 'react'
import { RiArrowDropDownFill } from "react-icons/ri";
import { BsGeoAlt, BsTable } from "react-icons/bs";
import './Culture.css';

const Culture = () => {
    return (
        <div className="culture">
            <div className="cul_tit">
                <h1>나와 꼭 맞는 생활 문화</h1>
                <p>나와 꼭 맞는 생활문화를 검색해 보세요</p>
            </div>
            <div className="cul_opt_sec">
                <div className="cul_arrow">
                    <img src="./img/arrow_left.svg"/>
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
                <div className="cul_arrow">
                <img src="./img/arrow_right.svg"/>
                </div>
            </div>
            <div className="cul_desc_sec">
                <div className="cul_desc_box">
                    <div className="cul_desc_img">
                        <img src="./img/pcFile_1625632151_0.png"/>
                    </div>
                    <div className="cul_desc_txt">
                        <h4><span className="txt_ing">진행중</span>화성인의 밥상: 홈 브런치</h4>
                        <p><span><BsGeoAlt/></span>화성시생활문화센터</p>
                        <p><span><BsTable/></span>2021.6.23 ~ 2021.07.13</p>
                    </div>
                </div>
                <div className="cul_desc_box">
                    <div className="cul_desc_img">
                        <img src="./img/pcFile_1625632151_0.png"/>
                    </div>
                    <div className="cul_desc_txt">
                        <h4><span className="txt_ing">진행중</span>화성인의 밥상: 홈 브런치</h4>
                        <p><span><BsGeoAlt/></span>화성시생활문화센터</p>
                        <p><span><BsTable/></span>2021.6.23 ~ 2021.07.13</p>
                    </div>
                </div>
                <div className="cul_desc_box">
                    <div className="cul_desc_img">
                        <img src="./img/pcFile_1625632151_0.png"/>
                    </div>
                    <div className="cul_desc_txt">
                        <h4><span className="txt_ing">진행중</span>화성인의 밥상: 홈 브런치</h4>
                        <p><span><BsGeoAlt/></span>화성시생활문화센터</p>
                        <p><span><BsTable/></span>2021.6.23 ~ 2021.07.13</p>
                    </div>
                </div>
                <div className="cul_more_btn">더보기</div>
            </div>
        </div>
    )
}

export default Culture
