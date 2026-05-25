import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";

/* ✅ SCROLL TO TOP ON PAGE CHANGE */
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
  return (
    <BrowserRouter>

      <ScrollToTop />

      <div className="flex bg-[#020817] text-white min-h-screen">

        <Sidebar />

        <div
          id="main-scroll-container"
          className="flex-1 overflow-y-auto h-screen"
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