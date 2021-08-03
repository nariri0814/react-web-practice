import React from 'react';

const Gnb = () => {
  function gnb_hov_enter() {
    const hov_box = document.querySelector('.gnb_hov_box');
    hov_box.classList.add('gnb_hov_box_ac');
  }
  function gnb_hov_leave() {
    const hov_box = document.querySelector('.gnb_hov_box');
    hov_box.classList.remove('gnb_hov_box_ac');
  }

  return (
    <div>
        <div className="gnb" onMouseEnter={gnb_hov_enter} onMouseLeave={gnb_hov_leave}>
            <ul>
            <li className="gnb_li">
                <a href="#">
                    경기생활문화센터
                </a>
                <ul className="hov_item_ul">
                    <li className="hov_item_li">
                        <a href="#">센터소개</a>
                    </li>
                    <li className="hov_item_li">
                        <a href="#">조직도</a>
                    </li>
                    <li className="hov_item_li">
                        <a href="#">사업안내</a>
                    </li>
                    <li className="hov_item_li">
                        <a href="#">오시는 길</a>
                    </li>
                </ul>
            </li>
            <li className="gnb_li">
                <a href="#">
                    경기도생활문화
                </a>
                <ul className="hov_item_ul">
                    <li className="hov_item_li"><a href="#">우리지역 생활문화공간</a></li>
                    <li className="hov_item_li"><a href="#">생활문화찾기</a></li>
                </ul>
            </li>
            <li className="gnb_li">
                <a href="#">
                    기록자료
                </a>
                <ul className="hov_item_ul">
                    <li className="hov_item_li"><a href="#">영상채널</a></li>
                    <li className="hov_item_li"><a href="#">발간도서</a></li>
                </ul>
            </li>
            <li className="gnb_li">
                <a href="#">
                    웹진
                </a>
                <ul className="hov_item_ul">
                    <li className="hov_item_li"><a href="#">소개</a></li>
                    <li className="hov_item_li"><a href="#">웹진</a></li>
                </ul>
            </li>
            <li className="gnb_li">
                <a href="#">
                    소통
                </a>
                <ul className="hov_item_ul">
                    <li className="hov_item_li"><a href="#">공지사항</a></li>
                    <li className="hov_item_li"><a href="#">자주묻는질문</a></li>
                    <li className="hov_item_li"><a href="#">1:1문의</a></li>
                </ul>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Gnb;
