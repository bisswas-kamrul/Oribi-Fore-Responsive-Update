import React from 'react'

const Bage = ({BageText, className}) => {
  return (
    <div className={`px-7 py-3 rounded-2xl ml-5 bg-black text-center text-white uppercase ${className}`}>{BageText}</div>
  )
}

export default Bage