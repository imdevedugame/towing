"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react"
import { motion } from "framer-motion"

export function ContactCTA() {
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
    hidden: { y: 30, opacity: 0 },
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
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="container px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.h2 className="text-3xl font-bold text-white mb-4" variants={itemVariants}>
            Butuh Bantuan Sekarang?
          </motion.h2>
          <motion.p className="text-blue-100 text-lg max-w-2xl mx-auto" variants={itemVariants}>
            Tim kami siap membantu Anda 24/7. Hubungi kami sekarang untuk layanan towing dan pengiriman kendaraan
            terpercaya.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center text-white">
                <Phone className="h-8 w-8 mx-auto mb-3 text-blue-200" />
                <h3 className="font-semibold mb-2">Telepon</h3>
                <p className="text-sm text-blue-100">+62 812-3480-5476</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center text-white">
                <MessageCircle className="h-8 w-8 mx-auto mb-3 text-blue-200" />
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-sm text-blue-100">Chat Langsung</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center text-white">
                <MapPin className="h-8 w-8 mx-auto mb-3 text-blue-200" />
                <h3 className="font-semibold mb-2">Lokasi</h3>
                <p className="text-sm text-blue-100">Semarang, Jawa Tengah</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center text-white">
                <Clock className="h-8 w-8 mx-auto mb-3 text-blue-200" />
                <h3 className="font-semibold mb-2">Layanan</h3>
                <p className="text-sm text-blue-100">24 Jam Sehari</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.a
            href="https://wa.me/6281234805476"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
          >
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4">
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat WhatsApp
            </Button>
          </motion.a>
          <motion.a href="tel:+6281234805476" variants={itemVariants}>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 bg-transparent"
            >
              <Phone className="mr-2 h-5 w-5" />
              Telepon Sekarang
            </Button>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
