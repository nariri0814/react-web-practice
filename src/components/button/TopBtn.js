import React from 'react';

import './TopBtn.css';

const TopBtn = () => {
  const TopBtn = document.querySelector('.top_btn');

  function onClickTop() {
    
  }


  return (
    <div className="top_btn" onClick={onClickTop}>^</div>
  )
}

export default TopBtn;
