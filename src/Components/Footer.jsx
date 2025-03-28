import React from "react";
import { Navigate } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-700 text-white relative z-10 ">
      {/* Header Section */}
      <div className="bg-white text-center p-4 text-gray-700 font-semibold text-2xl mb-3 max-w-7xl mx-auto sm:p-8 space-y-12 ">
        FreeHold Properties For Sale in Dubai
      </div>

      {/* Main Section */}
      <div className="bg-white text-center p-10 text-gray-800 flex flex-col items-center justify-center max-w-7xl mx-auto sm:p-8 space-y-12">
        <h2 className="text-3xl font-bold max-w-140 text-center">
          The <span className="text-pink-500">Exclusive portal</span> for Dubai
          FreeHold Properties -{" "}
          <button
            onClick={() => Navigate("/")}
            className="text-blue-500 font-bold font-Ubuntu cursor-pointer "
          >
            ara<span className="text-pink-400">bb</span>ia
            <span className="text-gray-700 text-2xl">.com</span>{" "}
          </button>
        </h2>
        <p className="mt-4 text-xl text-gray-500 max-w-223">
          <span className="font-Ubuntu">arabbia.com</span>connects thousands of
          buyers to Dubai Property Developers, Dubai Real Estate Agencies, and
          Dubai Real Estate Brokers by providing the most accurate, latest, and
          authentic Project & Property listings.
        </p>
      </div>

      {/* Listings Section */}
      <section className="mt-[1rem] w-full px-4 sm:px-[3%] tagline">
        <div className="w-full grid grid-cols-1 md:grid-cols-[170px_auto_170px] min-h-[100px] tagline_container bg-black">
          <div className="bg-[#1e1e1e] text-pink-500 text-[16px] font-[500] grid place-items-center py-[1rem] tagline_side_part">
            REAL LISTINGS
          </div>
          <div className="text-blue-500 text-[17px] font-bold text-center grid place-items-center py-[1rem] tagline_center_part">
            The most Authentic & Exclusive Portal for Freehold Projects &
            Properties in Dubai
          </div>
          <div className="bg-[#1e1e1e] text-pink-500 text-[16px] font-[500] grid place-items-center py-[1rem] tagline_side_part">
            REAL PROPERTIES
          </div>
        </div>
      </section>

      <footer className="mt-[1.45rem] w-full px-4 sm:px-[3%]">
        <div className="w-full grid grid-cols-1 md:grid-cols-[170px_1fr_1fr_170px] bg-black footer_container">
          {/* Left Section - Contact US */}
          <div className="bg-[var(--primary-black)] flex items-center justify-center gap-[1.5rem] text-[17px] font-[300] text-[#d7d7d7] footer_side_part py-4 sm:py-0">
            Contact US
          </div>

          {/* Middle Section - Company Info */}
          <div className="flex flex-col sm:flex-col items-center sm:items-start justify-start bg-[#1e1e1e] px-4 sm:px-[1.5rem] py-4 sm:py-[2.5rem] text-[16px] font-[300] leading-[30px] text-[#d7d7d7] text-center sm:text-left footer_center_part">
            <span>arabbia.com</span>
            <p>124/ XII, Meydan Free Zone, Dubai</p>
            <p>Call/Whatsapp: 00971-50-1234567</p>
            <p>info@arabbia.com</p>
          </div>

          {/* Middle Section - Policy Links */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center bg-[#1e1e1e] px-4 sm:px-[1.5rem] py-4 sm:py-[2.5rem] text-[16px] font-[300] leading-[30px] text-[#d7d7d7] text-center sm:text-left footer_center_part_policy">
            Register-Agencies | Terms of Use | Privacy Policy
          </div>

          {/* Right Section - Social Media Icons */}
          <div className="flex items-center justify-center gap-[1.5rem] text-[17px] font-[300] text-[#d7d7d7] footer_side_part py-4 sm:py-0">
            <img
              className="h-6 sm:h-7"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
              alt="Facebook"
              title="Facebook"
            />
            <img
              className="h-6 sm:h-7"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s"
              alt="LinkedIn"
              title="LinkedIn"
            />
          </div>
        </div>
      </footer>

      {/* Footer */}
      <div className="text-center bg-black text-gray-400 p-3 text-sm h-15 flex justify-center items-center mt-10">
        All rights reserved 2024{" "}
        <button
          onClick={() => Navigate("/")}
          className="text-blue-400 font-Ubuntu cursor-pointer"
        >
          @arabbia.com
        </button>
        . Designed by
        <span className="text-yellow-500"> IMIT Park Ltd.</span>
      </div>
    </div>
  );
};

export default Footer;
