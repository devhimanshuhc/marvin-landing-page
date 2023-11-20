import React from "react";
import { motion } from "framer-motion";

function Image() {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.25 }}
      className="flex h-96 mb-5 mt-10 md:flex-col md:w-full "
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.25 }}
        className="w-2/5 mr-2 md:w-full md:mb-2"
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1699697562577-778f84bc02d2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="First"
          className="w-full h-full object-cover md:h-72 "
        />
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.25 }}
        className="w-2/5 mr-2 md:w-full md:h-72 md:mb-2 "
      >
        <img
          src="https://images.unsplash.com/photo-1700130862148-8bea5f545bfe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Second"
          className="w-full h-full object-cover "
        />
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.25 }}
        className="w-3/5 md:w-full md:h-72"
      >
        <img
          src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Third "
          className="w-full h-full object-cover "
        />
      </motion.div>
    </motion.div>
  );
}

export default Image;
