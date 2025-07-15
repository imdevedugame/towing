import Link from "next/link"
import { Phone, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react"

export function Footer() {
  const services = [
    "Kirim Mobil",
    "Kirim Motor",
    "Alat Berat",
    "Jual Beli Kendaraan",
    "Roadside Assistance",
    "Pengiriman Driver",
  ]

  const quickLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/about" },
    { name: "Layanan", href: "/services" },
    { name: "Testimoni", href: "/testimonials" },
    { name: "Kontak", href: "/contact" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                ★★
              </div>
              <span className="text-xl font-bold">CV. DUA BINTANG</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Layanan towing dan pengiriman kendaraan terpercaya dengan komitmen "Zero Complain, Zero Accident".
              Melayani 24 jam untuk seluruh Indonesia.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <MessageCircle className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Layanan Kami</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link href="/services" className="text-gray-400 hover:text-blue-500 transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Tautan Cepat</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-blue-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Map */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Hubungi Kami</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">+62 812-3480-5476</p>
                  <p className="text-sm text-gray-500">24 Jam Siaga</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Semarang, Jawa Tengah</p>
                  <p className="text-sm text-gray-500">Indonesia</p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed in Footer */}
            <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2999000000003!2d110.402725!3d-6.972222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4d00000001%3A0x2e708b4d00000001!2sSemarang%2C%20Central%20Java%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi CV. DUA BINTANG di Semarang"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 CV. DUA BINTANG. Semua hak dilindungi.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">
                Kebijakan Privasi
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
