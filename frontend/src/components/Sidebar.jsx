import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import { FiInfo } from "react-icons/fi";

const Sidebar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`relative h-screen bg-[#070b14] border-r border-white/5 flex flex-col justify-between overflow-hidden transition-all duration-300
      ${isCollapsed ? "w-[74px]" : "w-[260px]"}
      `}
    >
      {/* 🌟 background glow */}
      <div className="absolute -top-24 left-10 w-[220px] sm:w-[320px] h-72 sm:h-80 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none"></div>

      {/* TOP */}
      <div>
        {/* LOGO */}
        <div className="h-[72px] flex items-center px-4 border-b border-white/5 backdrop-blur-xl shrink-0">
          <div className="w-8 h-8 rounded-full bg-[#22d3ee] flex items-center justify-center shadow-[0_0_28px_rgba(34,211,238,0.55)] flex-shrink-0">
            <div className="w-3 h-0.5 bg-white rounded-full rotate-12"></div>
          </div>

          {!isCollapsed && (
            <h1 className="ml-3 text-[14px] sm:text-[15px] font-semibold tracking-[1px] text-white whitespace-nowrap">
              MOVRS
            </h1>
          )}
        </div>

        {/* MENU */}
        <div className="px-2 sm:px-3 py-5 sm:py-7 space-y-2">
          {/* HOME */}
          <Link
            to="/"
            className={`group flex items-center gap-3 h-11 sm:h-12 px-3 sm:px-4 rounded-xl transition-all duration-300 text-[13px] sm:text-[13.5px] font-medium relative overflow-hidden
            ${
              location.pathname === "/"
                ? "bg-[#0b1220] text-white"
                : "text-[#94a3b8] hover:bg-[#0b1220]/60"
            }`}
          >
            <HiOutlineHome className="text-[18px] flex-shrink-0 group-hover:text-[#22d3ee]" />

            {!isCollapsed && (
              <span className="truncate">
                Home
              </span>
            )}

            {location.pathname === "/" && (
              <div className="absolute left-0 top-0 h-full w-[3px] bg-[#22d3ee] shadow-[0_0_14px_rgba(34,211,238,0.8)]"></div>
            )}
          </Link>

          {/* ABOUT */}
          <Link
            to="/about"
            className={`group flex items-center gap-3 h-11 sm:h-12 px-3 sm:px-4 rounded-xl transition-all duration-300 text-[13px] sm:text-[13.5px] font-medium relative overflow-hidden
            ${
              location.pathname === "/about"
                ? "bg-[#0b1220] text-white"
                : "text-[#94a3b8] hover:bg-[#0b1220]/60"
            }`}
          >
            <FiInfo className="text-[17px] flex-shrink-0 group-hover:text-[#22d3ee]" />

            {!isCollapsed && (
              <span className="truncate">
                About
              </span>
            )}

            {location.pathname === "/about" && (
              <div className="absolute left-0 top-0 h-full w-[3px] bg-[#22d3ee] shadow-[0_0_14px_rgba(34,211,238,0.8)]"></div>
            )}
          </Link>
        </div>
      </div>

      {/* BOTTOM TOGGLE ONLY */}
      <div className="px-3 sm:px-4 py-5 sm:py-6 border-t border-white/5 text-[#64748b] text-[11px] sm:text-[12px]">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex items-center gap-2 hover:text-[#22d3ee] transition-all duration-300"
        >
          <span className="text-sm">
            {isCollapsed ? "→" : "←"}
          </span>

          {!isCollapsed && (
            <span className="whitespace-nowrap">
              Collapse
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;