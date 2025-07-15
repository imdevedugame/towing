import type React from "react"
import type { Metadata } from "next/types"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsAppButton } from "@/components/floating-whatsapp-button" // Import the new component

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CV. DUA BINTANG - Jasa Pengiriman Mobil & Motor",
  description:
    "Layanan towing dan pengiriman kendaraan 24 jam ke seluruh Indonesia dengan komitmen Zero Complain, Zero Accident.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsAppButton /> {/* Add the floating WhatsApp button here */}
      </body>
    </html>
  )
}
