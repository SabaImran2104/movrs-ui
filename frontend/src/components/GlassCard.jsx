export default function GlassCard({
  children,
  className = "",
}) {
  return (
    <div
      className={`bg-[#070b14] border border-white/5 rounded-[28px]
      transition-all duration-300 hover:border-cyan-400/20
      hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]
      hover:-translate-y
      ${className}`}
    >
      {children}
    </div>
  );
}