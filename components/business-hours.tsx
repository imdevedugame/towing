"use client"

import { motion } from "framer-motion"
import { Clock, Calendar, Phone } from "lucide-react"

export function BusinessHours() {
  const hours = [
    { day: "Senin - Jumat", time: "08:00 - 17:00 WIB", note: "Jam Kantor" },
    { day: "Sabtu", time: "08:00 - 14:00 WIB", note: "Jam Kantor" },
    { day: "Minggu", time: "Tutup", note: "Layanan Darurat 24/7 Tetap Tersedia" },
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
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.span className="text-sm font-medium text-blue-500 uppercase tracking-wide" variants={itemVariants}>
            JAM OPERASIONAL
          </motion.span>
          <motion.h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl" variants={itemVariants}>
            Kapan Kami Siap Melayani Anda
          </motion.h2>
          <motion.p className="mt-4 text-gray-600 max-w-2xl mx-auto" variants={itemVariants}>
            Meskipun layanan darurat kami tersedia 24/7, berikut adalah jam operasional kantor kami.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {hours.map((item, index) => (
            <motion.div key={index} className="bg-gray-50 rounded-lg p-6 text-center shadow-sm" variants={itemVariants}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                {index === 0 && <Calendar className="h-8 w-8 text-blue-500" />}
                {index === 1 && <Clock className="h-8 w-8 text-blue-500" />}
                {index === 2 && <Phone className="h-8 w-8 text-blue-500" />}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.day}</h3>
              <p className="text-2xl font-bold text-blue-500 mb-1">{item.time}</p>
              <p className="text-gray-600 text-sm">{item.note}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
