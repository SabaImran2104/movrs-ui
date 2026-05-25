import { Link, useLocation } from "react-router-dom";

const Footer = () => {

  const location = useLocation();

  const handleScrollTop = () => {
    const scrollContainer = document.getElementById("main-scroll-container");

    if (scrollContainer) {
      scrollContainer.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (

    <div className="relative mt-20 w-full bg-[#070b14] border-t border-white/5">

      {/* subtle glow like sidebar */}
      <div className="absolute left-0 bottom-0 w-75 h-50 bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none"></div>

      {/* content aligned same as main layout */}
      <div className="px-7 md:px-10 pt-14 pb-10">

        <div className="flex flex-col md:flex-row md:justify-between gap-14">

          {/* LEFT SIDE */}
          <div className="max-w-85">

            <div className="flex items-center gap-3 mb-5">

              <div className="w-7 h-7 rounded-full bg-[#22d3ee] flex items-center justify-center shadow-[0_0_25px_rgba(34,211,238,0.55)]">
                <div className="w-3 h-0.5 bg-white rounded-full rotate-12"></div>
              </div>

              <h1 className="text-[13px] font-[650] tracking-[1px] text-white">
                MOVRS
              </h1>

            </div>

            <p className="text-[#94a3b8] text-[13px] leading-7">
              Vision models for understanding human movement in real-world environments.
            </p>

            <button className="mt-6 text-[#22d3ee] text-[13px] font-medium hover:text-cyan-300 transition-all">
              movrs.ai ↗
            </button>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex gap-16 md:gap-24">

            {/* NAVIGATE */}
            <div>

              <h3 className="text-[#64748b] uppercase tracking-[2px] text-[11px] mb-5 font-semibold">
                NAVIGATE
              </h3>

              <div className="space-y-4">

                {location.pathname === "/" ? (
                  <button
                    onClick={handleScrollTop}
                    className="block text-[13px] text-white hover:text-[#22d3ee] transition-all cursor-pointer"
                  >
                    Home
                  </button>
                ) : (
                  <Link
                    to="/"
                    className="block text-[13px] text-white hover:text-[#22d3ee] transition-all cursor-pointer"
                  >
                    Home
                  </Link>
                )}

                {location.pathname === "/about" ? (
                  <button
                    onClick={handleScrollTop}
                    className="block text-[13px] text-white hover:text-[#22d3ee] transition-all cursor-pointer"
                  >
                    About
                  </button>
                ) : (
                  <Link
                    to="/about"
                    className="block text-[13px] text-white hover:text-[#22d3ee] transition-all cursor-pointer"
                  >
                    About
                  </Link>
                )}

              </div>

            </div>

            {/* CONTACT */}
            <div>

              <h3 className="text-[#64748b] uppercase tracking-[2px] text-[11px] mb-5 font-semibold">
                CONTACT
              </h3>

              <div className="space-y-4">

                <p className="text-[13px] text-white hover:text-[#22d3ee] transition-all cursor-pointer">
                  Partnerships
                </p>

                <p className="text-[13px] text-white hover:text-[#22d3ee] transition-all cursor-pointer">
                  Media
                </p>

                <p className="text-[13px] text-white hover:text-[#22d3ee] transition-all cursor-pointer">
                  Careers
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <p className="text-[#64748b] text-[12px]">
            © 2026 MOVRS • Los Angeles, CA • Founded 2020
          </p>

          <div className="flex gap-6">

            <p className="text-[#64748b] text-[12px] hover:text-[#22d3ee] cursor-pointer transition-all">
              Privacy
            </p>

            <p className="text-[#64748b] text-[12px] hover:text-[#22d3ee] cursor-pointer transition-all">
              Terms
            </p>

          </div>

        </div>

      </div>
    </div>

  );
};

export default Footer;