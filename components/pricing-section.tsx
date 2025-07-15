"use client"

import { motion } from "framer-motion"
import { CheckCircle, DollarSign, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PricingSection() {
  const features = [
    { icon: DollarSign, text: "Tarif Dasar Flat" },
    { icon: MapPin, text: "Towing Berdasarkan Jarak" },
    { icon: CheckCircle, text: "Add-on Opsional" },
    { icon: Clock, text: "Estimasi Gratis" },
    { icon: DollarSign, text: "Tidak Ada Biaya Tersembunyi" },
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
    <section className="py-20 bg-white">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariants}
          >
            <motion.span className="text-sm font-medium text-gray-500 uppercase tracking-wide" variants={itemVariants}>
              ESTIMASI AKURAT
            </motion.span>
            <motion.h2 className="mt-2 text-4xl font-bold text-gray-900 leading-tight mb-6" variants={itemVariants}>
              Tarif Transparan. <br />
              Tanpa Kejutan.
            </motion.h2>
            <motion.p className="text-gray-600 mb-8 leading-relaxed" variants={itemVariants}>
              Harga kami lugas dan transparan — tidak ada biaya tersembunyi, biaya tambahan yang membingungkan, atau
              biaya kejutan setelah layanan.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3">Pelajari Lebih Lanjut</Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {features.map((feature, index) => (
              <motion.div key={index} className="flex items-start space-x-4" variants={itemVariants}>
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                    <feature.icon className="h-6 w-6 text-blue-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature.text}</h3>
                  <p className="text-gray-600 text-sm">
                    {index === 0 && "Harga tetap untuk layanan dasar."}
                    {index === 1 && "Biaya dihitung berdasarkan jarak tempuh."}
                    {index === 2 && "Pilihan tambahan untuk layanan khusus."}
                    {index === 3 && "Mulai layanan dengan perkiraan biaya gratis."}
                    {index === 4 && "Tidak ada biaya tersembunyi setelah layanan."}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
