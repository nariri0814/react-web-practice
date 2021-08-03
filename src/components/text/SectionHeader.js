import React from 'react'
import './SectionHeader.css'

const SectionHeader = ({color,align,title1,title2,description}) => {
  return (
    <div 
      style={{
        color,
        align
      }}
    >
      <h1>{title1}</h1>
      <h1>{title2}</h1>
      <p>{description}</p>
    </div>
  )
}

export default SectionHeader;
