import React, { useRef, useState, useEffect } from "react";

const VerifyEmail = () => {
    const inputRefs = useRef([])
    const [otp , setOtp] = useState(new Array(6).fill(""))
    const [timer  , setTimer] = useState


  return (
    <div className='min-h-screen flex justify-center items-center'>
        <div className='w-1/3 text-white'>
            <h1>Verify Email</h1>
            <p>A verification code has been sent to you. Enter the code below</p>
            <form >
                <div className='gap-x-4 flex'>
                    <input type="text" maxLength={1} autoComplete='off' className='w-10 h-10 bg-white rounded-md text-black font-semibold  text-center outline'/>
                    <input type="text" maxLength={1} autoComplete='off' className='w-10 h-10 bg-white rounded-md text-black font-semibold  text-center outline'/>
                </div>
                <button type="submit"></button>
            </form>
        </div>
    </div>
  )
}

export default VerifyEmail