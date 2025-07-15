"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Clock, Handshake, Lightbulb, Users } from "lucide-react"

export function OurValues() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Integritas & Keamanan",
      description: "Menjaga kepercayaan pelanggan dengan layanan yang aman dan jujur.",
    },
    {
      icon: Clock,
      title: "Respons Cepat 24/7",
      description: "Siap melayani kapan saja, memastikan bantuan tiba tepat waktu.",
    },
    {
      icon: Handshake,
      title: "Kepuasan Pelanggan",
      description: "Prioritas utama kami adalah memastikan setiap pelanggan puas.",
    },
    {
      icon: Lightbulb,
      title: "Inovasi Berkelanjutan",
      description: "Terus berinovasi untuk layanan yang lebih baik dan efisien.",
    },
    {
      icon: Users,
      title: "Profesionalisme Tim",
      description: "Tim terlatih dan berpengalaman yang bekerja dengan standar tertinggi.",
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
    <section className="py-20 bg-gray-100">
      <div className="container px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.span className="text-sm font-medium text-blue-500 uppercase tracking-wide" variants={itemVariants}>
            NILAI-NILAI KAMI
          </motion.span>
          <motion.h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl" variants={itemVariants}>
            Prinsip yang Mendorong Kami
          </motion.h2>
          <motion.p className="mt-4 text-gray-600 max-w-2xl mx-auto" variants={itemVariants}>
            Nilai-nilai inti kami membentuk setiap aspek layanan yang kami berikan, memastikan kualitas dan kepercayaan.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {values.map((value, index) => (
            <motion.div key={index} className="bg-white rounded-lg p-8 text-center shadow-md" variants={itemVariants}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <value.icon className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
