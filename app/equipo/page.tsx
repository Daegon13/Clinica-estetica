import type { Metadata } from "next";
import { SEO, STAFF } from "@/lib/data";
import { buildPageMetadata } from "@/lib/seo";
import { Container, Card, CardContent, Badge, LinkButton } from "@/components/ui";
import { SectionHeading } from "@/components/section";

export const metadata: Metadata = buildPageMetadata({
  title: SEO.teamTitle,
  description: SEO.teamDescription,
  path: "/equipo"
});

export default function EquipoPage() {
  return (
    <Container className="py-10">
      <SectionHeading eyebrow="Equipo profesional" title="Profesionales que combinan criterio, estética y experiencia" desc="Construimos una percepción premium no sólo desde el diseño, sino también desde el relato del equipo y su forma de acompañar a cada paciente." />

      <div className="mt-6 max-w-3xl text-sm leading-6 text-black/65 dark:text-white/70">
        En Aura Estética creemos en una estética moderna, confiable y natural. Por eso el equipo comunica cercanía, profesionalismo y una mirada personalizada para que cada tratamiento responda a objetivos reales y no a fórmulas genéricas.
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {STAFF.map((p) => (
          <Card key={p.id}>
            <CardContent className="grid gap-3">
              <div className="flex items-start justify-between gap-4">
                <div className="grid gap-1">
                  <div className="text-sm font-extrabold">{p.name}</div>
                  <div className="text-xs font-semibold uppercase tracking-[0.08em] text-black/45 dark:text-white/50">{p.role}</div>
                </div>
                <Badge tone="neutral">Aura Estética</Badge>
              </div>
              <div className="text-sm text-black/65 dark:text-white/70">{p.bio}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-black/10 bg-white/70 p-5 text-sm text-black/65 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/70">
        Si querés conocernos en persona, podés agendar tu valoración o escribirnos por WhatsApp. La experiencia fue adaptada para transmitir el mismo cuidado que una paciente espera al elegir una clínica estética premium.
      </div>

      <div className="mt-10 flex flex-wrap gap-2">
        <LinkButton href="/agenda" className="bg-cyanSoft-400 text-graphite-950 hover:bg-cyanSoft-300">Agendá tu valoración</LinkButton>
        <LinkButton href="/faq" variant="outline">Ver preguntas frecuentes</LinkButton>
      </div>
    </Container>
  );
}
