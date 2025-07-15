"use client"

import { motion } from "framer-motion"
import { Star, Users, MessageSquare } from "lucide-react"

export function RatingSummary() {
  const stats = [
    {
      icon: Star,
      value: "4.9/5",
      label: "Rating Rata-rata",
      description: "Dari ribuan ulasan pelanggan",
    },
    {
      icon: Users,
      value: "5000+",
      label: "Pelanggan Puas",
      description: "Jumlah pelanggan yang telah kami layani",
    },
    {
      icon: MessageSquare,
      value: "99%",
      label: "Tingkat Respon",
      description: "Kecepatan kami dalam menanggapi pertanyaan",
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
            RINGKASAN RATING
          </motion.span>
          <motion.h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl" variants={itemVariants}>
            Kepercayaan yang Kami Bangun
          </motion.h2>
          <motion.p className="mt-4 text-gray-600 max-w-2xl mx-auto" variants={itemVariants}>
            Lihat bagaimana pelanggan kami menilai layanan kami.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} className="bg-gray-50 rounded-lg p-8 text-center shadow-sm" variants={itemVariants}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <stat.icon className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</p>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
