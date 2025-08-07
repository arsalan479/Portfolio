import React, { useEffect, useRef } from "react";
import Footer from "../SideBarComponents/Footer";
import project1 from "../../assets/mockupsnapstudy.png";
import project2 from "../../assets/synthaimockup.png";
import { animate } from "animejs";

const Projects = ({ setActivePage }) => {
  const handleClick = () => {
    setActivePage("videos");
  };

  const div1 = useRef(null);
  const textref = useRef(null)

  useEffect(()=>{
     animate(
      div1.current,
      { 
        opacity: [0, 1],
        scale: [0.8, 1],
      },
      {
        duration: 0.6,  // in seconds
        delay: 0.4,     // in seconds
        easing: "ease-out"
      }
    );
     animate(
      textref.current,
      { 
        opacity: [0, 1],
        scale: [0.8, 1],
      },
      {
        duration: 0.6,  // in seconds
        delay: 0.4,     // in seconds
        easing: "ease-out"
      }
    );
  },[])


  return (
    <div className="overflow-auto h-screen w-full">
      <div className="text-white p-6 md:p-10 flex flex-col">
        {/* Content Wrapper */}
        <div className="flex-grow">
          {/* Heading */}
          <div ref={textref} className="mb-12">
            <h1  className="text-4xl capitalize">all projects</h1>
          </div>

          {/* Projects Grid */}
          <div ref={div1} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            
            {/* Project 1 */}
            <div className="bg-[#111111] overflow-hidden rounded-lg border border-gray-600">
              <div className="w-full h-64 md:h-80">
                <img
                  src={project1}
                  className="w-full h-full object-cover"
                  alt="project1"
                />
              </div>

              <div className="p-3">
                <div className="flex capitalize gap-2 overflow-auto">
                  {["node", "express", "react", "mongodb"].map((tech, index) => (
                    <h1
                      key={index}
                      className="border border-gray-700 text-sm rounded-md px-3 py-1"
                    >
                      {tech}
                    </h1>
                  ))}
                </div>

                <div>
                  <h1 className="pt-4 pb-2 text-3xl md:text-4xl">SnapStudy</h1>
                  <p className="text-sm capitalize pt-2 pb-1 text-gray-500">
                    Project is under development. If you'd like to see the
                    progress, you can watch the demo
                    <span
                      onClick={handleClick}
                      className="text-blue-400 cursor-pointer"
                    >
                      video<i className="ri-arrow-drop-right-line"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-[#111111] overflow-hidden rounded-lg border border-gray-600">
              <div className="w-full h-64 md:h-80">
                <img
                  src={project2}
                  className="w-full h-full object-cover"
                  alt="project2"
                />
              </div>

              <div className="p-3">
                <div className="flex capitalize gap-2">
                  {["HTML", "CSS", "JavaScript"].map((tech, index) => (
                    <h1
                      key={index}
                      className="border border-gray-700 text-sm rounded-md px-3 py-1"
                    >
                      {tech}
                    </h1>
                  ))}
                </div>

                <div className="flex flex-col items-start">
                  <h1 className="pt-4 pb-2 text-3xl md:text-4xl flex items-center gap-2">
                    SynthAI Trio
                    <a
                      href="https://thaai.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="text-[20px] bg-white text-black rounded-full p-2.5 cursor-pointer ri-share-box-line"></i>
                    </a>
                  </h1>
                  <p className="capitalize pt-2 pb-1 text-sm text-gray-500">
                    Website is ready! You can check it out by clicking the arrow
                    above or watch the demo{" "}
                    <span
                      onClick={handleClick}
                      className="text-blue-400 cursor-pointer"
                    >
                      video<i className="ri-arrow-drop-right-line"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
