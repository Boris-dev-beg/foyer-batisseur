
import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { FAQ_DEFAULT_OPEN, FAQ_ITEMS, FAQ_SECTION } from '../../data';


export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(FAQ_DEFAULT_OPEN);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-light">
      <div className="wrapper mx-auto max-w-4xl space-y-8">
        {/* En-tête de la FAQ */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="section-title mb-1">{FAQ_SECTION.title}</h2>
            <p className="text-brand-muted text-sm sm:text-base">{FAQ_SECTION.text}</p>
          </div>
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp self-start sm:self-auto rounded-xl px-5 py-3 font-medium flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>{FAQ_SECTION.cta}</span>
          </a>
        </div>

        {/* Liste des questions / accordéon */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 font-bold text-brand-primary focus:outline-none"
                >
                  <span className="text-base sm:text-lg">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-secondary shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-brand-muted text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};