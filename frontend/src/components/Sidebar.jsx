import { Link, useLocation } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import { FiInfo } from "react-icons/fi";

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const location = useLocation();

  return (
    <div
      className={`
        h-screen bg-[#070b14] border-r border-white/5
        flex flex-col justify-between
        transition-all duration-300 ease-in-out

        ${isCollapsed ? "w-[74px]" : "w-[260px]"}
      `}
    >

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
      <div className="px-3 py-5 space-y-2 flex-1">

        <Link
          to="/"
          className={`flex items-center gap-3 h-12 px-4 rounded-xl transition-all
          ${location.pathname === "/" ? "bg-[#0b1220] text-white" : "text-[#94a3b8] hover:bg-[#0b1220]/60"}`}
        >
          <HiOutlineHome />
          {!isCollapsed && <span>Home</span>}
        </Link>

        <Link
          to="/about"
          className={`flex items-center gap-3 h-12 px-4 rounded-xl transition-all
          ${location.pathname === "/about" ? "bg-[#0b1220] text-white" : "text-[#94a3b8] hover:bg-[#0b1220]/60"}`}
        >
          <FiInfo />
          {!isCollapsed && <span>About</span>}
        </Link>

      </div>

      {/* COLLAPSE BUTTON */}
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
  );
};

export default Sidebar;