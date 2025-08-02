"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Car, Bike, Truck, ShoppingCart, UserCheck, Trophy, Mountain, Compass } from "lucide-react"
import { motion } from "framer-motion"

export function Services() {
  const mainServices = [
    {
      title: "Kirim Mobil Semarang",
      description:
        "Layanan kirim mobil dari Semarang ke seluruh Indonesia atau sebaliknya. Sebagai towing Semarang terpercaya, kami menjamin mobil kesayangan Anda sampai dengan selamat. Dilengkapi asuransi dan tracking real-time untuk ketenangan Anda!",
      image: "/images/kirim_mobil.jpeg?height=200&width=300",
      icon: Car,
      whatsappMessage:
        "Halo Semarang Towing CV. DUA BINTANG! Saya tertarik dengan layanan *Kirim Mobil Semarang*. Saya ingin mengirim mobil dari/ke Semarang tujuan [tujuan]. Bisa tolong berikan informasi harga dan prosedurnya? Terima kasih!",
    },
    {
      title: "Kirim Motor Semarang",
      description:
        "Towing Semarang untuk pengiriman motor ke seluruh Nusantara. Tim towing Semarang kami sudah berpengalaman bertahun-tahun menangani pengiriman motor dari Semarang. Dari motor bebek sampai moge, semua ditangani dengan extra hati-hati!",
      image: "/images/kirim_motorr.jpeg?height=200&width=300",
      icon: Bike,
      whatsappMessage:
        "Halo Semarang Towing CV. DUA BINTANG! Saya mau kirim motor dengan layanan *Kirim Motor Semarang*. Motor saya [jenis motor] mau dikirim dari/ke Semarang tujuan [tujuan]. Mohon info harga dan estimasi waktu pengiriman ya. Terima kasih!",
    },
    {
      title: "Towing Alat Berat Semarang",
      description:
        "Spesialis towing alat berat di Semarang dan Jawa Tengah. Sebagai layanan towing Semarang profesional, kami memiliki peralatan khusus untuk excavator, bulldozer, dan alat berat lainnya. Pengalaman puluhan tahun membuat kami ahli menangani 'si besar' ini.",
      image: "/images/kirim2.jpeg?height=200&width=300",
      icon: Truck,
      whatsappMessage:
        "Halo Towing Semarang CV. DUA BINTANG! Saya butuh layanan *Towing Alat Berat Semarang* untuk memindahkan [jenis alat berat] dari [asal] ke [tujuan]. Bisa tolong berikan penawaran dan jadwal yang tersedia? Terima kasih!",
    },
    {
      title: "Jual Beli Kendaraan Semarang",
      description:
        "Layanan jual beli kendaraan terpercaya di Semarang. Selain towing Semarang, kami juga melayani transaksi jual beli mobil dan motor bekas. Proses cepat, harga fair, dan semua dokumen dijamin lengkap. Khusus area Semarang dan sekitarnya!",
      image: "/images/jual_beli.jpeg?height=200&width=300",
      icon: ShoppingCart,
      whatsappMessage:
        "Halo CV. DUA BINTANG Semarang! Saya tertarik dengan layanan *Jual Beli Kendaraan Semarang*. Saya ingin [jual/beli] [jenis kendaraan] di area Semarang. Bisa tolong bantu prosesnya? Terima kasih!",
    },
    {
      title: "Driver Semarang (Self Drive)",
      description:
        "Butuh driver handal di Semarang? Layanan towing Semarang kami juga menyediakan driver profesional untuk membawa kendaraan Anda. Driver Semarang kami bersertifikat, berpengalaman, dan amanah. Kendaraan sampai selamat di tangan driver terpercaya!",
      image: "/images/via_darat.jpeg?height=200&width=300",
      icon: UserCheck,
      whatsappMessage:
        "Halo Towing Semarang CV. DUA BINTANG! Saya memerlukan layanan *Driver Semarang (Self Drive)* untuk membawa [jenis kendaraan] dari [asal] ke [tujuan]. Mohon info driver Semarang yang tersedia dan tarifnya. Terima kasih!",
    },
  ]

  const backupServices = [
    {
      title: "Back-up Balap",
      description:
        "Tim balap butuh support logistik yang solid? Kami siap jadi partner terpercaya! Dari angkut motor balap sampai peralatan pit, semua ditangani profesional. Fokus aja sama balapannya, logistik serahkan sama kami!",
      icon: Trophy,
      whatsappMessage:
        "Halo CV. DUA BINTANG! Saya tertarik dengan layanan *Back-up Balap* untuk event [nama event/tanggal]. Bisa tolong berikan detail layanan dan harganya? Terima kasih!",
    },
    {
      title: "Back-up Touring",
      description:
        "Mau touring jauh tapi khawatir ada kendala di jalan? Tenang, kami siap standby! Tim backup kami akan siaga sepanjang perjalanan touring Anda. Jadi bisa enjoy touring tanpa worry!",
      icon: Mountain,
      whatsappMessage:
        "Halo CV. DUA BINTANG! Saya butuh layanan *Back-up Touring* untuk rute [rute touring] pada tanggal [tanggal]. Mohon info paket backup yang tersedia. Terima kasih!",
    },
    {
      title: "Back-up Adventure",
      description:
        "Adventure off-road memang seru, tapi resikonya juga gede. Makanya butuh backup yang handal! Kami udah biasa nangani adventure ekstrem. Peralatan lengkap, tim berpengalaman, siap temani petualangan Anda!",
      icon: Compass,
      whatsappMessage:
        "Halo CV. DUA BINTANG! Saya memerlukan layanan *Back-up Adventure* untuk kegiatan [jenis adventure] di [lokasi]. Bisa tolong berikan info paket dan peralatannya? Terima kasih!",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Kurangi dari 0.1 ke 0.05 untuk lebih cepat
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 }, // Kurangi dari 50px ke 20px
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15, // Tingkatkan dari 10 ke 15
        stiffness: 120, // Tingkatkan dari 100 ke 120
        duration: 0.3, // Tambahkan duration
      },
    },
  }

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container px-4">
        <motion.div
          className="flex justify-between items-start mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <div>
            <motion.span className="text-sm font-medium text-gray-500 uppercase tracking-wide" variants={itemVariants}>
              LAYANAN TOWING SEMARANG
            </motion.span>
            <motion.h2 className="mt-2 text-4xl font-bold text-gray-900 leading-tight" variants={itemVariants}>
              Semarang Towing Terpercaya, <br />
              Siap Membantu 24 Jam
            </motion.h2>
            <motion.p className="mt-4 text-lg text-gray-600 max-w-2xl" variants={itemVariants}>
              CV. DUA BINTANG adalah layanan towing Semarang terdepan dengan pengalaman puluhan tahun. Melayani towing
              di Semarang dan sekitarnya dengan respons cepat dan harga terjangkau.
            </motion.p>
          </div>
         
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial={{ opacity: 1 }} // Fallback jika animasi gagal
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "-50px" }} // Tambahkan margin
        >
          {mainServices.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow duration-300 opacity-100">
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img
                    src={service.image || "/images/banner4.jpeg"}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    {service.icon && <service.icon className="h-6 w-6 text-blue-500" />}
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">{service.description}</p>
                  <a
                    href={`https://wa.me/6281234805476?text=${encodeURIComponent(service.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="ghost"
                      className="text-blue-400 hover:text-blue-500 hover:bg-blue-50 p-0 font-medium w-full justify-start"
                    >
                      Dapatkan Layanan <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Backup Services Section */}
        <motion.div
          className="bg-gray-100 rounded-lg p-8 shadow-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <motion.h3 className="text-2xl font-bold text-gray-900 mb-6 text-center" variants={itemVariants}>
            Layanan Back-up Khusus
          </motion.h3>
          <motion.div className="grid md:grid-cols-3 gap-6" variants={containerVariants}>
            {backupServices.map((service, index) => (
              <motion.div key={index} className="text-center" variants={itemVariants}>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  {service.icon && <service.icon className="h-6 w-6 text-blue-500" />}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <a
                  href={`https://wa.me/6281234805476?text=${encodeURIComponent(service.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
                    Chat Sekarang
                  </Button>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
