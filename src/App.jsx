import React, { useState } from "react";
import Sidebar from "./Components/SideBarComponents/Sidebar";
import Home from "./Components/Main/Home";
import "remixicon/fonts/remixicon.css";

const App = () => {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <Home />;
      case "about":
        return "aboout";
      case "contact":
        return "contact";
      case "projects":
        return "projects";
      case "videos":
        return "videos";
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
  style={{
    background: "radial-gradient(circle, #9642CF 0%, #9642CF 25%, #151515 70%)"
  }}
>
  {renderPage()}
</div>

    </div>
  );
};

export default App;
