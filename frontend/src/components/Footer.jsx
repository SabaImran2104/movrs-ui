import { Link } from "react-router-dom";

const Footer = () => {
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
    <div className="relative mt-16 sm:mt-20 w-full bg-[#070b14] border-t border-white/5 overflow-hidden">

      <div className="absolute left-0 bottom-0 w-[220px] sm:w-[300px] h-[180px] sm:h-[200px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="px-4 sm:px-6 lg:px-10 pt-10 sm:pt-14 pb-8 sm:pb-10">

        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 sm:gap-14">

          {/* LEFT */}
          <div className="max-w-full sm:max-w-[340px]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-7 rounded-full bg-[#22d3ee] flex items-center justify-center shadow-[0_0_25px_rgba(34,211,238,0.55)]">
                <div className="w-3 h-0.5 bg-white rounded-full rotate-12"></div>
              </div>

              <h1 className="text-[13px] font-[650] tracking-[1px] text-white">
                MOVRS
              </h1>
            </div>

            <p className="text-[#94a3b8] text-[13px] sm:text-[14px] leading-6 sm:leading-7">
              Vision models for understanding human movement in real-world environments.
            </p>

            <button className="mt-6 text-[#22d3ee] text-[13px] font-medium hover:text-cyan-300 transition-all">
              movrs.ai ↗
            </button>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 md:gap-24">

            <div>
              <h3 className="text-[#64748b] uppercase tracking-[2px] text-[11px] mb-5 font-semibold">
                NAVIGATE
              </h3>

              <div className="space-y-4">

                <Link
                  to="/"
                  onClick={handleScrollTop}
                  className="block text-[13px] text-white hover:text-[#22d3ee]"
                >
                  Home
                </Link>

                <Link
                  to="/about"
                  onClick={handleScrollTop}
                  className="block text-[13px] text-white hover:text-[#22d3ee]"
                >
                  About
                </Link>

              </div>
            </div>

            <div>
              <h3 className="text-[#64748b] uppercase tracking-[2px] text-[11px] mb-5 font-semibold">
                CONTACT
              </h3>

              <div className="space-y-4">
                <p className="text-[13px] text-white hover:text-[#22d3ee] cursor-pointer">
                  Partnerships
                </p>
                <p className="text-[13px] text-white hover:text-[#22d3ee] cursor-pointer">
                  Media
                </p>
                <p className="text-[13px] text-white hover:text-[#22d3ee] cursor-pointer">
                  Careers
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-12 sm:mt-14 pt-6 border-t border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <p className="text-[#64748b] text-[11px] sm:text-[12px]">
            © 2026 MOVRS • Los Angeles, CA • Founded 2020
          </p>

          <div className="flex items-center gap-5 sm:gap-6">
            <p className="text-[#64748b] text-[11px] sm:text-[12px] hover:text-[#22d3ee] cursor-pointer">
              Privacy
            </p>
            <p className="text-[#64748b] text-[11px] sm:text-[12px] hover:text-[#22d3ee] cursor-pointer">
              Terms
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Footer;