import React from 'react';

const EduSlideBox = ({imgUrl,description1,description2}) => {
  return (
    <div className="edu_slide_box">
      <a href="#">
        <div className="edu_sl_img">
          <img src={imgUrl}/>
        </div>
        <div className="sl_desc">
          <p className="sl_desc1"><span>{description1}</span>2021.01.31.~2021.12.31.</p>
          <p className="sl_desc2">{description2}</p>
        </div>
      </a>
    </div>
  )
}

export default EduSlideBox;
