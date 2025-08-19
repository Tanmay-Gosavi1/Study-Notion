import React from 'react'
import CTAbutton from './CTAbutton'
import { FaArrowRightLong } from "react-icons/fa6";
import {TypeAnimation} from 'react-type-animation'
// import HighlightText from '../components/core/Homepage/HighlightText';

const CodeBlock = ({
    position , heading , subHeading , cta1 , cta2 , codeblock  , grad1color , grad2color , grad3color , codeColor
}) => {
  return (
  <>
    <div className={`w-full ${position} flex justify-between mt-25 max-md:mt-15 mb-10 relative`}>

        <div className='text-center w-[60%] max-md:w-[100%] px-10 max-md:px-4'> 
            <div className='font-bold text-4xl max-md:text-3xl'>
                <h1>{heading}</h1>
            </div>
            <div className='text-centertext-lg max-md:text-sm font-bold mt-10 mb-10 max-md:mb-6  text-[#838894]'>
                <p>{subHeading}</p>
            </div>
            <div className='space-x-7 max-md:space-x-4'>
                <CTAbutton active="true">{cta1} <FaArrowRightLong/></CTAbutton>
                <CTAbutton active="false">{cta2}</CTAbutton>
            </div>
        </div>

        <div className='w-[35%] max-md:w-[100%] flex p-4 rounded-lg border-1 border-[#8388944e] bg-transparent relative'>

            <div className='flex flex-col w-[10%] text-[#838894] font-semibold p-0 text-center'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
                <p>11</p>
                <p>12</p>
            </div>

            <div className='text-[#f2e1e3] font-bold z-1'>
                <TypeAnimation 
                    sequence={[codeblock , 1000 , "" ]}
                    repeat={Infinity}    
                    cursor={true}
                    style={{
                        whiteSpace : "pre-line",
                    }}
                    omitDeletionAnimation = {true}
                />
            </div>

            <div className={`absolute w-85 h-85 bg-gradient-to-tr from-[#C33764]  via-[#702f6b] to-[#1D2671] blur-3xl z-0 opacity-40 top-[-15%] right-10`}></div>
        </div>
        
    </div> 
  </>
    
  )
}

export default CodeBlock