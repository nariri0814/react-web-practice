import React from 'react';

import './SpaceBtn.css';

const SpaceBtn = ({
  id,
  description,
  onClick,
}) => {

  return (
    <button 
      className="sp_btn" 
      onClick={() => {
        onClick(id)
        
      }}
    >
      {description}
    </button>
  )
}

export default SpaceBtn;


