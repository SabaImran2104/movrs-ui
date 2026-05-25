import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border border-white/5 bg-[#060b16] min-h-screen lg:min-h-[650px] px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
      
      {/* BACKGROUND GLOW CIRCLES */}
      <div className="absolute -top-40 sm:-top-55 -right-24 sm:-right-45 w-[260px] sm:w-[650px] h-[260px] sm:h-[650px] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.25),transparent_60%)] blur-[120px]"></div>

      <div className="absolute -bottom-40 sm:-bottom-65 -left-24 sm:-left-50 w-[280px] sm:w-[700px] h-[280px] sm:h-[700px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.20),transparent_60%)] blur-[140px]"></div>

      <div className="absolute top-20 sm:top-30 left-[30%] sm:left-[40%] w-[220px] sm:w-[420px] h-[220px] sm:h-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.18),transparent_60%)] blur-[120px]"></div>

      {/* HERO CONTENT */}
      <div className="relative z-10 w-full max-w-5xl">
        
        <div className="inline-flex items-center gap-2 px-4 h-8 sm:h-8.5 rounded-full border border-cyan-400/10 bg-cyan-400/5 text-[#22d3ee] text-[11px] sm:text-[12px] font-semibold">
          • Founded 2020 · Los Angeles, CA
        </div>

        <h1 className="mt-6 sm:mt-7 text-[38px] sm:text-[52px] lg:text-[64px] leading-[1.1] lg:leading-[78px] font-extrabold tracking-[-1.5px] sm:tracking-[-2px] lg:tracking-[-3px]">
          Vision Models for
          <br />

          <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Human Movement
          </span>
        </h1>

        <p className="mt-6 sm:mt-7 max-w-3xl text-[15px] sm:text-[18px] lg:text-[20px] leading-7 sm:leading-8 lg:leading-9.5 text-[#94a3b8]">
          MOVRS generates labeled 3D biomechanical datasets from video
          that enable machines to understand how humans move and interact
          in the real world — powering solutions in sports, workplace safety,
          and healthcare.
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          
          <button className="h-12 sm:h-13.5 px-6 sm:px-7 rounded-2xl bg-[#22d3ee] text-black font-bold text-[13px] sm:text-[14px] flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(34,211,238,0.35)] hover:scale-[1.02] transition-all">
            Partner With Us
            <ArrowRight size={16} />
          </button>

          <button className="h-12 sm:h-13.5 px-6 sm:px-7 rounded-2xl bg-white/5 border border-white/5 text-[13px] sm:text-[14px] font-semibold hover:bg-white/10 transition-all">
            Our Story
          </button>

        </div>
      </div>
    </section>
  )
}