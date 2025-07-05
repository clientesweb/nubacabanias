"use client"

import type React from "react"
import {
  ArrowLeft,
  MapPin,
  Phone,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  X,
  Star,
  Bed,
  Car,
  Wifi,
  Flame,
  Check,
  Clock,
  Shield,
  Calendar,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function CabanaFamiliarPage() {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0)
  const [currentImage, setCurrentImage] = useState(0)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [isFormVisible, setIsFormVisible] = useState(false)

  const announcements = [
    "🌿 Oferta especial: 5 noches al precio de 4",
    "🏔️ Valle de Calamuchita - Naturaleza pura",
    "🔥 Cabañas equipadas con asador privado",
  ]

  const galleryImages = [
    { src: "/images/cabana-familiar-exterior.jpg", alt: "Cabaña Familiar - Vista exterior con jardín paisajístico" },
    {
      src: "/images/cabana-familiar-dormitorio-1.jpg",
      alt: "Cabaña Familiar - Dormitorio principal con vigas de madera",
    },
    { src: "/images/cabana-familiar-cocina-comedor.jpg", alt: "Cabaña Familiar - Cocina y comedor integrados" },
    { src: "/images/cabana-familiar-living-comedor.jpg", alt: "Cabaña Familiar - Living comedor con sofá cama" },
    { src: "/images/cabana-familiar-dormitorio-bano.jpg", alt: "Cabaña Familiar - Dormitorio y baño moderno" },
    { src: "/images/cabana-familiar-cocina-completa.jpg", alt: "Cabaña Familiar - Cocina completa equipada" },
    {
      src: "/images/cabana-familiar-dormitorio-principal.jpg",
      alt: "Cabaña Familiar - Dormitorio con ventanas amplias",
    },
    { src: "/images/cabana-familiar-suite-bano.jpg", alt: "Cabaña Familiar - Suite con baño privado" },
    { src: "/images/cabana-familiar-piscina.jpg", alt: "Cabaña Familiar - Acceso a piscina del complejo" },
    { src: "/images/cabana-familiar-dormitorio-2.jpg", alt: "Cabaña Familiar - Dormitorio con cabecero de madera" },
  ]

  const quickFeatures = [
    { icon: Bed, title: "1 Dormitorio", subtitle: "Matrimonial + sofá cama" },
    { icon: Car, title: "Cochera", subtitle: "Cubierta incluida" },
    { icon: Wifi, title: "Wi-Fi", subtitle: "Alta velocidad gratis" },
    { icon: Flame, title: "Asador", subtitle: "Moderno con parrilla" },
  ]

  const features = [
    "Construcción moderna en piedra",
    "Diseño contemporáneo y funcional",
    "Amplio jardín privado",
    "Check-in: 10:00 AM - Check-out: 13:00 HS",
    "Aire acondicionado y calefacción",
    "Cocina completa con electrodomésticos",
    "Espacios amplios y luminosos",
    "Asador de ladrillo con parrilla",
    "Cochera cubierta",
    "Wi-Fi de alta velocidad",
    "TV LED 32 pulgadas",
    "Mobiliario moderno",
    "Ropa de cama premium",
    "Baño moderno con ducha",
    "Heladera con freezer",
    "Microondas y utensilios completos",
    "Vigas de madera a la vista",
    "Pisos de cerámica",
    "Acceso a piscina del complejo",
  ]

  const testimonials = [
    {
      name: "María González",
      rating: 5,
      comment: "Excelente cabaña, muy cómoda y bien equipada. El jardín es hermoso y la ubicación perfecta.",
      date: "Hace 2 semanas",
    },
    {
      name: "Carlos Rodríguez",
      rating: 5,
      comment:
        "Perfecta para familias. Los niños disfrutaron mucho del espacio exterior y nosotros de la tranquilidad.",
      date: "Hace 1 mes",
    },
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

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const checkin = formData.get("checkin") as string
    const checkout = formData.get("checkout") as string
    const guests = formData.get("guests") as string
    const message = formData.get("message") as string

    const whatsappMessage = `🏔️ *RESERVA CABAÑA FAMILIAR - NUBA*

👤 *Nombre:* ${name}
📧 *Email:* ${email}
📅 *Check-in:* ${checkin} (10:00 AM)
📅 *Check-out:* ${checkout} (13:00 HS)
👥 *Huéspedes:* ${guests}

💬 *Mensaje:*
${message}

---
🏠 *Cabaña solicitada:* Cabaña Familiar (2-4 personas)
🎉 *Oferta especial:* 5 noches al precio de 4
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
          className="group bg-green-600 hover:bg-green-700 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
          <div className="absolute right-full mr-2 sm:mr-3 top-1/2 transform -translate-y-1/2 bg-green-800 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-poppins font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
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
      <header className="bg-white/95 backdrop-blur-sm border-b border-stone-200/50 sticky top-0 z-40">
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
          <div className="w-8"></div>
        </div>
      </header>

      {/* Hero Banner - Cabaña Familiar Specific */}
      <section className="relative w-full">
        <div className="relative w-full cursor-pointer group" onClick={handleWhatsAppClick}>
          <Image
            src="/images/banner-cabana-familiar.webp"
            alt="¡Te Esperamos! Cabaña Familiar - Haz clic para consultar por WhatsApp"
            width={1920}
            height={1080}
            className="w-full h-auto object-contain group-hover:brightness-110 transition-all duration-300"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      {/* Cabaña Info Section */}
      <section className="bg-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-stone-200">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-montserrat font-extrabold text-stone-900 mb-2">
                Cabaña Familiar
              </h1>
              <p className="text-stone-600 font-poppins text-sm sm:text-base">
                Construcción moderna • 2-4 personas • Diseño contemporáneo
              </p>
              <div className="flex items-center mt-3 space-x-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm text-stone-600 font-poppins">4.7 (79 reseñas)</span>
                  <a
                    href="https://g.co/kgs/7UVQvvG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-xs text-blue-600 hover:text-blue-800 font-poppins underline transition-colors"
                  >
                    Ver todas
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="bg-green-50 py-4 border-b border-green-200">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <div className="text-center">
            <h4 className="font-montserrat font-bold text-green-800 text-sm sm:text-base mb-1">
              🎉 Oferta Especial: 5 noches al precio de 4
            </h4>
            <p className="text-green-700 font-poppins text-xs">
              ¡Aprovecha esta oportunidad única para disfrutar más días en el valle!
            </p>
          </div>
        </div>
      </section>

      {/* Quick Features Bar */}
      <section className="bg-white py-4 border-b border-stone-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {quickFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-stone-50 rounded-xl">
                <div className="w-8 h-8 bg-forest-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-4 w-4 text-forest-700" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-montserrat font-bold text-stone-900 text-sm truncate">{feature.title}</h3>
                  <p className="text-stone-600 font-poppins text-xs truncate">{feature.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
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
                  index === currentImage ? "border-forest-600 ring-2 ring-forest-200" : "border-transparent"
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
              {/* Urgency Banner */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl p-4 sm:p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="h-5 w-5 text-red-600" />
                  <h3 className="font-montserrat font-bold text-red-800">¡Disponibilidad Limitada!</h3>
                </div>
                <p className="text-red-700 font-poppins text-sm">
                  Solo quedan 3 fechas disponibles este mes. Reserve ahora para asegurar su estadía.
                </p>
              </div>

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
                    Con hermosas vigas de madera a la vista, paredes de ladrillo blanco y pisos de cerámica, esta cabaña
                    cuenta con todas las comodidades necesarias para una estadía memorable. Su diseño funcional incluye
                    cocina completa, baño moderno con ducha, y acceso a la piscina del complejo.
                  </p>
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-xl sm:text-2xl font-montserrat font-extrabold text-stone-900 mb-6">
                  Características Destacadas
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-stone-50 rounded-xl">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-stone-700 font-poppins text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              <div>
                <h2 className="text-xl sm:text-2xl font-montserrat font-extrabold text-stone-900 mb-6">
                  Lo que dicen nuestros huéspedes
                </h2>
                <div className="space-y-4">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-stone-50 rounded-2xl p-4 sm:p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-forest-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-montserrat font-bold text-sm">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-montserrat font-bold text-stone-900 text-sm">{testimonial.name}</h4>
                          <div className="flex items-center space-x-2">
                            <div className="flex">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <span className="text-xs text-stone-500 font-poppins">{testimonial.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-stone-600 font-poppins text-sm italic">"{testimonial.comment}"</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Info */}
              <div className="bg-gradient-to-br from-forest-50 to-forest-100 rounded-2xl p-6">
                <h2 className="text-xl sm:text-2xl font-montserrat font-extrabold text-stone-900 mb-4">
                  Ubicación Privilegiada
                </h2>
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
              <div className="sticky top-24">
                <Card className="border-0 shadow-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-forest-600 to-forest-700 p-4 text-white">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Shield className="h-5 w-5" />
                        <span className="font-poppins font-semibold text-sm">Reserva Segura</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-montserrat font-extrabold">Reservar Cabaña Familiar</h3>
                    <p className="text-forest-100 font-poppins text-sm">2-4 personas • Disponibilidad limitada</p>
                  </div>

                  <CardContent className="p-6">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="h-4 w-4 text-yellow-600" />
                        <span className="font-poppins font-semibold text-yellow-800 text-sm">Oferta Especial</span>
                      </div>
                      <p className="text-yellow-700 font-poppins text-sm">
                        5 noches al precio de 4 - ¡Aprovecha esta oportunidad única!
                      </p>
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
                          className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:outline-none focus:border-forest-600 focus:ring-2 focus:ring-forest-200 font-poppins text-sm transition-all duration-300"
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
                          className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:outline-none focus:border-forest-600 focus:ring-2 focus:ring-forest-200 font-poppins text-sm transition-all duration-300"
                          placeholder="su@email.com"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label
                            htmlFor="checkin"
                            className="block text-sm font-poppins font-semibold mb-2 text-stone-700"
                          >
                            Fecha de entrada *
                          </label>
                          <input
                            type="date"
                            id="checkin"
                            name="checkin"
                            required
                            className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:outline-none focus:border-forest-600 focus:ring-2 focus:ring-forest-200 font-poppins text-sm transition-all duration-300"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="checkout"
                            className="block text-sm font-poppins font-semibold mb-2 text-stone-700"
                          >
                            Fecha de salida *
                          </label>
                          <input
                            type="date"
                            id="checkout"
                            name="checkout"
                            required
                            className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:outline-none focus:border-forest-600 focus:ring-2 focus:ring-forest-200 font-poppins text-sm transition-all duration-300"
                          />
                        </div>
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
                          className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:outline-none focus:border-forest-600 focus:ring-2 focus:ring-forest-200 font-poppins text-sm transition-all duration-300"
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
                          className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:outline-none focus:border-forest-600 focus:ring-2 focus:ring-forest-200 resize-none font-poppins text-sm transition-all duration-300"
                          placeholder="Comentarios adicionales, consultas especiales..."
                        ></textarea>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 py-4 rounded-xl font-poppins font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                      >
                        <MessageCircle className="h-5 w-5" />
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
                      <div className="text-center mt-3">
                        <p className="text-xs text-stone-500 font-poppins">Respuesta inmediata por WhatsApp</p>
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
