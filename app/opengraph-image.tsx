import { ImageResponse } from "next/og";
import { BRAND } from "@/lib/data";

export const runtime = "edge";
export const alt = `${BRAND.name} · Clínica estética premium en ${BRAND.city}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const softPink = "#f4dce7";
const softBlue = "#cfeaf3";
const graphite = "#111827";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background: `linear-gradient(135deg, #fff9fb 0%, #ffffff 52%, #f5fcff 100%)`,
          color: graphite,
          padding: 42,
          fontFamily: "sans-serif"
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            width: "100%",
            borderRadius: 34,
            overflow: "hidden",
            border: "1px solid rgba(17,24,39,0.08)",
            background: "rgba(255,255,255,0.92)"
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -120,
              right: -70,
              width: 360,
              height: 360,
              borderRadius: 999,
              background: softBlue,
              opacity: 0.55
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -150,
              left: -60,
              width: 420,
              height: 420,
              borderRadius: 999,
              background: softPink,
              opacity: 0.55
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "100%",
              padding: "52px 56px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 760 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div
                    style={{
                      display: "flex",
                      width: 72,
                      height: 72,
                      borderRadius: 24,
                      alignItems: "center",
                      justifyContent: "center",
                      background: graphite,
                      color: "#ffffff",
                      fontSize: 32,
                      fontWeight: 800,
                      letterSpacing: -1
                    }}
                  >
                    {BRAND.shortName}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <div style={{ fontSize: 24, letterSpacing: 5, textTransform: "uppercase", color: "rgba(17,24,39,0.5)" }}>
                      {BRAND.name}
                    </div>
                    <div style={{ fontSize: 28, fontWeight: 700 }}>{BRAND.city} · {BRAND.neighborhood}</div>
                  </div>
                </div>

                <div style={{ fontSize: 70, fontWeight: 800, lineHeight: 1.02 }}>
                  Clínica estética premium con presencia digital lista para compartir.
                </div>
                <div style={{ fontSize: 29, lineHeight: 1.35, color: "rgba(17,24,39,0.72)", maxWidth: 860 }}>
                  Valoración profesional, tratamientos faciales y corporales, agenda online y contacto directo por WhatsApp en una marca sobria y aspiracional.
                </div>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24 }}>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                {[
                  "Valoración personalizada",
                  "Tratamientos premium",
                  "WhatsApp directo"
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      padding: "13px 22px",
                      borderRadius: 999,
                      background: "rgba(17,24,39,0.92)",
                      color: "#ffffff",
                      fontSize: 22,
                      fontWeight: 600
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
                <div style={{ fontSize: 20, textTransform: "uppercase", letterSpacing: 4, color: "rgba(17,24,39,0.48)" }}>
                  Sharing preview
                </div>
                <div style={{ fontSize: 34, fontWeight: 700 }}>{BRAND.instagram}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
