import React from "react";
import { motion } from "framer-motion";

function Headings() {
  return (
    <motion.section
      variants={{
        hidden: { opacity: 0, y: -75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.25 }}
      className="flex flex-col  max-w-screen-2xl mx-5  md:justify-center md:items-center bg-white p-4 mt-5 items-baseline md:text-center"
    >
      <div className="text-2xl font-medium mb-6 text-gray-500  md:text-sm ">
        {" "}
        Revolutionize Your
      </div>
      <div className=" font-bold">
        <div className="text-7xl tracking-wide mb-5 md:text-3xl">
          {" "}
          Creative Projects With
          <br />
          the Ultimate AI-powered
          <br />
          Pattern
          {/* <button className="bg-black text-xl text-center rounded-3xl  text-white h-10 px-8 mb-5  ml-10">
            START GENERATING
          </button> */}
        </div>
        <div className="text-gray-500 flex md:flex-col-reverse">
          <button className="bg-gray-900 text-md text-center rounded-full border-2 text-white px-10 font-medium hover:bg-white hover:border-2 hover:border-gray-900 transition ease-in-out delay-80  hover:text-gray-900 hover:font-medium py-4  md:px-5 md:py-4">
            START GENERATING
          </button>
          <div className="text-xl ml-5 font-normal md:mb-5 md:mr-0">
            The Next generation <br />
            <strong className="text-black font-bold">Production</strong> for
            Designers
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Headings;
