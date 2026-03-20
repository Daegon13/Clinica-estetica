"use client";

import * as React from "react";
import type { PetSpecies, TriageCase, TriagePriority } from "@/lib/types";
import { getSeedPreview, loadTriage, saveTriage } from "@/lib/storage";
import { uid } from "@/lib/utils";
import { Container, Card, CardContent, CardHeader, Field, Input, Select, Textarea, Button, Badge } from "@/components/ui";
import { SectionHeading } from "@/components/section";
import { LeadCTA } from "@/components/LeadCTA";

const SYMPTOMS = [
  { id: "irritacion", label: "Irritación o sensibilidad" },
  { id: "manchas", label: "Manchas o tono desigual" },
  { id: "acne", label: "Acné o marcas" },
  { id: "flacidez", label: "Flacidez o pérdida de firmeza" },
  { id: "textura", label: "Textura irregular" },
  { id: "vello", label: "Vello no deseado" },
  { id: "poros", label: "Poros visibles" },
  { id: "arrugas", label: "Líneas o arrugas" }
];

const SEED_CASES = getSeedPreview().triage;

function assess(symptoms: string[]): { priority: TriagePriority; action: string } {
  if (symptoms.some((s) => ["irritacion", "acne", "manchas"].includes(s))) {
    return { priority: "media", action: "Te recomendamos una valoración en los próximos días para definir el protocolo correcto y evitar productos o prácticas que puedan irritar más la zona." };
  }
  return { priority: "baja", action: "Tu consulta parece ideal para valoración programada. Reservá tu turno y te orientamos con un plan personalizado según tu objetivo estético." };
}

function getVisibleCases(items: TriageCase[]) {
  return items.length > 0 ? items : SEED_CASES;
}

export default function UrgenciasPage() {
  const [patientName, setPatientName] = React.useState("");
  const [species, setSpecies] = React.useState<PetSpecies>("Adulto");
  const [ownerName, setOwnerName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [selected, setSelected] = React.useState<string[]>([]);
  const [freeText, setFreeText] = React.useState("");
  const [cases, setCases] = React.useState<TriageCase[]>(() => getVisibleCases(SEED_CASES));
  const [created, setCreated] = React.useState<TriageCase | null>(null);

  React.useEffect(() => {
    setCases(getVisibleCases(loadTriage()));
  }, []);

  function when(iso: string) {
    const diffMin = Math.max(1, Math.round((Date.now() - new Date(iso).getTime()) / 60000));
    if (diffMin < 60) return `Hace ${diffMin} min`;
    const diffH = Math.round(diffMin / 60);
    if (diffH < 24) return `Hace ${diffH} h`;
    return `Hace ${Math.round(diffH / 24)} d`;
  }

  const recentCases = React.useMemo(() => cases.slice(0, 5), [cases]);
  const snapshot = React.useMemo(() => ({ alta: recentCases.filter(c => c.priority === "alta").length, media: recentCases.filter(c => c.priority === "media").length, baja: recentCases.filter(c => c.priority === "baja").length }), [recentCases]);

  function toggle(id: string) { setSelected(prev => (prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])); }
  function canSubmit() { return patientName.trim() && ownerName.trim() && phone.replace(/\D/g, "").length >= 8 && selected.length > 0; }

  function submit() {
    if (!canSubmit()) return;
    const { priority, action } = assess(selected);
    const item: TriageCase = { id: uid("tr"), createdAt: new Date().toISOString(), petName: patientName.trim(), species, ownerName: ownerName.trim(), phone: phone.trim(), symptoms: selected, freeText: freeText.trim() || undefined, priority, recommendedAction: action };
    const next = [item, ...cases];
    setCases(next);
    saveTriage(next);
    setCreated(item);
  }

  function tone(p: TriagePriority) { if (p === "alta") return "bad"; if (p === "media") return "warn"; return "good"; }
  function speciesAccent(currentSpecies: PetSpecies) { if (currentSpecies === "Infantil") return "Consulta joven"; if (currentSpecies === "Adulto") return "Consulta adulta"; return "Otro perfil"; }

  return (
    <Container className="py-10">
      <SectionHeading eyebrow="Orientación inicial" title="Describí tu consulta estética y te orientamos con el mejor siguiente paso" desc="Reutilizamos la estructura de orientación para convertirla en una guía simple que ayuda a reservar una valoración con más claridad." />

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <Card><CardContent className="grid gap-1 p-5"><div className="text-xs font-semibold uppercase tracking-[0.2em] text-black/45">Respuesta rápida</div><div className="text-2xl font-black">Orientación en menos de 3 min</div><p className="text-sm text-black/65">Ideal para quienes llegan con dudas desde Instagram o WhatsApp y necesitan saber por dónde empezar.</p></CardContent></Card>
        <Card><CardContent className="grid gap-2 p-5"><div className="text-xs font-semibold uppercase tracking-[0.2em] text-black/45">Consultas visibles</div><div className="flex flex-wrap gap-2 text-xs"><Badge tone="bad">Alta: {snapshot.alta}</Badge><Badge tone="warn">Media: {snapshot.media}</Badge><Badge tone="good">Baja: {snapshot.baja}</Badge></div><p className="text-sm text-black/65">Mostramos ejemplos para sostener una demo más realista y comercial.</p></CardContent></Card>
        <Card><CardContent className="grid gap-1 p-5"><div className="text-xs font-semibold uppercase tracking-[0.2em] text-black/45">Aclaración</div><div className="text-base font-bold">Esta guía orienta, pero no reemplaza una valoración profesional.</div><p className="text-sm text-black/65">Si tenés una reacción fuerte o una situación médica, la indicación es consultar atención presencial adecuada.</p></CardContent></Card>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <CardHeader className="flex items-center justify-between"><div className="grid"><div className="text-sm font-extrabold">Formulario de orientación</div><div className="text-sm text-black/60">Marcá tus principales inquietudes y agregá contexto para recibir una recomendación inicial.</div></div><Badge tone="neutral">2–3 min</Badge></CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <Field label="Nombre"><Input value={patientName} onChange={e => setPatientName(e.target.value)} placeholder="Ej: Carolina" /></Field>
              <Field label="Perfil"><Select value={species} onChange={e => setSpecies(e.target.value as PetSpecies)}><option>Adulto</option><option>Infantil</option><option>Otro</option></Select></Field>
              <Field label="Tu nombre"><Input value={ownerName} onChange={e => setOwnerName(e.target.value)} placeholder="Ej: Lucía" /></Field>
              <Field label="WhatsApp / Teléfono"><Input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Ej: 09 123 456" /></Field>
            </div>
            <div className="grid gap-2"><div className="text-sm font-extrabold">Objetivo o consulta principal</div><div className="grid gap-2 sm:grid-cols-2">{SYMPTOMS.map(s => { const on = selected.includes(s.id); return <button key={s.id} type="button" onClick={() => toggle(s.id)} className={["rounded-2xl border p-4 text-left transition", on ? "border-cyanSoft-400/70 bg-cyanSoft-50" : "border-black/10 bg-white hover:bg-black/5"].join(" ")}><div className="text-sm font-bold">{s.label}</div><div className="text-xs text-black/50">{on ? "Seleccionado" : "Tocar para seleccionar"}</div></button>; })}</div></div>
            <Field label="Detalle (opcional)" hint="Contanos qué te gustaría mejorar o si ya te hiciste tratamientos antes."><Textarea value={freeText} onChange={e => setFreeText(e.target.value)} placeholder="Ej: quiero tratar manchas post acné y mejorar luminosidad..." /></Field>
            <div className="flex flex-wrap gap-2"><Button onClick={submit} disabled={!canSubmit()} className="bg-cyanSoft-400 text-graphite-950 hover:bg-cyanSoft-300">Ver recomendación</Button><LeadCTA interest="general" label="Escribir por WhatsApp" variant="outline" /></div>
            {created ? <Card className="bg-white ring-1 ring-black/5"><CardContent className="grid gap-2"><div className="flex items-center justify-between gap-3"><div className="text-sm font-extrabold">Resultado</div><Badge tone={tone(created.priority)}>{created.priority.toUpperCase()}</Badge></div><p className="text-sm text-black/70">{created.recommendedAction}</p></CardContent></Card> : null}
          </CardContent>
        </Card>
        <Card className="lg:col-span-2"><CardHeader className="grid gap-2"><div className="flex items-center justify-between gap-3"><div><div className="text-sm font-extrabold">Consultas recientes</div><div className="text-sm text-black/60">Ejemplos visibles con prioridad y acción sugerida.</div></div><Badge tone="neutral">{recentCases.length} visibles</Badge></div></CardHeader><CardContent className="grid gap-3">{recentCases.map(c => <div key={c.id} className="grid gap-2 rounded-2xl border border-black/10 bg-white p-4 shadow-[0_8px_30px_rgba(15,23,42,0.04)]"><div className="flex items-start justify-between gap-3"><div><div className="text-sm font-extrabold">{c.petName}</div><div className="text-xs text-black/55">{speciesAccent(c.species)} · {c.ownerName} · {when(c.createdAt)}</div></div><Badge tone={tone(c.priority)}>{c.priority.toUpperCase()}</Badge></div><div className="text-xs font-medium text-black/55">{c.symptoms.slice(0, 3).map(id => SYMPTOMS.find(s => s.id === id)?.label ?? id).join(" · ")}</div>{c.freeText ? <div className="text-sm text-black/70">{c.freeText}</div> : null}<div className="rounded-xl bg-black/[0.03] px-3 py-2 text-xs text-black/70">{c.recommendedAction}</div></div>)}</CardContent></Card>
      </div>
    </Container>
  );
}
