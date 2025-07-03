"use client"
import { ArrowLeft, Camera, MapPin, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ModernGallery from "@/components/modern-gallery"

export default function GaleriaPage() {
  const galleryImages = [
    // Exterior Views
    {
      src: "/images/bienvenidos-valle.webp",
      alt: "Bienvenidos a Cabañas NUBA - Vista panorámica del valle",
      category: "Exterior",
    },
    {
      src: "/images/entrada-nuba-sign.webp",
      alt: "Entrada principal con cartel de Cabañas NUBA",
      category: "Exterior",
    },
    { src: "/images/complejo-cabanas.webp", alt: "Vista aérea del complejo de cabañas", category: "Exterior" },
    { src: "/images/cabana-exterior-1.webp", alt: "Cabaña con jardines paisajísticos", category: "Exterior" },
    { src: "/images/muebles-exterior.webp", alt: "Área de estar exterior con muebles de madera", category: "Exterior" },

    // Cabaña de Madera
    {
      src: "/images/cabana-madera.webp",
      alt: "Cabaña de Madera - Vista exterior principal",
      category: "Cabaña de Madera",
    },
    { src: "/images/nuba1.jpg", alt: "Cabaña de Madera - Galería cubierta", category: "Cabaña de Madera" },
    { src: "/images/living1.jpg", alt: "Cabaña de Madera - Living interior acogedor", category: "Cabaña de Madera" },
    {
      src: "/images/cabania2-canteros.jpg",
      alt: "Cabaña de Madera - Jardín con canteros",
      category: "Cabaña de Madera",
    },

    // Cabaña Familiar
    {
      src: "/images/cabana-familiar.jpg",
      alt: "Cabaña Familiar - Vista exterior moderna",
      category: "Cabaña Familiar",
    },
    { src: "/images/living-exterior.webp", alt: "Cabaña Familiar - Living exterior", category: "Cabaña Familiar" },

    // Asadores y Parrillas
    { src: "/images/asador.jpg", alt: "Asador de ladrillo tradicional", category: "Asadores" },
    { src: "/images/cabana-asador-lena.webp", alt: "Asador con leñera incluida", category: "Asadores" },
    { src: "/images/cabana-asador.webp", alt: "Área de asador con mesa exterior", category: "Asadores" },

    // Piscina y Recreación
    { src: "/images/piscina.webp", alt: "Piscina del complejo", category: "Piscina" },
    { src: "/images/piscina-montanas.webp", alt: "Piscina con vista panorámica a las montañas", category: "Piscina" },

    // Vistas del Valle
    { src: "/images/vista-valle.webp", alt: "Vista panorámica del Valle de Calamuchita", category: "Paisajes" },
    { src: "/images/cabaniasyparque.jpg", alt: "Cabañas integradas en el paisaje natural", category: "Paisajes" },

    // Detalles y Comodidades
    { src: "/images/entrada-cartel.webp", alt: "Cartel de entrada al complejo", category: "Detalles" },
    { src: "/images/cartel.jpg", alt: "Señalización del complejo", category: "Detalles" },
  ]

  return (
    <div className="min-h-screen bg-stone-50">
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
          <div className="flex items-center space-x-2 text-stone-600">
            <Camera className="h-4 w-4" />
            <span className="text-sm font-poppins font-medium">Galería</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-forest-50 to-stone-100 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-extrabold text-stone-900 mb-4">
              Galería de Imágenes
            </h1>
            <p className="text-lg sm:text-xl text-stone-600 font-poppins mb-6">
              Descubre la belleza de Cabañas NUBA y el Valle de Calamuchita
            </p>
            <div className="flex items-center justify-center space-x-6 text-stone-500">
              <div className="flex items-center space-x-2">
                <Camera className="h-5 w-5" />
                <span className="font-poppins text-sm">{galleryImages.length} fotos</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span className="font-poppins text-sm">Santa Rosa de Calamuchita</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-poppins text-sm">5.0 estrellas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Gallery */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <ModernGallery images={galleryImages} autoPlay={true} autoPlayInterval={6000} />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-forest-600 to-forest-700 py-12 sm:py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto text-white">
            <h2 className="text-2xl sm:text-3xl font-montserrat font-extrabold mb-4">¿Te gustó lo que viste?</h2>
            <p className="text-forest-100 font-poppins mb-6">
              Reserva tu estadía en Cabañas NUBA y vive una experiencia única en el Valle de Calamuchita
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cabana-familiar">
                <button className="bg-white text-forest-700 hover:bg-stone-100 px-6 py-3 rounded-full font-poppins font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                  Ver Cabaña Familiar
                </button>
              </Link>
              <Link href="/cabana-madera">
                <button className="bg-amber-600 text-white hover:bg-amber-700 px-6 py-3 rounded-full font-poppins font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                  Ver Cabaña de Madera
                </button>
              </Link>
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
