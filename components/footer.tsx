import { BRAND } from "@/lib/data";
import { Container, LinkButton } from "./ui";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-black/5 bg-white dark:bg-graphite-950">
      <Container className="grid gap-6 py-10 sm:grid-cols-2">
        <div className="grid gap-3">
          <div>
            <div className="text-sm font-extrabold">{BRAND.name}</div>
            <p className="mt-1 max-w-md text-sm text-black/60 dark:text-white/70">{BRAND.tagline}</p>
          </div>
          <p className="max-w-md text-xs text-black/45 dark:text-white/55">Contacto: {BRAND.phone} · {BRAND.address} · {BRAND.hours}</p>
        </div>

        <div className="grid gap-3 sm:justify-items-end">
          <div className="text-sm font-semibold text-black/80 dark:text-white/75 sm:text-right">Reservá tu valoración, resolvé dudas por WhatsApp o coordiná tu consulta en una experiencia premium y simple.</div>
          <div className="flex flex-wrap gap-2 sm:justify-end">
            <LinkButton href="/agenda" variant="outline">Agendá tu valoración</LinkButton>
            <LinkButton href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="bg-cyanSoft-400 text-graphite-950 hover:bg-cyanSoft-300">Hablá por WhatsApp</LinkButton>
            <LinkButton href="/contacto" variant="outline">Reservá tu consulta</LinkButton>
          </div>
        </div>
      </Container>
      <div className="border-t border-black/5 py-4 text-center text-xs text-black/50 dark:border-white/10 dark:text-white/45">© {new Date().getFullYear()} {BRAND.name}. Todos los derechos reservados.</div>
    </footer>
  );
}
