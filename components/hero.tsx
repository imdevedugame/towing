"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Clock, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
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
    hidden: { y: 20, opacity: 0 },
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
    <section id="home" className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 lg:py-32 overflow-hidden">
      <div className="container px-4">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mb-6" variants={itemVariants}>
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800">
              Layanan 24 Jam
            </span>
          </motion.div>

          <motion.h1
            className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
            variants={itemVariants}
          >
            Jasa Towing & Pengiriman Kendaraan ke <span className="text-blue-500">Seluruh Indonesia</span>
          </motion.h1>

          <motion.p className="mb-8 text-xl text-gray-600 max-w-2xl mx-auto" variants={itemVariants}>
            CV. DUA BINTANG - Layanan towing dan pengiriman kendaraan terpercaya dengan komitmen "Zero Complain, Zero
            Accident". Kami melayani 24 jam untuk seluruh Indonesia dengan tim profesional dan peralatan modern.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mb-12" variants={itemVariants}>
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Sekarang
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-4 text-lg bg-transparent"
            >
              <Phone className="mr-2 h-5 w-5" />
              Hubungi Kami
            </Button>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto" variants={itemVariants}>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Clock className="h-5 w-5 text-blue-500" />
              <span className="font-medium">Layanan 24/7</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <MapPin className="h-5 w-5 text-blue-500" />
              <span className="font-medium">Seluruh Indonesia</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Phone className="h-5 w-5 text-blue-500" />
              <span className="font-medium">Respon Cepat</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
