import React from "react";
import Footer from "../SideBarComponents/Footer";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";

const Projects = ({setActivePage}) => {

  const handleClick = () => {
    setActivePage("videos");
  };

  return (
    <div className="overflow-auto h-screen w-full">
      <div className="text-white p-10 flex flex-col">
        {/* Content Wrapper */}
        <div className="flex-grow">
          {/* Heading */}
          <div className="mb-12">
            <h1 className="text-4xl capitalize ">all projects</h1>
          </div>

          {/* Featured Projects + Trusted By Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            <div className="bg-[#111111] overflow-hidden rounded-lg border border-gray-600 ">
              <div className="w-full h-70 ">
                <img src={project1} className="w-full h-full" alt="project1" />
              </div>

              <div className="p-3">
                <div className="flex capitalize gap-2 overflow-auto">
                  <h1 className="border border-gray-700  text-sm rounded-md px-3 py-1">
                    node
                  </h1>
                  <h1 className="border border-gray-700  text-sm rounded-md px-3 py-1">
                    express
                  </h1>
                  <h1 className="border border-gray-700  text-sm rounded-md px-3 py-1">
                    react
                  </h1>
                  <h1 className="border border-gray-700  text-sm rounded-md px-3 py-1">
                    mongodb
                  </h1>
                </div>

                <div className="">
                  <h1 className="pt-4 pb-2  text-4xl">SnapStudy</h1>
                  <p className="text-sm capitalize pt-2 pb-1 text-gray-500">
                    Project is under development. If you'd like to see the
                    progress, you can watch the demo
                    <span onClick={()=>handleClick()} className="text-blue-400 cursor-pointer">  video<i className="ri-arrow-drop-right-line"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#111111] overflow-hidden rounded-lg border border-gray-600 ">
              
              <div className="w-full h-70">
                <img src={project2} className="w-full h-full" alt="project1" />
              </div>

              <div className="p-3">
               
                <div className="flex capitalize gap-2">
                  <h1 className="border border-gray-700  text-sm rounded-md px-3 py-1">
                    HTML
                  </h1>
                  <h1 className="border border-gray-700  text-sm rounded-md px-3 py-1">
                    CSS
                  </h1>
                  <h1 className="border border-gray-700  text-sm rounded-md px-3 py-1">
                    JavaScript
                  </h1>
                </div>

                <div className="flex flex-col items-start ">
                  <h1 className="pt-4 pb-2 text-4xl">
                    SynthAI Trio{" "}
                    <a href="https://thaai.netlify.app/" target="_blank">
                      <span>
                      <i className="text-[20px]  bg-white text-black rounded-full p-2 cursor-pointer ri-arrow-right-up-long-line"></i>
                    </span>
                    </a>
                  </h1>
                  <p className="capitalize pt-2 pb-1 text-sm text-gray-500">
                    <span className="">Website is ready! You can check it out by clicking the arrow above or watch the demo <span onClick={()=>handleClick()} className="text-blue-400 cursor-pointer">video<i className="ri-arrow-drop-right-line"></i></span></span>
                  </p>
                </div>


              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            <div className="bg-[#111111] overflow-hidden rounded-lg border border-gray-600 ">
              <div className="">
                <img src={project1} className="w-full h-full" alt="project1" />
              </div>

              <div className="p-3">
                <div className="flex capitalize gap-2">
                  <h1 className="border border-gray-700  text-sm rounded-md px-3 py-1">
                    node
                  </h1>
                  <h1 className="border border-gray-700  text-sm rounded-md px-3 py-1">
                    express
                  </h1>
                  <h1 className="border border-gray-700  text-sm rounded-md px-3 py-1">
                    react
                  </h1>
                  <h1 className="border border-gray-700  text-sm rounded-md px-3 py-1">
                    mongodb
                  </h1>
                </div>

                <div className="flex items-end ">
                  <h1 className="pt-4 pb-2  text-4xl">SnapStudy</h1>
                  <p className="text-sm text-gray-500">In progress</p>
                </div>
              </div>
            </div>

            <div className="bg-[#111111] overflow-hidden rounded-lg border border-gray-600 ">
              <div className="">
                <img src={project2} className="w-full h-full" alt="project1" />
              </div>

              <div className="p-3">
                <div className="flex capitalize gap-2">
                  <h1 className="border border-gray-700  text-sm rounded-md px-3 py-1">
                    HTML
                  </h1>
                  <h1 className="border border-gray-700  text-sm rounded-md px-3 py-1">
                    CSS
                  </h1>
                  <h1 className="border border-gray-700  text-sm rounded-md px-3 py-1">
                    JavaScript
                  </h1>
                </div>

                <div className="flex items-end ">
                  <h1 className="pt-4 pb-2  text-4xl">
                    SynthAI Trio{" "}
                    <span className="text-md">
                      <i class="ri-arrow-right-up-box-fill"></i>
                    </span>
                  </h1>
                </div>
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

export default Projects;
