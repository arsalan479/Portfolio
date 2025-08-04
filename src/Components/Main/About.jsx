import React from "react";
import Footer from "../SideBarComponents/Footer";

const About = () => {
  return (
    <>
      <div className="overflow-auto h-screen w-full ">
        <div className="text-white p-10 flex flex-col">
          {/* Heading */}
          <div className="mb-12 ">
            <h1 className="text-4xl capitalize">Behind the Code</h1>
            {/* <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
              MERN Stack Developer & Webflow Expert passionate about building
              modern, scalable, and visually appealing web applications.
            </p> */}
          </div>

          {/* First Row - About + Skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {/* Card 1 - About */}
            <div className="bg-[#111111] p-8 rounded-lg border border-gray-600 shadow-lg">
              <h2 className="text-2xl font-semibold text-white mb-4">
                About Me
              </h2>
              <p className="text-gray-400 leading-relaxed">
                I am a MERN Stack Developer with a strong focus on creating
                dynamic and interactive applications. I have worked on multiple
                projects ranging from portfolio websites to full-fledged web
                applications, ensuring responsive design and seamless user
                experience.
              </p>
            </div>

            {/* Card 2 - Skills */}
            <div className="bg-[#111111] p-8 rounded-lg border border-gray-600 shadow-lg">
              <h2 className="text-2xl font-semibold text-white mb-4">
                My Skills
              </h2>
              <ul className="text-gray-400 list-disc list-inside space-y-2">
                <li>JavaScript (ES6+)</li>
                <li>React.js </li>
                <li>Node.js, Express.js</li>
                <li>MongoDB, Mongoose</li>
                <li>Tailwind CSS & Responsive UI</li>
                <li>Git & GitHub</li>
              </ul>
            </div>
          </div>

          {/* Second Row - Experience + Mission */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 3 - Experience */}
            <div className="bg-[#111111] p-8 rounded-lg border border-gray-600 shadow-lg">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Experience
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Through my projects, I gained expertise in building RESTful APIs,
                integrating databases, optimizing front-end performance, and
                deploying full-stack applications. Working on real-world
                challenges has improved my problem-solving and teamwork skills.
              </p>
            </div>

            {/* Card 4 - Mission */}
            <div className="bg-[#111111] p-8 rounded-lg border border-gray-600 shadow-lg">
              <h2 className="text-2xl font-semibold text-white  mb-4">
                My Mission
              </h2>
              <p className="text-gray-400 leading-relaxed">
                My mission is to deliver cutting-edge digital solutions that not
                only meet client expectations but also help them achieve their
                goals. I aim to blend creativity with technology to build
                innovative and impactful projects.
              </p>
             <p className="text-blue-400 mt-3 cursor-pointer font-medium ">
                <a href="/resume.pdf" download>
                  Access Resume
                  <span>
                    <i class="ri-arrow-drop-right-line"></i>
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default About;
