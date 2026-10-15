export const FAQ_SECTION = {
  title: "Questions fréquentes",
  text: "Une autre question ? Écrivez-nous sur WhatsApp.",
  cta: "Écrire sur WhatsApp",
} as const;

export type FaqItem = { question: string; answer: string };

// La première question est ouverte par défaut (openIndex = 0)
export const FAQ_DEFAULT_OPEN = 0;

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Les terrains sont-ils titrés ?",
    answer: "Le statut foncier de chaque terrain est indiqué sur sa fiche.",
  },
  {
    question: "Puis-je acheter depuis l'étranger ?",
    answer:
      "Oui. Tout se fait à distance : échanges par WhatsApp, suivi du chantier par photos et paiement par échéancier.",
  },
  {
    question: "Comment fonctionne le paiement échelonné ?",
    answer:
      "Vous versez un apport, puis des tranches mensuelles selon un échéancier convenu à l'avance.",
  },
  {
    question: "Puis-je construire sur mon propre terrain ?",
    answer:
      "Oui. Nous construisons la villa de votre choix sur votre terrain, sur devis.",
  },
  {
    question: "Comment suivre l'avancement de mon chantier ?",
    answer:
      "Des photos datées et un pourcentage d'avancement sont publiés régulièrement.",
  },
];
