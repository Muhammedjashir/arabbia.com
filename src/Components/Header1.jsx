import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // For icons
import { useNavigate } from "react-router-dom";

function Header1() {
  const [menuOpen, setMenuOpen] = useState(false);
  const Navigate=useNavigate()

  return (
    <>
    
      {/* Main Header */}
      <div className="  ">
        {/* Logo Section */}
        <div className="bg-black text-lg sm:text-xl md:text-3xl font-bold h-[65px] sm:h-[75px] md:h-[100px] flex flex-col justify-center items-center  px-4 sm:px-6 md:px-12 ">

        
        <div className="">
        <button onClick={()=>Navigate('/')} className="text-blue-400 font-Bricolage cursor-pointer text-base sm:text-lg md:text-4xl mt-2">
          ara<span className="text-pink-400">bb</span>ia
          <span className="text-gray-500 text-lg sm:text-xl md:text-3xl">.com</span>
        </button>
        </div>
        
        <h1 className=" font-light text-gray-500 uppercase text-sm sm:text-base md:text-sm flex items-center justify-center h-[35px] sm:h-[40px] md:h-[45px] px-2 sm:px-4 text-center">Exclusive portal for Dubai FreeHold Properties</h1>

       
        </div>
        {/* Desktop Navigation */}

        <div className="bg-gray-700 py-4 hidden md:flex flex-wrap justify-center items-center gap-15 text-white text-sm md:text-base">
            
          <button onClick={()=>Navigate('/properties')} className="hover:text-blue-600 group cursor-pointer ">
            Properties{" "}
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              (576)
            </span>
          </button>
          <button onClick={()=>Navigate('/projects')} className="hover:text-blue-600 group cursor-pointer">
            Projects
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              (576)
            </span>
          </button>
          <button onClick={()=>Navigate("/developers")} className="hover:text-blue-600 group cursor-pointer">
            Developers{" "}
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              (258)
            </span>
          </button>
          <button onClick={()=>Navigate('/agenciese')} className="hover:text-blue-600 group cursor-pointer">
            Agencies{" "}
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              (1,125)
            </span>
          </button>
          <a href="#" className="hover:text-blue-600 group">
            Brokers{" "}
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              (2,358)
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="bg-gray-700 w-full py-2 md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-gray-700 text-white flex flex-col items-center space-y-4 py-4 transition-all duration-300 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <button onClick={()=>Navigate("/properties")} className="hover:text-blue-600 group">
          Properties{" "}
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            (576)
          </span>
        </button>
        <button onClick={()=>Navigate('/projects')} className="hover:text-blue-600 group">
          Projects{" "}
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            (576)
          </span>
        </button>
        <button onClick={()=>Navigate('/developers')} className="hover:text-blue-600 group">
          Developers{" "}
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            (258)
          </span>
        </button>
        <button onClick={()=>Navigate('/agenciese')} className="hover:text-blue-600 group">
          Agencies{" "}
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            (1,125)
          </span>
        </button>
        <a href="#" className="hover:text-blue-600 group">
          Brokers{" "}
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            (2,358)
          </span>
        </a>
      </div>

      {/* Sub Header */}
     
    </>
  );
}

export default Header1;
