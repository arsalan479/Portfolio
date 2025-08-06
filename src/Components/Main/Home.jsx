import React from "react";
import Footer from "../SideBarComponents/Footer";
import project1 from "../../assets/mockupsnapstudy.png";

const Home = ({ setActivePage }) => {
  const handleClick = (page) => {
    setActivePage(page);
  };

 

  return (
    <div className="overflow-auto h-screen w-full">
      <div className="text-white  p-10 flex flex-col">
        {/* Content Wrapper */}
        <div className="flex-grow">
          {/* Heading */}
          <div className="mb-12">
            <h1 className="text-4xl capitalize tracking-tight">
              Webflow Development <br /> Subscription Services
            </h1>
          </div>

          {/* Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {/* Left - 4 Small Boxes */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#111111] p-8 rounded-lg border border-gray-600 shadow-lg flex flex-col justify-center items-center">
                <p className="text-4xl">500+</p>
                <p className="text-sm text-center text-gray-400 mt-2">
                  LinkdIn Connection
                </p>
              </div>
              <div className="bg-[#111111] p-8 rounded-lg border border-gray-600 shadow-lg flex flex-col justify-center items-center">
                <p className="text-xl uppercase">Mern</p>
                <p className="text-xl">Expert</p>
              </div>
              <div className="bg-[#111111] p-8 rounded-lg border border-gray-600 shadow-lg flex flex-col justify-center items-center">
                <p className="text-4xl">5+</p>
                <p className="text-sm text-gray-400 mt-2 text-center">
                  Satisfied Clients
                </p>
              </div>
              <div className="bg-[#111111] p-8 rounded-lg border border-gray-600 shadow-lg flex flex-col justify-center items-center">
                <p className="text-4xl">2+</p>
                <p className="text-sm text-gray-400 mt-2 text-center">
                  Year Project Making Experience
                </p>
              </div>
            </div>

            {/* Right - Large Content Box */}
            <div className="bg-[#111111] p-10 rounded-lg border border-gray-600 shadow-xl flex flex-col justify-center">
              <h1 className="text-2xl capitalize tracking-tight mb-4">
                Your ultimate webflow partner
              </h1>
              <p className="text-gray-400 leading-relaxed mb-6 ">
                Eliminate the hassle of dealing with developers lacking design
                sensibility, and trust in someone who possesses the expertise,
                passion, and vision to realize your ideas as you've imagined
                them.
              </p>

              <p className="text-blue-400 cursor-pointer font-medium ">
                <a href="/resume.pdf" download>
                  Access Resume
                  <span>
                    <i class="ri-arrow-drop-right-line"></i>
                  </span>
                </a>
              </p>
            </div>
          </div>

          {/* Featured Projects + Trusted By Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            <div className="bg-[#111111] p-10 rounded-lg border border-gray-600 shadow-lg">
              <h2 className="text-xl text-center mb-4 text-white">
                Featured Projects
              </h2>
              <p
                className="text-center leading-0 text-blue-400 cursor-pointer"
                onClick={() => handleClick("projects")}
              >
                View All
                <span>
                  <i class="ri-arrow-drop-right-line"></i>
                </span>
              </p>
              <div className="overflow-hidden rounded-lg mt-10 border-2 border-gray-600">
                <img src={project1} className="w-full h-full" alt="project1" />
              </div>
            </div>
            <div className="bg-[#111111] flex justify-center items-center p-10 rounded-lg border border-gray-600 shadow-lg">
             <div>
               <h2 className="text-xl  mb-4 text-white">Trusted By</h2>
              <p className="text-gray-400">
                Proudly collaborated with global clients and organizations who
                value quality and innovation Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, quo.
              </p>
             </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
