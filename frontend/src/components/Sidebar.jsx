import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import { FiInfo } from "react-icons/fi";
import { Menu } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* 📱 MOBILE TOP BAR (Hamburger) */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-[60] bg-[#070b14] border-b border-white/5 h-14 flex items-center px-4">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white"
        >
          <Menu />
        </button>

        <h1 className="ml-3 text-white font-semibold tracking-[1px]">
          MOVRS
        </h1>
      </div>

      {/* BACKDROP (mobile only) */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`
          fixed md:relative z-50 top-0 left-0 h-screen
          bg-[#070b14] border-r border-white/5 flex flex-col justify-between
          transition-all duration-300 overflow-hidden

          ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}

          ${isCollapsed ? "md:w-[74px] w-[240px]" : "md:w-[260px] w-[240px]"}
        `}
      >
        {/* 🌟 glow */}
        <div className="absolute -top-24 left-10 w-[220px] h-72 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none"></div>

        {/* TOP */}
        <div>
          {/* LOGO */}
          <div className="h-[72px] flex items-center px-4 border-b border-white/5">
            <div className="w-8 h-8 rounded-full bg-[#22d3ee] flex items-center justify-center shadow-[0_0_28px_rgba(34,211,238,0.55)]">
              <div className="w-3 h-0.5 bg-white rounded-full rotate-12"></div>
            </div>

            {!isCollapsed && (
              <h1 className="ml-3 text-[14px] font-semibold text-white">
                MOVRS
              </h1>
            )}
          </div>

          {/* MENU */}
          <div className="px-3 py-5 space-y-2">

            {/* HOME */}
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 h-12 px-4 rounded-xl transition-all
              ${location.pathname === "/" ? "bg-[#0b1220] text-white" : "text-[#94a3b8] hover:bg-[#0b1220]/60"}`}
            >
              <HiOutlineHome />
              {!isCollapsed && <span>Home</span>}
            </Link>

            {/* ABOUT */}
            <Link
              to="/about"
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 h-12 px-4 rounded-xl transition-all
              ${location.pathname === "/about" ? "bg-[#0b1220] text-white" : "text-[#94a3b8] hover:bg-[#0b1220]/60"}`}
            >
              <FiInfo />
              {!isCollapsed && <span>About</span>}
            </Link>

          </div>
        </div>

        {/* BOTTOM */}
        <div className="px-4 py-6 border-t border-white/5 text-[#64748b] text-[12px]">

          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="flex items-center gap-2 hover:text-[#22d3ee]"
          >
            <span>{isCollapsed ? "→" : "←"}</span>

            {!isCollapsed && <span>Collapse</span>}
          </button>

        </div>
      </div>
    </>
  );
};

export default Sidebar;