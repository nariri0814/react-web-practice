import React,{ useEffect } from 'react';
import { BsGeoAlt, BsTable } from "react-icons/bs";



const CultureSlide = () => {
  // useEffect(() => {
  //   document.querySelector('.cul_img1').style.background = 'url(./img/pcFile_1625632151_0.png) no-repeat center / cover';
  //   document.querySelector('.cul_img2').style.background = 'url(./img/pcFile_1625632746_0.jpg) no-repeat center / cover';
  //   document.querySelector('.cul_img3').style.background = 'url(./img/pcFile_1625648663_0.jpg) no-repeat center / cover';
  //   document.querySelector('.cul_img4').style.background = 'url(./img/pcFile_1625799571_0.jpg) no-repeat center / cover';
    
  // }, [])

  

  return (
    <>
      <div className="cul_desc_box">
        <div className="cul_desc_img cul_img1"></div>
        <div className="cul_desc_txt">
            <h4><span className="txt_ing">진행중</span>화성인의 밥상: 홈 브런치</h4>
            <p><span><BsGeoAlt/></span>화성시생활문화센터</p>
            <p><span><BsTable/></span>2021.6.23 ~ 2021.07.13</p>
        </div>
      </div>
      <div className="cul_desc_box">
        <div className="cul_desc_img cul_img2"></div>
        <div className="cul_desc_txt">
            <h4><span className="txt_ing">진행중</span>화성인의 밥상: 홈 브런치</h4>
            <p><span><BsGeoAlt/></span>화성시생활문화센터</p>
            <p><span><BsTable/></span>2021.6.23 ~ 2021.07.13</p>
        </div>
      </div>
      <div className="cul_desc_box">
        <div className="cul_desc_img cul_img3"></div>
        <div className="cul_desc_txt">
            <h4><span className="txt_ing">진행중</span>화성인의 밥상: 홈 브런치</h4>
            <p><span><BsGeoAlt/></span>화성시생활문화센터</p>
            <p><span><BsTable/></span>2021.6.23 ~ 2021.07.13</p>
        </div>
      </div>
      <div className="cul_desc_box">
        <div className="cul_desc_img cul_img4"></div>
        <div className="cul_desc_txt">
            <h4><span className="txt_ing">진행중</span>화성인의 밥상: 홈 브런치</h4>
            <p><span><BsGeoAlt/></span>화성시생활문화센터</p>
            <p><span><BsTable/></span>2021.6.23 ~ 2021.07.13</p>
        </div>
      </div>
      
  </>
  )
}

export default CultureSlide;
