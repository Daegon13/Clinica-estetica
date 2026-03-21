import { ImageResponse } from "next/og";
import { BRAND } from "@/lib/data";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #111827 0%, #1f2937 100%)",
          borderRadius: 8
        }}
      >
        <div
          style={{
            width: 24,
            height: 24,
            borderRadius: 8,
            background: "linear-gradient(135deg, #f4dce7 0%, #cfeaf3 100%)",
            color: "#111827",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 12,
            fontWeight: 800
          }}
        >
          {BRAND.shortName}
        </div>
      </div>
    ),
    size
  );
}
