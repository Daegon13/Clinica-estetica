import type { Metadata } from "next";
import { SEO, STAFF } from "@/lib/data";
import { buildPageMetadata } from "@/lib/seo";
import { Container, Card, CardContent, Badge, LinkButton } from "@/components/ui";
import { SectionHeading } from "@/components/section";
import { MediaCard } from "@/components/brand/media-card";

export const metadata: Metadata = buildPageMetadata({
  title: SEO.teamTitle,
  description: SEO.teamDescription,
  path: "/equipo"
});

export default function EquipoPage() {
  return (
    <Container className="content-auto py-8 sm:py-12 lg:py-14">
      <SectionHeading eyebrow="Equipo profesional" title="Profesionales que combinan criterio, estética y experiencia" desc="La propuesta premium de Aura Estética se apoya en un equipo que transmite cercanía, precisión y una mirada personalizada." />

      <div className="mt-6 grid gap-6 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
        <MediaCard
          src="/brand/aesthetic/team-portrait.svg"
          alt="Retrato editorial del equipo profesional de clínica estética premium"
          eyebrow="Equipo Aura Estética"
          title="Resultados armónicos con atención humana"
          description="Un enfoque sobrio, cálido y profesional para acompañar cada consulta y cada sesión."
          aspectClassName="aspect-[4/5]"
          sizes="(min-width: 1280px) 28vw, (min-width: 768px) 50vw, 100vw"
          className="h-full"
        />

        <div>
          <div className="max-w-3xl text-sm leading-6 text-black/65 dark:text-white/70">
            En Aura Estética creemos en una estética moderna, confiable y natural. Por eso el equipo comunica cercanía, profesionalismo y una mirada personalizada para que cada tratamiento responda a objetivos reales y no a fórmulas genéricas.
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {STAFF.map((p) => (
              <Card key={p.id} className="border border-black/10 bg-white/95">
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
        </div>
      </div>

      <div className="mt-10 rounded-[32px] border border-black/10 bg-gradient-to-r from-white to-[#f5fbfd] p-5 text-sm leading-6 text-black/65 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/70 sm:p-6">
        Si querés conocernos en persona, podés agendar tu valoración o escribirnos por WhatsApp. La experiencia fue diseñada para transmitir el mismo cuidado que una paciente espera al elegir una clínica estética premium.
      </div>

      <div className="mt-10 flex flex-wrap gap-2">
        <LinkButton href="/agenda" className="bg-cyanSoft-400 text-graphite-950 hover:bg-cyanSoft-300">Agendá tu valoración</LinkButton>
        <LinkButton href="/faq" variant="outline">Ver preguntas frecuentes</LinkButton>
      </div>
    </Container>
  );
}
