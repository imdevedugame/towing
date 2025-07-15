"use client"

import { motion } from "framer-motion"
import { PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CustomerStories() {
  const stories = [
    {
      name: "Keluarga Wijaya",
      title: "Perjalanan Lintas Pulau yang Lancar",
      image: "/images/customer1.jpeg?height=300&width=500",
      text: "Kami harus memindahkan mobil keluarga dari Jawa ke Sumatera. CV. DUA BINTANG menangani semuanya dengan profesionalisme tinggi. Mobil tiba tepat waktu dan dalam kondisi sempurna. Sangat direkomendasikan!",
    },
    {
      name: "Komunitas Balap Motor",
      title: "Dukungan Logistik Balap yang Andal",
      image: "/images/customer3.jpeg?height=300&width=500",
      text: "Sebagai komunitas balap, kami sering membutuhkan pengiriman motor balap antar sirkuit. CV. DUA BINTANG selalu menjadi pilihan utama kami karena kecepatan dan kehati-hatian mereka. Zero complain!",
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
            KISAH PELANGGAN
          </motion.span>
          <motion.h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl" variants={itemVariants}>
            Dampak Nyata Layanan Kami
          </motion.h2>
          <motion.p className="mt-4 text-gray-600 max-w-2xl mx-auto" variants={itemVariants}>
            Dengarkan langsung dari pelanggan kami tentang bagaimana CV. DUA BINTANG membantu mereka.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stories.map((story, index) => (
            <motion.div key={index} className="bg-white rounded-lg shadow-md overflow-hidden" variants={itemVariants}>
              <div className="relative aspect-video bg-gray-200">
                <img src={story.image || "/placeholder.svg"} alt={story.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <Button variant="ghost" size="icon" className="text-white hover:text-blue-400">
                    <PlayCircle className="h-16 w-16" />
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{story.title}</h3>
                <p className="text-gray-600 mb-4">{story.text}</p>
                <p className="text-sm font-medium text-blue-500">- {story.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
