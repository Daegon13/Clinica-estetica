import type { Metadata } from "next";
import { Clock3, Compass, MapPin, CarFront, PhoneCall, Accessibility, Route, Instagram } from "lucide-react";
import { SectionHeading } from "@/components/section";
import { LeadCTA } from "@/components/LeadCTA";
import { Container, Card, CardContent, CardHeader, Badge, LinkButton } from "@/components/ui";
import { BRAND } from "@/lib/data";
import { buildPageMetadata } from "@/lib/seo";
import { MediaCard } from "@/components/brand/media-card";

export const metadata: Metadata = buildPageMetadata({
  title: `Ubicación y contacto | ${BRAND.name}`,
  description: `Encontrá la ubicación de ${BRAND.name}, horarios de atención y vías de contacto para turnos y consultas.`,
  path: "/ubicacion"
});

const visitHighlights = [
  { icon: Clock3, title: "Horarios", description: BRAND.hours, detail: "Respondemos consultas y coordinamos valoraciones dentro de este rango para que el paso a reserva sea rápido." },
  { icon: Compass, title: "Zona", description: `${BRAND.neighborhood}, ${BRAND.city}`, detail: "Una referencia urbana coherente, simple de encontrar y consistente con la propuesta premium de la marca." },
  { icon: CarFront, title: "Estacionamiento", description: "Hay cocheras privadas y lugares de estacionamiento en la zona.", detail: "Ideal para llegar con tiempo y vivir la experiencia con menos fricción." },
  { icon: Accessibility, title: "Accesibilidad", description: "Ingreso cómodo y circulación simple dentro de la clínica.", detail: "Pensado para una visita agradable desde el ingreso hasta el momento de la atención." }
];

export default function UbicacionPage() {
  const mapsQuery = encodeURIComponent(BRAND.address);
  const mapsEmbed = `https://www.google.com/maps?q=${mapsQuery}&z=16&output=embed`;

  return (
    <Container className="py-10 sm:py-14">
      <SectionHeading eyebrow="Ubicación · contacto · horarios" title="Toda la información para consultar y llegar sin fricción" desc="Mostramos dirección, horarios, WhatsApp e Instagram en un solo bloque para que reservar sea una decisión simple, especialmente desde mobile." />
      <div className="mt-8 grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
        <Card className="overflow-hidden border border-black/10 bg-gradient-to-br from-white via-white to-cyanSoft-50/60">
          <CardHeader className="border-b border-black/10 bg-white/80">
            <div className="flex flex-wrap items-center gap-2"><Badge tone="good">Sede principal</Badge><Badge tone="neutral">Acceso ágil</Badge><Badge tone="neutral">WhatsApp activo</Badge></div>
            <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-black/45">{BRAND.name}</p>
                <h2 className="mt-2 text-3xl font-black tracking-tight text-graphite-950">Cómo llegar y qué esperar en tu visita</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-black/65">Nuestra sede se presenta como una referencia elegante y clara: escribís por WhatsApp, coordinás tu valoración y llegás con horario, dirección e indicaciones previas ya resueltas.</p>
              </div>
              <div className="rounded-3xl border border-black/10 bg-white p-4 shadow-soft"><div className="flex items-start gap-3"><div className="rounded-2xl bg-cyanSoft-100 p-3 text-cyanSoft-700"><MapPin className="h-5 w-5" /></div><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-black/45">Dirección</p><p className="mt-1 text-base font-bold text-graphite-950">{BRAND.address}</p><p className="mt-2 text-sm leading-6 text-black/65">Ubicación mock coherente en una zona reconocible, con buena conectividad para llegar en auto, taxi o transporte público.</p></div></div></div>
            </div>
          </CardHeader>
          <CardContent className="grid gap-5 p-4 sm:p-6">
            <MediaCard
              src="/brand/aesthetic/clinic-interior.svg"
              alt="Interior luminoso y elegante de clínica estética premium"
              eyebrow="Sede Aura Estética"
              title="Espacios serenos, claros y bien cuidados"
              description="Una ambientación pensada para que la visita se sienta cómoda, ordenada y alineada con la promesa de marca."
              aspectClassName="aspect-[16/9]"
              sizes="(min-width: 1280px) 52vw, 100vw"
            />
            <div className="grid gap-3 sm:grid-cols-2">{visitHighlights.map(({ icon: Icon, title, description, detail }) => <div key={title} className="rounded-3xl border border-black/10 bg-white p-4 shadow-soft"><div className="flex items-start gap-3"><div className="rounded-2xl bg-warm-50 p-3 text-graphite-900 ring-1 ring-black/5"><Icon className="h-5 w-5" /></div><div><div className="text-sm font-bold text-graphite-950">{title}</div><div className="mt-1 text-sm font-medium text-black/75">{description}</div><p className="mt-2 text-sm leading-6 text-black/60">{detail}</p></div></div></div>)}</div>
            <div className="flex flex-wrap gap-2"><LinkButton href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`} target="_blank" rel="noreferrer" variant="outline">Abrir en Google Maps</LinkButton><LinkButton href="/agenda" className="bg-cyanSoft-400 text-graphite-950 hover:bg-cyanSoft-300">Agendá tu valoración</LinkButton><LeadCTA interest="general" label="Consultar por WhatsApp" variant="outline" /></div>
          </CardContent>
        </Card>
        <div className="grid gap-4">
          <Card className="overflow-hidden border border-black/10"><div className="relative h-[260px] w-full overflow-hidden border-b border-black/10 bg-gradient-to-br from-cyanSoft-100 via-white to-warm-50"><iframe title={`Mapa de ${BRAND.name}`} src={mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full w-full" /><div className="pointer-events-none absolute inset-x-4 bottom-4 rounded-2xl border border-white/70 bg-white/88 p-3 shadow-soft backdrop-blur"><div className="flex items-center gap-2 text-sm font-bold text-graphite-950"><Route className="h-4 w-4" />Llegada simple para consultas y sesiones programadas</div><p className="mt-1 text-sm text-black/65">Una ubicación práctica para entrar, estacionar cerca y vivir la visita sin vueltas.</p></div></div><CardContent className="grid gap-3"><div className="rounded-2xl border border-black/10 bg-white p-4"><div className="flex items-start gap-3"><div className="rounded-2xl bg-cyanSoft-100 p-3 text-cyanSoft-700"><PhoneCall className="h-5 w-5" /></div><div><div className="text-sm font-bold text-graphite-950">WhatsApp directo</div><div className="mt-1 text-sm text-black/70">{BRAND.phone}</div><p className="mt-2 text-sm leading-6 text-black/60">Escribinos para confirmar disponibilidad, resolver dudas o avanzar con la reserva de tu consulta.</p></div></div></div><div className="rounded-2xl border border-black/10 bg-white p-4"><div className="flex items-start gap-3"><div className="rounded-2xl bg-[#f6eef8] p-3 text-[#8a4ca6]"><Instagram className="h-5 w-5" /></div><div><div className="text-sm font-bold text-graphite-950">Instagram</div><div className="mt-1 text-sm text-black/70">{BRAND.instagram}</div><p className="mt-2 text-sm leading-6 text-black/60">Un canal de descubrimiento que acompaña la marca, pero el cierre sigue estando en WhatsApp.</p></div></div></div></CardContent></Card>
        </div>
      </div>
    </Container>
  );
}
