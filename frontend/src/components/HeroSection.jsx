import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border border-white/5 bg-[#060b16] min-h-162.5 px-10 py-20 ml-0 mt-0">

      {/* BACKGROUND GLOW CIRCLES */}
      <div className="absolute -top-55 -right-45 w-162.5 h-162.5 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.25),transparent_60%)] blur-[140px]"></div>

      <div className="absolute -bottom-65 -left-50 w-175 h-175 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.20),transparent_60%)] blur-[150px]"></div>

      <div className="absolute top-30 left-[40%] w-105 h-105 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.18),transparent_60%)] blur-[130px]"></div>

      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-190">

        <div className="inline-flex items-center gap-2 px-4 h-8.5 rounded-full border border-cyan-400/10 bg-cyan-400/5 text-[#22d3ee] text-[12px] font-semibold">
          • Founded 2020 · Los Angeles, CA
        </div>

        <h1 className="mt-7 text-[64px] leading-19.5 font-extrabold tracking-[-3px]">
          Vision Models for
          <br />

          <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Human Movement
          </span>
        </h1>

        <p className="mt-7 max-w-160 text-[20px] leading-9.5 text-[#94a3b8]">
          MOVRS generates labeled 3D biomechanical datasets from video
          that enable machines to understand how humans move and interact
          in the real world — powering solutions in sports, workplace safety,
          and healthcare.
        </p>

        <div className="mt-10 flex items-center gap-4">

          <button className="h-13.5 px-7 rounded-2xl bg-[#22d3ee] text-black font-bold text-[14px] flex items-center gap-2 shadow-[0_0_40px_rgba(34,211,238,0.35)] hover:scale-[1.02] transition-all">
            Partner With Us
            <ArrowRight size={16} />
          </button>

          <button className="h-13.5 px-7 rounded-2xl bg-white/5 border border-white/5 text-[14px] font-semibold hover:bg-white/10 transition-all">
            Our Story
          </button>

        </div>

      </div>
    </section>
  )
}