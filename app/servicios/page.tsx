import type { Metadata } from "next";
import { Container, Card, CardContent, Badge, LinkButton } from "@/components/ui";
import { LeadCTA } from "@/components/LeadCTA";
import { BRAND, SERVICES, SEO } from "@/lib/data";
import { buildPageMetadata } from "@/lib/seo";
import { MediaCard } from "@/components/brand/media-card";

export const metadata: Metadata = buildPageMetadata({
  title: SEO.servicesTitle,
  description: SEO.servicesDescription,
  path: "/servicios"
});

const gallery = [
  {
    src: "/brand/aesthetic/treatment-facial.svg",
    alt: "Tratamiento facial premium con estética luminosa",
    eyebrow: "Faciales",
    title: "Glow, renovación y textura",
    description: "Tratamientos orientados a limpiar, iluminar y rejuvenecer con naturalidad.",
    aspectClassName: "aspect-[4/3]"
  },
  {
    src: "/brand/aesthetic/treatment-body.svg",
    alt: "Tratamiento corporal premium en entorno sereno",
    eyebrow: "Corporales",
    title: "Bienestar y contorno",
    description: "Protocolos pensados para acompañar definición, confort y percepción de bienestar.",
    aspectClassName: "aspect-[4/3]"
  },
  {
    src: "/brand/aesthetic/clinic-interior.svg",
    alt: "Interior elegante de clínica estética premium",
    eyebrow: "Clínica",
    title: "Cabinas e interiores cuidados",
    description: "Un entorno claro y sobrio que acompaña la experiencia de cada sesión.",
    aspectClassName: "aspect-[4/3]"
  }
];

const commercialBadges: Record<string, string> = {
  "Valoración estética": "Empezá acá",
  "Depilación láser": "Alta demanda",
  "Limpieza facial profunda": "Glow inmediato",
  Peelings: "Renovación",
  "Rejuvenecimiento facial": "Resultados sutiles",
  "Armonización facial": "Premium",
  "Tratamientos corporales": "Plan personalizado"
};

export default function ServicesPage() {
  return (
    <div className="bg-gradient-to-b from-white via-[#fff9fb] to-warm-100 dark:from-graphite-950 dark:to-graphite-900">
      <Container className="content-auto grid gap-10 py-8 sm:py-12 lg:py-14">
        <section className="grid gap-4">
          <Badge className="w-fit">TRATAMIENTOS</Badge>
          <h1 className="text-balance text-3xl font-black tracking-tight sm:text-4xl lg:text-[2.8rem]">Tratamientos elegidos para verse bien, decidir rápido y reservar con confianza</h1>
          <p className="max-w-3xl text-sm leading-7 text-black/65 dark:text-white/70 sm:text-base">En {BRAND.name} concentramos la propuesta en los tratamientos que más consultan y mejor se entienden: una selección breve, premium y orientada a resultados visibles con criterio profesional.</p>
          <ul className="grid gap-2 text-sm leading-6 text-black/65 dark:text-white/70">
            <li>• Menos opciones, más claridad para elegir el tratamiento indicado.</li>
            <li>• Beneficios concretos, lenguaje simple y una experiencia coherente con una marca premium.</li>
            <li>• CTA directos para agendar valoración o resolver dudas antes de reservar.</li>
          </ul>
        </section>

        <section className="grid gap-4 rounded-[32px] border border-black/5 bg-white/80 p-5 shadow-soft dark:border-white/10 dark:bg-graphite-900/70 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-sm font-extrabold tracking-wide">Rostro, cuerpo y experiencia</h2>
            <span className="text-xs text-black/50 dark:text-white/55">Curaduría comercial premium</span>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {gallery.map((item) => (
              <MediaCard key={item.title} {...item} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 48vw, 100vw" />
            ))}
          </div>
        </section>

        <section className="grid gap-5">
          <div className="grid gap-2 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="text-xl font-extrabold sm:text-2xl">Selección de tratamientos</h2>
              <p className="max-w-2xl text-sm text-black/60 dark:text-white/65">Cada propuesta tiene un nombre claro, un beneficio fácil de entender y una invitación concreta a dar el siguiente paso.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-white text-graphite-950">Faciales</Badge>
              <Badge className="bg-white text-graphite-950">Láser</Badge>
              <Badge className="bg-white text-graphite-950">Corporales</Badge>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map((s) => (
              <Card key={`${s.id}-${s.name}`} className="overflow-hidden border border-black/10 bg-white/95">
                <div className="relative border-b border-black/5 bg-gradient-to-br from-[#fff6f9] via-white to-[#eef8fb] p-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,200,217,0.24),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(191,226,236,0.28),transparent_28%)]" />
                  <div className="relative flex items-start justify-between gap-3">
                    <Badge className="bg-white/90 text-graphite-950 shadow-sm">{s.category}</Badge>
                    <span className="rounded-full border border-white/75 bg-white/85 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-black/45">{commercialBadges[s.name]}</span>
                  </div>
                  <div className="relative mt-6 grid gap-2">
                    <div className="text-lg font-black tracking-tight text-graphite-950">{s.name}</div>
                    <p className="text-sm font-medium text-black/70">{s.name === "Valoración estética" ? "Descubrí qué tratamiento te conviene antes de invertir." : s.name === "Depilación láser" ? "Menos vello, más comodidad y una rutina más simple." : s.name === "Limpieza facial profunda" ? "Piel más limpia, fresca y luminosa desde la primera sesión." : s.name === "Peelings" ? "Renová la piel y devolvele uniformidad sin complicarte." : s.name === "Rejuvenecimiento facial" ? "Recuperá frescura con un plan pensado para verte descansada." : s.name === "Armonización facial" ? "Realzá tu rostro con equilibrio, naturalidad y buen criterio." : "Mejorá contorno y textura con protocolos adaptados a vos."}</p>
                  </div>
                </div>
                <CardContent className="grid gap-4">
                  <p className="text-sm leading-6 text-black/65 dark:text-white/70">{s.desc}</p>
                  <div className="grid gap-3 text-sm sm:grid-cols-3">
                    <div><div className="text-[11px] font-semibold text-black/50 dark:text-white/55">Sesión</div><div className="font-bold">{s.durationMin} min</div></div>
                    <div><div className="text-[11px] font-semibold text-black/50 dark:text-white/55">Preparación</div><div className="font-bold">{s.bufferMin} min</div></div>
                    <div><div className="text-[11px] font-semibold text-black/50 dark:text-white/55">Desde</div><div className="font-bold">{s.priceFrom}</div></div>
                  </div>
                  <div className="flex flex-wrap gap-2.5 pt-1">
                    <LinkButton href="/agenda" size="sm" className="bg-cyanSoft-400 text-graphite-950 hover:bg-cyanSoft-300">Quiero este tratamiento</LinkButton>
                    <LeadCTA interest="servicios" label="Consultar" variant="outline" className="!h-9" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-xs text-black/55 dark:text-white/60">Los valores son orientativos y pueden ajustarse según la valoración profesional, cantidad de sesiones o plan indicado para tu caso.</p>
        </section>

        <section className="grid gap-4 rounded-[32px] border border-black/5 bg-white/75 p-5 shadow-soft dark:border-white/10 dark:bg-graphite-900/70 sm:p-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="grid gap-3">
            <Badge className="w-fit bg-[#eef8fb] text-graphite-950">CTA contextual</Badge>
            <h2 className="text-xl font-extrabold sm:text-2xl">¿No sabés por cuál empezar?</h2>
            <p className="max-w-2xl text-sm text-black/65 dark:text-white/70">Agendá una valoración estética y te ayudamos a elegir el tratamiento ideal según tu piel, tu objetivo y el resultado que querés lograr.</p>
            <div className="flex flex-wrap justify-start gap-2 pt-2">
              <LinkButton href="/agenda" className="bg-cyanSoft-400 text-graphite-950 hover:bg-cyanSoft-300">Agendá tu valoración</LinkButton>
              <LeadCTA interest="servicios" label="Quiero asesoramiento por WhatsApp" variant="outline" />
            </div>
            <p className="text-xs text-black/50 dark:text-white/55">Respuesta simple, orientación profesional y reserva rápida desde el primer contacto.</p>
          </div>
          <MediaCard
            src="/brand/aesthetic/contact-lounge.svg"
            alt="Recepción serena de clínica estética premium"
            eyebrow="Consulta y seguimiento"
            title="Una reserva simple, clara y acompañada"
            description="Desde el primer mensaje hasta tu llegada a clínica, todo está pensado para que avanzar se sienta fácil y seguro."
            aspectClassName="aspect-[4/3]"
            sizes="(min-width: 1024px) 34vw, 100vw"
          />
        </section>
      </Container>
    </div>
  );
}
