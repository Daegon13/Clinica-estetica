"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { BRAND } from "@/lib/data";
import { trackEvent } from "@/lib/analytics";
import { addLead } from "@/lib/leads";
import { buildWhatsappUrl, getStoredUtm } from "@/lib/utm";

export function FloatingCta() {
  const pathname = usePathname();
  const [whatsappUrl, setWhatsappUrl] = React.useState(BRAND.whatsappUrl);

  React.useEffect(() => {
    const utm = getStoredUtm();
    setWhatsappUrl(buildWhatsappUrl(BRAND.whatsappUrl, utm, "Quiero agendar una valoración estética. ¿Qué horario tienen disponible?"));
  }, []);

  function onWhatsappClick() {
    const utm = getStoredUtm();
    addLead({ sourcePage: pathname || window.location.pathname, channel: "whatsapp_click", utm: utm ?? undefined, interest: ["implementacion"], note: "Floating CTA" });
    trackEvent("cta_whatsapp_click", { location: "floating", ...(utm ?? {}) });
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white/96 px-4 pb-[calc(env(safe-area-inset-bottom)+0.9rem)] pt-3 shadow-[0_-12px_30px_rgba(15,23,42,0.12)] backdrop-blur dark:border-white/10 dark:bg-graphite-950/96 lg:hidden">
      <div className="mx-auto flex max-w-6xl items-end justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="text-[11px] font-black uppercase tracking-[0.18em] text-black/45 dark:text-white/45">Consulta rápida</div>
          <p className="mt-1 text-sm font-semibold leading-5 text-graphite-950 dark:text-white">WhatsApp visible en todo momento para reservar sin perder el cierre.</p>
        </div>
        <div className="flex shrink-0 gap-2">
          <a href="/agenda" className="inline-flex h-11 items-center justify-center rounded-xl border border-black/10 bg-white px-4 text-sm font-semibold text-graphite-900 shadow-soft hover:bg-black/5 dark:border-white/10 dark:bg-graphite-900 dark:text-white dark:hover:bg-white/10">Valorar</a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" onClick={onWhatsappClick} className="inline-flex h-11 items-center justify-center rounded-xl bg-cyanSoft-400 px-4 text-sm font-semibold text-graphite-950 shadow-soft hover:bg-cyanSoft-300">WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
