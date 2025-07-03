import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#5f7a5f" },
    { media: "(prefers-color-scheme: dark)", color: "#5f7a5f" },
  ],
}

export const metadata: Metadata = {
  title: {
    default: "Cabañas NUBA - Santa Rosa de Calamuchita | Valle de Calamuchita, Córdoba",
    template: "%s | Cabañas NUBA",
  },
  description:
    "Cabañas familiares en Santa Rosa de Calamuchita, Valle de Calamuchita, Córdoba. Alojamiento completo con asador privado, cochera cubierta, Wi-Fi y todas las comodidades. A 96km de Córdoba Capital.",
  keywords: [
    "cabañas santa rosa de calamuchita",
    "alojamiento valle de calamuchita",
    "cabañas córdoba",
    "turismo calamuchita",
    "cabañas con asador",
    "alojamiento familiar córdoba",
    "cabañas nuba",
    "turismo córdoba",
    "valle de calamuchita",
    "santa rosa calamuchita",
  ],
  authors: [{ name: "Cabañas NUBA" }],
  creator: "Duality Domain",
  publisher: "Cabañas NUBA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nubacabanias.com.ar"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cabañas NUBA - Santa Rosa de Calamuchita | Valle de Calamuchita",
    description:
      "Cabañas familiares en Santa Rosa de Calamuchita con todas las comodidades. Asador privado, cochera cubierta, Wi-Fi y más. ¡Reservá tu escapada al Valle de Calamuchita!",
    url: "https://nubacabanias.com.ar",
    siteName: "Cabañas NUBA",
    images: [
      {
        url: "/images/og-image-nuba.jpg",
        width: 1200,
        height: 630,
        alt: "Cabañas NUBA - Vista aérea de Santa Rosa de Calamuchita",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabañas NUBA - Santa Rosa de Calamuchita",
    description:
      "Cabañas familiares en el Valle de Calamuchita con todas las comodidades. ¡Tu escapada perfecta te espera!",
    images: ["/images/og-image-nuba.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logo-cabanas-nuba.png",
    shortcut: "/images/logo-cabanas-nuba.png",
    apple: "/images/logo-cabanas-nuba.png",
  },
  manifest: "/manifest.json",
  other: {
    "google-site-verification": "your-google-verification-code",
    "msapplication-TileColor": "#5f7a5f",
    "msapplication-config": "/browserconfig.xml",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: "Cabañas NUBA",
              image: "https://nubacabanias.com.ar/images/og-image-nuba.jpg",
              description:
                "Cabañas familiares en Santa Rosa de Calamuchita, Valle de Calamuchita, Córdoba. Alojamiento completo con asador privado, cochera cubierta y todas las comodidades.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. Fuerza Aérea Argentina",
                addressLocality: "Santa Rosa de Calamuchita",
                addressRegion: "Córdoba",
                addressCountry: "AR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -32.0560431,
                longitude: -64.5479336,
              },
              url: "https://nubacabanias.com.ar",
              telephone: "+54-9-3546-50-1444",
              email: "info@nubacabanias.com.ar",
              sameAs: ["https://www.instagram.com/cabanasnuba", "https://fb.me/NubaCabanias"],
              amenityFeature: [
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Asador privado",
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Cochera cubierta",
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Wi-Fi gratuito",
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Aire acondicionado",
                },
              ],
              starRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
