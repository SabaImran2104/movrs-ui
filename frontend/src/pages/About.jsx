import InfoCard from "../components/InfoCard";
import IndustryCard from "../components/IndustryCard";
import Footer from "../components/Footer";
import AboutHero from "../components/AboutHero";

const About = () => {

  const cards = [
    {
      title: "Origin in Pro Sports",
      text: "It started with a clear gap in professional sports. Teams needed a quantitative understanding of how athletes’ bodies move and change over time — for injury prevention, technical improvement, load management, contract valuation, and broadcast analytics."
    },
    {
      title: "A Larger Vision",
      text: "We quickly discovered enabling machines to 'see' and understand how people biomechanically move could impact industries far beyond sports."
    },
    {
      title: "How It Works",
      text: "MOVRS generates labeled 3D datasets from standard video input. Partners use these datasets to build their own specific solutions."
    }
  ];

  const industries = [
    {
      title: "Sports",
      text: "Injury prevention, load management, talent valuation, broadcast stats"
    },
    {
      title: "Workplace Safety",
      text: "Ergonomic monitoring, back injury risk, posture analysis"
    },
    {
      title: "Healthcare",
      text: "Rehab tracking, patient movement assessment, clinical analytics"
    },
    {
      title: "Defense & Robotics",
      text: "Human-machine interaction, movement intelligence"
    }
  ];

  return (
    <div className="bg-[#0c0f18] min-h-screen text-white relative overflow-hidden">

      {/* BACKGROUND SYSTEM */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[60px_60px] pointer-events-none"></div>

      <div className="absolute -top-30 -right-30 w-125 h-125 bg-cyan-500/5 blur-[180px] rounded-full pointer-events-none"></div>

      {/* HERO (FIXED) */}
      <AboutHero />

      {/* INFO CARDS */}
      <div className="px-7 md:px-10 mt-8 space-y-4">

        {cards.map((card, index) => (
          <InfoCard
            key={index}
            title={card.title}
            text={card.text}
          />
        ))}

      </div>

      {/* INDUSTRIES */}
      <div className="px-7 md:px-10 mt-10">

        <h2 className="text-[20px] md:text-[22px] font-bold mb-6 tracking-[-0.5px] text-white">
          Industries We Enable
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {industries.map((item, index) => (
            <IndustryCard
              key={index}
              title={item.title}
              text={item.text}
            />
          ))}

        </div>

      </div>

      {/* COMPANY */}
      <div className="px-7 md:px-10 mt-12 pb-10">

        <div className="relative overflow-hidden rounded-[26px] border border-white/5 bg-[#0b1220] p-7 md:p-8">

          {/* glow */}
          <div className="absolute -top-30 -right-30 w-[320px] h-80 bg-cyan-500/10 blur-[160px] rounded-full"></div>

          <div className="relative z-10">

            <h2 className="text-[20px] font-bold mb-7 text-white">
              Company at a Glance
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

              <div>
                <h3 className="text-[#22d3ee] text-[20px] font-bold">2020</h3>
                <p className="text-[#64748b] text-[12px] mt-1">Founded</p>
              </div>

              <div>
                <h3 className="text-[#22d3ee] text-[20px] font-bold">Los Angeles</h3>
                <p className="text-[#64748b] text-[12px] mt-1">HQ</p>
              </div>

              <div>
                <h3 className="text-[#22d3ee] text-[20px] font-bold">2–10</h3>
                <p className="text-[#64748b] text-[12px] mt-1">Team</p>
              </div>

              <div>
                <h3 className="text-[#22d3ee] text-[20px] font-bold">movrs.ai</h3>
                <p className="text-[#64748b] text-[12px] mt-1">Website</p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* FOOTER */}
      <Footer />

    </div>
  );
};

export default About;