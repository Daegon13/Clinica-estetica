import type { Campaign, PetProfile, ServiceId } from "./types";
import { siteContent } from "@/src/data/site";

export const BRAND = {
  name: siteContent.brand.name,
  shortName: siteContent.brand.shortName,
  tagline: siteContent.brand.tagline,
  phone: siteContent.brand.phone,
  whatsapp: siteContent.brand.whatsapp.replace(/\s/g, ""),
  whatsappUrl: `https://wa.me/${siteContent.brand.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(siteContent.brand.whatsappMessage)}`,
  implementationCtaLabel: siteContent.brand.implementationCtaLabel,
  implementationSecondaryCtaLabel: siteContent.brand.implementationSecondaryCtaLabel,
  implementationCtaUrl: siteContent.brand.implementationCtaUrl,
  address: siteContent.brand.address,
  hours: siteContent.brand.hours,
  city: siteContent.brand.city
};

export const SEO = siteContent.seo;
export const HERO = siteContent.hero;
export const PORTAL = siteContent.portal;
export const IMPLEMENTATION = siteContent.implementation;

export const SERVICES: { id: ServiceId; name: string; durationMin: number; bufferMin: number; priceFrom: string; desc: string; icon: string }[] = siteContent.services.map((s) => ({
  id: s.id,
  name: s.name,
  durationMin: s.durationMin,
  bufferMin: s.bufferMin,
  priceFrom: s.priceFrom,
  desc: s.description,
  icon: s.icon
}));

export const STAFF = siteContent.team.map((member) => ({
  ...member,
  nombre: member.name,
  rol: member.role,
  especialidades: [member.role]
}));
export const TESTIMONIALS = siteContent.testimonials;
export const FAQS = siteContent.faqs;

export const DEFAULT_PET: PetProfile = {
  id: "pet_1",
  petName: "Marina",
  species: "Adulto",
  breed: "Seguimiento general",
  birthYear: 1990,
  weightKg: 68,
  allergies: "",
  vaccines: [
    { id: "v1", name: "Chequeo anual", dateISO: "2025-03-10", nextDueISO: "2026-03-10" },
    { id: "v2", name: "Control clínico", dateISO: "2025-04-02", nextDueISO: "2025-10-02" }
  ]
};

export const DEFAULT_CAMPAIGNS: Campaign[] = [
  {
    id: "c1",
    title: "Chequeo integral -10% (semana)",
    audience: "Clientes",
    channel: "WhatsApp",
    message:
      "Hola. Esta semana tenemos chequeo integral con -10%. ¿Querés que te pase horarios disponibles?",
    scheduledISO: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2).toISOString(),
    status: "programada"
  },
  {
    id: "c2",
    title: "Control preventivo",
    audience: "Prospectos",
    channel: "Instagram",
    message:
      "Control preventivo + seguimiento claro = tranquilidad. Escribinos y te ayudamos a elegir la mejor opción.",
    scheduledISO: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5).toISOString(),
    status: "borrador"
  }
];
