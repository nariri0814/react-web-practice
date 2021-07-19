import React,{ useEffect } from 'react';

const SnsSlide = () => {
  useEffect(() => {

    const SnsSlideWidth = document.querySelector('.sns_slide');
    const SnsItemWidth = document.querySelector('.sns_slide_box').clientWidth + 40;
    const SnsItemLength = document.querySelectorAll('.sns_slide_box').length;
    // console.log('SnsItemWidth : '+SnsItemWidth)
    // console.log('SnsItemLength : '+SnsItemLength)

    SnsSlideWidth.style.width = SnsItemWidth * SnsItemLength + 'px';


  }, [])

  return (
    <div className="sns_slide_wrap">
      <div className="sns_slide">
          
        <div className="sns_slide_box">
            <img src="./img/_1621848192.jpg"/>
        </div>
        <div className="sns_slide_box">
            <img src="./img/_1621848243.jpg"/>
        </div>
        <div className="sns_slide_box">
            <img src="./img/_1621848278.jpg"/>
        </div>
        <div className="sns_slide_box">
            <img src="./img/sddefault.jpg"/>
        </div>
        <div className="sns_slide_box">
            <img src="./img/sddefault (1).jpg"/>
        </div>
        <div className="sns_slide_box">
            <img src="./img/sddefault (2).jpg"/>
        </div>
        <div className="sns_slide_box">
            <img src="./img/sddefault (3).jpg"/>
        </div>
        <div className="sns_slide_box">
            <img src="./img/sddefault (4).jpg"/>
        </div>
        <div className="sns_slide_box">
            <img src="./img/sddefault (5).jpg"/>
        </div>

      </div>
    </div>
  )
}

export default SnsSlide;
