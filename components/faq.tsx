"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([0])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqs = [
    {
      question: "Di area mana Anda menawarkan layanan towing?",
      answer:
        "Kami menyediakan layanan towing dan bantuan darurat di jalan di seluruh Indonesia, dengan waktu respon cepat di mana pun Anda berada.",
    },
    {
      question: "Apakah layanan towing Anda tersedia 24/7?",
      answer:
        "Ya, layanan kami tersedia 24 jam sehari, 7 hari seminggu. Tim siaga kami siap membantu kapan saja Anda membutuhkan.",
    },
    {
      question: "Berapa lama waktu yang dibutuhkan truk derek untuk tiba?",
      answer:
        "Tim kami biasanya tiba dalam 30 menit dari permintaan layanan, tergantung lokasi dan kondisi lalu lintas.",
    },
    {
      question: "Jenis kendaraan apa yang bisa Anda towing?",
      answer:
        "Kami dapat menangani berbagai jenis kendaraan termasuk mobil, motor, alat berat, dan kendaraan komersial dengan peralatan khusus.",
    },
    {
      question: "Bagaimana jika saya kehabisan bensin atau ban kempes?",
      answer:
        "Kami menyediakan layanan roadside assistance termasuk pengisian bahan bakar darurat, ganti ban, dan perbaikan ringan di tempat.",
    },
    {
      question: "Apakah Anda menawarkan layanan towing jarak jauh?",
      answer:
        "Ya, kami menyediakan layanan towing jarak jauh yang aman untuk kendaraan yang perlu dipindahkan antar kota atau provinsi.",
    },
    {
      question: "Berapa biaya layanan towing?",
      answer:
        "Harga kami transparan dan kompetitif, dihitung berdasarkan jarak dan jenis layanan. Tidak ada biaya tersembunyi.",
    },
    {
      question: "Bisakah Anda membantu setelah kecelakaan mobil?",
      answer:
        "Ya, tim kami terlatih untuk menangani situasi pasca kecelakaan dengan aman dan membantu evakuasi kendaraan.",
    },
    {
      question: "Apakah layanan towing motor tersedia?",
      answer: "Ya, kami memiliki peralatan khusus dan pengalaman untuk menangani towing sepeda motor dengan aman.",
    },
    {
      question: "Bagaimana cara meminta layanan atau towing darurat?",
      answer:
        "Anda dapat menghubungi kami melalui WhatsApp di +62 812-3480-5476 atau telepon langsung untuk layanan darurat 24 jam.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
            ADA PERTANYAAN?
          </motion.span>
          <motion.h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl" variants={itemVariants}>
            Pertanyaan yang sering diajukan.
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {faqs.map((faq, index) => (
            <motion.div key={index} className="bg-white rounded-lg shadow-sm" variants={itemVariants}>
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 rounded-lg transition-colors"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openItems.includes(index) ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openItems.includes(index) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4"
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative px-8 py-16 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">
              Towing Darurat? <br className="sm:hidden" />
              Hubungi Kami Sekarang!
            </h3>
            <div className="text-2xl font-bold text-blue-400 mb-6">+62 812-3480-5476</div>
            <p className="text-gray-300 mb-8">Tersedia 24/7 untuk layanan darurat</p>
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
              Hubungi Sekarang
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
