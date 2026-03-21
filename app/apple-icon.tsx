import { ImageResponse } from "next/og";
import { BRAND } from "@/lib/data";

export const runtime = "edge";

export const size = {
  width: 180,
  height: 180
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #fff7fb 0%, #f3fbff 100%)",
          borderRadius: 48,
          border: "10px solid rgba(17,24,39,0.08)"
        }}
      >
        <div
          style={{
            width: 104,
            height: 104,
            borderRadius: 34,
            background: "linear-gradient(135deg, #111827 0%, #1f2937 100%)",
            color: "white",
            boxShadow: "0 18px 40px rgba(17,24,39,0.18)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 40,
            fontWeight: 800,
            letterSpacing: -1
          }}
        >
          {BRAND.shortName}
        </div>
      </div>
    ),
    size
  );
}
