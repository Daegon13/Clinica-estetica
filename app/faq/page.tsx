import type { Metadata } from "next";
import { FAQS, SEO } from "@/lib/data";
import { buildPageMetadata } from "@/lib/seo";
import { Container, Card, CardContent, Badge, LinkButton } from "@/components/ui";
import { SectionHeading } from "@/components/section";

export const metadata: Metadata = buildPageMetadata({
  title: SEO.faqTitle,
  description: SEO.faqDescription,
  path: "/faq"
});

export default function FAQPage() {
  return (
    <Container className="py-10">
      <SectionHeading eyebrow="FAQ" title="Respuestas claras para reservar con confianza" desc="Preguntas breves y útiles para bajar fricción, ordenar expectativas y ayudarte a dar el siguiente paso con seguridad." />

      <div className="mt-8 grid gap-3">
        {FAQS.map((item) => (
          <Card key={item.q}>
            <CardContent>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <div className="text-sm font-extrabold">{item.q}</div>
                  <Badge tone="neutral" className="group-open:bg-cyanSoft-50 group-open:text-graphite-900">+</Badge>
                </summary>
                <p className="mt-3 text-sm text-black/65 dark:text-white/70">{item.a}</p>
              </details>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-black/10 bg-white/70 p-5 text-sm text-black/65 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/70">Si tu duda no aparece acá, escribinos por WhatsApp o agendá una valoración. Te ayudamos a entender qué tratamiento tiene sentido para vos antes de reservar.</div>

      <div className="mt-10 flex flex-wrap gap-2">
        <LinkButton href="/agenda" className="bg-cyanSoft-400 text-graphite-950 hover:bg-cyanSoft-300">Agendá tu valoración</LinkButton>
        <LinkButton href="/contacto" variant="outline">Quiero que me contacten</LinkButton>
        <LinkButton href="/ubicacion" variant="outline">Ubicación y horarios</LinkButton>
      </div>
    </Container>
  );
}
