import { SITE, DEMO_TAG, WHATSAPP_MESSAGES } from "../data/site";
import type { Terrain } from "../data/terrains";
import { terrainTitle } from "../data/terrains";
import type { Villa } from "../data/villas";
import { formatFCFA } from "./format";

/** Lien WhatsApp avec message pré-rempli (fonctionne sur mobile et ordinateur). */
export function whatsappLink(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// Boutons « normaux » 
export const whatsappGeneral = () => whatsappLink(WHATSAPP_MESSAGES.general);
export const whatsappQuote = () => whatsappLink(WHATSAPP_MESSAGES.quote);

// Bandeau de démo : message d'un futur client pour TOI
export const whatsappProspect = () => whatsappLink(WHATSAPP_MESSAGES.prospect);

// Carte terrain : « Je suis intéressé »
export function whatsappTerrain(t: Terrain): string {
  return whatsappLink(
    `${DEMO_TAG} Bonjour, je suis intéressé par le ${terrainTitle(t)} à ${t.quartier} (${formatFCFA(t.price)}).`,
  );
}

// Carte villa : « Voir le modèle »
export function whatsappVilla(v: Villa): string {
  return whatsappLink(
    `${DEMO_TAG} Bonjour, je souhaite en savoir plus sur le ${v.name} (${v.kind}, ${v.bedrooms} chambres).`,
  );
}

// Formulaire de contact : ouvre WhatsApp avec les informations saisies
export function whatsappContactForm(data: {
  name: string;
  phone: string;
  interest: string;
  message: string;
}): string {
  const lines = [
    `${DEMO_TAG} Bonjour, je suis ${data.name || "—"}.`,
    `Contact : ${data.phone || "—"}`,
    `Intéressé par : ${data.interest}`,
  ];
  if (data.message.trim()) lines.push(`Message : ${data.message.trim()}`);
  return whatsappLink(lines.join("\n"));
}
