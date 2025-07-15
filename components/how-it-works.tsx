"use client"

import { Phone, Truck, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Phone,
      title: "Hubungi Kami",
      description:
        "Telepon atau kirim pesan WhatsApp, bagikan lokasi Anda, dan ceritakan apa yang terjadi secara singkat.",
    },
    {
      number: "02",
      icon: Truck,
      title: "Kami Dalam Perjalanan",
      description:
        "Kami mengirimkan truk derek atau teknisi terdekat untuk layanan jalan yang cepat dan dapat diandalkan.",
    },
    {
      number: "03",
      icon: CheckCircle,
      title: "Masalah Teratasi",
      description: "Kendaraan Anda diderek atau diperbaiki di tempat — dengan aman, cepat, dan tanpa kerumitan.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
            CARA KERJA
          </motion.span>
          <motion.h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl" variants={itemVariants}>
            Hanya 3 langkah mudah
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {steps.map((step, index) => (
            <motion.div key={index} className="text-center" variants={itemVariants}>
              <div className="relative mb-6">
                <div className="text-6xl font-bold text-gray-100 mb-4">{step.number}</div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
