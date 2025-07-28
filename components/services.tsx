"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Car, Bike, Truck, ShoppingCart, UserCheck, Trophy, Mountain, Compass } from "lucide-react"
import { motion } from "framer-motion"

export function Services() {
  const mainServices = [
    {
      title: "Kirim Mobil",
      description:
        "Mau pindah kota tapi bingung sama mobilnya? Tenang! Kami siap antar mobil kesayangan Anda ke mana pun di Indonesia. Dijamin aman sampai tujuan, lengkap dengan asuransi dan tracking real-time. Mobil Anda akan dirawat seperti milik sendiri!",
      image: "/images/kirim_mobil.jpeg?height=200&width=300",
      icon: Car,
      whatsappMessage:
        "Halo CV. DUA BINTANG! Saya tertarik dengan layanan *Kirim Mobil*. Saya ingin mengirim mobil ke [tujuan]. Bisa tolong berikan informasi harga dan prosedurnya? Terima kasih!",
    },
    {
      title: "Kirim Motor",
      description:
        "Motor kesayangan perlu dikirim ke luar kota? Gampang banget! Tim kami udah berpengalaman bertahun-tahun nangani pengiriman motor. Dari motor bebek sampai moge, semua ditangani dengan extra hati-hati. Motor sampai mulus tanpa lecet!",
      image: "/images/kirim_motorr.jpeg?height=200&width=300",
      icon: Bike,
      whatsappMessage:
        "Halo CV. DUA BINTANG! Saya mau kirim motor dengan layanan *Kirim Motor*. Motor saya [jenis motor] mau dikirim ke [tujuan]. Mohon info harga dan estimasi waktu pengiriman ya. Terima kasih!",
    },
    {
      title: "Alat Berat",
      description:
        "Punya excavator, bulldozer, atau alat berat lainnya yang perlu dipindah? Serahkan pada ahlinya! Kami punya peralatan khusus dan tim yang udah terlatih khusus untuk alat berat. Pengalaman puluhan tahun bikin kami paham betul cara nangani 'si besar' ini.",
      image: "/images/kirim2.jpeg?height=200&width=300",
      icon: Truck,
      whatsappMessage:
        "Halo CV. DUA BINTANG! Saya butuh layanan *Alat Berat* untuk memindahkan [jenis alat berat] dari [asal] ke [tujuan]. Bisa tolong berikan penawaran dan jadwal yang tersedia? Terima kasih!",
    },
    {
      title: "Jual Beli Kendaraan",
      description:
        "Mau jual mobil atau motor tapi ribet ngurusnya? Atau lagi nyari kendaraan bekas berkualitas? Kami bantu dari A sampai Z! Proses cepat, harga fair, dan semua dokumen dijamin lengkap. Gak perlu pusing mikirin surat-surat!",
      image: "/images/jual_beli.jpeg?height=200&width=300",
      icon: ShoppingCart,
      whatsappMessage:
        "Halo CV. DUA BINTANG! Saya tertarik dengan layanan *Jual Beli Kendaraan*. Saya ingin [jual/beli] [jenis kendaraan]. Bisa tolong bantu prosesnya? Terima kasih!",
    },
    {
      title: "Pengiriman Driver (Self Drive)",
      description:
        "Butuh driver handal untuk bawa kendaraan Anda? Driver kami bukan sembarangan! Sudah bersertifikat, berpengalaman, dan yang pasti amanah. Kendaraan Anda akan sampai dengan selamat di tangan driver profesional kami.",
      image: "/images/via_darat.jpeg?height=200&width=300",
      icon: UserCheck,
      whatsappMessage:
        "Halo CV. DUA BINTANG! Saya memerlukan layanan *Pengiriman Driver (Self Drive)* untuk membawa [jenis kendaraan] dari [asal] ke [tujuan]. Mohon info driver yang tersedia dan tarifnya. Terima kasih!",
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
    <section id="services" className="py-20 bg-white">
      <div className="container px-4">
        <motion.div
          className="flex justify-between items-start mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <div>
            <motion.span className="text-sm font-medium text-gray-500 uppercase tracking-wide" variants={itemVariants}>
              LAYANAN KAMI
            </motion.span>
            <motion.h2 className="mt-2 text-4xl font-bold text-gray-900 leading-tight" variants={itemVariants}>
              Layanan Towing Terpercaya, <br />
              Siap Membantu Kapan Saja
            </motion.h2>
          </div>
        
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {mainServices.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow duration-300">
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
          viewport={{ once: true, amount: 0.3 }}
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
