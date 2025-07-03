"use client"

import type React from "react"
import { ArrowLeft, MapPin, Phone, MessageCircle, ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function CabanaFamiliarPage() {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0)
  const [currentImage, setCurrentImage] = useState(0)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)

  const announcements = [
    "🌿 20% OFF en estadías de 3+ noches",
    "🏔️ Valle de Calamuchita - Naturaleza pura",
    "🔥 Cabañas equipadas con asador privado",
  ]

  const galleryImages = [
    { src: "/images/cabana-familiar.jpg", alt: "Cabaña Familiar - Vista exterior principal" },
    { src: "/images/complejo-cabanas.webp", alt: "Cabaña Familiar - Vista del complejo" },
    { src: "/images/cabana-asador-lena.webp", alt: "Cabaña Familiar - Asador con leñera" },
    { src: "/images/muebles-exterior.webp", alt: "Cabaña Familiar - Muebles de exterior" },
    { src: "/images/piscina-montanas.webp", alt: "Cabaña Familiar - Piscina con vista a montañas" },
    { src: "/images/living-exterior.webp", alt: "Cabaña Familiar - Living exterior" },
  ]

  const features = [
    "Construcción moderna en piedra",
    "Diseño contemporáneo y funcional",
    "Amplio jardín privado",
    "Aire acondicionado y calefacción",
    "Cocina completa con electrodomésticos",
    "Espacios amplios y luminosos",
    "Asador de ladrillo con parrilla",
    "Cochera cubierta",
    "Wi-Fi de alta velocidad",
    "TV LED 32 pulgadas",
    "Mobiliario moderno",
    "Ropa de cama premium",
  ]

  const amenities = [
    { icon: "🏠", title: "Capacidad", description: "2-4 personas" },
    { icon: "🛏️", title: "Dormitorios", description: "1 dormitorio matrimonial" },
    { icon: "🛋️", title: "Living", description: "Sofá cama doble" },
    { icon: "🍳", title: "Cocina", description: "Completa con microondas" },
    { icon: "🚿", title: "Baño", description: "Completo con amenities" },
    { icon: "🔥", title: "Asador", description: "Moderno con parrilla" },
    { icon: "🚗", title: "Cochera", description: "Cubierta para 1 auto" },
    { icon: "🌳", title: "Jardín", description: "Amplio con deck" },
  ]

  // Announcement rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // WhatsApp click handler
  const handleWhatsAppClick = () => {
    const phoneNumber = "5493546501444"
    const message =
      "Hola! Me interesa la Cabaña Familiar de Cabañas NUBA. ¿Podrían brindarme información sobre disponibilidad y tarifas?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  // Contact form handler
  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const dates = formData.get("dates") as string
    const guests = formData.get("guests") as string
    const message = formData.get("message") as string

    const whatsappMessage = `🏔️ *RESERVA CABAÑA FAMILIAR - NUBA*

👤 *Nombre:* ${name}
📧 *Email:* ${email}
📅 *Fechas:* ${dates}
👥 *Huéspedes:* ${guests}

💬 *Mensaje:*
${message}

---
🏠 *Cabaña solicitada:* Cabaña Familiar (2-4 personas)
Enviado desde el sitio web de Cabañas NUBA`

    const phoneNumber = "5493546501444"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, "_blank")
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <button
          onClick={handleWhatsAppClick}
          className="group bg-forest-600 hover:bg-forest-700 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
          <div className="absolute right-full mr-2 sm:mr-3 top-1/2 transform -translate-y-1/2 bg-forest-800 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-poppins font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            ¡Consultanos por WhatsApp!
          </div>
        </button>
      </div>

      {/* Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-stone-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative">
              <Image
                src={galleryImages[currentImage].src || "/placeholder.svg"}
                alt={galleryImages[currentImage].alt}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-stone-300"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-stone-300"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full ${index === currentImage ? "bg-white" : "bg-white/50"}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Announcement Bar */}
      <div className="bg-forest-800 text-stone-50 py-2 px-2 text-center relative overflow-hidden">
        <div className="relative w-full">
          {announcements.map((announcement, index) => (
            <div
              key={index}
              className={`transition-opacity duration-500 ${
                index === currentAnnouncement
                  ? "opacity-100"
                  : "opacity-0 absolute inset-0 flex items-center justify-center"
              }`}
            >
              <p className="text-xs sm:text-sm font-poppins font-medium px-2 text-center leading-tight">
                {announcement}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-stone-200/50">
        <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center text-stone-600 hover:text-forest-700 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              <span className="text-sm font-poppins font-medium">Volver</span>
            </Link>
            <div className="h-6 w-px bg-stone-300"></div>
            <Link href="/">
              <Image
                src="/images/logo-cabanas-nuba.png"
                alt="Cabañas NUBA"
                width={120}
                height={60}
                className="h-8 sm:h-10 lg:h-12 w-auto"
                priority
              />
            </Link>
          </div>
          <Button
            onClick={handleWhatsAppClick}
            className="bg-forest-700 text-white hover:bg-forest-800 px-3 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm lg:px-6 lg:py-2 lg:text-base rounded-full font-poppins font-semibold"
          >
            Reservar
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
          <Image
            src={galleryImages[currentImage].src || "/placeholder.svg"}
            alt={galleryImages[currentImage].alt}
            fill
            className="object-cover cursor-pointer"
            onClick={() => setIsGalleryOpen(true)}
            priority
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-montserrat font-extrabold text-stone-900 mb-2">
                Cabaña Familiar
              </h1>
              <p className="text-stone-600 font-poppins text-sm sm:text-base">
                Construcción moderna • 2-4 personas • Diseño contemporáneo
              </p>
            </div>
          </div>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-stone-800 p-2 rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-stone-800 p-2 rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* Gallery Thumbnails */}
      <section className="bg-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentImage(index)
                  setIsGalleryOpen(true)
                }}
                className={`flex-shrink-0 relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentImage ? "border-forest-600" : "border-transparent"
                }`}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div>
                <h2 className="text-xl sm:text-2xl font-montserrat font-extrabold text-stone-900 mb-4">Descripción</h2>
                <div className="prose prose-stone max-w-none">
                  <p className="text-stone-600 font-poppins leading-relaxed mb-4">
                    Nuestra Cabaña Familiar representa la perfecta combinación entre diseño contemporáneo y comodidad.
                    Construida con materiales modernos y piedra natural, ofrece espacios amplios y luminosos ideales
                    para familias de hasta 4 personas que buscan una experiencia de alojamiento superior en el Valle de
                    Calamuchita.
                  </p>
                  <p className="text-stone-600 font-poppins leading-relaxed">
                    Con un amplio jardín privado y mobiliario moderno, esta cabaña cuenta con todas las comodidades
                    necesarias para una estadía memorable. Su diseño funcional y elegante la convierte en la opción
                    perfecta para quienes valoran el confort y el estilo.
                  </p>
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-xl sm:text-2xl font-montserrat font-extrabold text-stone-900 mb-6">
                  Características
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-forest-600 rounded-full flex-shrink-0"></div>
                      <span className="text-stone-700 font-poppins text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities Grid */}
              <div>
                <h2 className="text-xl sm:text-2xl font-montserrat font-extrabold text-stone-900 mb-6">Comodidades</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {amenities.map((amenity, index) => (
                    <div key={index} className="text-center p-4 bg-stone-50 rounded-xl">
                      <div className="text-2xl mb-2">{amenity.icon}</div>
                      <h3 className="font-montserrat font-extrabold text-stone-900 text-sm mb-1">{amenity.title}</h3>
                      <p className="text-stone-600 font-poppins text-xs">{amenity.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Info */}
              <div className="bg-stone-50 rounded-2xl p-6">
                <h2 className="text-xl sm:text-2xl font-montserrat font-extrabold text-stone-900 mb-4">Ubicación</h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-forest-600" />
                    <span className="text-stone-700 font-poppins">Santa Rosa de Calamuchita, Córdoba</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-forest-600" />
                    <span className="text-stone-700 font-poppins">A 96 km de Córdoba Capital</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-forest-600" />
                    <span className="text-stone-700 font-poppins">A 700 metros de la Ruta Provincial nº 5</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Reservation Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-4">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-montserrat font-extrabold text-stone-900 mb-2">Reservar Cabaña</h3>
                      <p className="text-stone-600 font-poppins text-sm">2-4 personas</p>
                    </div>

                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-poppins font-semibold mb-2 text-stone-700">
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:outline-none focus:border-forest-600 font-poppins text-sm"
                          placeholder="Su nombre completo"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-poppins font-semibold mb-2 text-stone-700">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:outline-none focus:border-forest-600 font-poppins text-sm"
                          placeholder="su@email.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="dates" className="block text-sm font-poppins font-semibold mb-2 text-stone-700">
                          Fechas de estadía *
                        </label>
                        <input
                          type="text"
                          id="dates"
                          name="dates"
                          required
                          className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:outline-none focus:border-forest-600 font-poppins text-sm"
                          placeholder="Ej: 15-20 de enero 2024"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="guests"
                          className="block text-sm font-poppins font-semibold mb-2 text-stone-700"
                        >
                          Cantidad de huéspedes *
                        </label>
                        <select
                          id="guests"
                          name="guests"
                          required
                          className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:outline-none focus:border-forest-600 font-poppins text-sm"
                        >
                          <option value="">Seleccionar...</option>
                          <option value="2 personas">2 personas</option>
                          <option value="3 personas">3 personas</option>
                          <option value="4 personas">4 personas</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-poppins font-semibold mb-2 text-stone-700"
                        >
                          Mensaje adicional
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={3}
                          className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:outline-none focus:border-forest-600 resize-none font-poppins text-sm"
                          placeholder="Comentarios adicionales, consultas especiales..."
                        ></textarea>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-forest-700 text-white hover:bg-forest-800 py-3 rounded-xl font-poppins font-semibold flex items-center justify-center space-x-2"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>Consultar por WhatsApp</span>
                      </Button>
                    </form>

                    <div className="mt-6 pt-6 border-t border-stone-200">
                      <div className="flex items-center justify-center space-x-4 text-stone-600">
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4" />
                          <span className="text-xs font-poppins">+54 9 3546 50-1444</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <div className="mb-4 md:mb-0">
              <Link href="/">
                <Image
                  src="/images/logo-cabanas-nuba.png"
                  alt="Cabañas NUBA"
                  width={120}
                  height={60}
                  className="h-8 sm:h-10 w-auto filter brightness-0 invert opacity-70"
                />
              </Link>
            </div>
            <div className="text-center md:text-right">
              <p className="text-xs sm:text-sm font-poppins mb-1">
                &copy; 2024 Cabañas NUBA. Todos los derechos reservados.
              </p>
              <p className="text-xs text-stone-500 font-poppins">
                Desarrollado por{" "}
                <a
                  href="https://dualitydomain.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-stone-300 transition-colors"
                >
                  Duality Domain
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
