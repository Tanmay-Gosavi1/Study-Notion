import React, { useEffect, useState } from 'react'
import {NavbarLinks} from '../../data/Navdata.js'
import {Link, useLocation} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {ShoppingCart ,ChevronDown , Menu , X} from 'lucide-react'
import ProfileDropDown from '../core/Auth/ProfileDropDown.jsx'
import { apiConnector } from '../../services/apiConnector.js'
import { categories } from '../../services/api.js'
import MobileMenu from '../core/Homepage/MobileMenu.jsx'

const Navbar = () => {
    let location = useLocation()
    const pathMatch  = (path)=>{
        return path == location.pathname
    }

    const {token} = useSelector(state => state.auth)
    const {totalItems} = useSelector(state => state.cart)
    const {user} = useSelector(state => state.profile)
    
    const [subLinks , setSubLinks] = useState([])

    const fetchSubLinks = async()=>{
        try {
            const result = await apiConnector('GET' ,categories.CATEGORIES_API)
            console.log("Priting sublinks " , result)
            setSubLinks(result.data.data)
        } catch (error) {
            console.log("Could not fetch category list")
        }
    }
    const [menuVisible , setMenuVisible] = useState(false)
    useEffect(()=>{
        fetchSubLinks() 
    },[])

  return (
    <div className='w-screen flex justify-center items-center h-14 border-b-1 border-[#2c333f] outline-none fixed z-15 bg-[#000814]' >
        <div className='w-11/12 max-w-maxContent flex items-center justify-between py-1'>
        {/* Logo */}
            <Link to={'/'} className='outline-none'>
                <img src="/assets/StudyNotion.png" alt="" className='w-40'/>
            </Link>

        {/* NavLinks */}
            <nav className='hidden md:flex justify-center items-center'>
                <ul className='gap-x-5 text-white flex'>
                    {
                        NavbarLinks.map((ele , idx)=>(
                            <li key={idx}>
                                {
                                    ele.title==="Catalog" 
                                    ? 
                                    
                                    <div className='flex gap-x-1 justify-center items-center relative group'>
                                        <h1 className='font-semibold cursor-pointer'>{ele.title}</h1>
                                        <ChevronDown size={16} color="white" strokeWidth={3} />
                                        {
                                            subLinks.length>0 && (<>
                                                <div className='invisible group-hover:visible z-1 flex flex-col absolute w-fit px-8 py-3  bg-white rounded-md translate-x-[20%] translate-y-[85%] text-gray-700 font-bold gap-2 transition-all duration-500 ease-in-out'>
                                                    {
                                                        subLinks.map((ele,idx)=>(
                                                            <Link key={idx} className='text-sm'>{ele}</Link>
                                                        ))
                                                    }
                                                </div>
                                                <div className='invisible group-hover:visible h-6 w-6 rounded-md rotate-45 bg-white absolute bottom-[-80%] right-[-7%] transition-all duration-500 ease-in-out'></div>
                                        </>)
                                        }
                                    </div> 

                                    : 
                                    <Link to={ele?.path} className={`outline-none font-semibold ${pathMatch(ele.path) ? "text-yellow-400" : "text-white"}`}>{ele.title}</Link>
                                }
                            </li>
                        ))
                    }
                </ul>
            </nav>

            {/* Login/Signup/Dashboard */}
            <nav className='hidden md:flex gap-x-4 items-center'>
                {
                    user && user?.accountType !== "Instructor" && (
                        <Link to={'/dashboard/cart'} className='relative'>
                            <ShoppingCart size={25} color="white" strokeWidth={1.75} />
                            {
                                totalItems>0 && (
                                    <span className='h-4 w-4 bg-orange-500 rounded-full flex justify-center items-center p-[2px] absolute top-[-25%] right-[-35%]'>
                                        <h1 className='text-xs font-bold'>
                                            {totalItems}
                                        </h1>
                                    </span>
                                )
                            }
                        </Link>
                        
                    )
                }

                {
                    token === null && (
                        <Link to={'/login'} className='flex justify-center items-center px-5 py-1.5 border-2 border-gray-700 hover:border-gray-600 font-semibold bg-[#161d29] text-gray-400 rounded-lg cursor-pointer group'>
                            <h1 className='group-hover:text-white'>Login</h1>
                        </Link>
                    )
                }

                {
                    token === null && (
                        <Link to={'/signup'} className='flex justify-center items-center px-5 py-1.5 border-2 border-gray-700 hover:border-gray-600 font-semibold bg-[#161d29] text-gray-400 rounded-lg cursor-pointer group'>
                            <h1 className='group-hover:text-white'>Signup</h1>
                        </Link>
                    )
                }

                {
                    token !== null && <ProfileDropDown />
                }
                
            </nav>

            <div onClick={()=>setMenuVisible(prev=>!prev)} className='block md:hidden transition-all duration-200 ease-in'>
                {
                    menuVisible
                    ? <Menu size={25} color="white" strokeWidth={3} />
                    : <X size={25} color="white" strokeWidth={3} />
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar