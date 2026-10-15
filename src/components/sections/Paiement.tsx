import React, { useState, useMemo } from "react";
import { Check, Clock } from "lucide-react";
import {
  durationLabel,
  DURATIONS,
  PAIEMENT_SECTION,
  PAYMENT_GUARANTEES,
  PAYMENT_STATUS_LABEL,
  SCHEDULE,
  SIMULATOR_DEFAULTS,
  SIMULATOR_LIMITS,
  type ScheduleItem,
} from "../../data";

export const PaymentSection: React.FC = () => {
  const [price, setPrice] = useState<number>(SIMULATOR_DEFAULTS.price);
  const [deposit, setDeposit] = useState<number>(SIMULATOR_DEFAULTS.deposit);
  const [duration, setDuration] = useState<number>(SIMULATOR_DEFAULTS.months);

  // Helper pour le formatage monétaire (XAF / FCFA)
  const formatFCFA = (val: number) => {
    return new Intl.NumberFormat("fr-FR").format(val) + " FCFA";
  };

  // Calcul dynamique de la tranche mensuelle : (Prix - Apport) / Durée
  const monthlyTranche = useMemo(() => {
    const remaining = Math.max(0, price - deposit);
    return Math.round(remaining / duration);
  }, [price, deposit, duration]);

  // Génération dynamique de l'échéancier si les valeurs par défaut changent
  const dynamicSchedule = useMemo<ScheduleItem[]>(() => {
    if (
      price === SIMULATOR_DEFAULTS.price &&
      deposit === SIMULATOR_DEFAULTS.deposit &&
      duration === SIMULATOR_DEFAULTS.months
    ) {
      return SCHEDULE;
    }

    const items: ScheduleItem[] = [
      { label: "Apport initial", amount: deposit, status: "paid" },
    ];

    for (let i = 1; i <= duration; i++) {
      items.push({
        label: `Tranche ${i} sur ${duration}`,
        amount: monthlyTranche,
        status: i <= Math.ceil(duration / 2) ? "paid" : "upcoming",
      });
    }

    return items;
  }, [price, deposit, duration, monthlyTranche]);

  return (
    <section id="paiement" className="section-light">
      <div className="wrapper mx-auto space-y-12">
        {/* En-tête de section */}
        <div>
          <h2 className="section-title">{PAIEMENT_SECTION.title}</h2>
          <p className="section-subtitle">{PAIEMENT_SECTION.subtitle}</p>
        </div>

        {/* Grille principale : Simulateur à gauche / Échéancier à droite */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Bloc Simulateur */}
          <div className="bg-[#EFECE6] rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-2xl font-bold text-brand-primary">
              {PAIEMENT_SECTION.simulatorTitle}
            </h3>

            {/* Champ 1 : Prix du bien */}
            <div className="input-contener">
              <label htmlFor="price-input" className="label">
                {PAIEMENT_SECTION.fields.price}
              </label>
              <input
                id="price-input"
                type="text"
                readOnly
                value={formatFCFA(price)}
                className="input font-semibold text-brand-primary cursor-default"
              />
              <input
                type="range"
                min={SIMULATOR_LIMITS.priceMin}
                max={SIMULATOR_LIMITS.priceMax}
                step={SIMULATOR_LIMITS.priceStep}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full accent-brand-secondary h-2 bg-slate-200 rounded-lg cursor-pointer mt-2"
              />
            </div>

            {/* Champ 2 : Apport initial */}
            <div className="input-contener">
              <label htmlFor="deposit-input" className="label">
                {PAIEMENT_SECTION.fields.deposit}
              </label>
              <input
                id="deposit-input"
                type="number"
                value={deposit || ""}
                onChange={(e) => setDeposit(Number(e.target.value))}
                className="input font-semibold text-brand-primary"
                placeholder="Entrez votre apport"
              />
            </div>

            {/* Champ 3 : Durée (Boutons segmentés) */}
            <div className="input-contener">
              <span className="label">{PAIEMENT_SECTION.fields.duration}</span>
              <div className="grid grid-cols-3 gap-3">
                {DURATIONS.map((months) => {
                  const isSelected = duration === months;
                  return (
                    <button
                      key={months}
                      type="button"
                      onClick={() => setDuration(months)}
                      className={`py-3 px-4 rounded-xl font-medium text-sm transition-all duration-200 ${
                        isSelected
                          ? "bg-brand-primary text-white shadow-sm"
                          : "bg-white/80 border border-slate-200 text-brand-primary hover:bg-white"
                      }`}
                    >
                      {durationLabel(months)}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Encadré d'affichage de la tranche mensuelle estimée */}
            <div className="bg-brand-primary rounded-xl p-6 text-white space-y-1">
              <span className="text-xs text-slate-300 font-medium block">
                {PAIEMENT_SECTION.resultLabel}
              </span>
              <div className="text-2xl sm:text-3xl font-bold tracking-tight">
                {formatFCFA(monthlyTranche)}
              </div>
              <p className="text-xs text-slate-400 pt-1">
                {PAIEMENT_SECTION.disclaimer}
              </p>
            </div>
          </div>

          {/* Bloc Échéancier */}
          <div className="card space-y-6">
            <h3 className="text-2xl font-bold text-brand-primary">
              {PAIEMENT_SECTION.scheduleTitle}
            </h3>

            <div className="divide-y divide-slate-100">
              {dynamicSchedule.map((item, index) => {
                const isPaid = item.status === "paid";
                return (
                  <div
                    key={index}
                    className="py-3.5 flex items-center justify-between gap-4 first:pt-0 last:pb-0"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                          isPaid
                            ? "bg-brand-secondary text-white"
                            : "border-2 border-slate-300 text-slate-400"
                        }`}
                      >
                        {isPaid ? (
                          <Check className="w-4 h-4 stroke-3" />
                        ) : (
                          <Clock className="w-3.5 h-3.5" />
                        )}
                      </div>
                      <span className="font-medium text-brand-primary text-sm sm:text-base">
                        {item.label}
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="font-bold text-brand-primary text-sm sm:text-base">
                        {formatFCFA(item.amount)}
                      </span>
                      <span
                        className={`text-xs px-3 py-1 rounded-full font-medium shrink-0 ${
                          isPaid
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {PAYMENT_STATUS_LABEL[item.status]}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Garanties et étapes de paiement (Pied de section) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-200/80">
          {PAYMENT_GUARANTEES.map((guarantee) => (
            <div key={guarantee.number} className="space-y-2">
              <span className="text-3xl font-bold text-brand-secondary block">
                {guarantee.number}
              </span>
              <h4 className="text-lg font-bold text-brand-primary">
                {guarantee.title}
              </h4>
              <p className="text-brand-muted text-sm leading-relaxed">
                {guarantee.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
