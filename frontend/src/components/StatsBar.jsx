const stats = [
  {
    number: '3',
    label: 'Industries Served',
  },
  {
    number: '3D',
    label: 'Biomechanical Data',
  },
  {
    number: '2020',
    label: 'Founded',
  },
  {
    number: 'LA',
    label: 'Headquarters',
  },
]

export default function StatsBar() {
  return (
    <section className="grid grid-cols-4 gap-4 mt-8">

      {stats.map((item) => (
        <div
          key={item.label}
          className="relative overflow-hidden h-35 w-full max-w-52.5 mx-auto rounded-[20px] border border-[#1b2636] bg-[#101827] flex flex-col items-center justify-center transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]"
        >

          {/* subtle glow */}
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.06),transparent_60%)]"></div>

          <div className="relative z-10 flex flex-col items-center">

            <h2 className="text-[28px] font-extrabold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent leading-none">
              {item.number}
            </h2>

            <p className="mt-1 text-[11px] text-[#64748b]">
              {item.label}
            </p>

          </div>

        </div>
      ))}

    </section>
  )
}