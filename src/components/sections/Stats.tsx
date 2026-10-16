import { STATS } from "../../data";

export default function Stats() {
  return (
    <div className="max-w-7xl mx-auto w-full grid grid-cols-2 md:grid-cols-3 gap-8 pb-12 border-b border-slate-200/80">
        {STATS.map((stat, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <span className="text-4xl md:text-5xl font-bold text-brand-primary mb-2">
              {stat.value}
            </span>
            <span className="text-brand-muted font-medium">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
  )
}
