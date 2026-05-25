export default function FeatureCard({
  icon: Icon,
  title,
  description,
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-[#070d18] p-7 hover:border-cyan-400/20 transition-all duration-300">

      {/* glow */}
      <div className="absolute -top-20 -right-15 w-45 h-45 bg-cyan-500/5 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-all"></div>

      <div className="relative z-10">

        <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/10 flex items-center justify-center text-cyan-400 mb-6">
          <Icon size={20} />
        </div>

        <h3 className="text-[24px] font-bold mb-4">
          {title}
        </h3>

        <p className="text-[15px] leading-7.5 text-[#94a3b8]">
          {description}
        </p>

      </div>

    </div>
  )
}