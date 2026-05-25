import {
  Dumbbell,
  ShieldCheck,
  HeartPulse,
  CheckCircle2,
} from 'lucide-react'

import HeroSection from '../components/HeroSection'
import StatsBar from '../components/StatsBar'
import Footer from '../components/Footer'

const features = [
  {
    icon: Dumbbell,
    title: 'Sports Performance',
    description:
      'Quantify how athletes move over time for injury prevention, load management, talent valuation, and advanced broadcast analytics.',
  },
  {
    icon: ShieldCheck,
    title: 'Workplace Safety',
    description:
      'Monitor ergonomic risk, posture tracking, and movement safety across industrial environments.',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    description:
      'Enable clinician movement assessment, rehabilitation monitoring, and biomechanical analytics.',
  },
]

const solutions = [
  'Real-time pitching solution',
  'Cloud-based, remote pitching solution',
  'Game data transformation',
  'AI coaching agent (in development)',
]

export default function Home() {
  return (

    <div className="relative bg-[#0c0f18] min-h-screen text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[60px_60px] pointer-events-none"></div>

      <div className="absolute -top-30 -right-30 w-125 h-125 bg-cyan-500/5 blur-[180px] rounded-full pointer-events-none"></div>

      {/* HERO */}
      <div className="relative w-full">

        <HeroSection />
        <StatsBar />

      </div>

     {/* INDUSTRIES */}
<section className="mt-14 px-7 md:px-10">

  <div className="flex items-center gap-4 mb-8">

    <h2 className="text-[22px] font-bold tracking-[-0.5px] text-white">
      Partner Industries
    </h2>

    <div className="flex-1 h-px bg-white/5"></div>

  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

    {features.map((feature) => (
      <div
        key={feature.title}
        className="relative overflow-hidden bg-[#101827] border border-[#1b2636] rounded-[26px] p-6 transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]"
      >

        {/* subtle glow */}
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.06),transparent_60%)]"></div>

        <div className="relative z-10">

          <div className="w-11 h-11 rounded-2xl bg-cyan-400/10 border border-cyan-400/10 flex items-center justify-center mb-5">

            <feature.icon
              size={20}
              className="text-cyan-400"
            />

          </div>

          <h3 className="text-[15px] font-semibold mb-2 text-white">
            {feature.title}
          </h3>

          <p className="text-[13px] leading-6 text-[#94a3b8]">
            {feature.description}
          </p>

        </div>

      </div>
    ))}

  </div>

</section>

      {/* PARTNER HIGHLIGHT */}
      <section className="mt-14 px-7 md:px-10 pb-10">

        <div className="flex items-center gap-4 mb-8">

          <h2 className="text-[22px] font-bold tracking-[-0.5px] text-white">
            Partner Highlight
          </h2>

          <div className="flex-1 h-px bg-white/5"></div>

        </div>

        <div className="relative overflow-hidden rounded-[26px] border border-white/5 bg-[#0b1220] p-8 md:p-10">

          {/* glow */}
          <div className="absolute -top-30 -right-30 w-[320px] h-80 bg-cyan-500/10 blur-[160px] rounded-full"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* LEFT */}
            <div>

              <h2 className="text-[28px] md:text-[34px] font-extrabold tracking-[-2px] text-white">
                NewtForce
              </h2>

              <p className="text-[13px] md:text-[14px] leading-7 text-[#94a3b8] mt-3">
                Real-time solution that analyzes how pitchers biomechanically transfer ground force throughout their bodies — from feet to fingertips.
              </p>

              <div className="mt-6">

                <h4 className="text-[11px] uppercase tracking-[2px] text-[#64748b] mb-3">
                  Clients
                </h4>

                <div className="flex flex-wrap gap-2">

                  {[
                    'Colleges',
                    'Pro Teams',
                    'Premier Training Facilities',
                  ].map((item) => (
                    <div
                      key={item}
                      className="h-8 px-3 rounded-full bg-white/5 text-[11px] flex items-center text-[#cbd5e1]"
                    >
                      {item}
                    </div>
                  ))}

                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div>

              <h4 className="text-[11px] uppercase tracking-[2px] text-[#64748b] mb-4">
                Solutions
              </h4>

              <div className="space-y-3">

                {solutions.map((item) => (
                  <div key={item} className="flex items-start gap-3">

                    <CheckCircle2 size={14} className="text-cyan-400 mt-0.5" />

                    <p className="text-[13px] text-[#cbd5e1]">
                      {item}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  )
}