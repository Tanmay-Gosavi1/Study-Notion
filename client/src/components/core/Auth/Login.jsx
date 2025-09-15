import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [activeRole , setActiveRole] = useState('student')


  const onSubmit = async (data) => {
    console.log("Form Data Submitted:", data);

    try {
      const response = await fetch("http://localhost:4000/api/v1/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log("Backend Response:", result);
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#000814] px-6">
      <div className="grid md:grid-cols-2 gap-18 items-center max-w-6xl w-full">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold text-white text-center">
            Welcome Back
          </h2>
          <p className="text-gray-400 mt-3 text-center">
            Build skills for today, tomorrow, and beyond.{" "}
            <span className="text-sky-400 italic font-bold">
              Education to future-proof your career.
            </span>
          </p>


          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">

            <div>
                <p className="text-white text-base font-medium mb-1">
                    Email 
                    <sup className="text-red-700 font-extrabold">*</sup>
                </p>
              <input
                type="email"
                placeholder="Enter Email Address"
                {...register("email", { required: true })}
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">Email is required</p>
              )}
            </div>

            <div className="mb-9">
              <div className="w-full">
                <p className="text-white text-base font-medium mb-1">
                    Password
                    <sup className="text-red-700 font-extrabold">*</sup>
                </p>
                <input
                  type="password"
                  placeholder="Enter Password"
                  {...register("password", { required: true })}
                  className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none"
                />
                {errors.password && (
                  <p className="text-red-400 text-sm mt-1">Password required</p>
                )}
              </div>
              <div className="relative w-full bg-yellow-200"> 
                <Link to={'/forgot-password'} className="absolute right-0 text-[#47a5c5] text-sm font-medium">Forgot Password</Link>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-semibold py-2 rounded-md hover:bg-yellow-500 transition cursor-pointer"
            >
              Sign In
            </button>
          </form>
          <div className="flex items-center justify-center text-white w-full text-center gap-2 pt-2">
            <p className="text-sm font-semibold text-gray-500">New here?</p>
            <Link className="underline text-sm font-semibold text-yellow-500 hover:text-yellow-400" to={'/signup'}>Create an account</Link>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="hidden md:block w-3/4">
          <img
            src="https://studynotion-master.vercel.app/static/media/signup.acaf50bcb11d9aec44b4.webp"
            alt="Students"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}