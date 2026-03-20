import type { Metadata } from "next";

import { Container, Card, CardContent, Badge } from "@/components/ui";
import { SEO } from "@/lib/data";
import { buildPageMetadata } from "@/lib/seo";
import { ContactoForm } from "./contacto-form";

export const metadata: Metadata = buildPageMetadata({
  title: SEO.implementationTitle,
  description: SEO.implementationDescription,
  path: "/contacto"
});

export default function ContactoPage() {
  return (
    <Container className="grid gap-8 py-10 sm:py-14">
      <section className="grid gap-4">
        <Badge className="w-fit">CONSULTA</Badge>
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Reservá tu consulta en Aura Estética</h1>
        <p className="max-w-3xl text-sm text-black/65 dark:text-white/70 sm:text-base">Completá tus datos y coordinamos una valoración personalizada para recomendarte el tratamiento más adecuado según tus objetivos, tiempos y preferencias.</p>
        <div className="grid gap-2 rounded-2xl border border-cyanSoft-200/70 bg-cyanSoft-50/70 p-4 text-sm text-graphite-900 dark:border-cyanSoft-400/20 dark:bg-cyanSoft-400/10 dark:text-white/85 sm:grid-cols-3">
          <div><span className="font-extrabold">Valoración personalizada:</span> revisamos tu caso y te orientamos con criterio profesional.</div>
          <div><span className="font-extrabold">Reserva ágil:</span> dejamos listo el próximo paso por WhatsApp o según tu canal preferido.</div>
          <div><span className="font-extrabold">Experiencia premium:</span> atención clara, estética y comercial sin agregar complejidad innecesaria.</div>
        </div>
      </section>

      <Card>
        <CardContent>
          <ContactoForm />
        </CardContent>
      </Card>
    </Container>
  );
}
