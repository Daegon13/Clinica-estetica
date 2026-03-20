import type { Metadata } from "next";
import { PORTAL, SEO } from "@/lib/data";
import { buildPageMetadata } from "@/lib/seo";
import MiMascotaClientPage from "../mi-mascota/mi-mascota-client-page";

export const metadata: Metadata = buildPageMetadata({
  title: SEO.portalTitle,
  description: SEO.portalDescription,
  path: "/mi-perfil"
});

export default function MiPerfilPage() {
  return <MiMascotaClientPage portalTitle={PORTAL.title} portalDescription={PORTAL.description} />;
}
