import type { Metadata } from "next";
import { BRAND } from "@/lib/data";
import { buildPageMetadata } from "@/lib/seo";
import UrgenciasClientPage from "./urgencias-client-page";

export const metadata: Metadata = buildPageMetadata({
  title: `Atención prioritaria | ${BRAND.name}`,
  description: `Indicá síntomas y obtené una orientación inicial para priorizar la atención en ${BRAND.name}.`,
  path: "/urgencias"
});

export default function UrgenciasPage() {
  return <UrgenciasClientPage />;
}
