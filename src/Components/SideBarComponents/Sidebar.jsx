import React, { useState } from "react";
import profilepic from '../../assets/portfolio pic.png';

const Sidebar = ({ setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (page) => {
    setActivePage(page);
    setIsOpen(false); // sidebar close on click (for mobile)
  };

  return (
    <>
      {/* Hamburger Icon */}
      <div className="lg:hidden absolute top-4 left-4 z-50">
        <button onClick={() => setIsOpen(!isOpen)}>
          <i className="ri-menu-2-line text-3xl text-white"></i>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed lg:static top-0 left-0 h-screen bg-[#000] w-64 z-40 
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <div className="flex flex-col justify-center items-center h-screen text-white">

          <div className="flex flex-col justify-center items-center relative bottom-30">

             <div className="w-23 h-23">
              <img src={profilepic} className="w-full h-full rounded-full" alt="" />
              </div> 

              <div>
                <h1 className="font-bold uppercase text-xl mt-3 tracking-tight">Arsalan Ali Khan</h1>
              </div>

          </div>


          <div className="capitalize space-y-6 cursor-pointer text-lg ">
            <h1 className="tracking-tight" onClick={() => handleClick("home")}> <span><i className="ri-cup-line"></i></span> home</h1>
            <h1 className="tracking-tight" onClick={() => handleClick("projects")}> <span><i className="ri-database-2-line"></i></span> projects</h1>
            <h1 className="tracking-tight" onClick={() => handleClick("about")}><i className="ri-at-line"></i> about</h1>
            <h1 className="tracking-tight" onClick={() => handleClick("videos")}> <span><i className="ri-tv-2-line"></i></span> videos</h1>
            <h1 className="tracking-tight" onClick={() => handleClick("contact")}> <span><i className="ri-box-1-line"></i></span> contact</h1>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black opacity-50 lg:hidden z-30"
        ></div>
      )}
    </>
  );
};

export default Sidebar;
