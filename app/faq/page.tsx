import type { Metadata } from "next";
import { FAQS, SEO } from "@/lib/data";
import { buildPageMetadata } from "@/lib/seo";
import { Container, Card, CardContent, Badge, LinkButton } from "@/components/ui";
import { SectionHeading } from "@/components/section";
import { CommercialImplementationCTA } from "@/components/commercial-implementation-cta";

export const metadata: Metadata = buildPageMetadata({
  title: SEO.faqTitle,
  description: SEO.faqDescription,
  path: "/faq"
});

export default function FAQPage() {
  return (
    <Container className="py-10">
      <SectionHeading eyebrow="FAQ" title="Respuestas claras para decidir rápido" desc="Reunimos las dudas más comunes sobre turnos, atención prioritaria y seguimiento para que puedas resolverlas en minutos y avanzar con tranquilidad." />

      <div className="mt-8 grid gap-3">
        {FAQS.map((item) => (
          <Card key={item.q}>
            <CardContent>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <div className="text-sm font-extrabold">{item.q}</div>
                  <Badge tone="neutral" className="group-open:bg-cyanSoft-50 group-open:text-graphite-900">+</Badge>
                </summary>
                <p className="mt-3 text-sm text-black/65">{item.a}</p>
              </details>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-black/10 bg-white/70 p-5 text-sm text-black/65 shadow-sm">Si tu duda no aparece acá, podés reservar directo o escribirnos por WhatsApp. La idea es que encuentres respuesta rápido y sepas cuál es el mejor siguiente paso para tu atención.</div>

      <div className="mt-10 flex flex-wrap gap-2">
        <LinkButton href="/agenda" className="bg-cyanSoft-400 text-graphite-950 hover:bg-cyanSoft-300">Reservar turno</LinkButton>
        <LinkButton href="/urgencias" variant="outline">Evaluar prioridad</LinkButton>
        <CommercialImplementationCTA location="faq" />
      </div>
    </Container>
  );
}
