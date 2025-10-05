import React from 'react'

const Image = ({className ,ImgSrc , AltSrc}) => {
  return (
   <img src={ImgSrc} alt={AltSrc} className={`${className}`}/>
  )
}

export default Image

