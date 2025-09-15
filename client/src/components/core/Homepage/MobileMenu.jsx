import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

const MobileMenu = () => {
  return (
    <div className='h-210 w-screen flex justify-center align-center text-white mt-14'>
        <div className='h-full w-full flex flex-col justify-between'>
            {/* categories ke liye  */}
            <div className=''>
                <div className='w-full flex justify-between items-center border-b-[0.5px] border-gray-800 px-6 py-4'>
                    <Link to={'/'} className='font-semibold '>Python</Link>
                    <ChevronRight color="white" size={25} strokeWidth={3} />
                </div>
                <div className='w-full flex justify-between items-center border-b-[0.5px] border-gray-800 px-6 py-4'>
                    <Link to={'/'} className='font-semibold '>AI/ML</Link>
                    <ChevronRight color="white" size={25} strokeWidth={3} />
                </div>
                <div className='w-full flex justify-between items-center border-b-[0.5px] border-gray-800 px-6 py-4'>
                    <Link to={'/'} className='font-semibold '>Web-Dev</Link>
                    <ChevronRight color="white" size={25} strokeWidth={3} />
                </div>
                <div className='w-full flex justify-between items-center border-b-[0.5px] border-gray-800 px-6 py-4'>
                    <Link to={'/'} className='font-semibold '>Data Science</Link>
                    <ChevronRight color="white" size={25} strokeWidth={3} />
                </div>
                {/* About, contact */}
                <div className='flex flex-col'>
                    <Link to={'/'} className='font-semibold px-6 py-4 border-b-1 border-gray-800'>About</Link>
                    <Link to={'/'} className='font-semibold px-6 py-4 border-b-1 border-gray-800'>Contact Us</Link>
                </div>
            </div>
            
            
            <div className='flex flex-col px-6 space-y-4 my-5'>
                <Link to={'/login'} className='flex justify-center  items-center px-5 py-1.5 border-2 border-gray-700 hover:border-gray-600 font-bold bg-[#ffd60a] text-[#000000] rounded-lg cursor-pointer group'>
                    <h1 className='font-bold'>Login</h1>
                </Link>
                <Link to={'/signup'} className='flex justify-center items-center px-5 py-1.5 border-2 border-gray-700 hover:border-gray-600 font-bold bg-[#161d29] rounded-lg cursor-pointer group'>
                    <h1 className='text-white'>Signup</h1>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default MobileMenu