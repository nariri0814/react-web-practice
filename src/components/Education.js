import React, { useState, useEffect } from 'react';
import { BsArrowRight, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import './Education.css';

const Education = () => {
    
    const DATA = new Date;
    const [ month, setMonth ] = useState(DATA.getMonth()+1);
    const [ totalDay, setTotalDay ] = useState(Array(new Date(DATA.getFullYear(), month, 0).getDate()).fill().map((v,i)=> i+1))
    const [ day, setDay ] = useState(DATA.getDate());
    
    useEffect ( () => [
        today[day-1].classList.add('today_ac')
    ],[]);

    const today = document.getElementsByClassName('cad_day');
    /////////////////////////////////
    // const month_day = () => {
    //     today.innerText = totalDay
    // }









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
                <h1>이달의 교육</h1>
                <p>이달에 운영되는 다양한 교육을 만나보세요.</p>
                <p className="edu_plus">더보기 +</p>
                <div className="edu_calendar">
                    <div className="cad_month">
                        <div className="month_arrow"><BsChevronLeft/></div>
                        <div className="month_num_box">
                            <div className="month_num">{month}</div>
                            <div className="year_num">2021</div>
                        </div>
                        <div className="month_arrow" onClick={month_day}><BsChevronRight/></div>
                    </div>
                    <div className="cad_day_box">
                        {totalDay.map((v,i)=><div key={i+1} className="cad_day">{i+1}</div>)}

                    </div>
                    
                </div>
            </div>
            <div className="edu_slide_sec">
                <div className="edu_slide_box">
                    <div className="edu_sl_img">
                        {/* <img src="./img/pcFile_1620709446_0.png"/> */}
                        <div className="sl_desc">
                            <p><span>#교육</span>2021.01.31.~2021.12.31.</p>
                            <p>나룰 수채화 드로잉</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Education;