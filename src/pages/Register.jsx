import React from "react";
import Background from "../assets/Design/register.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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
          <form className="max-w-[400px] w-full mx-auto rounded-lg p-8 px-8 bg-[#18181B]">
            <h2 className="text-4xl dark:text-white font-bold text-center">
              REGISTER
            </h2>
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
            <div className="flex flex-col text-gray-400 py-2">
              <label>Password</label>
              <input
                className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="password"
              />
            </div>
            <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
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
