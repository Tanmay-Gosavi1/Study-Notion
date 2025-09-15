import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate()
  const [activeRole , setActiveRole] = useState('student')
  const onSubmit = async (data) => {
    console.log("Form Data Submitted:", data);

    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
        if (response.ok) {
            navigate("/verify-email");  // ✅ Redirect here
        } else {
            console.error("Signup failed");
        }

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
            Join the millions learning to code with StudyNotion for free
          </h2>
          <p className="text-gray-400 mt-3 text-center">
            Build skills for today, tomorrow, and beyond.{" "}
            <span className="text-sky-400 italic font-bold">
              Education to future-proof your career.
            </span>
          </p>

          {/* Role Selector */}
          <div className="flex gap-2 mt-6 bg-[#161d29] w-fit px-1.5 py-3  rounded-full transiton-all duration-300 ease-linear">
            <label onClick={()=>setActiveRole('student')} className="cursor-pointer">
              <input
                type="radio"
                value="student"
                {...register("role")}
                className="hidden"
                defaultChecked
              />
                <span className={`px-4 py-2 rounded-full  font-semibold text-gray-400 ${activeRole==='student' ? "bg-[#000814] text-white" : ""}`}>
                Student
              </span>
            </label>
            <label onClick={()=>setActiveRole('instructor')} className="cursor-pointer">
              <input
                type="radio"
                value="instructor"
                {...register("role")}
                className="hidden"
              />
              <span className={`px-4 py-2 rounded-full text-gray-400 font-semibold ${activeRole!=='student' ? "bg-[#000814] text-white" : ""}`}>
                Instructor
              </span>
            </label>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
            <div className="flex gap-4">
              <div className="w-1/2">
                <p className="text-white text-base font-medium mb-1">
                    First Name
                    <sup className="text-red-700 font-extrabold">*</sup>
                </p>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  {...register("firstName", { required: true })}
                  className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none"
                />
                {errors.firstName && (
                  <p className="text-red-400 text-sm mt-1">First name required</p>
                )}
              </div>
              <div className="w-1/2">
                <p className="text-white text-base font-medium mb-1">
                    Last Name
                    <sup className="text-red-700 font-extrabold">*</sup>
                </p>
                <input
                  type="text"
                  placeholder="Last Name"
                  {...register("lastName", { required: true })}
                  className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none"
                />
                {errors.lastName && (
                  <p className="text-red-400 text-sm mt-1">Last name required</p>
                )}
              </div>
            </div>

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

            <div className="flex gap-4">
              <div className="w-1/2">
                <p className="text-white text-base font-medium mb-1">
                    Create Password
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
              <div className="w-1/2">
                <p className="text-white text-base font-medium mb-1">
                    Confirm Password
                    <sup className="text-red-700 font-extrabold">*</sup>
                </p>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  {...register("confirmPassword", {
                    required: true,
                  })}
                  className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none"
                />
                {errors.confirmPassword && (
                  <p className="text-red-400 text-sm mt-1">
                    Confirm your password
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-semibold py-2 rounded-md hover:bg-yellow-500 transition cursor-pointer"
            >
              Create Account
            </button>
          </form>
          <div className="flex items-center justify-center text-white w-full text-center gap-2 pt-2">
            <p className="text-sm font-semibold text-gray-500">Already have an account</p>
            <Link className="underline text-sm font-semibold text-yellow-500 hover:text-yellow-400" to={'/login'}>Login</Link>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692"
            alt="Students"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
