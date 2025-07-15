"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Car, Bike, Truck, ShoppingCart, UserCheck, Trophy, Mountain, Compass } from "lucide-react"
import { motion } from "framer-motion"

export function Services() {
  const mainServices = [
    {
      title: "Kirim Mobil",
      description: "Layanan pengiriman mobil ke seluruh Indonesia dengan keamanan terjamin dan asuransi penuh.",
      image: "/images/kirim_mobil.jpeg?height=200&width=300",
      icon: Car,
    },
    {
      title: "Kirim Motor",
      description: "Pengiriman sepeda motor dengan penanganan khusus dan perlindungan maksimal selama perjalanan.",
      image: "/images/kirim_motor.jpeg?height=200&width=300",
      icon: Bike,
    },
    {
      title: "Alat Berat",
      description: "Spesialisasi pengiriman alat berat dengan peralatan khusus dan tim berpengalaman.",
      image: "/images/alat_berat.jpeg?height=200&width=300",
      icon: Truck,
    },
    {
      title: "Jual Beli Kendaraan",
      description: "Layanan jual beli kendaraan bekas dengan proses yang mudah dan terpercaya.",
      image: "/images/jual_beli.jpeg?height=200&width=300",
      icon: ShoppingCart,
    },
    {
      title: "Pengiriman Driver via Darat (Self Drive)",
      description: "Layanan pengiriman driver profesional via darat untuk kebutuhan self drive Anda.",
      image: "/images/via_darat.jpeg?height=200&width=300",
      icon: UserCheck,
    },
  ]

  const backupServices = [
    {
      title: "Back-up Balap",
      description: "Dukungan logistik untuk event balap dan transportasi kendaraan balap.",
      icon: Trophy,
    },
    {
      title: "Back-up Touring",
      description: "Layanan backup untuk kegiatan touring dan perjalanan jarak jauh.",
      icon: Mountain,
    },
    {
      title: "Back-up Adventure",
      description: "Support untuk kegiatan adventure dan ekspedisi off-road.",
      icon: Compass,
    },
  ]

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
    <section id="services" className="py-20 bg-white">
      <div className="container px-4">
        <motion.div
          className="flex justify-between items-start mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <div>
            <motion.span className="text-sm font-medium text-gray-500 uppercase tracking-wide" variants={itemVariants}>
              LAYANAN
            </motion.span>
            <motion.h2 className="mt-2 text-4xl font-bold text-gray-900 leading-tight" variants={itemVariants}>
              Layanan Towing Terpercaya, <br />
              Kapan Saja Anda Butuhkan
            </motion.h2>
          </div>
          <motion.div variants={itemVariants}>
            <Button className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3">Lihat Semua Layanan</Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {mainServices.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border-0 shadow-sm">
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    {service.icon && <service.icon className="h-6 w-6 text-blue-500" />}
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">{service.description}</p>
                  <Button
                    variant="ghost"
                    className="text-blue-400 hover:text-blue-500 hover:bg-blue-50 p-0 font-medium"
                  >
                    Dapatkan Layanan <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Backup Services Section */}
        <motion.div
          className="bg-gray-100 rounded-lg p-8 shadow-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h3 className="text-2xl font-bold text-gray-900 mb-6 text-center" variants={itemVariants}>
            Layanan Back-up
          </motion.h3>
          <motion.div className="grid md:grid-cols-3 gap-6" variants={containerVariants}>
            {backupServices.map((service, index) => (
              <motion.div key={index} className="text-center" variants={itemVariants}>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  {service.icon && <service.icon className="h-6 w-6 text-blue-500" />}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
