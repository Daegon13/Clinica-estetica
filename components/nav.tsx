"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { Container, LinkButton } from "./ui";
import { BRAND } from "@/lib/data";
import { trackEvent } from "@/lib/analytics";
import { buildWhatsappUrl, getStoredUtm } from "@/lib/utm";
import { addLead } from "@/lib/leads";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Tratamientos" },
  { href: "/agenda", label: "Valoración" },
  { href: "/equipo", label: "Equipo" },
  { href: "/ubicacion", label: "Ubicación" },
  { href: "/faq", label: "FAQ" }
];

export function Nav() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [whatsappUrl, setWhatsappUrl] = React.useState(BRAND.whatsappUrl);

  React.useEffect(() => {
    const utm = getStoredUtm();
    setWhatsappUrl(buildWhatsappUrl(BRAND.whatsappUrl, utm, "Mi interés: valoración estética."));
  }, [searchParams]);

  React.useEffect(() => {
    const storageKey = "vetcare:sales_mode_logged";
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        if (localStorage.getItem(storageKey) === "1") return;
        localStorage.setItem(storageKey, "1");
      }
    } catch {}
    trackEvent("sales_mode_enabled", { location: pathname || "unknown" });
  }, [pathname]);

  function onWhatsappClick() {
    const utm = getStoredUtm();
    addLead({
      sourcePage: pathname || window.location.pathname,
      channel: "whatsapp_click",
      utm: utm ?? undefined,
      interest: ["implementacion"],
      note: "Navbar CTA"
    });
    trackEvent("cta_whatsapp_click", { location: "navbar", ...(utm ?? {}) });
  }

  const navLinks = links;

  return (
    <div className="sticky top-0 z-30 border-b border-black/5 bg-warm-100/88 text-graphite-900 backdrop-blur-xl dark:border-white/10 dark:bg-graphite-950/88 dark:text-white">
      <Container className="flex min-h-16 flex-wrap items-center justify-between gap-3 py-3 lg:flex-nowrap lg:py-0">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-graphite-900 font-black text-white dark:bg-cyanSoft-400 dark:text-graphite-950">{BRAND.shortName}</span>
          <div className="leading-tight">
            <div className="text-sm font-extrabold tracking-tight">{BRAND.name}</div>
            <div className="-mt-0.5 text-[11px] text-black/55 dark:text-white/65">{BRAND.tagline}</div>
          </div>
        </Link>

        <nav className="hidden max-w-[calc(100vw-34rem)] flex-1 items-center gap-1 overflow-x-auto whitespace-nowrap lg:flex">
          {navLinks.map(l => {
            const active = pathname === l.href;
            return (
              <Link key={l.href} href={l.href} className={cn("rounded-xl px-3 py-2 text-sm font-semibold transition", active ? "bg-black/5 dark:bg-white/15" : "hover:bg-black/5 dark:hover:bg-white/10")}>{l.label}</Link>
            );
          })}
        </nav>

        <div className="flex w-full shrink-0 flex-wrap items-center justify-end gap-2 sm:w-auto sm:flex-nowrap [&>*]:shrink-0">
          <LinkButton href="/agenda" className="hidden whitespace-nowrap sm:inline-flex" variant="outline">Agendá tu valoración</LinkButton>
          <LinkButton href={whatsappUrl} target="_blank" rel="noreferrer" onClick={onWhatsappClick} className="w-full whitespace-nowrap bg-cyanSoft-400 text-graphite-950 hover:bg-cyanSoft-300 sm:w-auto">Hablá por WhatsApp</LinkButton>
        </div>
      </Container>

      <Container className="pb-3 pt-1 lg:hidden">
        <div className="flex flex-wrap gap-2">
          {navLinks.map(l => {
            const active = pathname === l.href;
            return <Link key={l.href} href={l.href} className={cn("rounded-xl px-3 py-2 text-xs font-semibold", active ? "bg-black/5 dark:bg-white/15" : "bg-white/70 hover:bg-black/5 dark:bg-graphite-900 dark:hover:bg-white/10")}>{l.label}</Link>;
          })}
        </div>
      </Container>
    </div>
  );
}
