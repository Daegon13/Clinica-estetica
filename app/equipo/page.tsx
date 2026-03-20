import type { Metadata } from "next";
import { SEO, STAFF } from "@/lib/data";
import { buildPageMetadata } from "@/lib/seo";
import { Container, Card, CardContent, Badge, LinkButton } from "@/components/ui";
import { SectionHeading } from "@/components/section";
import { CommercialImplementationCTA } from "@/components/commercial-implementation-cta";

export const metadata: Metadata = buildPageMetadata({
  title: SEO.teamTitle,
  description: SEO.teamDescription,
  path: "/equipo"
});

export default function EquipoPage() {
  return (
    <Container className="py-10">
      <SectionHeading
        eyebrow="Equipo"
        title="Un equipo cercano, criterioso y fácil de contactar"
        desc="Combinamos atención cálida, criterio clínico y seguimiento ordenado para que cada paciente se sienta acompañado antes, durante y después de la consulta."
      />

      <div className="mt-6 max-w-3xl text-sm leading-6 text-black/65">
        Somos un equipo de atención privada de cercanía: preferimos explicar con claridad, responder a tiempo y construir vínculos de confianza con cada persona.
        Cuando alguien necesita control, procedimiento, seguimiento o simplemente una segunda mirada, el objetivo es el mismo: que sepa que hay un equipo presente del otro lado.
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {STAFF.map((p) => (
          <Card key={p.id}>
            <CardContent className="grid gap-3">
              <div className="flex items-start justify-between gap-4">
                <div className="grid gap-1">
                  <div className="text-sm font-extrabold">{p.name}</div>
                  <div className="text-xs font-semibold uppercase tracking-[0.08em] text-black/45">{p.role}</div>
                </div>
                <Badge tone="neutral">Equipo profesional</Badge>
              </div>
              <div className="text-sm text-black/65">{p.bio}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-black/10 bg-white/70 p-5 text-sm text-black/65 shadow-sm">
        Si querés conocernos en persona, podés reservar un turno online o escribirnos por WhatsApp. Priorizamos respuestas claras, tiempos razonables y un seguimiento que no dependa de perseguir al equipo por varios canales.
      </div>

      <div className="mt-10 flex flex-wrap gap-2">
        <LinkButton href="/agenda" className="bg-cyanSoft-400 text-graphite-950 hover:bg-cyanSoft-300">Reservar turno</LinkButton>
        <LinkButton href="/faq" variant="outline">Ver preguntas frecuentes</LinkButton>
        <CommercialImplementationCTA location="equipo" />
      </div>
    </Container>
  );
}
