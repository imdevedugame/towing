"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MessageCircle, MapPin, Instagram, Facebook } from "lucide-react"
import { motion } from "framer-motion"

export function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.span className="text-sm font-medium text-blue-500 uppercase tracking-wide" variants={itemVariants}>
            HUBUNGI KAMI
          </motion.span>
          <motion.h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl" variants={itemVariants}>
            Butuh bantuan? Kami siap membantu
          </motion.h2>
          <motion.p className="mt-4 text-gray-600 max-w-2xl mx-auto" variants={itemVariants}>
            Tim customer service kami siap melayani 24 jam untuk membantu kebutuhan towing dan pengiriman kendaraan Anda
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h3 className="text-2xl font-bold text-gray-900 mb-6" variants={itemVariants}>
              Informasi Kontak
            </motion.h3>

            <motion.div className="space-y-6 mb-8" variants={containerVariants}>
              <motion.div className="flex items-start space-x-4" variants={itemVariants}>
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-500" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Telepon & WhatsApp</h4>
                  <p className="text-gray-600">+62 812-3480-5476</p>
                  <p className="text-sm text-gray-500">Tersedia 24 jam untuk layanan darurat</p>
                </div>
              </motion.div>

              <motion.div className="flex items-start space-x-4" variants={itemVariants}>
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-500" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Alamat</h4>
                  <p className="text-gray-600">Semarang, Jawa Tengah</p>
                  <Button variant="link" className="text-blue-500 hover:text-blue-600 p-0 h-auto">
                    Lihat di Google Maps
                  </Button>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <motion.h4 className="font-semibold text-gray-900 mb-4" variants={itemVariants}>
                Ikuti Kami
              </motion.h4>
              <motion.div className="flex space-x-4" variants={itemVariants}>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-blue-500 text-blue-500 hover:bg-blue-50 bg-transparent"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-blue-500 text-blue-500 hover:bg-blue-50 bg-transparent"
                >
                  <MessageCircle className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-blue-500 text-blue-500 hover:bg-blue-50 bg-transparent"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div className="mt-2 text-sm text-gray-600" variants={itemVariants}>
                <p>Instagram: @towingsemarang_official</p>
                <p>TikTok: @towingsemarang_official</p>
                <p>Facebook: towingsemarang</p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Kirim Pesan</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                      <Input placeholder="Masukkan nama Anda" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon</label>
                      <Input placeholder="Masukkan nomor telepon" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input type="email" placeholder="Masukkan email Anda" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Jenis Layanan</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Pilih jenis layanan</option>
                      <option>Kirim Mobil</option>
                      <option>Kirim Motor</option>
                      <option>Alat Berat</option>
                      <option>Roadside Assistance</option>
                      <option>Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                    <Textarea placeholder="Ceritakan kebutuhan Anda..." rows={4} />
                  </div>

                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Kirim Pesan</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp Langsung</h4>
                <p className="text-gray-600 mb-4">Hubungi kami langsung via WhatsApp untuk respon yang lebih cepat</p>
                <Button className="bg-green-500 hover:bg-green-600 text-white">Chat WhatsApp</Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-6 text-center">
                <Phone className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Panggilan Darurat</h4>
                <p className="text-gray-600 mb-4">Untuk situasi darurat, hubungi langsung nomor telepon kami</p>
                <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50 bg-transparent">
                  Telepon Sekarang
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
