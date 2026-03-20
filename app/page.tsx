import Image from "next/image";
import type { Metadata } from "next";

import { BRAND, HERO, SEO, SERVICES, STAFF, TESTIMONIALS, FAQS } from "@/lib/data";
import { buildPageMetadata } from "@/lib/seo";
import { Container, Card, CardContent, LinkButton, Badge } from "@/components/ui";
import { SectionHeading } from "@/components/section";
import { LeadCTA } from "@/components/LeadCTA";

export const metadata: Metadata = buildPageMetadata({
  title: SEO.homeTitle,
  description: SEO.homeDescription,
  path: "/"
});

const featuredCards = [
  {
    title: "Valoración profesional",
    desc: "Diagnóstico claro para recomendar sólo lo que tu piel y tus objetivos realmente necesitan."
  },
  {
    title: "Experiencia premium",
    desc: "Una clínica moderna, estética y confiable diseñada para que reservar también se sienta aspiracional."
  },
  {
    title: "Seguimiento real",
    desc: "Antes y después con indicaciones concretas para cuidar resultados y mantener la confianza."
  }
];

const processSteps = [
  {
    step: "01",
    title: "Nos escribís o reservás",
    desc: "Llegás desde Instagram, WhatsApp o la web y resolvés tu primera consulta sin fricción."
  },
  {
    step: "02",
    title: "Hacemos tu valoración",
    desc: "Analizamos tu caso, escuchamos tus objetivos y armamos un plan personalizado."
  },
  {
    step: "03",
    title: "Tratamos y acompañamos",
    desc: "Aplicamos el protocolo indicado y te guiamos en cuidados, tiempos y seguimiento."
  }
];

const beforeAfter = [
  "Piel más luminosa, uniforme y cuidada con protocolos faciales personalizados.",
  "Resultados armónicos en rejuvenecimiento y armonización, sin perder naturalidad.",
  "Tratamientos corporales orientados a mejorar textura, contorno y percepción de bienestar."
];

export default function HomePage() {
  return (
    <div>
      <div className="bg-gradient-to-b from-white via-[#fff8fb] to-warm-100 dark:from-graphite-950 dark:via-graphite-950 dark:to-graphite-900">
        <Container className="grid gap-10 py-10 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="grid gap-5">
            <Badge className="w-fit" tone="neutral">{HERO.badge}</Badge>
            <h1 className="max-w-2xl text-3xl font-black tracking-tight sm:text-5xl">{HERO.title}</h1>
            <p className="max-w-xl text-sm text-black/60 dark:text-white/70 sm:text-lg">{HERO.description}</p>
            <ul className="grid gap-1 text-sm text-black/65 dark:text-white/70">
              {HERO.bullets.map((bullet) => <li key={bullet}>• {bullet}</li>)}
            </ul>
            <div className="flex flex-wrap gap-2">
              <LinkButton href="/agenda" className="bg-cyanSoft-400 text-graphite-950 hover:bg-cyanSoft-300">Agendá tu valoración</LinkButton>
              <LeadCTA interest="general" label="Hablá por WhatsApp" variant="outline" />
              <LinkButton href="/contacto" variant="outline">Reservá tu consulta</LinkButton>
            </div>
            <div className="text-xs text-black/45 dark:text-white/55">Contacto: {BRAND.phone} · {BRAND.address} · {BRAND.hours}</div>
          </div>

          <div className="grid gap-4">
            <Card className="overflow-hidden">
              <div className="relative aspect-[16/10] w-full">
                <Image src="/brand/hero.webp" alt="Clínica estética premium con atención profesional" fill priority sizes="(min-width: 1024px) 46vw, (min-width: 640px) 92vw, 100vw" className="object-cover" />
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="bg-graphite-900 p-6 text-white">
                <div className="text-sm font-semibold text-white/70">Promesa de marca</div>
                <div className="mt-2 text-2xl font-black">“{HERO.quickSummary}”</div>
                <div className="mt-3 text-sm text-white/70">{HERO.quickSummaryFoot}</div>
              </div>
            </Card>
          </div>
        </Container>
      </div>

      <Container className="py-10 sm:py-14">
        <SectionHeading eyebrow="Tratamientos destacados" title="Una selección coherente para una clínica estética premium" desc="Reutilizamos la estructura original para presentar tratamientos que convierten mejor y se sienten alineados con una marca aspiracional." />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Card key={service.id}>
              <CardContent className="grid gap-3">
                <Badge className="w-fit" tone="neutral">Desde {service.priceFrom}</Badge>
                <div className="text-lg font-extrabold">{service.name}</div>
                <p className="text-sm text-black/60 dark:text-white/70">{service.desc}</p>
                <div className="text-xs text-black/45 dark:text-white/55">Duración estimada: {service.durationMin} min.</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>

      <Container className="py-6 sm:py-8">
        <div className="grid gap-4 rounded-3xl border border-black/5 bg-white p-5 shadow-soft dark:border-white/10 dark:bg-graphite-900 lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
          <div>
            <div className="text-sm font-extrabold uppercase tracking-[0.18em] text-black/45 dark:text-white/50">Antes y después</div>
            <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">Resultados que se comunican con deseo, pero también con criterio.</h2>
            <p className="mt-3 max-w-2xl text-sm text-black/65 dark:text-white/70">La propuesta visual y textual apunta a mostrar transformación, profesionalismo y acompañamiento, sin promesas exageradas ni tono frío.</p>
          </div>
          <div className="grid gap-3">
            {beforeAfter.map((item) => (
              <div key={item} className="rounded-2xl border border-black/10 bg-[#fff8fb] p-4 text-sm text-black/70 dark:border-white/10 dark:bg-white/5 dark:text-white/75">{item}</div>
            ))}
          </div>
        </div>
      </Container>

      <Container className="py-10 sm:py-12">
        <SectionHeading eyebrow="Cómo trabajamos" title="Un proceso simple para convertir mejor desde Instagram y WhatsApp" desc="La experiencia fue adaptada para captar atención, facilitar la reserva y sostener confianza en cada paso." />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {processSteps.map((item) => (
            <Card key={item.step}>
              <CardContent className="grid gap-3">
                <div className="text-xs font-black uppercase tracking-[0.18em] text-black/40 dark:text-white/45">{item.step}</div>
                <div className="text-lg font-extrabold">{item.title}</div>
                <p className="text-sm text-black/60 dark:text-white/70">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>

      <Container className="py-10 sm:py-12">
        <SectionHeading eyebrow="Equipo profesional" title="Especialistas que sostienen la promesa premium de la marca" desc="El tono del sitio y la estructura comercial ahora acompañan un equipo enfocado en resultados naturales, confianza y experiencia." />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {STAFF.map((person) => (
            <Card key={person.id}>
              <CardContent className="grid gap-2">
                <div className="text-sm font-extrabold">{person.name}</div>
                <div className="text-xs font-semibold uppercase tracking-[0.12em] text-black/45 dark:text-white/50">{person.role}</div>
                <p className="text-sm text-black/65 dark:text-white/70">{person.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>

      <Container className="py-10 sm:py-12">
        <SectionHeading eyebrow="Testimonios" title="Prueba social alineada al mundo estético" desc="Microcopy y reseñas adaptadas para transmitir confianza, experiencia y deseo de reservar." />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <Card key={item.name}>
              <CardContent className="grid gap-3">
                <p className="text-sm text-black/70 dark:text-white/75">“{item.text}”</p>
                <div className="text-sm font-extrabold">{item.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>

      <Container className="py-10 sm:py-12">
        <SectionHeading eyebrow="FAQ" title="Dudas frecuentes antes de reservar" desc="Respuestas concretas para bajar objeciones y ayudar a convertir desde tráfico social." />
        <div className="mt-8 grid gap-3">
          {FAQS.slice(0, 4).map((item) => (
            <Card key={item.q}>
              <CardContent className="grid gap-2">
                <div className="text-sm font-extrabold">{item.q}</div>
                <p className="text-sm text-black/65 dark:text-white/70">{item.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>

      <Container className="py-10 sm:py-14">
        <div className="rounded-3xl bg-graphite-950 p-6 text-white shadow-soft sm:p-8">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-white/50">CTA final</div>
            <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-4xl">Lista para verte, sentirte bien y empezar tu tratamiento con acompañamiento real.</h2>
            <p className="mt-3 text-sm text-white/75 sm:text-base">Aura Estética quedó adaptada para una demo comercial premium: identidad visual consistente, mensajes de conversión y canales directos hacia consulta y WhatsApp.</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <LinkButton href="/agenda" className="bg-cyanSoft-400 text-graphite-950 hover:bg-cyanSoft-300">Agendá tu valoración</LinkButton>
            <LeadCTA interest="general" label="Hablá por WhatsApp" variant="outline" />
            <LinkButton href="/ubicacion" variant="outline">Contacto, ubicación y horarios</LinkButton>
          </div>
        </div>
      </Container>

      <Container className="pb-10 sm:pb-14">
        <div className="grid gap-4 rounded-3xl border border-black/5 bg-white p-5 shadow-soft dark:border-white/10 dark:bg-graphite-900 md:grid-cols-3">
          {featuredCards.map((item) => (
            <div key={item.title} className="rounded-2xl bg-[#fff8fb] p-4 dark:bg-white/5">
              <div className="text-sm font-extrabold">{item.title}</div>
              <p className="mt-2 text-sm text-black/65 dark:text-white/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
