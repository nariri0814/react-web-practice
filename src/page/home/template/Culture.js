import React from 'react'
import { RiArrowDropDownFill } from "react-icons/ri";
import { BsGeoAlt, BsTable } from "react-icons/bs";
import SectionHeader from '../../../components/text/SectionHeader';
import './Culture.css';
import SectionContainer from '../../../layout/SectionContainer';

const Culture = () => {
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
                    <div className="cul_arrow cul_arrow_R">
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
                    <div className="cul_arrow cul_arrow_L">
                    <img src="./img/arrow_right.svg" alt="arrow"/>
                    </div>
                </div>
                <div className="cul_desc_sec">
                    <div className="cul_desc_box">
                        <div className="cul_desc_img">
                            <img src="./img/pcFile_1625632151_0.png" alt="culture_img"/>
                        </div>
                        <div className="cul_desc_txt">
                            <h4><span className="txt_ing">진행중</span>화성인의 밥상: 홈 브런치</h4>
                            <p><span><BsGeoAlt/></span>화성시생활문화센터</p>
                            <p><span><BsTable/></span>2021.6.23 ~ 2021.07.13</p>
                        </div>
                    </div>
                    <div className="cul_desc_box">
                        <div className="cul_desc_img">
                            <img src="./img/pcFile_1625632151_0.png" alt="culture_img"/>
                        </div>
                        <div className="cul_desc_txt">
                            <h4><span className="txt_ing">진행중</span>화성인의 밥상: 홈 브런치</h4>
                            <p><span><BsGeoAlt/></span>화성시생활문화센터</p>
                            <p><span><BsTable/></span>2021.6.23 ~ 2021.07.13</p>
                        </div>
                    </div>
                    <div className="cul_desc_box">
                        <div className="cul_desc_img">
                            <img src="./img/pcFile_1625632151_0.png" alt="culture_img"/>
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
        </SectionContainer>
    )
}

export default Culture
