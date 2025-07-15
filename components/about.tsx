"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function About() {
  const [projectCount, setProjectCount] = useState(0)
  const [experienceCount, setExperienceCount] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true

          let projectStart = 0
          const projectEnd = 3000
          const projectDuration = 2000
          const projectIncrement = projectEnd / (projectDuration / 50)

          const projectTimer = setInterval(() => {
            projectStart += projectIncrement
            if (projectStart >= projectEnd) {
              setProjectCount(projectEnd)
              clearInterval(projectTimer)
            } else {
              setProjectCount(Math.floor(projectStart))
            }
          }, 50)

          let experienceStart = 0
          const experienceEnd = 10
          const experienceDuration = 1500
          const experienceIncrement = experienceEnd / (experienceDuration / 100)

          const experienceTimer = setInterval(() => {
            experienceStart += experienceIncrement
            if (experienceStart >= experienceEnd) {
              setExperienceCount(experienceEnd)
              clearInterval(experienceTimer)
            } else {
              setExperienceCount(Math.floor(experienceStart))
            }
          }, 100)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  }

  const imageVariants = {
    hidden: { opacity: 0, rotate: -10, scale: 0.9 },
    visible: { opacity: 1, rotate: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  }

  return (
    <section id="about" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container px-4">
        <motion.div
          className="mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textVariants}
        >
          <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">TENTANG KAMI</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariants}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Terpercaya untuk membantu, <br />
              dibangun untuk kecepatan
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Didirikan untuk membantu pengemudi yang terdampar dengan bantuan darurat di jalan yang dapat diandalkan,
              layanan towing kami dimulai dengan satu truk dan misi untuk memberikan dukungan yang cepat dan ramah. Hari
              ini, kami dengan bangga melayani ratusan pelanggan setiap hari dengan armada yang diperluas, tim terlatih,
              dan ketersediaan 24/7.
            </p>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3">Pelajari Lebih Lanjut</Button>
          </motion.div>

          {/* Abstract Layout with Framer Motion */}
          <div className="relative h-96 md:h-[450px] lg:h-[500px] w-full">
            {/* Main Background Image */}
            <motion.img
              src="/images/about1.jpeg?height=600&width=800" // Placeholder for the main background image
              alt="About Us Background"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
            {/* Overlay for better readability of foreground elements */}
            <div className="absolute inset-0 bg-black/30 rounded-lg"></div>

            {/* Existing Abstract Elements - Adjusted positions and z-index */}
            <motion.div
              className="absolute top-4 right-4 p-6 text-center bg-blue-400 text-white border-0 w-32 h-24 transform rotate-3 shadow-lg z-10"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
            >
              <div className="text-2xl font-bold mb-1">
                {projectCount >= 1000 ? `${Math.floor(projectCount / 1000)}K` : projectCount}
              </div>
              <div className="text-xs font-medium">Proyek Selesai</div>
            </motion.div>

            <motion.div
              className="absolute top-16 left-4 p-6 text-center bg-gray-900 text-white border-0 w-32 h-24 transform -rotate-2 shadow-lg z-10"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-2xl font-bold mb-1">{experienceCount}+</div>
              <div className="text-xs font-medium">Tahun Pengalaman</div>
            </motion.div>

            <motion.div
              className="absolute bottom-12 right-12 w-40 h-32 bg-gray-200 rounded-lg overflow-hidden transform rotate-6 shadow-md z-10"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              transition={{ delay: 0.4 }}
            >
              <img
                src="/images/about2.jpeg?height=128&width=160"
                alt="Towing service worker"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              className="absolute bottom-0 left-16 w-36 h-36 bg-gray-200 rounded-full overflow-hidden transform -rotate-12 shadow-md z-10"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              transition={{ delay: 0.6 }}
            >
              <img
                src="/images/about3.jpeg?height=144&width=144"
                alt="Professional towing assistance"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Additional Abstract Elements - Adjusted positions and z-index */}
            <motion.div
              className="absolute top-24 left-24 w-20 h-20 bg-blue-100 rounded-lg transform rotate-45 opacity-60 z-0"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.6, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            ></motion.div>
            <motion.div
              className="absolute bottom-24 right-24 w-12 h-12 bg-gray-300 rounded-full opacity-40 z-0"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.4, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 1, duration: 0.5 }}
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
