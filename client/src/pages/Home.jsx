import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import {Link} from 'react-router-dom'
import CTAbutton from '../components/core/Homepage/CTAbutton';
import HighlightText from '../components/core/Homepage/HighlightText';
import CodeBlock from '../components/core/Homepage/CodeBlock';
import Footer from '../components/Common/Footer';
import ExploreMore from '../components/core/Homepage/ExploreMore';

const Home = () => {
  return (
    <div>

        {/* Section 1 */}
        <div className='relative mx-auto flex flex-col w-11/12 items-center justify-between text-white outline-none'>
            {/* Starter */}
            <div className='flex flex-col items-center'>
                <Link to={'/signup'} className='outline-none'>
                    <div className='w-fit p-1 group bg-[#161d29] rounded-full  mt-16 transition-all duration-200 hover: hover:scale-95 outline-none border-none'>
                        <div className='px-9 text-lg py-1.5 flex rounded-full justify-center items-center gap-3 font-bold group-hover:bg-[#000814] outline-none'>
                            <p>Become an Instructor</p>
                            <span>
                                <FaArrowRightLong />
                            </span>
                        </div>
                    </div>
                </Link>

                <div className='mt-8'>
                    <h2 className='text-4xl font-bold text-center max-md:text-3xl'>
                        Empower Your Future With <HighlightText text="Coding Skills"/>
                    </h2>
                </div>

                <div className=' w-[70%] text-lg font-bold mt-8 text-center max-md:text-sm max-md:w-[90%]'>
                    <p className='text-[#838894]'>With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.</p>
                </div>

                <div className='flex gap-7 max-md:mt-5'>
                    <CTAbutton active="true" >Learn more</CTAbutton>
                    <CTAbutton active="false">Book a demo</CTAbutton>
                </div>
            </div>

            {/* Banner video */}
            <div className='w-[80%] mt-12 max-md:mt-7 max-md:w-[90%] shadow-2xl shadow-cyan-500/50'>
                <video autoPlay muted loop className=''>
                    <source src="/assets/video.webm" type="video/webm"/>
                </video>
            </div>

            {/* CodeBlock 1 */}
            <CodeBlock position={"lg:flex-row max-md:flex-col"} 
            heading={
                <div>
                    Unlock your <HighlightText text={"coding potential"} /> with our online courses
                </div>
            } 
            subHeading="Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you." cta1="Try it yourself" cta2="Learn more" 
            codeblock={`<!DOCTYPE html>
                            <html>
                                <head><title>StudyNotion</title></head>
                            <body>
                                <h1><ahref="/">Header</a></h1>
                                <nav>
                                    <ahref="one/">One</a>
                                    <ahref="two/">Two</a>
                                    <ahref="three/">Three</a>
                                </nav>
                            <body/>`}
            ></CodeBlock>

            {/* CodeBlock 2 */}
            <CodeBlock position={"lg:flex-row-reverse max-md:flex-col"} 
            heading={
                <div>
                    Start <HighlightText text={"coding in seconds"} /> 
                </div>
            } 
            subHeading="Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson." cta1="Continue lesson" cta2="Learn more" 
            codeblock={`<div class="flex flex-col p-7 rounded-2xl">
                        <div>
                            <img class="size-48 shadow-xl rounded-md" alt="" src="/img/cover.png" />
                        </div>
                        <div class="flex">
                            <span class="text-2xl font-medium">Class Warfare</span>
                            <span>The Anti-Patterns</span>
                            <span>No. 4</span>
                        </div></div>`}
            
            ></CodeBlock>

        </div>
        
        {/* Section 2 */}
        <div className='min-h-screen relative  mx-auto flex flex-col w-screen items-center justify-between text-black outline-none '>
            
            <ExploreMore />

            <div className='w-full h-80 flex justify-center items-center max-md:h-50' style={{backgroundImage:"url('/assets/whiteBg.png')", objectFit:"cover"}}>
                {/* <img className='w-full h-80 object-cover' src={""} alt="" /> */}
                <div className='space-x-5'>
                    <CTAbutton active={"true"}>Explore full catalog <FaArrowRightLong/></CTAbutton>
                    <CTAbutton active={"false"}>Learn more </CTAbutton>
                </div>
            </div>

            <div className='w-screen min-h-screen bg-[#fafafb] px-8'>
                <div className='flex w-full justify-center pt-20 pb-20 max-md:pb-10 max-md:flex-col'>
                    <div className='w-[40%] max-md:w-[100%] max-md:mb-8 text-center'>
                        <h1 className='text-4xl max-md:text-3xl text-black font-bold'>Get the skills you need for a <HighlightText text={"job that is in demand"}/></h1>
                    </div>
                    <div className='w-[40%] max-md:w-[100%] flex flex-col items-center'>
                        <p className='font-semibold text-center'>The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</p>
                        <CTAbutton active={"true"} >Learn more</CTAbutton>
                    </div>
                </div>

                <div className='flex justify-center pb-25 max-md:flex-col'>
                    <div className='w-[40%] max-md:w-[100%] flex flex-col items-center justify-end'>
                        <div className='flex gap-5 items-center my-3'>
                            <div className='w-15 h-15 rounded-full bg-white p-[1px]'>
                                <img className='object-cover w-full h-full rounded-full' src="https://tse4.mm.bing.net/th/id/OIP.Ysr_g-5ZE3deTg_teSS3DQHaJx?r=0&w=880&h=1161&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
                            </div>
                            <div className=''>
                                <h1 className='text-lg font-bold '>Leadership</h1>
                                <p className='font-medium'>Fully committed to the success company</p>
                            </div>
                        </div>
                        <div className='flex gap-5 items-center my-3'>
                            <div className='w-15 h-15 rounded-full bg-white p-[1px]'>
                                <img className='object-cover w-full h-full rounded-full' src="https://static8.depositphotos.com/1158615/948/v/950/depositphotos_9480526-stock-illustration-diamond-symbol.jpg" alt="" />
                            </div>
                            <div className=''>
                                <h1 className='text-lg font-bold '>Leadership</h1>
                                <p className='font-medium'>Fully committed to the success company</p>
                            </div>
                        </div>
                        <div className='flex gap-5 items-center my-3'>
                            <div className='w-15 h-15 rounded-full bg-white p-[1px]'>
                                <img className='object-cover w-full h-full rounded-full' src="https://static.vecteezy.com/system/resources/previews/012/818/553/original/graduation-cap-icon-education-symbol-and-sign-illustration-free-vector.jpg" alt="" />
                            </div>
                            <div className=''>
                                <h1 className='text-lg font-bold '>Leadership</h1>
                                <p className='font-medium'>Fully committed to the success company</p>
                            </div>
                        </div>
                        <div className='flex gap-5 items-center my-3'>
                            <div className='w-15 h-15 rounded-full bg-white p-[1px]'>
                                <img className='object-cover w-full h-full rounded-full' src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3412831/code-line-icon-md.png" alt="" />
                            </div>
                            <div className=''>
                                <h1 className='text-lg font-bold '>Leadership</h1>
                                <p className='font-medium'>Fully committed to the success company</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-[40%] max-md:w-[100%] max-md:mt-8 relative'>
                        <img className='object-cover' src="/assets/womenStudy.webp" alt="" />
                        <div className='absolute left-[10.5%] max-md:left-0 bottom-[-10%] bg-[#014a32] w-[80%] max-md:w-[100%] h-25 max-md:h-20 p-10 flex justify-evenly max-md:justify-around items-center'>
                            <div className='w-[40%] max-md:w-[30%] flex  justify-center items-center border-r-1 max-md:border-0 border-[#05a77b]' >
                                <h1 className='font-bold text-4xl max-md:text-3xl text-white'>10</h1>
                                <p className='uppercase px-5 max-md:pl-1 text-[#05a77b] max-md:text-sm' >Years of Experience</p>
                            </div>
                            <div className='w-[40%] max-md:w-[30%] flex justify-center items-center'>
                                <h1 className='font-bold text-4xl max-md:text-3xl text-white'>250</h1>
                                <p className='uppercase px-5 max-md:pl-1 text-[#05a77b] max-md:text-sm'>Type of Courses</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col pt-8 max-md:pt-2'>
                    <div>
                        <h1 className='font-bold text-4xl max-md:text-3xl text-center pb-5'>Your Swiss Knife for <HighlightText text={"learning any language"} /></h1>
                        <p className='font-semibold text-center pb-12'>Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking,<br/> custom schedule and more.</p>
                    </div>

                    <div className='relative flex w-screen justify-center max-md:justify-start items-center max-md:px-10 max-md:pb-6'>
                        <div className='absolute left-50 max-md:left-0'>
                            <img src="/assets/img1.png" alt="" />
                        </div>
                        <div className='z-5'>
                            <img src="/assets/img2.png" alt="" />
                        </div>
                        <div className='absolute right-45 z-6 '>
                            <img src="/assets/img3.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Section 3 */}
        <div className='w-screen min-h-screen bg-[#000814] text-white relative'>

            <div className='flex max-md:flex-col justify-center items-center pt-15 pb-15 max-md:pb-8'>
                <div className='w-[40%] max-md:w-[80%]'>
                    <img className='h-full w-full object-cover' src="/assets/instructor.jpg" alt="" />
                </div>

                <div className='w-[40%] max-md:w-[100%] flex flex-col items-center justify-center pl-13 max-md:px-4'>
                    <h1 className='text-4xl max-md:text-3xl font-bold max-md:mt-10 mb-10'>Become an <HighlightText text={"Instructor"} /></h1>
                    <p className='text-md font-semibold text-center mb-8'>Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</p>
                    <CTAbutton active={"true"}>Start learning today <FaArrowRightLong/></CTAbutton>
                </div>
            </div>

        </div>

        {/* Footer */}
        <Footer />

    </div>
  )
}

export default Home