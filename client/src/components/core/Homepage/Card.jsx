import React from 'react'

const Card = ({ heading , subheading ,level, lessons , currCourse , element}) => {
  return (
    <div className={`flex flex-col w-80 max-md:w-[80%] bg-[#2c333f] text-[#7a98a6] h-fit ${currCourse==element ? "bg-[#ffffff] text-black" : ""} p-4 shadow-lg shadow-cyan-500/50 `}>
        <h1 className={`font-bold text-xl mb-3  ${currCourse= =element ? "text-[#000814]" : ""} text-white`}>{heading}</h1>
        <p className='font-base mb-5'>{subheading}</p>
        <div className='flex pt-4 border-t-1 border-dashed justify-between'>
            <h1>{level}</h1>
            <h1>{lessons}</h1>
        </div>
    </div>
  )
}

export default Card