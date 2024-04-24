import React from 'react'
import GenderCheckBox from './GenderCheckBox'

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto p-4">
      <div className="w-full p-6 rounded-lg backdrop-filter bg-gray-400  backdrop-blur-lg bg-clip-padding shadow-md bg-opacity-0">
         <h1 className="text-3xl text-center font-semibold text-stone-50 ">
            Signup 
            <span className="text-sky-400"> ChatApp</span>
         </h1>
         <form>
          <div>
            <label className="label p-2">
              <span className="label-text text-stone-50 text-base">Full Name</span>
            </label>
            <input type="text" placeholder="John Doe" className="w-full input input-bordered h-10 max-w-xs"/>
          </div>
          <div>
            <label className="label p-2">
              <span className="label-text text-stone-50 text-base">Username</span>
            </label>
            <input type="text" placeholder="johndoe" className="w-full input input-bordered h-10 max-w-xs"/>
          </div>
          <div>
            <label className="label p-2">
              <span className="label-text text-stone-50 text-base">Password</span>
            </label>
            <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10 max-w-xs"/>
          </div>
          <div>
            <label className="label p-2">
              <span className="label-text text-stone-50 text-base">Confirm Password</span>
            </label>
            <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10 max-w-xs"/>
          </div>
          <GenderCheckBox/>
          <a href="#" className="text-stone-50 mt-4 text-sm inline-block hover:text-blue-600 hover:underline">
            Already have an account?
          </a>
          <button className="btn btn-block btn-sm mt-2 hover:border hover:border-slate-400">Sign Up</button>
         </form>
      </div>
    </div>
  )
}

export default SignUp