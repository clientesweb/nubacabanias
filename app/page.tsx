"use client"

import type React from "react"

import {
  MapPin,
  Wifi,
  Car,
  Users,
  Phone,
  Mail,
  MessageCircle,
  Instagram,
  Facebook,
  Camera,
  ArrowRight,
  ImageIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function CabanasNybaPage() {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0)

  const announcements = [
    "🍻 ¡Viví la Oktoberfest 2025!",
    "🏡 Hospedate en Cabañas Nuba, a minutos de la fiesta",
    "📲 Reservá fácil ¡Contáctanos!",
  ]

  const cabanas = [
    {
      id: 2,
      name: "Cabaña Familiar",
      capacity: "2-4 personas",
      image: "/images/cabana-familiar.jpg",
      features: [
        "Construcción moderna en piedra",
        "Amplio jardín privado",
        "Diseño contemporáneo",
        "Aire acondicionado",
        "Espacios amplios",
        "Ideal para familias",
      ],
    },
    {
      id: 1,
      name: "Cabaña de Madera",
      capacity: "Máximo 2 personas",
      image: "/images/cabana-madera-galeria.webp",
      features: [
        "Construcción tradicional en troncos",
        "Ambiente rústico auténtico",
        "Galería cubierta con mobiliario",
        "Calefacción a gas",
        "Cocina completa",
        "Entorno natural",
      ],
    },
  ]

  const galleryPreview = [
    { src: "/images/bienvenidos-valle.webp", alt: "Vista panorámica del valle" },
    { src: "/images/entrada-nuba-sign.webp", alt: "Entrada principal del complejo" },
    { src: "/images/piscina-montanas.webp", alt: "Piscina con vista a las montañas" },
    { src: "/images/cabana-exterior-1.webp", alt: "Cabaña con jardines paisajísticos" },
    { src: "/images/complejo-cabanas.webp", alt: "Vista aérea del complejo" },
    { src: "/images/muebles-exterior.webp", alt: "Área de estar exterior" },
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
      "Hola! Me interesa conocer más sobre las Cabañas NUBA. ¿Podrían brindarme información sobre disponibilidad y tarifas?"
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
    const message = formData.get("message") as string

    const whatsappMessage = `🏔️ *CONSULTA CABAÑAS NUBA*

👤 *Nombre:* ${name}
📧 *Email:* ${email}
📅 *Fechas:* ${dates}

💬 *Mensaje:*
${message}

---
Enviado desde el sitio web de Cabañas NUBA`

    const phoneNumber = "5493546501444"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, "_blank")
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
      <header className="absolute top-8 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200/50">
        <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/images/logo-cabanas-nuba.png"
              alt="Cabañas NUBA"
              width={120}
              height={60}
              className="h-8 sm:h-10 lg:h-12 w-auto"
              priority
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a
              href="#inicio"
              className="text-stone-700 hover:text-forest-700 transition-colors font-poppins font-medium text-sm"
            >
              Inicio
            </a>
            <a
              href="#cabanas"
              className="text-stone-700 hover:text-forest-700 transition-colors font-poppins font-medium text-sm"
            >
              Cabañas
            </a>
            <Link
              href="/galeria"
              className="text-stone-700 hover:text-forest-700 transition-colors font-poppins font-medium text-sm"
            >
              Galería
            </Link>
            <a
              href="#ubicacion"
              className="text-stone-700 hover:text-forest-700 transition-colors font-poppins font-medium text-sm"
            >
              Ubicación
            </a>
            <a
              href="#contacto"
              className="text-stone-700 hover:text-forest-700 transition-colors font-poppins font-medium text-sm"
            >
              Contacto
            </a>
          </nav>
          <Button className="bg-forest-700 text-white hover:bg-forest-800 px-3 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm lg:px-6 lg:py-2 lg:text-base rounded-full font-poppins font-semibold">
            Reservar
          </Button>
        </div>
      </header>

      {/* Hero Banner - Fixed Image with WhatsApp Link */}
      <section id="inicio" className="relative w-full pt-[68px] sm:pt-[76px] lg:pt-20">
        <div className="relative w-full cursor-pointer group" onClick={handleWhatsAppClick}>
          <Image
            src="/images/bienvenidos-valle.webp"
            alt="Bienvenidos a Cabañas Nuba - Valle de Calamuchita - Haz clic para consultar por WhatsApp"
            width={1920}
            height={1080}
            className="w-full h-auto object-contain group-hover:brightness-110 transition-all duration-300"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="bg-white py-0">
        <div className="w-full">
          <div
            className="relative overflow-hidden cursor-pointer group"
            onClick={() => {
              const phoneNumber = "5493546501444"
              const message =
                "🎉 ¡Hola! Me interesa la promoción especial: 5 noches al precio de 4 en Cabañas NUBA. ¿Podrían brindarme más información sobre esta oferta especial?"
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
              window.open(whatsappUrl, "_blank")
            }}
          >
            <Image
              src="/images/banner-5-noches.webp"
              alt="Promoción especial - 5 noches al precio de 4 - Haz clic para consultar por WhatsApp"
              width={1920}
              height={400}
              className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
          </div>
        </div>
      </section>

      {/* Cabañas Section */}
      <section id="cabanas" className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-extrabold text-stone-900 mb-3 sm:mb-4">
              NUESTRAS CABAÑAS
            </h2>
            <p className="text-base sm:text-lg text-stone-600 max-w-xl mx-auto font-poppins font-medium px-4">
              Espacios únicos diseñados para su descanso y comodidad
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {cabanas.map((cabana, index) => (
              <Card
                key={cabana.id}
                className="group overflow-hidden border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 relative"
              >
                {/* Special Offer Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-green-600 text-white border-0 px-3 py-1 text-sm font-bold shadow-lg">5x4</Badge>
                </div>

                <div className="relative overflow-hidden">
                  <Image
                    src={cabana.image || "/placeholder.svg"}
                    alt={cabana.name}
                    width={600}
                    height={400}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                  />
                </div>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-1 sm:gap-0">
                    <h3 className="text-lg sm:text-xl font-montserrat font-extrabold text-stone-900">{cabana.name}</h3>
                    <span className="text-sm text-stone-500 font-poppins font-medium">{cabana.capacity}</span>
                  </div>

                  {/* Special Offer Section */}
                  <div className="mb-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-green-800 font-poppins font-semibold text-sm">Oferta Especial</span>
                      </div>
                      <Badge className="bg-green-600 text-white text-xs">5x4</Badge>
                    </div>
                    <p className="text-green-700 font-poppins text-sm font-medium">
                      5 noches al precio de 4 - ¡Aprovecha esta oportunidad única!
                    </p>
                  </div>

                  <ul className="space-y-2 text-stone-600 text-sm mb-4">
                    {cabana.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center font-poppins">
                        <span className="w-1 h-1 bg-forest-600 rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/cabana-${cabana.id === 1 ? "madera" : "familiar"}`}>
                    <Button className="w-full bg-gradient-to-r from-forest-600 to-forest-700 text-white hover:from-forest-700 hover:to-forest-800 rounded-full font-poppins font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                      Ver Detalles y Reservar
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Banner */}
      <section className="bg-white py-0">
        <div className="w-full">
          <a
            href="https://turismo.municipiosantarosa.gob.ar/nuba/"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="relative overflow-hidden cursor-pointer">
              <Image
                src="/images/banner-cabanas-certificadas-nuba.webp"
                alt="Cabañas Certificadas - Habilitación Municipal T-148, Calidad Turística SIGO, Ministerio de Turismo - Santa Rosa de Calamuchita"
                width={1920}
                height={400}
                className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
            </div>
          </a>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="bg-gradient-to-br from-stone-100 to-stone-200 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-extrabold text-stone-900 mb-3 sm:mb-4">
                GALERÍA DE IMÁGENES
              </h2>
              <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto font-poppins font-medium">
                Descubre la belleza de nuestras cabañas y el entorno natural del Valle de Calamuchita
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12">
              {galleryPreview.map((image, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-32 sm:h-40 lg:h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                      <ImageIcon className="h-3 w-3 sm:h-4 sm:w-4 text-stone-700" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-white/50 max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Camera className="h-6 w-6 text-forest-600" />
                  <h3 className="text-xl sm:text-2xl font-montserrat font-extrabold text-stone-900">
                    Ver Galería Completa
                  </h3>
                </div>
                <p className="text-stone-600 font-poppins mb-6 text-sm sm:text-base">
                  Explora todas nuestras imágenes organizadas por categorías: exteriores, interiores, asadores, piscina
                  y paisajes del valle.
                </p>
                <Link href="/galeria">
                  <Button className="bg-gradient-to-r from-forest-600 to-forest-700 text-white hover:from-forest-700 hover:to-forest-800 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-poppins font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto">
                    <Camera className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>Explorar Galería</span>
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="ubicacion" className="bg-stone-50 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-extrabold text-stone-900 mb-3 sm:mb-4">
                UBICACIÓN
              </h2>
              <p className="text-base sm:text-lg text-stone-600 font-poppins font-medium">
                En el corazón de Santa Rosa de Calamuchita
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-forest-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-forest-700" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-montserrat font-extrabold mb-1 text-stone-900">
                      Ruta Provincial nº 5
                    </h3>
                    <p className="text-stone-600 text-sm font-poppins">A solo 700 metros de la ruta principal</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-forest-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-forest-700" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-montserrat font-extrabold mb-1 text-stone-900">
                      96 km de Córdoba
                    </h3>
                    <p className="text-stone-600 text-sm font-poppins">Escapada perfecta desde la capital</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-forest-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-forest-700" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-montserrat font-extrabold mb-1 text-stone-900">
                      Río y costanera
                    </h3>
                    <p className="text-stone-600 text-sm font-poppins">A una cuadra del río para actividades</p>
                  </div>
                </div>
              </div>

              <div className="relative order-1 lg:order-2">
                <div className="mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.8!2d-64.5479336!3d-32.0560431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2bb3d1ada3871%3A0xf3ba3e81998ccb5c!2sNUBA%20caba%C3%B1as!5e0!3m2!1ses!2sar!4v1640000000000!5m2!1ses!2sar!4v1640000000000"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl shadow-lg sm:h-[350px]"
                  ></iframe>
                </div>
                <div className="mt-4 text-center">
                  <a
                    href="https://www.google.com/maps/place/NUBA+caba%C3%B1as/@-32.0560431,-64.5505085,17z/data=!3m1!4b1!4m9!3m8!1s0x95d2bb3d1ada3871:0xf3ba3e81998ccb5c!5m2!4m1!1i2!8m2!3d-32.0560431!4d-64.5479336!16s%2Fg%2F11c2l0y3tp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-forest-700 text-white rounded-full hover:bg-forest-800 transition-colors text-xs sm:text-sm font-poppins font-semibold"
                  >
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                    Ver en Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Improved */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-extrabold text-stone-900 mb-3 sm:mb-4">
                SERVICIOS Y COMODIDADES
              </h2>
              <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto font-poppins font-medium">
                Todo lo que necesitas para una estadía perfecta en el Valle de Calamuchita
              </p>
            </div>

            {/* Main Services */}
            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              <Card className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-forest-50 to-forest-100">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-forest-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Car className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-montserrat font-extrabold mb-3 text-stone-900">
                    Cochera y Asador
                  </h3>
                  <p className="text-stone-600 font-poppins text-sm sm:text-base leading-relaxed">
                    Cochera cubierta para tu vehículo y asador individual de ladrillo para disfrutar al aire libre
                  </p>
                </CardContent>
              </Card>

              <Card className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Wifi className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-montserrat font-extrabold mb-3 text-stone-900">
                    Conectividad Total
                  </h3>
                  <p className="text-stone-600 font-poppins text-sm sm:text-base leading-relaxed">
                    Wi-Fi gratuito de alta velocidad y TV LED 32" para tu entretenimiento y conectividad
                  </p>
                </CardContent>
              </Card>

              <Card className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-amber-50 to-amber-100">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-montserrat font-extrabold mb-3 text-stone-900">
                    Ambiente Familiar
                  </h3>
                  <p className="text-stone-600 font-poppins text-sm sm:text-base leading-relaxed">
                    Espacio exclusivamente familiar en un entorno seguro y tranquilo para toda la familia
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Detailed Amenities */}
            <div className="bg-gradient-to-br from-stone-50 to-stone-100 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-montserrat font-extrabold mb-6 sm:mb-8 text-stone-900 text-center">
                COMODIDADES INCLUIDAS
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {/* Column 1 */}
                <div className="space-y-4">
                  <h4 className="font-montserrat font-bold text-forest-700 text-sm sm:text-base mb-3 flex items-center">
                    <span className="w-2 h-2 bg-forest-600 rounded-full mr-2"></span>
                    COCINA Y COMEDOR
                  </h4>
                  <ul className="space-y-2 text-stone-700 text-sm font-poppins">
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-stone-400 rounded-full mr-3 flex-shrink-0"></span>
                      Cocina completa equipada
                    </li>
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-stone-400 rounded-full mr-3 flex-shrink-0"></span>
                      Heladera con freezer
                    </li>
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-stone-400 rounded-full mr-3 flex-shrink-0"></span>
                      Vajilla completa
                    </li>
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-stone-400 rounded-full mr-3 flex-shrink-0"></span>
                      Mesa y sillas
                    </li>
                  </ul>
                </div>

                {/* Column 2 */}
                <div className="space-y-4">
                  <h4 className="font-montserrat font-bold text-forest-700 text-sm sm:text-base mb-3 flex items-center">
                    <span className="w-2 h-2 bg-forest-600 rounded-full mr-2"></span>
                    CLIMATIZACIÓN
                  </h4>
                  <ul className="space-y-2 text-stone-700 text-sm font-poppins">
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-stone-400 rounded-full mr-3 flex-shrink-0"></span>
                      Aire acondicionado
                    </li>
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-stone-400 rounded-full mr-3 flex-shrink-0"></span>
                      Calefacción a gas natural
                    </li>
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-stone-400 rounded-full mr-3 flex-shrink-0"></span>
                      Ventiladores de techo
                    </li>
                  </ul>
                </div>

                {/* Column 3 */}
                <div className="space-y-4">
                  <h4 className="font-montserrat font-bold text-forest-700 text-sm sm:text-base mb-3 flex items-center">
                    <span className="w-2 h-2 bg-forest-600 rounded-full mr-2"></span>
                    EXTERIOR
                  </h4>
                  <ul className="space-y-2 text-stone-700 text-sm font-poppins">
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-stone-400 rounded-full mr-3 flex-shrink-0"></span>
                      Parque privado con mesas
                    </li>
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-stone-400 rounded-full mr-3 flex-shrink-0"></span>
                      Asador individual
                    </li>
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-stone-400 rounded-full mr-3 flex-shrink-0"></span>
                      Cochera cubierta
                    </li>
                  </ul>
                </div>

                {/* Column 4 */}
                <div className="space-y-4">
                  <h4 className="font-montserrat font-bold text-forest-700 text-sm sm:text-base mb-3 flex items-center">
                    <span className="w-2 h-2 bg-forest-600 rounded-full mr-2"></span>
                    SERVICIOS
                  </h4>
                  <ul className="space-y-2 text-stone-700 text-sm font-poppins">
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-stone-400 rounded-full mr-3 flex-shrink-0"></span>
                      Ropa de cama incluida
                    </li>
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-stone-400 rounded-full mr-3 flex-shrink-0"></span>
                      Limpieza (opcional)
                    </li>
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-stone-400 rounded-full mr-3 flex-shrink-0"></span>
                      Seguridad y matafuegos
                    </li>
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-stone-400 rounded-full mr-3 flex-shrink-0"></span>
                      Mascotas (consultar)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Banner */}
      <section className="bg-stone-50 py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <a
            href="https://www.instagram.com/cabanasnuba?igsh=dmp1Nnd3aHJjb21t"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/images/siguenos-en-redes-sociales.webp"
                alt="Síguenos en nuestras redes sociales - @cabanasnuba en Instagram"
                width={1200}
                height={400}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
            </div>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="bg-forest-900 text-stone-50 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-extrabold mb-3 sm:mb-4">CONTACTO</h2>
              <p className="text-base sm:text-lg text-stone-300 font-poppins font-medium">Esperamos su consulta</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
              <div className="order-2 lg:order-1">
                <h3 className="text-lg sm:text-xl font-montserrat font-extrabold mb-6 sm:mb-8">INFORMACIÓN</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-stone-400 flex-shrink-0" />
                    <div>
                      <p className="font-poppins font-semibold text-sm sm:text-base">Teléfono</p>
                      <p className="text-stone-300 text-xs sm:text-sm font-poppins">+54 9 3546 50-1444</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-stone-400 flex-shrink-0" />
                    <div>
                      <p className="font-poppins font-semibold text-sm sm:text-base">Email</p>
                      <p className="text-stone-300 text-xs sm:text-sm font-poppins break-all">
                        info@nubacabanias.com.ar
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-stone-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-poppins font-semibold text-sm sm:text-base">Dirección</p>
                      <p className="text-stone-300 text-xs sm:text-sm font-poppins">
                        Av. Fuerza Aérea Argentina
                        <br />
                        Santa Rosa de Calamuchita, Córdoba
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex space-x-1 sm:space-x-2 flex-shrink-0 mt-1">
                      <Instagram className="h-4 w-4 sm:h-5 sm:w-5 text-stone-400" />
                      <Facebook className="h-4 w-4 sm:h-5 sm:w-5 text-stone-400" />
                    </div>
                    <div>
                      <p className="font-poppins font-semibold text-sm sm:text-base">Redes Sociales</p>
                      <div className="flex flex-col sm:flex-row sm:space-x-4 mt-1 gap-1 sm:gap-0">
                        <a
                          href="https://www.instagram.com/cabanasnuba?igsh=dmp1Nnd3aHJjb21t"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-stone-300 hover:text-white transition-colors text-xs sm:text-sm font-poppins"
                        >
                          @cabanasnuba
                        </a>
                        <a
                          href="https://fb.me/NubaCabanias"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-stone-300 hover:text-white transition-colors text-xs sm:text-sm font-poppins"
                        >
                          NubaCabanias
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 p-4 sm:p-6 border border-forest-700 rounded-2xl">
                  <h4 className="font-montserrat font-extrabold mb-3 sm:mb-4 text-sm sm:text-base">CERTIFICACIONES</h4>
                  <div className="space-y-1 text-xs sm:text-sm text-stone-300 font-poppins">
                    <p>• Habilitación Municipal T-148</p>
                    <p>• Calidad Turística SIGO</p>
                    <p>• Ministerio de Turismo</p>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-poppins font-semibold mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-forest-800 border border-forest-700 rounded-xl focus:outline-none focus:border-stone-400 text-white font-poppins text-sm"
                      placeholder="Su nombre completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-poppins font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-forest-800 border border-forest-700 rounded-xl focus:outline-none focus:border-stone-400 text-white font-poppins text-sm"
                      placeholder="su@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="dates" className="block text-xs sm:text-sm font-poppins font-semibold mb-2">
                      Fechas de estadía *
                    </label>
                    <input
                      type="text"
                      id="dates"
                      name="dates"
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-forest-800 border border-forest-700 rounded-xl focus:outline-none focus:border-stone-400 text-white font-poppins text-sm"
                      placeholder="Ej: 15-20 de enero 2024"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-poppins font-semibold mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-forest-800 border border-forest-700 rounded-xl focus:outline-none focus:border-stone-400 text-white resize-none font-poppins text-sm"
                      placeholder="Cuéntenos sobre su consulta, cantidad de personas, preferencias especiales, etc."
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-earth-600 text-white hover:bg-earth-700 py-2 sm:py-3 rounded-xl font-poppins font-semibold flex items-center justify-center space-x-2 text-sm"
                  >
                    <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>Enviar por WhatsApp</span>
                  </Button>
                </form>
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
              <Image
                src="/images/logo-cabanas-nuba.png"
                alt="Cabañas NUBA"
                width={120}
                height={60}
                className="h-8 sm:h-10 lg:h-12 w-auto filter brightness-0 invert opacity-70"
              />
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