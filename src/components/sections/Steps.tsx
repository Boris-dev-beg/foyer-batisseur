import { STEPS, STEPS_SECTION } from "../../data";

export default function Steps() {
  return (
    <div className="max-w-7xl mx-auto w-full">
        <h2 className="section-title mb-12">
          {STEPS_SECTION.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => (
            <div key={step.number} className="card flex flex-col justify-between gap-6">
              <span className="text-4xl font-bold text-brand-secondary">
                {step.number}
              </span>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-brand-primary">
                  {step.title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}
