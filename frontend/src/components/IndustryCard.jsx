const IndustryCard = ({ title, text }) => {
  return (

    <div className="group relative bg-[#101827]/80 backdrop-blur-xl border border-[#1b2636] rounded-[20px] sm:rounded-[22px] px-5 sm:px-7 py-5 sm:py-6 transition-all duration-700 ease-out hover:scale-[1.03] hover:border-[#22d3ee]/70 hover:shadow-[0_0_45px_rgba(34,211,238,0.14)] cursor-pointer overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">

      {/*  subtle glow sweep */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_60%)]"></div>

      <div className="relative flex gap-3 sm:gap-4 z-10">

        {/* ARROW */}
        <div className="text-[#22d3ee] text-[16px] sm:text-[17px] mt-px transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100 opacity-90 flex-shrink-0">
          →
        </div>

        <div className="transition-all duration-300 min-w-0">

          <h3 className="text-[15px] sm:text-[16px] font-[650] text-white mb-[6px] tracking-[-0.2px] group-hover:text-[#e6faff] transition-colors break-words">
            {title}
          </h3>

          <p className="text-[#8b9bb7] text-[13px] leading-6 font-[400] group-hover:text-[#9fb3c8] transition-colors">
            {text}
          </p>

        </div>

      </div>

    </div>

  );
};

export default IndustryCard;