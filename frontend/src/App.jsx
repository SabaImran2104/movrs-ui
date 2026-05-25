import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <BrowserRouter>
      <div className="flex h-screen bg-[#020817] text-white overflow-hidden">

        {/* SIDEBAR (NOW PART OF LAYOUT) */}
        <Sidebar
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />

        {/* CONTENT (NOW NATURALLY SHIFTS) */}
        <div className="flex-1 overflow-y-auto transition-all duration-300">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>

        </div>

      </div>
    </BrowserRouter>
  );
}