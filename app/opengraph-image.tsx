import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Aura Estética";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background: "linear-gradient(135deg, #fff7fb 0%, #ffffff 48%, #eefbff 100%)",
          color: "#0f172a",
          padding: 64,
          fontFamily: "sans-serif"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", border: "1px solid rgba(15,23,42,0.08)", borderRadius: 32, padding: 48, background: "rgba(255,255,255,0.82)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ fontSize: 28, letterSpacing: 6, textTransform: "uppercase", color: "rgba(15,23,42,0.55)" }}>Aura Estética</div>
            <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05, maxWidth: 900 }}>Clínica estética premium con valoración, tratamientos y contacto directo.</div>
            <div style={{ fontSize: 30, lineHeight: 1.35, maxWidth: 840, color: "rgba(15,23,42,0.68)" }}>Depilación láser, peelings, rejuvenecimiento facial, armonización y una experiencia creada para convertir desde Instagram y WhatsApp.</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", gap: 14 }}>
              {['Valoración', 'WhatsApp', 'Tratamientos premium'].map((item) => <div key={item} style={{ fontSize: 24, padding: '12px 20px', borderRadius: 999, background: '#0f172a', color: 'white' }}>{item}</div>)}
            </div>
            <div style={{ fontSize: 32, fontWeight: 700 }}>Montevideo</div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
