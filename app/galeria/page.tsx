"use client"
import { ArrowLeft, Camera } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ModernGallery from "@/components/modern-gallery"

export default function GaleriaPage() {
  const galleryImages = [
    // Vistas Aéreas y Panorámicas (solo las nuevas sin viñetas)
    {
      src: "/images/rio-santa-rosa-aerea.jpg",
      alt: "Vista aérea de Santa Rosa de Calamuchita con el río y las montañas",
    },
    {
      src: "/images/vista-aerea-santa-rosa.jpg",
      alt: "Vista aérea del pueblo de Santa Rosa de Calamuchita",
    },
    {
      src: "/images/panoramica-valle-calamuchita.jpg",
      alt: "Vista panorámica del Valle de Calamuchita desde las alturas",
    },
    {
      src: "/images/vista-aerea-complejo-nuba.jpg",
      alt: "Vista aérea del complejo Cabañas NUBA",
    },

    // Paisajes Naturales (solo las nuevas sin viñetas)
    {
      src: "/images/rio-otono-paisaje.jpg",
      alt: "Río con colores otoñales y montañas de fondo",
    },

    // Piscina y Recreación (solo las nuevas sin viñetas)
    {
      src: "/images/piscina-familias-disfrutando.jpg",
      alt: "Familias disfrutando de la piscina con vista a las montañas",
    },
    {
      src: "/images/piscina-vista-montanas-sol.jpg",
      alt: "Piscina con vista panorámica a las montañas bajo el sol",
    },
    { src: "/images/cabana-familiar-piscina.jpg", alt: "Cabaña Familiar - Acceso a piscina del complejo" },

    // Cabaña Familiar - Exteriores (solo las nuevas sin viñetas)
    { src: "/images/cabana-familiar-exterior.jpg", alt: "Cabaña Familiar - Vista exterior con jardín paisajístico" },
    {
      src: "/images/cabanas-exteriores-jardines.jpg",
      alt: "Vista exterior de las cabañas con jardines paisajísticos",
    },

    // Cabaña Familiar - Interiores (todas las nuevas)
    {
      src: "/images/cabana-familiar-dormitorio-1.jpg",
      alt: "Cabaña Familiar - Dormitorio principal con vigas de madera",
    },
    {
      src: "/images/cabana-familiar-dormitorio-2.jpg",
      alt: "Cabaña Familiar - Dormitorio con cabecero de madera",
    },
    { src: "/images/cabana-familiar-cocina-comedor.jpg", alt: "Cabaña Familiar - Cocina y comedor integrados" },
    { src: "/images/cabana-familiar-living-comedor.jpg", alt: "Cabaña Familiar - Living comedor con sofá cama" },
    { src: "/images/cabana-familiar-cocina-completa.jpg", alt: "Cabaña Familiar - Cocina completa equipada" },
    {
      src: "/images/cabana-familiar-dormitorio-principal.jpg",
      alt: "Cabaña Familiar - Dormitorio con ventanas amplias",
    },
    { src: "/images/cabana-familiar-dormitorio-bano.jpg", alt: "Cabaña Familiar - Dormitorio y baño moderno" },
    { src: "/images/cabana-familiar-suite-bano.jpg", alt: "Cabaña Familiar - Suite con baño privado" },

    // Cabaña de Madera (solo las nuevas sin viñetas)
    {
      src: "/images/cabana-madera-exterior-1.webp",
      alt: "Cabaña de Madera - Vista exterior con jardín",
    },
    { src: "/images/cabana-madera-galeria.webp", alt: "Cabaña de Madera - Galería cubierta con asador" },
    { src: "/images/cabana-madera-cocina.webp", alt: "Cabaña de Madera - Cocina y comedor interior" },
    { src: "/images/cabana-madera-dormitorio.webp", alt: "Cabaña de Madera - Dormitorio con aire acondicionado" },
    { src: "/images/cabana-madera-comedor.webp", alt: "Cabaña de Madera - Área de comedor" },
    { src: "/images/cabana-madera-bano.webp", alt: "Cabaña de Madera - Baño completo" },

    // Áreas Comunes y Exteriores (solo las nuevas sin viñetas)
    {
      src: "/images/senderos-complejo-cabanas.jpg",
      alt: "Senderos y caminos dentro del complejo de cabañas",
    },
    {
      src: "/images/area-descanso-exterior.jpg",
      alt: "Área de descanso exterior bajo los árboles",
    },

    // Asadores (solo las que no tienen viñetas)
    { src: "/images/asador.jpg", alt: "Asador de ladrillo tradicional" },
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
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg border border-white/50 max-w-2xl mx-auto">
              <p className="text-stone-700 font-poppins text-sm sm:text-base">
                Explora nuestras instalaciones, cabañas, paisajes naturales y todas las comodidades que ofrecemos para
                tu estadía perfecta en el Valle de Calamuchita.
              </p>
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
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-montserrat font-extrabold mb-4 text-stone-900">
              ¿Te gustó lo que viste?
            </h2>
            <p className="text-stone-800 font-poppins mb-6">
              Reserva tu estadía en Cabañas NUBA y vive una experiencia única en el Valle de Calamuchita
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cabana-familiar">
                <button className="bg-stone-900 text-white hover:bg-stone-800 px-6 py-3 rounded-full font-poppins font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
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
