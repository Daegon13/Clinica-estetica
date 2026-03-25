import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BRAND } from "@/lib/data";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: `Panel admin demo | ${BRAND.name}`,
  description: `Gestioná turnos, triage y campañas en el panel de administración demo de ${BRAND.name}.`,
  path: "/adminv1"
});

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const enabled = ["1", "true"].includes((process.env.NEXT_PUBLIC_DEMO_TOOLS ?? "").toLowerCase());
  if (!enabled) notFound();
  return children;
}
