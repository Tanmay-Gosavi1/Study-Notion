import React from 'react'

const HighlightText = ({text}) => {
  return (
    <>
        <span className='bg-gradient-to-r from-[#18bcfc] via-[#14cdfb] to-[#64eee1] bg-clip-text text-transparent'>{text}</span>
    </>
  )
}

export default HighlightText