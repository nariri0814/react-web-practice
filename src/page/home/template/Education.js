import React, { useState, useEffect } from 'react';
import { BsArrowRight, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import SectionHeader from '../../../components/text/SectionHeader';
import './Education.css';

const Education = () => {
    
    const DATA = new Date;
    const [ month, setMonth ] = useState(DATA.getMonth()+1);
    const [ totalDay, setTotalDay ] = useState(Array(new Date(DATA.getFullYear(), month, 0).getDate()).fill().map((v,i)=> i+1))
    const [ day, setDay ] = useState(DATA.getDate());
    
    const today = document.getElementsByClassName('cad_day');

    function edu_slide() {
        // const inter = ""
        const edu_sl_inner = document.querySelector('.edu_slide_inner');
        // const edu_sl_box_all = document.querySelectorAll('.edu_slide_box');
        const edu_sl_box = document.getElementsByClassName('edu_slide_box');
        let edu_box_width = edu_sl_box[0].offsetWidth;
        let edu_count = edu_sl_box.length;


        let edu_curr_i = 0;

        
        for(let i=0; i<edu_count; i++) {
            edu_sl_box[i].style.left = edu_box_width * i + 'px'
        } 

        // 한칸씩 슬라이드
        function edu_item_slide(num) {
            // edu_sl_inner.style.left = 'calc(50% '+ -num * edu_box_width +'px)';
            edu_sl_inner.style.left =  -num * edu_box_width + 'px'
            edu_curr_i = num;

            

            // edu_sl_box[edu_curr_i % edu_count<0 ? 
            //     edu_curr_i % edu_count + edu_count :
            //     edu_curr_i % edu_count].style.transform = `translate(-${edu_box_width}px)`;



            // edu_sl_box_all.forEach(element => {
            //     // console.log(element)
            //     element.style.transform = `translate(-${edu_box_width}px)`
            // });
            
            // edu_curr_i++;
            
        }

        setInterval(() => {
            // edu_item_slide()
            if(edu_curr_i < edu_count - 5) {
                edu_item_slide(edu_curr_i + 1);
            } else {
                edu_item_slide(0)
            }
            // edu_item_move()
            // edu_curr_i++;
        }, 900)
    }
    
    useEffect ( () => {
        today[day-1].classList.add('today_ac')

        //////////////////////////////////////////////

        
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
                {/* <h1>이달의 교육</h1>
                <p>이달에 운영되는 다양한 교육을 만나보세요.</p> */}
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

                    <div className="edu_slide_box">
                        <a href="#">
                            <div className="edu_sl_img">
                                <img src="./img/pcFile_1620709446_0.png"/>
                            </div>
                            <div className="sl_desc">
                                <p className="sl_desc1"><span>#교육</span>2021.01.31.~2021.12.31.</p>
                                <p className="sl_desc2">나룰 수채화 드로잉</p>
                            </div>
                        </a>
                    </div>
                    <div className="edu_slide_box">
                        <a href="#">
                            <div className="edu_sl_img">
                                <img src="./img/pcFile_1620709446_0.png"/>
                            </div>
                            <div className="sl_desc">
                                <p className="sl_desc1"><span>#교육</span>2021.01.31.~2021.12.31.</p>
                                <p className="sl_desc2">나룰 수채화 드로잉</p>
                            </div>
                        </a>
                    </div>
                    <div className="edu_slide_box">
                        <a href="#">
                            <div className="edu_sl_img">
                                <img src="./img/pcFile_1620709446_0.png"/>
                            </div>
                            <div className="sl_desc">
                                <p className="sl_desc1"><span>#교육</span>2021.01.31.~2021.12.31.</p>
                                <p className="sl_desc2">나룰 수채화 드로잉</p>
                            </div>
                        </a>
                    </div>
                    <div className="edu_slide_box">
                        <a href="#">
                            <div className="edu_sl_img">
                                <img src="./img/pcFile_1620709446_0.png"/>
                            </div>
                            <div className="sl_desc">
                                <p className="sl_desc1"><span>#교육</span>2021.01.31.~2021.12.31.</p>
                                <p className="sl_desc2">나룰 수채화 드로잉</p>
                            </div>
                        </a>
                    </div>
                    <div className="edu_slide_box">
                        <a href="#">
                            <div className="edu_sl_img">
                                <img src="./img/pcFile_1620709446_0.png"/>
                            </div>
                            <div className="sl_desc">
                                <p className="sl_desc1"><span>#교육</span>2021.01.31.~2021.12.31.</p>
                                <p className="sl_desc2">나룰 수채화 드로잉</p>
                            </div>
                        </a>
                    </div>
                    <div className="edu_slide_box">
                        <a href="#">
                            <div className="edu_sl_img">
                                <img src="./img/pcFile_1620709446_0.png"/>
                            </div>
                            <div className="sl_desc">
                                <p className="sl_desc1"><span>#교육</span>2021.01.31.~2021.12.31.</p>
                                <p className="sl_desc2">나룰 수채화 드로잉</p>
                            </div>
                        </a>
                    </div>
                    <div className="edu_slide_box">
                        <a href="#">
                            <div className="edu_sl_img">
                                <img src="./img/pcFile_1620709446_0.png"/>
                            </div>
                            <div className="sl_desc">
                                <p className="sl_desc1"><span>#교육</span>2021.01.31.~2021.12.31.</p>
                                <p className="sl_desc2">나룰 수채화 드로잉</p>
                            </div>
                        </a>
                    </div>
                    <div className="edu_slide_box">
                        <a href="#">
                            <div className="edu_sl_img">
                                <img src="./img/pcFile_1620709446_0.png"/>
                            </div>
                            <div className="sl_desc">
                                <p className="sl_desc1"><span>#교육</span>2021.01.31.~2021.12.31.</p>
                                <p className="sl_desc2">나룰 수채화 드로잉</p>
                            </div>
                        </a>
                    </div>
                    <div className="edu_slide_box">
                        <a href="#">
                            <div className="edu_sl_img">
                                <img src="./img/pcFile_1620709446_0.png"/>
                            </div>
                            <div className="sl_desc">
                                <p className="sl_desc1"><span>#교육</span>2021.01.31.~2021.12.31.</p>
                                <p className="sl_desc2">나룰 수채화 드로잉</p>
                            </div>
                        </a>
                    </div>
                    <div className="edu_slide_box">
                        <a href="#">
                            <div className="edu_sl_img">
                                <img src="./img/pcFile_1620709446_0.png"/>
                            </div>
                            <div className="sl_desc">
                                <p className="sl_desc1"><span>#교육</span>2021.01.31.~2021.12.31.</p>
                                <p className="sl_desc2">나룰 수채화 드로잉</p>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Education;