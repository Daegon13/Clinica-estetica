import Image from "next/image";
import type { Metadata } from "next";
import { Container, Card, CardContent, Badge, LinkButton } from "@/components/ui";
import { LeadCTA } from "@/components/LeadCTA";
import { BRAND, SERVICES, SEO } from "@/lib/data";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: SEO.servicesTitle,
  description: SEO.servicesDescription,
  path: "/servicios"
});

function iconSrc(key: string) {
  return `/brand/icons/${key}.webp`;
}

export default function ServicesPage() {
  return (
    <div className="bg-gradient-to-b from-white to-warm-100 dark:from-graphite-950 dark:to-graphite-900">
      <Container className="grid gap-10 py-10 sm:py-14">
        <section className="grid gap-4">
          <Badge className="w-fit">TRATAMIENTOS</Badge>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Tratamientos estéticos premium para rostro, cuerpo y cuidado integral</h1>
          <p className="max-w-2xl text-sm text-black/65 dark:text-white/70 sm:text-base">En {BRAND.name} combinamos valoración profesional, tecnología y protocolos personalizados para que cada tratamiento tenga sentido estético, criterio clínico y una experiencia de alto nivel.</p>
          <ul className="grid gap-1 text-sm text-black/65 dark:text-white/70">
            <li>• Planes faciales y corporales diseñados según tu objetivo y tu punto de partida.</li>
            <li>• Indicaciones claras antes y después de cada sesión para cuidar el resultado.</li>
            <li>• Reservas simples, contacto directo y acompañamiento real por WhatsApp.</li>
          </ul>
        </section>

        <section className="grid gap-4 rounded-2xl border border-black/5 bg-white/70 p-5 shadow-soft dark:border-white/10 dark:bg-graphite-900/70 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-sm font-extrabold tracking-wide">Selección destacada</h2>
            <span className="text-xs text-black/50 dark:text-white/55">Pensada para conversión y deseo</span>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {SERVICES.map((service) => (
              <div key={service.id} className="grid place-items-center gap-1 rounded-2xl border border-black/5 bg-white/80 p-3 dark:border-white/10 dark:bg-graphite-950/30">
                <Image src={iconSrc(service.icon)} alt={service.name} width={96} height={96} className="h-14 w-14 sm:h-16 sm:w-16" />
                <div className="text-center text-[11px] font-semibold text-black/60 dark:text-white/70">{service.name}</div>
              </div>
            ))}
          </div>

          <p className="text-xs text-black/55 dark:text-white/60">Cada categoría fue adaptada para que el sitio se perciba como una clínica estética real, moderna y lista para una demo comercial.</p>
        </section>

        <section className="grid gap-4">
          <div className="grid gap-2">
            <h2 className="text-xl font-extrabold sm:text-2xl">Listado de tratamientos</h2>
            <p className="max-w-2xl text-sm text-black/60 dark:text-white/65">Mostramos duración estimada y valores orientativos para ayudar a comparar opciones y dar una primera referencia antes de la valoración.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Card key={s.id}>
                <CardContent className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-black/5 bg-white dark:border-white/10 dark:bg-graphite-950/40">
                      <Image src={iconSrc(s.icon)} alt={s.name} width={56} height={56} className="h-10 w-10" />
                    </div>
                    <div className="grid gap-1">
                      <div className="text-sm font-extrabold">{s.name}</div>
                      <p className="text-sm text-black/65 dark:text-white/70">{s.desc}</p>
                    </div>
                  </div>

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

        <section className="grid gap-4 rounded-2xl border border-black/5 bg-white/75 p-5 shadow-soft dark:border-white/10 dark:bg-graphite-900/70 sm:p-6">
          <div className="grid gap-2">
            <h2 className="text-xl font-extrabold sm:text-2xl">¿Lista para empezar?</h2>
            <p className="max-w-2xl text-sm text-black/65 dark:text-white/70">Agendá tu valoración o escribinos por WhatsApp para ayudarte a elegir el tratamiento ideal según tu objetivo estético.</p>
          </div>

          <div className="flex flex-wrap justify-start gap-2">
            <LinkButton href="/agenda" className="bg-cyanSoft-400 text-graphite-950 hover:bg-cyanSoft-300">Agendá tu valoración</LinkButton>
            <LeadCTA interest="servicios" label="Consultar por WhatsApp" variant="outline" />
          </div>
        </section>
      </Container>
    </div>
  );
}
