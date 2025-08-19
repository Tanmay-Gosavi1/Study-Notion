import React, { useState } from 'react'
import HighlightText from './HighlightText'
import coursesData from '../../data/data';
import Card from './Card';

const ExploreMore = () => {
    const tabs = [
        "Free",
        "New to coding",
        "Most popular",
        "Skills paths",
        "Career paths"
    ];
    const [currTab , setCurrTab] = useState(Object.keys(coursesData)[0])
    const [courses , setCourses] = useState(coursesData["Free"])
    const [currCourse , setCurrCourse] = useState(coursesData["Free"][0])
    
    const setState = (ele)=>{
        setCurrTab(ele)
        setCourses(coursesData[ele])
        setCurrCourse(coursesData[ele][0])
    }
  return (
    <div className='text-white w-full mt-8 flex flex-col items-center relative px-5'>
        <div>
            <h1 className='max-md:text-3xl text-4xl font-bold text-center'>Unlock the <HighlightText text={"Power of Code"}/></h1>
        </div>
        <div className='py-4'>
            <p className='text-md font-semibold text-center text-[#838894]'>Learn to build anything you can imagine</p>
        </div>
        <div className='flex px-1 py-1 gap-1 max-md:gap-0 bg-[#161d29] rounded-full mb-45 max-md:mb-7'>
            {tabs.map((ele , idx)=>(
                <div key={idx}
                    className={`flex justify-center items-center px-6 max-md:px-2 max-md:text-xs py-3 rounded-full cursor-pointer text-[#838894] hover:bg-[#000814]  hover:text-white
                        ${currTab==ele
                        ? "bg-[#000814] text-white"
                        : ""
                        }`}
                    onClick={()=>setState(ele)}
                >
                    {ele}
                </div>
            ))}
        </div>

        <div className='flex max-md:flex-col absolute max-md:relative max-md:mb-5 gap-10 w-full bottom-[-30%] justify-center max-md:items-center'>
            {
                courses.map((element , idx)=>(
                    <Card key={idx} heading={element.heading} 
                          subheading = {element.subheading}
                          level = {element.level}
                          lessons = {element.lessons}
                          currCourse={currCourse}
                          element={element}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default ExploreMore