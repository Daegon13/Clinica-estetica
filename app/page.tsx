import type { Metadata } from "next";

import { BRAND, HERO, SEO, SERVICES, STAFF, TESTIMONIALS, FAQS } from "@/lib/data";
import { buildPageMetadata } from "@/lib/seo";
import { Container, Card, CardContent, LinkButton, Badge } from "@/components/ui";
import { SectionHeading } from "@/components/section";
import { LeadCTA } from "@/components/LeadCTA";
import { MediaCard } from "@/components/brand/media-card";

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
    desc: "Una clínica moderna, luminosa y confiable diseñada para que reservar también se sienta aspiracional."
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

const treatmentGallery = [
  {
    src: "/brand/aesthetic/treatment-facial.svg",
    alt: "Imagen editorial de tratamiento facial en clínica estética premium",
    eyebrow: "Tratamientos faciales",
    title: "Glow, textura y cuidado visible",
    description: "Espacio visual listo para reemplazar por close-ups premium de limpieza facial, peelings o rejuvenecimiento.",
    aspectClassName: "aspect-[5/4]"
  },
  {
    src: "/brand/aesthetic/treatment-body.svg",
    alt: "Imagen editorial de tratamiento corporal con estética premium",
    eyebrow: "Tratamientos corporales",
    title: "Contorno, bienestar y protocolo",
    description: "Soporta imágenes verticales u horizontales de aparatología, cabina o sesiones corporales sin deformaciones.",
    aspectClassName: "aspect-[5/4]"
  },
  {
    src: "/brand/aesthetic/clinic-interior.svg",
    alt: "Interior luminoso de clínica estética premium",
    eyebrow: "Clínica e interior",
    title: "Luz suave y sensación de orden",
    description: "Marco visual pensado para reemplazar por recepción, box o detalles del interior manteniendo una lectura premium.",
    aspectClassName: "aspect-[5/4]"
  }
];

const beforeAfter = [
  {
    title: "Rostro luminoso y uniforme",
    desc: "Formato listo para mostrar piel más cuidada con protocolos personalizados, sin promesas exageradas.",
    label: "Antes / Después"
  },
  {
    title: "Naturalidad en rejuvenecimiento",
    desc: "Composición adaptable para pares comparativos con foco en armonía, textura y frescura.",
    label: "Resultados reales"
  },
  {
    title: "Progreso corporal consistente",
    desc: "Bloque apto para secuencias por etapas, mismas poses y una narrativa visual más profesional.",
    label: "Seguimiento"
  }
];

const supportMedia = [
  {
    src: "/brand/aesthetic/team-portrait.svg",
    alt: "Retrato editorial del equipo profesional de clínica estética",
    eyebrow: "Equipo profesional",
    title: "Perfiles listos para fotos reales del staff",
    description: "Cards con recortes consistentes para headshots o retratos editoriales del equipo.",
    aspectClassName: "aspect-[4/5]"
  },
  {
    src: "/brand/aesthetic/contact-lounge.svg",
    alt: "Espacio de recepción y apoyo visual para contacto de clínica estética",
    eyebrow: "CTA y contacto",
    title: "Soporte visual para reserva y acompañamiento",
    description: "Pensado para sumar imágenes de recepción, lounge o detalles del recorrido de la paciente.",
    aspectClassName: "aspect-[4/3]"
  }
];

export default function HomePage() {
  return (
    <div>
      <div className="bg-gradient-to-b from-white via-[#fff8fb] to-warm-100 dark:from-graphite-950 dark:via-graphite-950 dark:to-graphite-900">
        <Container className="grid gap-10 py-10 sm:py-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
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

          <div className="grid gap-4 lg:pl-4">
            <MediaCard
              src="/brand/aesthetic/hero-clinic.svg"
              alt="Visual editorial de clínica estética premium preparado para reemplazar por fotografía de hero"
              eyebrow="Hero principal"
              title="Un hero limpio, premium y listo para nueva fotografía"
              description="La estructura admite imágenes luminosas de clínica, close-ups editoriales o retratos sin romper proporciones ni overlays."
              priority
              sizes="(min-width: 1024px) 46vw, (min-width: 640px) 92vw, 100vw"
              aspectClassName="aspect-[16/11]"
              overlay="dark"
            />

            <Card className="overflow-hidden border border-black/10 bg-graphite-950 text-white shadow-[0_25px_70px_rgba(15,23,42,0.18)]">
              <div className="grid gap-4 p-6 sm:grid-cols-[1fr_auto] sm:items-end">
                <div>
                  <div className="text-sm font-semibold text-white/65">Promesa de marca</div>
                  <div className="mt-2 text-2xl font-black leading-tight">“{HERO.quickSummary}”</div>
                  <div className="mt-3 max-w-xl text-sm text-white/70">{HERO.quickSummaryFoot}</div>
                </div>
                <div className="grid gap-2 text-xs text-white/60 sm:text-right">
                  <span>• Visuales WebP o SVG livianos</span>
                  <span>• Recortes consistentes en desktop y mobile</span>
                  <span>• Overlays suaves para una lectura premium</span>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </div>

      <Container className="py-10 sm:py-14">
        <SectionHeading eyebrow="Sistema visual" title="Áreas preparadas para reemplazar imágenes sin perder identidad premium" desc="El sitio ahora organiza hero, tratamientos, clínica, equipo, contacto y antes/después con recortes consistentes, overlays suaves y composiciones listas para assets finales." />
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {treatmentGallery.map((item) => (
            <MediaCard key={item.title} {...item} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 48vw, 100vw" />
          ))}
        </div>
      </Container>

      <Container className="py-10 sm:py-14">
        <SectionHeading eyebrow="Tratamientos destacados" title="Una selección coherente para una clínica estética premium" desc="Cada tratamiento se presenta con una tarjeta más limpia, mejor jerarquía visual y espacio pensado para futuros shootings editoriales o assets de cabina." />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <Card key={service.id} className="overflow-hidden border border-black/10 bg-white/95">
              <div className="relative aspect-[4/3] overflow-hidden border-b border-black/5 bg-gradient-to-br from-[#fff5f9] via-white to-[#eef8fb]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,191,209,0.28),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(174,221,235,0.32),transparent_30%)]" />
                <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-3">
                  <Badge className="bg-white/80 text-graphite-950 shadow-sm" tone="neutral">{service.name}</Badge>
                  <span className="rounded-full border border-white/70 bg-white/70 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-black/45">{index < 3 ? "Top" : "Premium"}</span>
                </div>
                <div className="absolute inset-x-5 bottom-5 rounded-[24px] border border-white/70 bg-white/78 p-4 backdrop-blur">
                  <div className="text-[11px] font-black uppercase tracking-[0.2em] text-black/45">Tratamiento</div>
                  <div className="mt-2 text-lg font-black tracking-tight text-graphite-950">{service.name}</div>
                  <p className="mt-2 text-sm leading-6 text-black/65">Espacio preparado para sumar fotografía editorial, aparatología o detalle de sesión sin comprometer el layout.</p>
                </div>
              </div>
              <CardContent className="grid gap-3">
                <Badge className="w-fit" tone="neutral">Desde {service.priceFrom}</Badge>
                <p className="text-sm text-black/60 dark:text-white/70">{service.desc}</p>
                <div className="grid grid-cols-2 gap-3 text-xs text-black/50 dark:text-white/55">
                  <div className="rounded-2xl bg-[#fff7fa] px-3 py-2 dark:bg-white/5">Sesión estimada: {service.durationMin} min.</div>
                  <div className="rounded-2xl bg-[#f4fbfd] px-3 py-2 dark:bg-white/5">Preparación: {service.bufferMin} min.</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>

      <Container className="py-6 sm:py-8">
        <div className="grid gap-4 rounded-[32px] border border-black/5 bg-white p-5 shadow-soft dark:border-white/10 dark:bg-graphite-900 lg:grid-cols-[1.02fr_0.98fr] lg:p-8">
          <div>
            <div className="text-sm font-extrabold uppercase tracking-[0.18em] text-black/45 dark:text-white/50">Antes y después</div>
            <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">Resultados que se comunican con deseo, pero también con criterio.</h2>
            <p className="mt-3 max-w-2xl text-sm text-black/65 dark:text-white/70">La propuesta visual ahora contempla pares comparativos, secuencias de progreso y storytelling clínico sin que parezcan bloques heredados de otra industria.</p>
          </div>
          <div className="grid gap-3">
            {beforeAfter.map((item) => (
              <div key={item.title} className="rounded-[24px] border border-black/10 bg-gradient-to-r from-[#fff8fb] to-[#f5fbfd] p-4 text-sm text-black/70 dark:border-white/10 dark:bg-white/5 dark:text-white/75">
                <div className="text-[11px] font-black uppercase tracking-[0.2em] text-black/40 dark:text-white/45">{item.label}</div>
                <div className="mt-1 text-base font-extrabold text-graphite-950 dark:text-white">{item.title}</div>
                <p className="mt-2 leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <Container className="py-10 sm:py-12">
        <SectionHeading eyebrow="Cómo trabajamos" title="Un proceso simple para convertir mejor desde Instagram y WhatsApp" desc="La experiencia fue adaptada para captar atención, facilitar la reserva y sostener confianza en cada paso." />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {processSteps.map((item) => (
            <Card key={item.step} className="border border-black/10 bg-white/90">
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
        <div className="mt-8 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <MediaCard
            {...supportMedia[0]}
            sizes="(min-width: 1024px) 30vw, 100vw"
            className="h-full"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {STAFF.map((person) => (
              <Card key={person.id} className="border border-black/10 bg-white/95">
                <CardContent className="grid gap-2">
                  <div className="text-sm font-extrabold">{person.name}</div>
                  <div className="text-xs font-semibold uppercase tracking-[0.12em] text-black/45 dark:text-white/50">{person.role}</div>
                  <p className="text-sm text-black/65 dark:text-white/70">{person.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>

      <Container className="py-10 sm:py-12">
        <SectionHeading eyebrow="Testimonios" title="Prueba social alineada al mundo estético" desc="Microcopy y reseñas adaptadas para transmitir confianza, experiencia y deseo de reservar." />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <Card key={item.name} className="border border-black/10 bg-white/92">
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
            <Card key={item.q} className="border border-black/10 bg-white/92">
              <CardContent className="grid gap-2">
                <div className="text-sm font-extrabold">{item.q}</div>
                <p className="text-sm text-black/65 dark:text-white/70">{item.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>

      <Container className="py-10 sm:py-14">
        <div className="grid gap-4 rounded-[32px] bg-graphite-950 p-6 text-white shadow-soft sm:p-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-white/50">CTA final</div>
            <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-4xl">Lista para verte, sentirte bien y empezar tu tratamiento con acompañamiento real.</h2>
            <p className="mt-3 text-sm text-white/75 sm:text-base">Aura Estética quedó adaptada para una demo comercial premium: identidad visual consistente, zonas de imagen listas para recambio total de assets y canales directos hacia consulta y WhatsApp.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <LinkButton href="/agenda" className="bg-cyanSoft-400 text-graphite-950 hover:bg-cyanSoft-300">Agendá tu valoración</LinkButton>
              <LeadCTA interest="general" label="Hablá por WhatsApp" variant="outline" />
              <LinkButton href="/ubicacion" variant="outline">Contacto, ubicación y horarios</LinkButton>
            </div>
          </div>
          <MediaCard
            {...supportMedia[1]}
            sizes="(min-width: 1024px) 34vw, 100vw"
            className="border-white/10 bg-white/5"
            overlay="light"
          />
        </div>
      </Container>

      <Container className="pb-10 sm:pb-14">
        <div className="grid gap-4 rounded-[32px] border border-black/5 bg-white p-5 shadow-soft dark:border-white/10 dark:bg-graphite-900 md:grid-cols-3">
          {featuredCards.map((item) => (
            <div key={item.title} className="rounded-[24px] bg-gradient-to-br from-[#fff8fb] to-[#f4fbfd] p-4 dark:bg-white/5">
              <div className="text-sm font-extrabold">{item.title}</div>
              <p className="mt-2 text-sm text-black/65 dark:text-white/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
