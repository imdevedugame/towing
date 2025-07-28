"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

export function Testimonials() {
  const testimonials = [
    {
      name: "Budi Santoso",
      location: "Jakarta, DKI Jakarta",
      image: "/images/budi.jpeg?height=80&width=80",
      rating: 5,
      text: "Pelayanan sangat cepat dan profesional. Mobil saya mogok di tol, dalam 20 menit tim sudah datang. Sangat merekomendasikan ke teman-teman!",
    },
    {
      name: "Sari Wijaya",
      location: "Surabaya, Jawa Timur",
      image: "/images/sri.jpeg?height=80&width=80",
      rating: 5,
      text: "Pengiriman motor dari Jakarta ke Surabaya sangat aman. Harga transparan dan tidak ada biaya tersembunyi. Terima kasih CV. DUA BINTANG!",
    },
    {
      name: "Kusuma",
      location: "Semarang, Jawa Tengah",
      image: "/images/alat_berat.jpeg?height=80&width=80",
      rating: 5,
      text: "Proses pengiriman barang dari Semarang ke Jakarta sangat cepat dan aman. Tim sangat profesional dan ramah. Sangat puas dengan pelayanannya!",
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
    <section id="testimonials" className="py-20 bg-white">
      <div className="container px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4" variants={itemVariants}>
            Apa kata pelanggan kami.
          </motion.h2>
          <motion.div variants={itemVariants}>
            <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50 bg-transparent">
              Lihat Semua Review
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="relative shadow-sm">
                <CardContent className="p-6">
                  <div className="absolute top-4 right-4">
                    <Quote className="h-6 w-6 text-blue-200" />
                  </div>

                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-600 leading-relaxed">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
