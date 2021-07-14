import React from 'react'
import './SectionHeader.css'

const SectionHeader = ({color,align,title,description}) => {
  
  return (
    <div 
      style={{
        color,
        align
      }}
    >
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default SectionHeader;
