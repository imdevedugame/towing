import { Clock, Zap, Users, DollarSign, Wrench } from "lucide-react"

export function WhyChooseUs() {
  const features = [
    {
      number: "1.",
      title: "Ketersediaan 24/7",
      description: "Tersedia kapan saja, siang atau malam, untuk layanan towing dan dukungan darurat di jalan.",
      icon: Clock,
    },
    {
      number: "2.",
      title: "Waktu Respon Cepat",
      description: "Tim kami tiba dengan cepat, biasanya dalam 30 menit dari permintaan layanan Anda.",
      icon: Zap,
    },
    {
      number: "3.",
      title: "Tim Bersertifikat & Terlatih",
      description:
        "Pengemudi dan teknisi profesional yang terlatih untuk menangani setiap situasi dengan perawatan ahli.",
      icon: Users,
    },
    {
      number: "4.",
      title: "Harga Transparan",
      description: "Harga yang jelas dan di muka tanpa biaya tersembunyi atau biaya layanan kejutan.",
      icon: DollarSign,
    },
    {
      number: "5.",
      title: "Peralatan Modern",
      description:
        "Kami menggunakan peralatan towing yang andal dan bebas kerusakan yang cocok untuk semua jenis kendaraan.",
      icon: Wrench,
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
            <img
              src="/images/banner1.jpeg?height=500&width=500"
              alt="Professional towing service"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <div className="mb-8">
              <span className="text-sm font-medium text-blue-500 uppercase tracking-wide">MENGAPA MEMILIH KAMI</span>
              <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                Didorong Oleh Kepedulian. <br className="hidden sm:block" />
                Didukung Oleh Kecepatan.
              </h2>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
                      <feature.icon className="h-5 w-5 text-blue-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {feature.number} {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
