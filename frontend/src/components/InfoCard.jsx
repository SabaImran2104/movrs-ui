const InfoCard = ({ title, text }) => {
  return (

    <div className="group relative bg-[#101827]/80 backdrop-blur-xl border border-[#1b2636] rounded-[22px] sm:rounded-[26px] px-5 sm:px-8 py-5 sm:py-7 transition-all duration-700 ease-out hover:scale-[1.015] hover:border-[#22d3ee]/70 hover:shadow-[0_0_50px_rgba(34,211,238,0.12)] cursor-pointer overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">

      {/* subtle light sweep effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_60%)]"></div>

      {/* CONTENT */}
      <div className="relative z-10">

        <h2 className="text-[16px] sm:text-[18px] leading-7 font-[650] mb-3 text-white tracking-[-0.3px] break-words">
          {title}
        </h2>

        <p className="text-[#8b9bb7] leading-6 sm:leading-7 text-[13px] sm:text-[13.5px] font-normal max-w-full sm:max-w-[94%]">
          {text}
        </p>

      </div>

    </div>

  );
};

export default InfoCard;