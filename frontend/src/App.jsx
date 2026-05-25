import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollContainer = document.getElementById("main-scroll-container");

    if (scrollContainer) {
      scrollContainer.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [pathname]);

  return null;
}

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="flex bg-[#020817] text-white min-h-screen overflow-hidden">

        {/* SIDEBAR */}
        <div className="fixed left-0 top-0 z-50 h-screen">
          <Sidebar
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />
        </div>

        {/* CONTENT (NOW FULLY RESPONSIVE SHIFT) */}
        <div
          id="main-scroll-container"
          className="flex-1 overflow-y-auto h-screen w-full transition-all duration-300"
          style={{
            marginLeft: isCollapsed ? "74px" : "260px",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;