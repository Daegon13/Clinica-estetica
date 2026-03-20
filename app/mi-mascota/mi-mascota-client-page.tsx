"use client";

import * as React from "react";
import { BRAND } from "@/lib/data";
import type { PetProfile, Vaccine } from "@/lib/types";
import { loadPet, savePet } from "@/lib/storage";
import { formatDateLong, toWhatsAppLink, uid } from "@/lib/utils";
import { Container, Card, CardContent, CardHeader, Field, Input, Button, Badge } from "@/components/ui";
import { SectionHeading } from "@/components/section";

type HistoryItem = { id: string; dateISO: string; title: string; notes: string };
type PortalPageProps = { portalTitle?: string; portalDescription?: string };

function daysFromToday(days: number) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

function getDemoHistory(): HistoryItem[] {
  return [
    { id: "h_1", dateISO: daysFromToday(-16), title: "Limpieza facial profunda", notes: "Sesión con extracción, hidratación y plan domiciliario para sostener luminosidad y textura uniforme." },
    { id: "h_2", dateISO: daysFromToday(-45), title: "Peeling renovador", notes: "Buena tolerancia. Se indicó protección solar y seguimiento para evaluar próxima sesión." },
    { id: "h_3", dateISO: daysFromToday(-92), title: "Valoración estética inicial", notes: "Se definió plan facial progresivo con foco en manchas, textura y prevención del fotoenvejecimiento." }
  ];
}

function soon(dateISO?: string) { if (!dateISO) return false; const d = new Date(dateISO + "T00:00:00"); const now = new Date(); const diff = d.getTime() - now.getTime(); return diff >= 0 && diff <= 1000 * 60 * 60 * 24 * 30; }
function overdue(dateISO?: string) { if (!dateISO) return false; const d = new Date(dateISO + "T00:00:00"); const now = new Date(); return d.getTime() < now.getTime(); }

export default function PortalPacienteClientPage({ portalTitle = "Mi Perfil", portalDescription = "Una vista clara de tu perfil en Aura Estética con próximos cuidados, sesiones agendadas y seguimiento recomendado." }: PortalPageProps) {
  const [pet, setPet] = React.useState<PetProfile>(() => loadPet());
  const [history] = React.useState<HistoryItem[]>(getDemoHistory);
  const [vName, setVName] = React.useState("");
  const [vDate, setVDate] = React.useState("");
  const [vNext, setVNext] = React.useState("");

  function persist(next: PetProfile) { setPet(next); savePet(next); }
  function addTrackingItem() { if (!vName.trim() || !vDate) return; const v: Vaccine = { id: uid("v"), name: vName.trim(), dateISO: vDate, nextDueISO: vNext || undefined }; persist({ ...pet, vaccines: [v, ...pet.vaccines] }); setVName(""); setVDate(""); setVNext(""); }
  function removeTrackingItem(id: string) { persist({ ...pet, vaccines: pet.vaccines.filter(v => v.id !== id) }); }

  const overdueCount = pet.vaccines.filter(v => overdue(v.nextDueISO)).length;
  const dueSoonCount = pet.vaccines.filter(v => soon(v.nextDueISO)).length;
  const hasOverdue = overdueCount > 0;
  const nextItem = pet.vaccines.filter(v => !!v.nextDueISO && !overdue(v.nextDueISO)).slice().sort((a, b) => (a.nextDueISO ?? "").localeCompare(b.nextDueISO ?? ""))[0];
  const waText = `Hola. Quiero coordinar seguimiento para ${pet.petName}.\nPerfil: ${pet.species}.\nPróximas sesiones o cuidados: ${pet.vaccines.filter(v => soon(v.nextDueISO)).map(v => `${v.name} (${v.nextDueISO})`).join(", ") || "N/A"}`;

  return (
    <Container className="py-10">
      <SectionHeading eyebrow="Mi perfil" title={portalTitle} desc={portalDescription} />
      <div className="mt-6 grid gap-4 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <CardHeader className="flex items-center justify-between"><div className="grid"><div className="text-sm font-extrabold">Ficha de {pet.petName}</div><div className="text-sm text-black/60">Resumen de seguimiento y continuidad estética</div></div>{hasOverdue ? <Badge tone="bad">Hay seguimientos vencidos</Badge> : dueSoonCount > 0 ? <Badge tone="warn">Requiere seguimiento</Badge> : <Badge tone="good">Plan al día</Badge>}</CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-3 sm:grid-cols-4">
              <div className="rounded-2xl border border-black/10 bg-white p-4"><div className="text-xs font-semibold uppercase tracking-wide text-black/50">Estado general</div><div className="mt-1 text-sm font-extrabold">{hasOverdue ? "Con seguimientos a regularizar" : dueSoonCount > 0 ? "Con recordatorio cercano" : "Seguimiento al día"}</div></div>
              <div className="rounded-2xl border border-black/10 bg-white p-4"><div className="text-xs font-semibold uppercase tracking-wide text-black/50">Próxima sesión</div><div className="mt-1 text-sm font-extrabold">{nextItem?.name ?? "Sin pendientes"}</div><div className="text-xs text-black/55">{nextItem?.nextDueISO ? formatDateLong(nextItem.nextDueISO) : hasOverdue ? "Hay seguimientos vencidos para revisar" : "No hay sesiones cargadas"}</div></div>
              <div className="rounded-2xl border border-black/10 bg-white p-4"><div className="text-xs font-semibold uppercase tracking-wide text-black/50">Próximos cuidados</div><div className="mt-1 text-sm font-extrabold">{dueSoonCount}</div><div className="text-xs text-black/55">en los próximos 30 días</div></div>
              <div className="rounded-2xl border border-black/10 bg-white p-4"><div className="text-xs font-semibold uppercase tracking-wide text-black/50">Pendientes</div><div className="mt-1 text-sm font-extrabold">{overdueCount}</div><div className="text-xs text-black/55">requieren regularización</div></div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-white p-4"><div className="text-xs font-semibold uppercase tracking-wide text-black/50">Nombre</div><div className="mt-1 text-sm font-semibold">{pet.petName}</div></div>
              <div className="rounded-2xl border border-black/10 bg-white p-4"><div className="text-xs font-semibold uppercase tracking-wide text-black/50">Perfil</div><div className="mt-1 text-sm font-semibold">{pet.species}</div></div>
              <div className="rounded-2xl border border-black/10 bg-white p-4"><div className="text-xs font-semibold uppercase tracking-wide text-black/50">Plan</div><div className="mt-1 text-sm font-semibold">{pet.breed || "No informado"}</div></div>
              <div className="rounded-2xl border border-black/10 bg-white p-4"><div className="text-xs font-semibold uppercase tracking-wide text-black/50">Año de referencia</div><div className="mt-1 text-sm font-semibold">{pet.birthYear || "No informado"}</div></div>
              <div className="rounded-2xl border border-black/10 bg-white p-4"><div className="text-xs font-semibold uppercase tracking-wide text-black/50">Dato de seguimiento</div><div className="mt-1 text-sm font-semibold">{pet.weightKg ? `${pet.weightKg}` : "No informado"}</div></div>
              <div className="rounded-2xl border border-black/10 bg-white p-4"><div className="text-xs font-semibold uppercase tracking-wide text-black/50">Observaciones</div><div className="mt-1 text-sm font-semibold">{pet.allergies || "Sin observaciones reportadas"}</div></div>
            </div>
            <div className="flex flex-wrap gap-2"><Button onClick={() => window.open(toWhatsAppLink(BRAND.whatsapp, waText), "_blank")} className="bg-cyanSoft-400 text-graphite-950 hover:bg-cyanSoft-300">Solicitar seguimiento por WhatsApp</Button></div>
            <div className="grid gap-2 rounded-2xl border border-black/10 bg-white p-4"><div className="text-sm font-extrabold">Seguimiento y próximos cuidados</div><div className="grid gap-2">{pet.vaccines.length === 0 ? <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-4 text-sm text-black/60">Esta ficha todavía no tiene sesiones registradas.</div> : pet.vaccines.map(v => <div key={v.id} className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-black/5 px-3 py-2"><div className="grid"><div className="text-sm font-semibold">{v.name}</div><div className="text-xs text-black/55">Registro: {formatDateLong(v.dateISO)} {v.nextDueISO ? `· Próx.: ${formatDateLong(v.nextDueISO)}` : ""}</div></div><div className="flex items-center gap-2">{overdue(v.nextDueISO) ? <Badge tone="bad">Vencido</Badge> : soon(v.nextDueISO) ? <Badge tone="warn">Próximo</Badge> : v.nextDueISO ? <Badge tone="neutral">Vigente</Badge> : <Badge tone="neutral">Sin próximo</Badge>}<button className="rounded-xl border border-black/10 bg-white px-3 py-2 text-xs font-semibold hover:bg-black/5" onClick={() => removeTrackingItem(v.id)}>Quitar</button></div></div>)}</div><div className="mt-2 grid gap-3 sm:grid-cols-3"><Field label="Nombre del cuidado"><Input value={vName} onChange={e => setVName(e.target.value)} placeholder="Ej: Peeling de mantenimiento" /></Field><Field label="Fecha"><Input type="date" value={vDate} onChange={e => setVDate(e.target.value)} /></Field><Field label="Próximo seguimiento (opcional)"><Input type="date" value={vNext} onChange={e => setVNext(e.target.value)} /></Field></div><div className="flex flex-wrap gap-2"><Button onClick={addTrackingItem} variant="outline">Agregar seguimiento</Button></div></div>
          </CardContent>
        </Card>
        <Card className="lg:col-span-2"><CardHeader><div className="text-sm font-extrabold">Historial estético</div><div className="text-sm text-black/60">Últimas sesiones y observaciones registradas</div></CardHeader><CardContent className="grid gap-3">{history.map(h => <div key={h.id} className="grid gap-1 rounded-2xl border border-black/10 bg-white p-4"><div className="flex items-start justify-between gap-3"><div className="text-sm font-extrabold">{h.title}</div><Badge tone="neutral">{h.dateISO}</Badge></div><div className="text-xs text-black/55">{formatDateLong(h.dateISO)}</div><p className="text-sm text-black/70">{h.notes}</p></div>)}<div className="text-xs text-black/50">Resumen breve de sesiones y recomendaciones para tu continuidad estética.</div></CardContent></Card>
      </div>
    </Container>
  );
}
