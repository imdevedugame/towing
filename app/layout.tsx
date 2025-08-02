import type React from "react"
import type { Metadata } from "next/types"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsAppButton } from "@/components/floating-whatsapp-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Semarang Towing | CV. DUA BINTANG - Jasa Towing Semarang 24 Jam",
  description:
    "Layanan Semarang Towing terpercaya 24 jam. CV. DUA BINTANG melayani towing Semarang, kirim mobil motor, alat berat ke seluruh Indonesia. Hubungi +62 812-3480-5476",
  keywords: [
    "semarang towing",
    "towing semarang",
    "jasa towing semarang",
    "towing semarang 24 jam",
    "kirim mobil semarang",
    "kirim motor semarang",
    "towing alat berat semarang",
    "cv dua bintang semarang",
    "derek mobil semarang",
    "bantuan jalan semarang",
    "towing murah semarang",
    "towing terdekat semarang",
  ],
  authors: [{ name: "CV. DUA BINTANG" }],
  creator: "CV. DUA BINTANG",
  publisher: "CV. DUA BINTANG",
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
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://towingsemarang.com/",
    siteName: "Semarang Towing CV. DUA BINTANG",
    title: "Semarang Towing | CV. DUA BINTANG - Jasa Towing Semarang 24 Jam",
    description:
      "Layanan Semarang Towing terpercaya 24 jam. CV. DUA BINTANG melayani towing Semarang, kirim mobil motor, alat berat ke seluruh Indonesia.",
    images: [
      {
        url: "/images/banner4.jpeg",
        width: 1200,
        height: 630,
        alt: "Semarang Towing CV. DUA BINTANG",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Semarang Towing | CV. DUA BINTANG - Jasa Towing Semarang 24 Jam",
    description:
      "Layanan Semarang Towing terpercaya 24 jam. CV. DUA BINTANG melayani towing Semarang, kirim mobil motor, alat berat ke seluruh Indonesia.",
    images: ["/images/banner4.jpeg"],
  },
  alternates: {
    canonical: "https://towingsemarang.com/",
  },
  other: {
    "geo.region": "ID-JT",
    "geo.placename": "Semarang",
    "geo.position": "-6.9666;110.4167",
    ICBM: "-6.9666, 110.4167",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="canonical" href="https://towingsemarang.com/" />
        <meta name="geo.region" content="ID-JT" />
        <meta name="geo.placename" content="Semarang" />
        <meta name="geo.position" content="-6.9666;110.4167" />
        <meta name="ICBM" content="-6.9666, 110.4167" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="apple-mobile-web-app-title" content="Semarang Towing" />
        <meta name="application-name" content="Semarang Towing" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "CV. DUA BINTANG - Semarang Towing",
              image: "https://towingsemarang.com/images/logo.jpeg",
              telephone: "+62 812-3480-5476",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Semarang",
                addressLocality: "Semarang",
                addressRegion: "Jawa Tengah",
                addressCountry: "ID",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -6.9666,
                longitude: 110.4167,
              },
              url: "https://towingsemarang.com/",
              sameAs: [
                "https://www.instagram.com/towingsemarang_official",
                "https://www.tiktok.com/@towingsemarang_official",
                "https://www.facebook.com/towingsemarang",
              ],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59",
              },
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: -6.9666,
                  longitude: 110.4167,
                },
                geoRadius: "1000000",
              },
              priceRange: "$$",
              description:
                "Layanan Semarang Towing terpercaya 24 jam. Melayani towing Semarang, kirim mobil motor, alat berat ke seluruh Indonesia.",
            }),
          }}
        />
        <meta name="google-site-verification" content="DMXh5rwSPjT3RC7QAICvKXzWQZt5AjorlG8l0ZIRCjg" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsAppButton />
      </body>
    </html>
  )
}
