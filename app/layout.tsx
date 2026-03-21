import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { DemoBootstrap } from "@/components/demo-bootstrap";
import { FloatingCta } from "@/components/floating-cta";
import { ThemeProvider } from "@/components/theme-provider";
import { BRAND, SEO } from "@/lib/data";
import { getRobotsMetadata, getSiteUrl } from "@/lib/seo";

const siteUrl = getSiteUrl();
const defaultTitle = SEO.defaultTitle;
const defaultDescription = SEO.defaultDescription;
const ogImageUrl = "/opengraph-image";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s · ${BRAND.name}`
  },
  description: defaultDescription,
  applicationName: BRAND.name,
  keywords: [
    "clínica estética",
    "medicina estética",
    "tratamientos faciales",
    "tratamientos corporales",
    "depilación láser",
    BRAND.name,
    BRAND.city,
    BRAND.neighborhood
  ],
  category: "beauty",
  authors: [{ name: BRAND.name }],
  creator: BRAND.name,
  publisher: BRAND.name,
  robots: getRobotsMetadata(),
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: [{ url: "/icon", type: "image/png", sizes: "32x32" }],
    apple: [{ url: "/apple-icon", type: "image/png", sizes: "180x180" }]
  },
  openGraph: {
    type: "website",
    locale: "es_UY",
    title: defaultTitle,
    description: defaultDescription,
    siteName: BRAND.name,
    url: siteUrl,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: `${BRAND.name} · Clínica estética premium en ${BRAND.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    creator: BRAND.instagram,
    images: [ogImageUrl]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusinessSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: BRAND.name,
    description: defaultDescription,
    image: new URL(ogImageUrl, siteUrl).toString(),
    url: siteUrl
  };

  if (BRAND.address) {
    localBusinessSchema.address = {
      "@type": "PostalAddress",
      streetAddress: BRAND.address,
      addressLocality: BRAND.city,
      addressRegion: "Montevideo"
    };
  }

  if (BRAND.phone) {
    localBusinessSchema.telephone = BRAND.phone;
  }

  if (BRAND.hours) {
    localBusinessSchema.openingHours = BRAND.hours;
  }

  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-graphite-950 antialiased dark:bg-graphite-950 dark:text-white">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <ThemeProvider>
          <Suspense fallback={null}>
            <DemoBootstrap />
            <Nav />
          </Suspense>
          <main className="min-h-[60vh]">{children}</main>
          <FloatingCta />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
