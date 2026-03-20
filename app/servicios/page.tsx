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
    alt: "Visual de tratamiento facial para clínica estética premium",
    eyebrow: "Facial",
    title: "Close-ups con textura y glow",
    description: "Preparado para sumar peelings, limpiezas, aparatología facial o detalles de aplicación.",
    aspectClassName: "aspect-[4/3]"
  },
  {
    src: "/brand/aesthetic/treatment-body.svg",
    alt: "Visual de tratamiento corporal para clínica estética premium",
    eyebrow: "Corporal",
    title: "Sesiones con foco en contorno y bienestar",
    description: "Admite fotos de cabina, aparatología o trabajo corporal con recortes consistentes.",
    aspectClassName: "aspect-[4/3]"
  },
  {
    src: "/brand/aesthetic/clinic-interior.svg",
    alt: "Visual de interior de clínica estética para acompañar tratamientos",
    eyebrow: "Cabina y clínica",
    title: "Espacios que acompañan la promesa premium",
    description: "Sirve para reforzar el entorno, la higiene visual y la experiencia del recorrido.",
    aspectClassName: "aspect-[4/3]"
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-gradient-to-b from-white via-[#fff9fb] to-warm-100 dark:from-graphite-950 dark:to-graphite-900">
      <Container className="grid gap-10 py-10 sm:py-14">
        <section className="grid gap-4">
          <Badge className="w-fit">TRATAMIENTOS</Badge>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Tratamientos estéticos premium para rostro, cuerpo y cuidado integral</h1>
          <p className="max-w-2xl text-sm text-black/65 dark:text-white/70 sm:text-base">En {BRAND.name} combinamos valoración profesional, tecnología y protocolos personalizados para que cada tratamiento tenga sentido estético, criterio clínico y una experiencia de alto nivel.</p>
          <ul className="grid gap-1 text-sm text-black/65 dark:text-white/70">
            <li>• Planes faciales y corporales diseñados según tu objetivo y tu punto de partida.</li>
            <li>• Indicaciones claras antes y después de cada sesión para cuidar el resultado.</li>
            <li>• Recortes visuales listos para sumar fotos nuevas sin deformaciones ni sensación improvisada.</li>
          </ul>
        </section>

        <section className="grid gap-4 rounded-[32px] border border-black/5 bg-white/80 p-5 shadow-soft dark:border-white/10 dark:bg-graphite-900/70 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-sm font-extrabold tracking-wide">Galería de soporte visual</h2>
            <span className="text-xs text-black/50 dark:text-white/55">Tratamientos, cabina y contexto premium</span>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {gallery.map((item) => (
              <MediaCard key={item.title} {...item} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 48vw, 100vw" />
            ))}
          </div>
          <p className="text-xs text-black/55 dark:text-white/60">Los assets actuales son livianos y reemplazables. Cuando se sumen WebP finales, la estructura ya conserva proporciones, overlays y espaciados.</p>
        </section>

        <section className="grid gap-4">
          <div className="grid gap-2">
            <h2 className="text-xl font-extrabold sm:text-2xl">Listado de tratamientos</h2>
            <p className="max-w-2xl text-sm text-black/60 dark:text-white/65">Mostramos duración estimada y valores orientativos con una tarjeta más editorial para dar contexto y mantener una percepción premium consistente.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, index) => (
              <Card key={s.id} className="overflow-hidden border border-black/10 bg-white/95">
                <div className="relative aspect-[5/4] border-b border-black/5 bg-gradient-to-br from-[#fff6f9] via-white to-[#eef8fb]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,200,217,0.36),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(191,226,236,0.34),transparent_28%)]" />
                  <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-3">
                    <Badge className="bg-white/85 text-graphite-950 shadow-sm">{s.category}</Badge>
                    <span className="rounded-full border border-white/75 bg-white/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-black/45">{index < 3 ? "Destacado" : "Plan"}</span>
                  </div>
                  <div className="absolute inset-x-4 bottom-4 rounded-[24px] border border-white/75 bg-white/80 p-4 backdrop-blur">
                    <div className="text-[11px] font-black uppercase tracking-[0.2em] text-black/40">Imagen de tratamiento</div>
                    <div className="mt-2 text-lg font-black tracking-tight text-graphite-950">{s.name}</div>
                    <p className="mt-2 text-sm leading-6 text-black/65">Soporta fotografía horizontal con <span className="font-semibold">object-cover</span> y mantiene lectura clara en mobile.</p>
                  </div>
                </div>
                <CardContent className="grid gap-4">
                  <p className="text-sm text-black/65 dark:text-white/70">{s.desc}</p>
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <div><div className="text-[11px] font-semibold text-black/50 dark:text-white/55">Sesión</div><div className="font-bold">{s.durationMin} min</div></div>
                    <div><div className="text-[11px] font-semibold text-black/50 dark:text-white/55">Preparación</div><div className="font-bold">{s.bufferMin} min</div></div>
                    <div><div className="text-[11px] font-semibold text-black/50 dark:text-white/55">Desde</div><div className="font-bold">{s.priceFrom}</div></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-xs text-black/55 dark:text-white/60">Los valores son orientativos y pueden ajustarse según la valoración profesional, cantidad de sesiones o plan indicado para tu caso.</p>
        </section>

        <section className="grid gap-4 rounded-[32px] border border-black/5 bg-white/75 p-5 shadow-soft dark:border-white/10 dark:bg-graphite-900/70 sm:p-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="grid gap-2">
            <h2 className="text-xl font-extrabold sm:text-2xl">¿Lista para empezar?</h2>
            <p className="max-w-2xl text-sm text-black/65 dark:text-white/70">Agendá tu valoración o escribinos por WhatsApp para ayudarte a elegir el tratamiento ideal según tu objetivo estético.</p>
            <div className="flex flex-wrap justify-start gap-2 pt-2">
              <LinkButton href="/agenda" className="bg-cyanSoft-400 text-graphite-950 hover:bg-cyanSoft-300">Agendá tu valoración</LinkButton>
              <LeadCTA interest="servicios" label="Consultar por WhatsApp" variant="outline" />
            </div>
          </div>
          <MediaCard
            src="/brand/aesthetic/contact-lounge.svg"
            alt="Visual premium de recepción y apoyo para CTA de consulta estética"
            eyebrow="Consulta y seguimiento"
            title="Un CTA acompañado por imágenes coherentes"
            description="La reserva deja de estar sola: ahora puede convivir con fotos reales de recepción, cabina o experiencia de llegada."
            aspectClassName="aspect-[4/3]"
            sizes="(min-width: 1024px) 34vw, 100vw"
          />
        </section>
      </Container>
    </div>
  );
}
