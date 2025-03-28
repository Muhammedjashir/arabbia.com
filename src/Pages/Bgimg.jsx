import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Bgimg() {
  const images = [
    "https://res.cloudinary.com/dtljonz0f/image/upload/v1/shutterstock_2414539851_ss_non-editorial_dcx0bm",
    "src/pics/img2.jpg",
    "src/pics/img3.jpg",
    "src/pics/img4.jpg",
    "src/pics/img5.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
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
  );
}

export default Bgimg;
