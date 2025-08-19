import React from 'react'
import { Link } from 'react-router-dom'

const CTAbutton = ({children , active}) => {
  return (
    <Link to={'/signup'}>
        <button className={`shadow-md shadow-indigo-500/50 transition-all duration-200 inline-flex justify-center items-center mt-6  cursor-pointer hover:scale-95 font-bold px-6 max-md:px-4 py-3 max-md:py-2 max-md:text-sm max-md:mb-9 rounded-lg gap-2 text-sm ${active==="true" ? "bg-yellow-400 text-black" : "bg-[#16222f] text-white"}`}>{children}</button>
    </Link>
  )
}

export default CTAbutton