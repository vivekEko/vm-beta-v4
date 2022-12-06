import React from "react";
import Admin_header from "../components/admin/admin_global_components/Admin_header";

const Login = () => {
  return (
    <div className="bg-[#FC8D0B] bg-opacity-20 h-screen">
      <Admin_header />
      <div className="flex justify-center pt-10 ">
        <div className="p-10 bg-white rounded-md w-full max-w-[400px] ">
          <h1 className="text-center font-semibold text-xl">Log in</h1>

          {/* login form */}
          <form className="pt-10 ">
            <label htmlFor="email">Email address</label>
            <input
              name="email"
              type="text"
              className="border rounded-md p-2 w-full my-2 outline-[#FC8D0B]"
            />

            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              className="border rounded-md p-2 w-full my-2 outline-[#FC8D0B]"
            />
            {/* error */}
            <p className=" text-[#FF440D]">Incorrect credentials</p>

            <button
              type="submit"
              className="rounded-md bg-[#FF440D] text-white w-full mt-3 p-2 transition-all active:scale-95"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
