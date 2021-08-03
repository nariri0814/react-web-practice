import React, { useState, useEffect } from 'react';
import { BsArrowRight, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import SectionHeader from '../../../components/text/SectionHeader';
import EduSlideBox from '../../../components/slide/EduSlideBox';
import './Education.css';

const Education = () => {
    
    const DATA = new Date;
    const [ month, setMonth ] = useState(DATA.getMonth()+1);
    const [ totalDay, setTotalDay ] = useState(Array(new Date(DATA.getFullYear(), month, 0).getDate()).fill().map((v,i)=> i+1))
    const [ day, setDay ] = useState(DATA.getDate());
    
    const today = document.getElementsByClassName('cad_day');

    function edu_slide() {
        const edu_sl_inner = document.querySelector('.edu_slide_inner');
        const edu_sl_box = document.getElementsByClassName('edu_slide_box');
        let edu_box_width = edu_sl_box[0].clientWidth + 20;
        let edu_count = edu_sl_box.length;
        edu_sl_inner.style.width = edu_box_width * edu_count + 'px';
        let edu_curr_i = 0;

        for(let i=0; i<edu_count; i++) {
            edu_sl_box[i].style.left = edu_box_width * i + 'px'
        } 

        // 한칸씩 슬라이드
        function edu_item_slide(num) {
            edu_sl_inner.style.left =  -num * edu_box_width + 'px'
            edu_curr_i = num;
        }

        setInterval(() => {
            if(edu_curr_i < edu_count - 5) {
                edu_item_slide(edu_curr_i + 1);
            } else {
                edu_item_slide(0);
            }
        }, 1500)
    }
    
    useEffect ( () => {
        today[day-1].classList.add('today_ac')
        ///////////////////////////////////////
        edu_slide()
    },[]);

    return (
        <div className="education">
            <div className="nav">
                <ul className="nav_ul">
                    <li className="nav_li">우리지역 생활문화공간<span><BsArrowRight/></span></li>
                    <li className="nav_li">생활문화 찾기<span><BsArrowRight/></span></li>
                    <li className="nav_li">경기상상캠퍼스<span><BsArrowRight/></span></li>
                    <li className="nav_li">온라인 문의<span><BsArrowRight/></span></li>
                </ul>
            </div>
            <div className="edu_tit">
                <SectionHeader
                    align="center"
                    color="#fff"
                    description="이달에 운영되는 다양한 교육을 만나보세요."
                    title="이달의 교육"
                />
                <p className="edu_plus">더보기 +</p>
                <div className="edu_calendar">
                    <div className="cad_month">
                        <div className="month_arrow"><BsChevronLeft/></div>
                        <div className="month_num_box">
                            <div className="month_num">{month}</div>
                            <div className="year_num">2021</div>
                        </div>
                        <div className="month_arrow"><BsChevronRight/></div>
                    </div>
                    <div className="cad_day_box">
                        {totalDay.map((v,i)=><div key={i+1} className="cad_day">{i+1}</div>)}
                    </div>
                </div>
            </div>
            <div className="edu_slide_sec">
                <div className="edu_slide_inner">
                    <EduSlideBox
                        imgUrl="./img/pcFile_1620709446_0.png"
                        description1="#교육"
                        description2="나룰 수채화 드로잉"
                    />
                    <EduSlideBox
                        imgUrl="./img/pcFile_1620709695_0.png"
                        description1="#교육"
                        description2="기타기타기타"
                    />
                    <EduSlideBox
                        imgUrl="./img/pcFile_1620709739_0.png"
                        description1="#교육"
                        description2="미사누그 드로잉"
                    />
                    <EduSlideBox
                        imgUrl="./img/pcFile_1620709772_0.png"
                        description1="#교육"
                        description2="우쿠렐레레레레"
                    />
                    <EduSlideBox
                        imgUrl="./img/pcFile_1620709819_0.png"
                        description1="#교육"
                        description2="행복한 합창단"
                    />
                    <EduSlideBox
                        imgUrl="./img/pcFile_1620709867_0.png"
                        description1="#교육"
                        description2="악보오오오"
                    />
                    <EduSlideBox
                        imgUrl="./img/pcFile_1620709916_0.png"
                        description1="#교육"
                        description2="성악사랑동호회"
                    />
                    <EduSlideBox
                        imgUrl="./img/pcFile_1620709950_0.png"
                        description1="#교육"
                        description2="아코필하남"
                    />
                    <EduSlideBox
                        imgUrl="./img/pcFile_1620709986_0.png"
                        description1="#교육"
                        description2="좋아좋아 하모니카 쏠로"
                    />
                    <EduSlideBox
                        imgUrl="./img/pcFile_1620710021_0.png"
                        description1="#교육"
                        description2="아마빌레"
                    />
                    <EduSlideBox
                        imgUrl="./img/pcFile_1620710073_0.png"
                        description1="#교육"
                        description2="오솔길 기타앙상블"
                    />
                    <EduSlideBox
                        imgUrl="./img/pcFile_1620710202_0.png"
                        description1="#교육"
                        description2="하남 문학아카데미 시창작"
                    />
                    <EduSlideBox
                        imgUrl="./img/pcFile_1620710279_0.jpg"
                        description1="#교육"
                        description2="광명생활악기오케스트라"
                    />
                </div>
            </div>
        </div>
    )
}

export default Education;