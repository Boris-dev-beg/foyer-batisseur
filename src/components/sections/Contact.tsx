import { useState, type SubmitEvent } from "react";
import {
  CONTACT_FORM,
  CONTACT_INFO,
  CONTACT_SECTION,
  INTEREST_OPTIONS,
} from "../../data";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappContactForm } from "../../lib/whatsapp";

type InterestOption = typeof INTEREST_OPTIONS[number];

export function ContactSection () {
  const [formData, setFormData] = useState<{
  name: string;
  phone: string;
  interest: InterestOption;
  message: string;
}>({
    name: "",
    phone: "",
    interest: INTEREST_OPTIONS[0],
    message: "",
  });

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    console.log("Données du formulaire :", formData);

    const cont = whatsappContactForm(formData)
  };

  return (
    <section className="section-light" id="contact">
      <div className="wrapper mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left side */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <h2 className="section-title">{CONTACT_SECTION.title}</h2>
            <p className="text-brand-muted">{CONTACT_SECTION.text}</p>
          </div>
          <div className="space-y-4 pt-4">
            {CONTACT_INFO.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 text-brand-primary"
                >
                  <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm text-brand-secondary">
                    {info.icon === FaWhatsapp ? (
                      <FaWhatsapp className="w-5 h-5 text-brand-accent" />
                    ) : (
                      <IconComponent className="w-5 h-5" />
                    )}
                  </div>
                  <span className="font-medium text-sm sm:text-base">
                    {info.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right side (Form) */}
        <div className="lg:col-span-7 card bg-[#EFECE6]/50 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nom complet */}
            <div className="input-contener">
              <label htmlFor="name" className="label">
                {CONTACT_FORM.fields.name}
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="input"
                placeholder="Ex: Jean Dupont"
              />
            </div>

            {/* Téléphone ou WhatsApp */}
            <div className="input-contener">
              <label htmlFor="phone" className="label">
                {CONTACT_FORM.fields.phone}
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="input"
                placeholder="Ex: +237 6XX XX XX XX"
              />
            </div>

            {/* Intérêt (Select) */}
            <div className="input-contener">
              <label htmlFor="interest" className="label">
                {CONTACT_FORM.fields.interest}
              </label>
              <select 
                id="interest"
                value={formData.interest}
                onChange={(e) =>
                  setFormData({ ...formData, interest: e.target.value as InterestOption })
                }
                className="input cursor-pointer"
              >
                {INTEREST_OPTIONS.map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="input-contener">
              <label htmlFor="message" className="label">
                {CONTACT_FORM.fields.message}
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="input resize-none py-3"
                placeholder="Votre message..."
              />
            </div>

            {/* Bouton de soumission */}
            <button type="submit" className="btn btn-primary w-full py-3.5">
              {CONTACT_FORM.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
