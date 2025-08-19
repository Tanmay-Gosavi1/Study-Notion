import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-screen bg-[#161d29] h-fit py-10 px-35 max-md:px-5 flex border-b-1 max-md:border-b-0'>
        <div className='w-[50%] max-md:w-[100%] text-[#6e727f] grid-cols-3 grid border-r-1 max-md:border-0'>
            <div className='text-center'>
                <img src="/assets/StudyNotion.png" alt="" />
            <h1 className='text-white font-bold my-3'>Company</h1>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
            </div>
            <div className='text-center' >
            <h1 className='text-white font-bold mb-3'>Support</h1>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>

            </div>
            <div className='text-center'>
            <h1 className='text-white font-bold mb-3'>Plans</h1>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
            </div>
        </div>
        <div className='w-[50%] text-[#6e727f] grid-cols-3 grid max-md:hidden'>
            <div className='text-center'>
                <h1 className='text-white font-bold mb-3 text-md'>Subjects</h1>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                
            </div>
            <div className='text-center' >
                <h1 className='text-white font-bold mb-3'>Languages</h1>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
            </div>
            <div className='text-center'>
                <h1 className='text-white font-bold mb-3'>Career building</h1>
                 <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                <Link className='block hover:text-white font-medium mb-1' to={'/'}>Article</Link>
                
            </div>
        </div>
    </div>
  )
}

export default Footer