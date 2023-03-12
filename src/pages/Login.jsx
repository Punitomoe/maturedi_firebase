import React from "react";
import Background from "../assets/Design/login.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Google from "../assets/Icon/search.png";

export default function Login() {
  return (
    <div>
      <div className="w-full mt-[20px] absolute inline-block">
        <Navbar />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full">
        <div className="hidden sm:block">
          <img className="w-full h-full object-cover" src={Background} alt="" />
        </div>

        <div className="flex flex-col justify-center pt-[100px] pb-[150px]">
          <form className="max-w-[400px] w-full mx-auto rounded-lg bg-[#18181B] p-8 px-8">
            <h2 className="text-4xl dark:text-white font-bold text-center">
              SIGN IN
            </h2>

            <div className="flex flex-col text-gray-400 py-2">
              <label>Login with</label>
              <button className="rounded-lg w-[120px] h-auto mt-2 bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none flex items-center justify-center">
                <img src={Google} className="w-[36px] h-auto px-2 py-2" />
              </button>
            </div>
            <div className="flex items-center justify-center">
              <span class="text-gray-500 font-medium">---------------- or continue with ----------------</span>
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Username</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Password</label>
              <input
                className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="password"
              />
            </div>
            <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
              SIGN IN
            </button>
            <button className="w-full my-2 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
              REGISTER
            </button>
          </form>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
