import React from 'react'

const Login = () => {
  return (
    <div className="p-4 flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className="text-3xl font-semibold text-center text-stone-50">
          Login
          <span className="text-sky-400"> ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base text-stone-50">Username</span>
            </label>
            <input type="text" placeholder="Enter username" className="input input-bordered w-full max-w-xs"/>
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base text-stone-50">Password</span>
            </label>
            <input type="text" placeholder="Enter password" className="input input-bordered w-full max-w-xs"/>
          </div>
          <a href="#" className="text-sm hover:underline text-stone-50 hover:text-blue-600 mt-2 inline-block">
            {"Don't"} have an account?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login