import type { Metadata } from "next";

import { BRAND, HERO, SEO, SERVICES, STAFF, TESTIMONIALS, FAQS } from "@/lib/data";
import { buildPageMetadata } from "@/lib/seo";
import { Container, Card, CardContent, LinkButton, Badge } from "@/components/ui";
import { SectionHeading } from "@/components/section";
import { LeadCTA } from "@/components/LeadCTA";
import { MediaCard } from "@/components/brand/media-card";

export const metadata: Metadata = buildPageMetadata({
  title: SEO.homeTitle,
  description: SEO.homeDescription,
  path: "/"
});

const featuredCards = [
  {
    title: "Valoración profesional",
    desc: "Analizamos tu piel, tus objetivos y tu contexto para recomendar tratamientos con criterio y naturalidad."
  },
  {
    title: "Experiencia luminosa",
    desc: "Una clínica cuidada en cada detalle: luz suave, tiempos claros y una atención que transmite confianza."
  },
  {
    title: "Seguimiento real",
    desc: "Indicaciones, control de evolución y acompañamiento para sostener resultados con calma y seguridad."
  }
];

const processSteps = [
  {
    step: "01",
    title: "Valoración inicial",
    desc: "Revisamos antecedentes, expectativas y estado de la piel para indicar opciones acordes a tu caso, sin apuro ni sobreindicación."
  },
  {
    step: "02",
    title: "Tratamiento personalizado",
    desc: "Definimos un plan facial o corporal con objetivos claros, tiempos estimados y cuidados previos para que sepas qué esperar."
  },
  {
    step: "03",
    title: "Seguimiento",
    desc: "Acompañamos cada etapa con indicaciones posteriores, control de evolución y ajustes responsables cuando el tratamiento lo requiere."
  }
];

const trustSignals = [
  {
    title: "Atención personalizada",
    desc: "Cada consulta parte de una valoración real para adaptar el tratamiento al objetivo, tiempos y contexto de cada paciente."
  },
  {
    title: "Equipamiento moderno",
    desc: "Trabajamos con aparatología actual y protocolos actualizados para sostener una práctica ordenada y consistente."
  },
  {
    title: "Higiene y cuidado",
    desc: "Cabinas preparadas entre turnos, insumos descartables cuando corresponde y una experiencia prolija en cada detalle."
  },
  {
    title: "Enfoque profesional",
    desc: "Indicamos lo necesario, explicamos límites y priorizamos resultados armónicos antes que promesas grandilocuentes."
  }
];

const gallery = [
  {
    src: "/brand/aesthetic/treatment-facial.svg",
    alt: "Cabina facial luminosa para tratamiento estético premium",
    title: "Faciales y rejuvenecimiento",
    description: "Protocolos para glow, textura, hidratación y renovación de la piel.",
    aspectClassName: "aspect-[5/4]"
  },
  {
    src: "/brand/aesthetic/treatment-body.svg",
    alt: "Espacio editorial para tratamiento corporal premium",
    title: "Corporales y contorno",
    description: "Sesiones enfocadas en bienestar, definición y una experiencia confortable.",
    aspectClassName: "aspect-[5/4]"
  },
  {
    src: "/brand/aesthetic/clinic-interior.svg",
    alt: "Interior premium de clínica estética con tonos claros",
    title: "Clínica y espacios",
    description: "Ambientes serenos, limpios y coherentes con una atención estética de nivel.",
    aspectClassName: "aspect-[5/4]"
  }
];

const resultHighlights = [
  {
    title: "Piel más uniforme",
    timeframe: "Protocolos de 4 a 8 semanas",
    desc: "Ideal para limpiezas profundas, peelings y planes de renovación cuando se busca una mejora visible pero gradual.",
    note: "La evolución suele observarse mejor con la misma luz, el mismo ángulo y una rutina indicada entre sesiones."
  },
  {
    title: "Rejuvenecimiento sutil",
    timeframe: "Controles según indicación profesional",
    desc: "Comparativas pensadas para mostrar descanso, definición y frescura, sin perder expresión ni identidad.",
    note: "No todos los cambios son inmediatos: en muchos casos la naturalidad se construye por etapas."
  },
  {
    title: "Contorno y textura corporal",
    timeframe: "Planes combinados y seguimiento",
    desc: "Presentamos avances realistas para acompañar hábitos, aparatología y sesiones adaptadas a cada objetivo.",
    note: "Los resultados dependen del caso, la constancia y la indicación recibida en consulta."
  }
];

const testimonialContext = [
  {
    label: "reseñas verificadas",
    value: "WhatsApp y consulta"
  },
  {
    label: "tono editorial",
    value: "breve y sobrio"
  },
  {
    label: "microcopy prudente",
    value: "sin promesas exageradas"
  }
];

export default function HomePage() {
  return (
    <div>
      <div className="bg-gradient-to-b from-white via-[#fff8fb] to-warm-100 dark:from-graphite-950 dark:via-graphite-950 dark:to-graphite-900">
        <Container className="grid gap-10 py-10 sm:py-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="grid gap-5">
            <Badge className="w-fit" tone="neutral">{HERO.badge}</Badge>
            <h1 className="max-w-2xl text-3xl font-black tracking-tight sm:text-5xl">{HERO.title}</h1>
            <p className="max-w-xl text-sm text-black/60 dark:text-white/70 sm:text-lg">{HERO.description}</p>
            <ul className="grid gap-1 text-sm text-black/65 dark:text-white/70">
              {HERO.bullets.map((bullet) => <li key={bullet}>• {bullet}</li>)}
            </ul>
            <div className="flex flex-wrap gap-2">
              <LinkButton href="/agenda" className="bg-cyanSoft-400 text-graphite-950 hover:bg-cyanSoft-300">Agendá tu valoración</LinkButton>
              <LeadCTA interest="general" label="Resolver dudas por WhatsApp" variant="outline" />
              <LinkButton href="/contacto" variant="outline">Quiero que me contacten</LinkButton>
            </div>
            <p className="text-xs text-black/50 dark:text-white/55">Si todavía no sabés qué tratamiento elegir, empezá por una valoración y te orientamos sin vueltas.</p>
            <div className="grid gap-3 pt-2 sm:grid-cols-3">
              <div className="rounded-[24px] border border-black/10 bg-white/70 px-4 py-3 shadow-soft">
                <div className="text-[11px] font-black uppercase tracking-[0.18em] text-black/40">Tratamientos</div>
                <div className="mt-1 text-lg font-black text-graphite-950">Faciales y corporales</div>
              </div>
              <div className="rounded-[24px] border border-black/10 bg-white/70 px-4 py-3 shadow-soft">
                <div className="text-[11px] font-black uppercase tracking-[0.18em] text-black/40">Atención</div>
                <div className="mt-1 text-lg font-black text-graphite-950">WhatsApp y seguimiento</div>
              </div>
              <div className="rounded-[24px] border border-black/10 bg-white/70 px-4 py-3 shadow-soft">
                <div className="text-[11px] font-black uppercase tracking-[0.18em] text-black/40">Ubicación</div>
                <div className="mt-1 text-lg font-black text-graphite-950">{BRAND.city}</div>
              </div>
            </div>
            <div className="text-xs text-black/45 dark:text-white/55">Contacto: {BRAND.phone} · {BRAND.address} · {BRAND.hours}</div>
          </div>

          <div className="grid gap-4 lg:pl-4">
            <MediaCard
              src="/brand/aesthetic/hero-clinic.svg"
              alt="Clínica estética premium con ambientación luminosa y calma visual"
              eyebrow="Aura Estética"
              title="Una experiencia de belleza serena, precisa y contemporánea"
              description="Tratamientos personalizados, interiores luminosos y un recorrido pensado para que te sientas segura desde el primer contacto."
              priority
              sizes="(min-width: 1024px) 46vw, (min-width: 640px) 92vw, 100vw"
              aspectClassName="aspect-[16/11]"
              overlay="dark"
            />

            <Card className="overflow-hidden border border-black/10 bg-graphite-950 text-white shadow-[0_25px_70px_rgba(15,23,42,0.18)]">
              <div className="grid gap-4 p-6 sm:grid-cols-[1fr_auto] sm:items-end">
                <div>
                  <div className="text-sm font-semibold text-white/65">Promesa de marca</div>
                  <div className="mt-2 text-2xl font-black leading-tight">“{HERO.quickSummary}”</div>
                  <div className="mt-3 max-w-xl text-sm text-white/70">{HERO.quickSummaryFoot}</div>
                </div>
                <div className="grid gap-2 text-xs text-white/60 sm:text-right">
                  <span>• Valoración con criterio profesional</span>
                  <span>• Resultados armónicos y naturales</span>
                  <span>• Atención clara de inicio a seguimiento</span>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </div>

      <Container className="py-10 sm:py-14">
        <SectionHeading eyebrow="Clínica · tratamientos · experiencia" title="Una identidad visual sobria, luminosa y coherente en cada sección" desc="El sitio presenta una narrativa más editorial para tratamientos, espacios e imagen de marca, manteniendo un layout preparado para fotografía final sin hablar de la maqueta." />
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {gallery.map((item) => (
            <MediaCard
              key={item.title}
              src={item.src}
              alt={item.alt}
              title={item.title}
              description={item.description}
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 48vw, 100vw"
              aspectClassName={item.aspectClassName}
            />
          ))}
        </div>
      </Container>

      <Container className="py-10 sm:py-14">
        <SectionHeading eyebrow="Tratamientos destacados" title="Una selección breve, clara y pensada para convertir mejor" desc="Priorizamos los tratamientos más consultados para que cada opción se entienda rápido, se vea premium y tenga un siguiente paso claro." />
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge className="bg-white text-graphite-950">Faciales</Badge>
          <Badge className="bg-white text-graphite-950">Láser</Badge>
          <Badge className="bg-white text-graphite-950">Corporales</Badge>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <Card key={`${service.id}-${service.name}`} className="overflow-hidden border border-black/10 bg-white/95">
              <div className="relative overflow-hidden border-b border-black/5 bg-gradient-to-br from-[#fff5f9] via-white to-[#eef8fb] p-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,191,209,0.28),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(174,221,235,0.32),transparent_30%)]" />
                <div className="relative flex items-center justify-between gap-3">
                  <Badge className="bg-white/80 text-graphite-950 shadow-sm" tone="neutral">{service.category}</Badge>
                  <span className="rounded-full border border-white/70 bg-white/70 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-black/45">{index < 3 ? "Más pedido" : "Tratamiento"}</span>
                </div>
                <div className="relative mt-8 rounded-[24px] border border-white/70 bg-white/78 p-4 backdrop-blur">
                  <div className="text-lg font-black tracking-tight text-graphite-950">{service.name}</div>
                  <p className="mt-2 text-sm leading-6 text-black/65">{service.name === "Valoración estética" ? "Empezá con un plan claro y personalizado." : service.name === "Depilación láser" ? "Más comodidad y menos vello en tu rutina." : service.name === "Limpieza facial profunda" ? "Glow inmediato y piel visiblemente más fresca." : service.name === "Peelings" ? "Renovación visible con protocolo a medida." : service.name === "Rejuvenecimiento facial" ? "Frescura, firmeza y aspecto descansado." : service.name === "Armonización facial" ? "Resultados naturales que respetan tu rostro." : "Contorno y bienestar en un plan adaptado a vos."}</p>
                </div>
              </div>
              <CardContent className="grid gap-3">
                <Badge className="w-fit" tone="neutral">Desde {service.priceFrom}</Badge>
                <p className="text-sm text-black/60 dark:text-white/70">{service.desc}</p>
                <div className="grid grid-cols-2 gap-3 text-xs text-black/50 dark:text-white/55">
                  <div className="rounded-2xl bg-[#fff7fa] px-3 py-2 dark:bg-white/5">Sesión estimada: {service.durationMin} min.</div>
                  <div className="rounded-2xl bg-[#f4fbfd] px-3 py-2 dark:bg-white/5">Preparación: {service.bufferMin} min.</div>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  <LinkButton href="/agenda" size="sm" className="bg-cyanSoft-400 text-graphite-950 hover:bg-cyanSoft-300">Agendá este tratamiento</LinkButton>
                  <LeadCTA interest="servicios" label="Consultar" variant="outline" className="!h-9" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>

      <Container className="py-6 sm:py-8">
        <div className="overflow-hidden rounded-[36px] border border-black/5 bg-[linear-gradient(180deg,#fffdfd_0%,#fff8fb_48%,#f7fbfd_100%)] shadow-soft">
          <div className="grid gap-8 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Resultados"
                title="Evolución visible, contada con sensibilidad clínica y una estética sobria"
                desc="Reordenamos la sección para que la prueba visual se vea más creíble: comparativas limpias, contexto de tratamiento y notas prudentes sobre tiempos y variabilidad."
              />
              <div className="mt-6 grid gap-3">
                <div className="rounded-[28px] border border-black/8 bg-white/90 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge className="bg-[#f5eef2] text-graphite-950">Antes y después</Badge>
                    <Badge className="bg-[#eef8fb] text-graphite-950">Mismo ángulo · luz similar</Badge>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-black/65">
                    Las comparativas acompañan la decisión cuando muestran evolución real y bien documentada. Por eso proponemos imágenes consistentes, sin edición invasiva y con una lectura clara del objetivo tratado.
                  </p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[24px] border border-black/8 bg-[#fcf5f8] p-4">
                      <div className="text-[11px] font-black uppercase tracking-[0.16em] text-black/40">Qué comunicar</div>
                      <ul className="mt-3 grid gap-2 text-sm text-black/65">
                        <li>• Mejoras de textura, luminosidad o definición.</li>
                        <li>• Tiempos orientativos y necesidad de seguimiento.</li>
                        <li>• Objetivos realistas según valoración inicial.</li>
                      </ul>
                    </div>
                    <div className="rounded-[24px] border border-black/8 bg-[#f4fbfd] p-4">
                      <div className="text-[11px] font-black uppercase tracking-[0.16em] text-black/40">Microcopy sugerido</div>
                      <p className="mt-3 text-sm leading-6 text-black/65">
                        “Cada plan se indica de forma personalizada. La evolución puede variar según tu piel, tus hábitos y el tratamiento seleccionado.”
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {resultHighlights.map((item) => (
                    <Card key={item.title} className="border border-black/8 bg-white/92 shadow-[0_16px_36px_rgba(15,23,42,0.05)]">
                      <CardContent className="grid gap-3 p-5">
                        <div>
                          <div className="text-[11px] font-black uppercase tracking-[0.16em] text-black/40">{item.timeframe}</div>
                          <div className="mt-2 text-lg font-extrabold tracking-tight text-graphite-950">{item.title}</div>
                        </div>
                        <p className="text-sm leading-6 text-black/65">{item.desc}</p>
                        <p className="text-xs leading-5 text-black/48">{item.note}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {resultHighlights.slice(0, 2).map((item, index) => (
                <div key={item.title} className="rounded-[28px] border border-black/8 bg-white/88 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-5">
                  <div className="grid gap-4 md:grid-cols-[1fr_1fr]">
                    <div className="relative overflow-hidden rounded-[24px] border border-black/8 bg-[#f3e5ec] aspect-[4/5]">
                      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.32),rgba(229,205,216,0.92))]" />
                      <span className="absolute left-3 top-3 rounded-full bg-white/88 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-black/45">Antes</span>
                      <div className="absolute inset-x-3 bottom-3 rounded-[18px] border border-white/60 bg-white/55 p-3 backdrop-blur">
                        <div className="text-[11px] font-black uppercase tracking-[0.14em] text-black/40">Registro inicial</div>
                        <p className="mt-1 text-xs leading-5 text-black/60">Condición previa documentada para evaluar evolución con el mismo encuadre.</p>
                      </div>
                    </div>
                    <div className="relative overflow-hidden rounded-[24px] border border-black/8 bg-[#e7f2f7] aspect-[4/5]">
                      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.2),rgba(194,228,236,0.88))]" />
                      <span className="absolute left-3 top-3 rounded-full bg-white/88 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-black/45">Después</span>
                      <div className="absolute inset-x-3 bottom-3 rounded-[18px] border border-white/60 bg-white/55 p-3 backdrop-blur">
                        <div className="text-[11px] font-black uppercase tracking-[0.14em] text-black/40">Seguimiento</div>
                        <p className="mt-1 text-xs leading-5 text-black/60">Mejora comunicada sin exagerar: se prioriza textura, descanso y naturalidad.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 grid gap-3 lg:grid-cols-[1fr_auto] lg:items-end">
                    <div>
                      <div className="text-[11px] font-black uppercase tracking-[0.16em] text-black/40">Caso ejemplo {index + 1}</div>
                      <div className="mt-1 text-lg font-extrabold text-graphite-950">{item.title}</div>
                      <p className="mt-2 text-sm leading-6 text-black/65">{item.desc}</p>
                    </div>
                    <div className="rounded-[22px] border border-black/8 bg-[#fffafb] px-4 py-3 text-sm text-black/55 lg:max-w-[220px]">
                      <span className="font-semibold text-black/70">Nota profesional:</span> {item.note}
                    </div>
                  </div>
                </div>
              ))}
              <Card className="border border-black/8 bg-graphite-950 text-white shadow-[0_28px_70px_rgba(15,23,42,0.18)]">
                <CardContent className="grid gap-3 p-6">
                  <div className="text-xs font-black uppercase tracking-[0.18em] text-white/45">Prueba visual responsable</div>
                  <h3 className="text-2xl font-black tracking-tight">Menos efecto publicitario, más contexto para decidir con confianza.</h3>
                  <p className="text-sm leading-6 text-white/72">Las imágenes acompañan la credibilidad cuando explican qué se trató, cuánto tiempo pasó y qué cuidados formaron parte del proceso.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Container>

      <Container className="py-10 sm:py-12">
        <div className="overflow-hidden rounded-[36px] border border-black/8 bg-[linear-gradient(180deg,#fffdfd_0%,#fff7fb_55%,#f6fbfd_100%)] shadow-soft">
          <div className="grid gap-8 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <div>
              <SectionHeading eyebrow="Cómo trabajamos" title="Metodología clara para decidir con tranquilidad y tratar con criterio" desc="Ordenamos la experiencia en tres etapas para que el sitio se perciba como una clínica real: evaluación, indicación personalizada y seguimiento responsable." />
              <div className="mt-8 grid gap-4">
                {processSteps.map((item) => (
                  <div key={item.step} className="grid gap-4 rounded-[28px] border border-black/8 bg-white/88 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:grid-cols-[auto_1fr] sm:items-start">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-[#f5f0f3] text-sm font-black tracking-[0.16em] text-black/55">
                      {item.step}
                    </div>
                    <div>
                      <div className="text-lg font-extrabold text-graphite-950">{item.title}</div>
                      <p className="mt-2 text-sm leading-6 text-black/65">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <Card className="border border-black/8 bg-graphite-950 text-white shadow-[0_28px_70px_rgba(15,23,42,0.18)]">
                <CardContent className="grid gap-4 p-6">
                  <div className="text-xs font-black uppercase tracking-[0.18em] text-white/45">Señales de confianza</div>
                  <h3 className="text-2xl font-black tracking-tight">Un entorno cuidado, indicaciones claras y una atención que transmite seriedad.</h3>
                  <p className="text-sm leading-6 text-white/72">La confianza también se construye mostrando cómo se trabaja: con evaluación inicial, criterios de higiene, aparatología adecuada y acompañamiento posterior.</p>
                </CardContent>
              </Card>
              <div className="grid gap-4 sm:grid-cols-2">
                {trustSignals.map((signal) => (
                  <Card key={signal.title} className="border border-black/8 bg-white/92">
                    <CardContent className="grid gap-2">
                      <div className="text-sm font-extrabold text-graphite-950">{signal.title}</div>
                      <p className="text-sm leading-6 text-black/65">{signal.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container className="py-10 sm:py-12">
        <SectionHeading eyebrow="Equipo profesional" title="Un equipo interdisciplinario que suma criterio clínico, técnica y seguimiento cercano" desc="Presentamos perfiles verosímiles, roles claros y una voz profesional para que la clínica se sienta consistente desde la primera visita al sitio." />
        <div className="mt-8 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <MediaCard
            src="/brand/aesthetic/team-portrait.svg"
            alt="Retrato editorial del equipo profesional de Aura Estética"
            eyebrow="Equipo Aura Estética"
            title="Profesionales enfocados en diagnóstico, técnica y cuidado del detalle"
            description="Una presencia sobria para acompañar una práctica estética ordenada, cercana y centrada en resultados naturales."
            sizes="(min-width: 1024px) 30vw, 100vw"
            className="h-full"
            aspectClassName="aspect-[4/5]"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {STAFF.map((person) => (
              <Card key={person.id} className="border border-black/10 bg-white/95 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
                <CardContent className="grid gap-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-sm font-extrabold">{person.name}</div>
                      <div className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-black/45 dark:text-white/50">{person.role}</div>
                    </div>
                    <span className="rounded-full border border-black/10 bg-[#f7f1f5] px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-black/45">
                      Equipo
                    </span>
                  </div>
                  <p className="text-sm leading-6 text-black/65 dark:text-white/70">{person.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>

      <Container className="py-10 sm:py-12">
        <div className="grid gap-6 rounded-[36px] border border-black/8 bg-white p-5 shadow-soft sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="Testimonios" title="Prueba social que acompaña la decisión sin recargar la experiencia" desc="Reescribimos la sección para que las reseñas suenen más cercanas a una clínica estética real: foco en claridad, trato y resultados medidos." />
            <div className="mt-6 grid gap-3">
              {testimonialContext.map((item) => (
                <div key={item.label} className="flex items-center justify-between rounded-[22px] border border-black/8 bg-[linear-gradient(90deg,#fff8fb,#f6fbfd)] px-4 py-3 text-sm">
                  <span className="font-semibold uppercase tracking-[0.12em] text-black/40">{item.label}</span>
                  <span className="text-black/65">{item.value}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-5 text-black/45">
              Las reseñas refuerzan percepción de confianza y acompañamiento. Evitamos frases de “resultado garantizado” o cambios desmedidos para cuidar el tono premium y profesional.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {TESTIMONIALS.map((item, index) => (
              <Card key={item.name} className="border border-black/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(249,251,252,0.96))] shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
                <CardContent className="grid h-full gap-4 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <Badge className="bg-[#f5eef2] text-graphite-950">Paciente</Badge>
                    <span className="text-[11px] font-black uppercase tracking-[0.16em] text-black/35">0{index + 1}</span>
                  </div>
                  <p className="text-sm leading-6 text-black/72">“{item.text}”</p>
                  <div className="mt-auto border-t border-black/6 pt-3">
                    <div className="text-sm font-extrabold text-graphite-950">{item.name}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.12em] text-black/42">Valoración y seguimiento</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>

      <Container className="py-10 sm:py-12">
        <SectionHeading eyebrow="FAQ" title="Dudas frecuentes antes de reservar" desc="Respondemos objeciones habituales para que puedas decidir con más claridad, incluso si recién nos conocés por Instagram." />
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-[24px] border border-black/10 bg-white/80 px-4 py-3 text-sm text-black/62 shadow-soft dark:border-white/10 dark:bg-white/5 dark:text-white/70">
          <p>¿Preferís resolverlo rápido? Te orientamos según tu objetivo, tiempos y tipo de tratamiento.</p>
          <div className="flex flex-wrap gap-2">
            <LeadCTA interest="general" label="Quiero resolver mis dudas" variant="outline" />
            <LinkButton href="/agenda">Ver agenda disponible</LinkButton>
          </div>
        </div>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {FAQS.slice(0, 6).map((item) => (
            <Card key={item.q} className="border border-black/10 bg-white/92">
              <CardContent className="grid gap-2">
                <div className="text-sm font-extrabold">{item.q}</div>
                <p className="text-sm text-black/65 dark:text-white/70">{item.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>

      <Container className="py-10 sm:py-14">
        <div className="grid gap-4 rounded-[32px] bg-graphite-950 p-6 text-white shadow-soft sm:p-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-white/50">Reservá tu experiencia</div>
            <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-4xl">Tu primera consulta puede ser el comienzo de un cambio sutil, cuidado y bien acompañado.</h2>
            <p className="mt-3 text-sm text-white/75 sm:text-base">Coordiná tu valoración, conocé los tratamientos indicados para vos y avanzá con información clara sobre sesiones, tiempos y cuidados.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <LinkButton href="/agenda" className="bg-cyanSoft-400 text-graphite-950 hover:bg-cyanSoft-300">Agendá tu valoración</LinkButton>
              <LeadCTA interest="general" label="Hablá por WhatsApp" variant="outline" />
              <LinkButton href="/ubicacion" variant="outline">Contacto, ubicación y horarios</LinkButton>
            </div>
          </div>
          <MediaCard
            src="/brand/aesthetic/contact-lounge.svg"
            alt="Recepción luminosa y serena de clínica estética premium"
            eyebrow="Recepción y contacto"
            title="Un entorno cuidado desde la llegada"
            description="Detalles visuales sobrios para acompañar la experiencia de reserva y bienvenida en clínica."
            sizes="(min-width: 1024px) 34vw, 100vw"
            className="border-white/10 bg-white/5"
            overlay="light"
          />
        </div>
      </Container>

      <Container className="pb-10 sm:pb-14">
        <div className="grid gap-4 rounded-[32px] border border-black/5 bg-white p-5 shadow-soft dark:border-white/10 dark:bg-graphite-900 md:grid-cols-3">
          {featuredCards.map((item) => (
            <div key={item.title} className="rounded-[24px] bg-gradient-to-br from-[#fff8fb] to-[#f4fbfd] p-4 dark:bg-white/5">
              <div className="text-sm font-extrabold">{item.title}</div>
              <p className="mt-2 text-sm text-black/65 dark:text-white/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
