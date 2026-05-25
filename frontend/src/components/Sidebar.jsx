import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import { FiInfo } from "react-icons/fi";


const Sidebar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`relative min-h-screen bg-[#070b14] border-r border-white/5 flex flex-col justify-between overflow-hidden transition-all duration-300
      ${isCollapsed ? "w-[80px]" : "w-[260px]"}`}
    >

      {/* 🌟 background glow */}
      <div className="absolute top-[-120px] left-[-80px] w-[320px] h-[320px] bg-cyan-500/10 blur-[150px] rounded-full"></div>

      {/* TOP */}
      <div>

        {/* LOGO */}
        <div className="h-[78px] flex items-center px-4 border-b border-white/5 backdrop-blur-xl">

          <div className="w-8 h-8 rounded-full bg-[#22d3ee] flex items-center justify-center shadow-[0_0_28px_rgba(34,211,238,0.55)]">
            <div className="w-3 h-[2px] bg-white rounded-full rotate-12"></div>
          </div>

          {!isCollapsed && (
            <h1 className="ml-3 text-[15px] font-[600] tracking-[1px] text-white">
              MOVRS
            </h1>
          )}

        </div>

        {/* MENU */}
        <div className="px-3 py-7 space-y-2">

          {/* HOME */}
          <Link
            to="/"
            className={`group flex items-center gap-3 h-[48px] px-4 rounded-xl transition-all duration-300 text-[13.5px] font-[500] relative overflow-hidden
            ${
              location.pathname === "/"
                ? "bg-[#0b1220] text-white"
                : "text-[#94a3b8] hover:bg-[#0b1220]/60"
            }`}
          >
            <HiOutlineHome className="text-[18px] group-hover:text-[#22d3ee]" />
            {!isCollapsed && "Home"}

            {location.pathname === "/" && (
              <div className="absolute left-0 top-0 h-full w-[3px] bg-[#22d3ee] shadow-[0_0_14px_rgba(34,211,238,0.8)]"></div>
            )}
          </Link>

          {/* ABOUT */}
          <Link
            to="/about"
            className={`group flex items-center gap-3 h-[48px] px-4 rounded-xl transition-all duration-300 text-[13.5px] font-[500] relative overflow-hidden
            ${
              location.pathname === "/about"
                ? "bg-[#0b1220] text-white"
                : "text-[#94a3b8] hover:bg-[#0b1220]/60"
            }`}
          >
            <FiInfo className="text-[17px] group-hover:text-[#22d3ee]" />
            {!isCollapsed && "About"}

            {location.pathname === "/about" && (
              <div className="absolute left-0 top-0 h-full w-[3px] bg-[#22d3ee] shadow-[0_0_14px_rgba(34,211,238,0.8)]"></div>
            )}
          </Link>

        </div>
      </div>

      {/* BOTTOM TOGGLE ONLY */}
      <div className="px-4 py-6 border-t border-white/5 text-[#64748b] text-[12px]">

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex items-center gap-2 hover:text-[#22d3ee] transition-all"
        >
          <span>
            {isCollapsed ? "→" : "←"}
          </span>

          {!isCollapsed && "Collapse"}
        </button>

      </div>
    </div>
  );
};

export default Sidebar;