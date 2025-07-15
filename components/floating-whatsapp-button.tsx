"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingWhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/6281234805476" // WhatsApp link for +62 812-3480-5476
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Button
        size="lg"
        className="rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 text-white shadow-lg flex items-center justify-center"
        aria-label="Chat via WhatsApp"
      >
        <MessageCircle className="h-8 w-8" />
      </Button>
    </motion.a>
  )
}
