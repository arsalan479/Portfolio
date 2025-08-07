import React, { useState } from "react";
import Sidebar from "./Components/SideBarComponents/Sidebar";
import Home from "./Components/Main/Home";
import "remixicon/fonts/remixicon.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Projects from "./Components/Main/Projects";
import About from "./Components/Main/About";
import Videos from "./Components/Main/Videos";

const App = () => {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <Home setActivePage={setActivePage} />;
      case "about":
        return <About />;
      case "projects":
        return <Projects setActivePage={setActivePage} />;
      case "videos":
        return <Videos />;
      default:
        return <Home />;
    }
  };
  return (

    <div className="flex bg-[#151515] w-full h-screen">
  
      <div>
        <Sidebar setActivePage={setActivePage} />
      </div>
      <div
        className="flex justify-center items-center w-full h-full"
        style={{
          background:
            "radial-gradient(circle, #9642CF 0%, #9642CF 25%, #151515 60%)",
        }}
      >
        {renderPage()}
      </div>
    </div>
  );
};

export default App;
