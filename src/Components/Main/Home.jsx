import React from "react";

const Home = () => {
  return (
    <div className="text-white overflow-auto h-screen w-full p-10">
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
          <div className="bg-[#111111] p-8 rounded-xl shadow-lg flex flex-col justify-center items-center">
            <p className="text-3xl font-bold">100+</p>
            <p className="text-sm text-center text-gray-400 mt-2">Completed Projects</p>
          </div>
          <div className="bg-[#111111] p-8 rounded-xl shadow-lg flex flex-col justify-center items-center">
            <p className="text-xl font-semibold">Webflow</p>
            <p className="text-xl font-semibold">Expert</p>
          </div>
          <div className="bg-[#111111] p-8 rounded-xl shadow-lg flex flex-col justify-center items-center">
            <p className="text-3xl font-bold">50+</p>
            <p className="text-sm text-gray-400 mt-2">Satisfied Clients</p>
          </div>
          <div className="bg-[#111111] p-8 rounded-xl shadow-lg flex flex-col justify-center items-center">
            <p className="text-3xl font-bold">6</p>
            <p className="text-sm text-gray-400 mt-2">Years Experience</p>
          </div>
        </div>

        {/* Right - Large Content Box */}
        <div className="bg-[#111111] p-10 rounded-xl shadow-xl flex flex-col justify-center">
          <h1 className="text-2xl font-semibold mb-4">
            Your ultimate webflow partner
          </h1>
          <p className="text-gray-400 leading-relaxed mb-6">
            Eliminate the hassle of dealing with developers lacking design
            sensibility, and trust in someone who possesses the expertise,
            passion, and vision to realize your ideas as you&apos;ve imagined
            them.
          </p>
          <a
            href="#"
            className="text-blue-400 font-medium hover:underline transition"
          >
            Get in touch &rsaquo;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
