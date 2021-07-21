import React,{ useState, useEffect } from 'react';

import './TopBtn.css';

const TopBtn = () => {
  const [ scrollY, setScrollY ] = useState(0);
  
  const topScroll = () => {
    setScrollY(window.pageYOffset);
    const TopBtn = document.querySelector('.top_btn');
    if(scrollY > 200) {
      TopBtn.classList.add('top_btn_ac');
    } else {
      TopBtn.classList.remove('top_btn_ac');
    }
  }
  function onClickTop() {
    window.scrollTo({ 
      top: 0,
      behavior: 'smooth'
    });
    setScrollY(0);
  }

  useEffect(() => {
    const scrollEvent = () => {
      window.addEventListener('scroll', topScroll)
    }
    scrollEvent();
    // return (
    //   window.removeEventListener('scroll', topScroll)
    // )
  })


  return (
    <button className='top_btn' onClick={onClickTop}>^</button>
  )
}

export default TopBtn;
