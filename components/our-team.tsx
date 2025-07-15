"use client"

import { motion } from "framer-motion"
import { Linkedin, Twitter } from "lucide-react"

export function OurTeam() {
  const teamMembers = [
    {
      name: "Budi Santoso",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=150&width=150",
      description: "Berpengalaman lebih dari 15 tahun di industri towing dan logistik.",
    },
    {
      name: "Siti Aminah",
      role: "Head of Operations",
      image: "/placeholder.svg?height=150&width=150",
      description: "Memastikan kelancaran operasional 24/7 di seluruh wilayah layanan.",
    },
    {
      name: "Rudi Hartono",
      role: "Chief Mechanic",
      image: "/placeholder.svg?height=150&width=150",
      description: "Ahli dalam perbaikan kendaraan dan perawatan armada towing.",
    },
    {
      name: "Dewi Lestari",
      role: "Customer Relations",
      image: "/placeholder.svg?height=150&width=150",
      description: "Fokus pada kepuasan pelanggan dan penanganan keluhan.",
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
            TIM KAMI
          </motion.span>
          <motion.h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl" variants={itemVariants}>
            Bertemu dengan Tim Profesional Kami
          </motion.h2>
          <motion.p className="mt-4 text-gray-600 max-w-2xl mx-auto" variants={itemVariants}>
            Kami adalah tim yang berdedikasi, siap memberikan layanan terbaik untuk kebutuhan towing dan pengiriman
            kendaraan Anda.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} className="bg-gray-50 rounded-lg p-6 text-center shadow-sm" variants={itemVariants}>
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-4 border-blue-400"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-blue-500 text-sm font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm mb-4">{member.description}</p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-gray-500 hover:text-blue-500">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-500">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
