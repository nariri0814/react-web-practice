import React,{ useEffect } from 'react';

const SnsSlide = () => {
  useEffect(() => {
    const SnsSlide = document.querySelector('.sns_slide');
    const SnsItemWidth = document.querySelector('.sns_slide_box').clientWidth + 40;
    const SnsItemLength = document.querySelectorAll('.sns_slide_box').length;

    SnsSlide.style.width = SnsItemWidth * SnsItemLength + 'px';
    let snsLeft = 0;

    setInterval(() => {
      SnsSlide.style.left = - snsLeft + 'px';
      snsLeft += SnsItemWidth;
      if (snsLeft === SnsItemWidth * (SnsItemLength - 2)) {
        snsLeft = 0;
      }
    }, 1500);
  }, [])

  return (
    <div className="sns_slide_wrap">
      <div className="sns_slide">
        <div className="sns_slide_box">
          <img src="./img/_1621848192.jpg" alt="sns_img"/>
        </div>
        <div className="sns_slide_box">
          <img src="./img/_1621848243.jpg" alt="sns_img"/>
        </div>
        <div className="sns_slide_box">
          <img src="./img/_1621848278.jpg" alt="sns_img"/>
        </div>
        <div className="sns_slide_box">
          <img src="./img/sddefault.jpg" alt="sns_img"/>
        </div>
        <div className="sns_slide_box">
          <img src="./img/sddefault (1).jpg" alt="sns_img"/>
        </div>
        <div className="sns_slide_box">
          <img src="./img/sddefault (2).jpg" alt="sns_img"/>
        </div>
        <div className="sns_slide_box">
          <img src="./img/sddefault (3).jpg" alt="sns_img"/>
        </div>
        <div className="sns_slide_box">
          <img src="./img/sddefault (4).jpg" alt="sns_img"/>
        </div>
        <div className="sns_slide_box">
          <img src="./img/sddefault (5).jpg" alt="sns_img"/>
        </div>
      </div>
    </div>
  )
}

export default SnsSlide;
