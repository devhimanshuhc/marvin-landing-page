import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white rounded-lg md:mt-[500px]  m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between md:flex md:flex-col md:text-center">
          <Link
            href="#"
            className="flex items-center justify-center  mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              AlPatrn
            </span>
          </Link>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto text-center mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link href="#" className="hover:underline">
            AlPatrn™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
