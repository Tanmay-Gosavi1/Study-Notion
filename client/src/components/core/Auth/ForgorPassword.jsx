import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {ArrowLeftToLine} from 'lucide-react'

const ForgorPassword = () => {

const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm();

const onSubmit = async (data) => {
    console.log("Form Data Submitted:", data);
};

    return (
    <div className='min-h-screen flex justify-center items-center p-5'>
        <div className='text-white sm:w-1/2 lg:w-1/3'>
            <h1 className='text-3xl font-bold text-white'>Reset your password</h1>
            <h1 className='text-gray-400 mt-3'>Have no fear. We'll email you instructions to reset your password. If you dont have access to your email we can try account recovery</h1>
            <div className='pt-5'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        <p className='text-white text-base font-medium mb-1'>
                            Enter Email
                            <sup className='text-red-700 font-extrabold'>*</sup>
                        </p>
                        <input {...register("email", {required : true})} required type="email" placeholder='Enter Email' className='py-2 px-4 bg-[#2c333f] w-full text-white outline-none rounded-md '/>
                    </label>
                    <button type="submit" className='w-full px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black rounded-md my-5 font-semibold cursor-pointer'>
                        Reset Password
                    </button>
                </form>
            </div>
            <div>
                <Link to={'/login'} className='flex items-center gap-2'>
                    <ArrowLeftToLine size={16} color="gray" strokeWidth={3} />
                    <h1 className='font-semibold text-gray-400'>Back to Login</h1>
                </Link>
            </div>
        </div>
    </div>
    )
}

export default ForgorPassword