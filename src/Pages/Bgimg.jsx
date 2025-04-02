import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Bgimg() {
  const images = [
    "https://res.cloudinary.com/dtljonz0f/image/upload/v1/shutterstock_2414539851_ss_non-editorial_dcx0bm",
    "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546412414-8035e1776c9a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1544092683-c0c9ebb368e5?q=80&w=1451&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1582120042072-d01e2fc8f3ea?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div>
      <div className="font-Ubuntu bg-white text-gray-700 uppercase text-sm sm:text-base md:text-lg font-bold flex items-center justify-center h-[35px] sm:h-[40px] md:h-[45px] px-2 sm:px-4 text-center">
        <h1>Exclusive portal for Dubai FreeHold Properties</h1>
      </div>
      <div className="sticky top-0 flex justify-center items-center h-screen w-full overflow-hidden">
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt="Background"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1 }}
            className="absolute object-cover w-full h-full"
          />
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Bgimg;
