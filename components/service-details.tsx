"use client"

import { motion } from "framer-motion"
import { Car, Bike, Truck, CheckCircle, Shield, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ServiceDetails() {
  const serviceItems = [
    {
      icon: Car,
      title: "Pengiriman Mobil",
      description: "Aman dan terpercaya ke seluruh Indonesia, dengan asuransi penuh.",
    },
    {
      icon: Bike,
      title: "Pengiriman Motor",
      description: "Penanganan khusus untuk sepeda motor, memastikan keamanan selama transit.",
    },
    {
      icon: Truck,
      title: "Pengangkutan Alat Berat",
      description: "Solusi logistik untuk alat berat dengan armada dan tim yang spesialis.",
    },
    {
      icon: CheckCircle,
      title: "Proses Cepat & Mudah",
      description: "Prosedur yang disederhanakan untuk pengiriman yang efisien.",
    },
    {
      icon: Shield,
      title: "Asuransi Penuh",
      description: "Setiap pengiriman dilindungi oleh asuransi untuk ketenangan pikiran Anda.",
    },
    {
      icon: MapPin,
      title: "Jangkauan Nasional",
      description: "Melayani pengiriman ke seluruh kota besar dan pelosok Indonesia.",
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
    <section className="py-20 bg-gray-50">
      <div className="container px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.span className="text-sm font-medium text-blue-500 uppercase tracking-wide" variants={itemVariants}>
            DETAIL LAYANAN
          </motion.span>
          <motion.h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl" variants={itemVariants}>
            Solusi Pengiriman Kendaraan Lengkap
          </motion.h2>
          <motion.p className="mt-4 text-gray-600 max-w-2xl mx-auto" variants={itemVariants}>
            Kami menawarkan berbagai layanan pengiriman kendaraan yang disesuaikan dengan kebutuhan Anda, didukung oleh
            tim ahli dan peralatan modern.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/images/banner4.jpeg?height=400&width=600"
              alt="Detailed service image"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div>
            <motion.h3
              className="text-2xl font-bold text-gray-900 mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={itemVariants}
            >
              Pengiriman Kendaraan Anda, Prioritas Kami
            </motion.h3>
            <motion.p
              className="text-gray-600 mb-8 leading-relaxed"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={itemVariants}
              transition={{ delay: 0.2 }}
            >
              Dari mobil pribadi hingga alat berat, kami memastikan setiap pengiriman dilakukan dengan standar keamanan
              tertinggi dan efisiensi maksimal. Tim kami siap membantu Anda 24/7.
            </motion.p>

            <motion.div
              className="grid sm:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {serviceItems.map((item, index) => (
                <motion.div key={index} className="flex items-start space-x-4" variants={itemVariants}>
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                      <item.icon className="h-5 w-5 text-blue-500" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className="mt-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={itemVariants}
              transition={{ delay: 0.6 }}
            >
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3">Dapatkan Penawaran Gratis</Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
