import { useLocation } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import { FiInfo } from "react-icons/fi";
import { Menu } from "lucide-react";

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const location = useLocation();

  return (
    <>
      {/* MOBILE TOP BAR */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-[60] bg-[#070b14] border-b border-white/5 h-14 flex items-center px-4">
        <button>
          <Menu className="text-white" />
        </button>

        <h1 className="ml-3 text-white font-semibold">MOVRS</h1>
      </div>

      {/* SIDEBAR */}
      <div
        className={`
          fixed md:fixed z-50 top-0 left-0 h-screen
          bg-[#070b14] border-r border-white/5
          flex flex-col justify-between
          transition-all duration-300 overflow-hidden

          ${isCollapsed ? "w-[74px]" : "w-[260px]"}
        `}
      >
        {/* TOP */}
        <div>
          <div className="h-[72px] flex items-center px-4 border-b border-white/5">
            <div className="w-8 h-8 rounded-full bg-[#22d3ee] flex items-center justify-center" />

            {!isCollapsed && (
              <h1 className="ml-3 text-[14px] font-semibold text-white">
                MOVRS
              </h1>
            )}
          </div>

          <div className="px-3 py-5 space-y-2">

            <a
              href="/"
              className={`flex items-center gap-3 h-12 px-4 rounded-xl
              ${location.pathname === "/" ? "bg-[#0b1220] text-white" : "text-[#94a3b8]"}`}
            >
              <HiOutlineHome />
              {!isCollapsed && <span>Home</span>}
            </a>

            <a
              href="/about"
              className={`flex items-center gap-3 h-12 px-4 rounded-xl
              ${location.pathname === "/about" ? "bg-[#0b1220] text-white" : "text-[#94a3b8]"}`}
            >
              <FiInfo />
              {!isCollapsed && <span>About</span>}
            </a>

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