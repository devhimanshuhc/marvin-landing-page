import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <section className="flex justify-between  bg-white p-4 max-w-screen-2xl mx-5 mt-5 items-baseline md:mt-0 md:p-1 md:mx-">
      <div className="flex items-baseline mt-2">
        <h1 className="flex items-baseline text-2xl font-bold text-black ">
          <Link href="#">AlPatrn</Link>
        </h1>
      </div>
      <div className="flex justify-end space-x-5">
        <div className="flex flex-col space-y-2 mr-16 md:hidden ">
          <Link
            className="text-gray-500 hover:text-black hover:font-medium font-medium  transition ease-in-out delay-50"
            href="#"
          >
            Homepage
          </Link>
          <Link
            className="text-gray-500 hover:text-black hover:font-medium font-medium  transition ease-in-out delay-50  "
            href="#"
          >
            Generator
          </Link>
          <Link
            className="text-gray-500 hover:text-black hover:font-medium font-medium  transition ease-in-out delay-50  "
            href="#"
          >
            Price-Plan
          </Link>
          <Link
            className="text-gray-500 hover:text-black hover:font-medium font-medium  transition ease-in-out delay-50  "
            href="#"
          >
            Blog News
          </Link>
        </div>

        <div className="flex flex-col space-y-2 md:hidden">
          <Link
            className="text-gray-500 hover:text-black hover:font-medium font-medium  transition ease-in-out delay-50  "
            href="#"
          >
            About Us
          </Link>
          <Link
            className="text-gray-500 hover:text-black hover:font-medium font-medium  transition ease-in-out delay-50  "
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-gray-500 hover:text-black hover:font-medium font-medium  transition ease-in-out delay-50  "
            href="#"
          >
            Collection 2023
          </Link>
          <Link
            className="text-gray-500 hover:text-black hover:font-medium font-medium  transition ease-in-out delay-50  "
            href="#"
          >
            Career
          </Link>
        </div>
        <button
          style={{
            marginLeft: "75px",
          }}
          className="bg-transparent flex justify-center hover:border-gray-900 font-medium items-center h-10 mt-8  text-black border-2 rounded-3xl px-6  transition duration-500 ease select-none focus:outline-none focus:shadow-outline"
        >
          Menu{" "}
          <img
            className="ml-2"
            width="12"
            height="12"
            src="https://img.icons8.com/ios-glyphs/30/sort-down.png"
            alt="sort-down"
          />
        </button>
      </div>
    </section>
  );
}

export default Navbar;
