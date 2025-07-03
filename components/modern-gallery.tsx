"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X, ZoomIn, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface GalleryImage {
  src: string
  alt: string
  category?: string
}

interface ModernGalleryProps {
  images: GalleryImage[]
  autoPlay?: boolean
  autoPlayInterval?: number
}

export default function ModernGallery({ images, autoPlay = false, autoPlayInterval = 5000 }: ModernGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Get unique categories
  const categories = Array.from(new Set(images.map((img) => img.category).filter(Boolean)))

  // Filter images by category
  const filteredImages = selectedCategory ? images.filter((img) => img.category === selectedCategory) : images

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % filteredImages.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [isPlaying, autoPlayInterval, filteredImages.length])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % filteredImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + filteredImages.length) % filteredImages.length)
  }

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    setIsLightboxOpen(true)
    setIsPlaying(false)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
  }

  return (
    <div className="w-full">
      {/* Category Filter */}
      {categories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(null)}
            className="rounded-full"
          >
            Todas
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
      )}

      {/* Main Gallery */}
      <div className="relative">
        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden rounded-2xl group cursor-pointer">
          <Image
            src={filteredImages[currentImage]?.src || "/placeholder.svg"}
            alt={filteredImages[currentImage]?.alt || "Gallery image"}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            onClick={() => openLightbox(currentImage)}
            priority
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Zoom Icon */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
              <ZoomIn className="h-4 w-4 text-stone-700" />
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-stone-800 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-stone-800 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Play/Pause Button */}
          {autoPlay && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                setIsPlaying(!isPlaying)
              }}
              className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm hover:bg-white text-stone-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </button>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {currentImage + 1} / {filteredImages.length}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="mt-6 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-3">
          {filteredImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`relative aspect-square rounded-lg overflow-hidden group transition-all duration-300 ${
                index === currentImage
                  ? "ring-2 ring-forest-600 ring-offset-2 scale-105"
                  : "hover:scale-105 hover:ring-2 hover:ring-forest-400 hover:ring-offset-1"
              }`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 640px) 25vw, (max-width: 1024px) 16vw, 12vw"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Category Badge */}
              {image.category && (
                <div className="absolute top-1 left-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge className="text-xs px-1 py-0 bg-white/90 text-stone-700 border-0">{image.category}</Badge>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Progress Indicator */}
        {isPlaying && (
          <div className="mt-4 w-full bg-stone-200 rounded-full h-1">
            <div
              className="bg-forest-600 h-1 rounded-full transition-all duration-100"
              style={{
                width: `${((currentImage + 1) / filteredImages.length) * 100}%`,
              }}
            />
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-stone-300 z-10 bg-black/50 backdrop-blur-sm p-2 rounded-full transition-all duration-300 hover:bg-black/70"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Main Image */}
            <div className="relative max-w-full max-h-full">
              <Image
                src={filteredImages[currentImage]?.src || "/placeholder.svg"}
                alt={filteredImages[currentImage]?.alt || "Gallery image"}
                width={1200}
                height={800}
                className="max-w-full max-h-[90vh] object-contain"
                priority
              />
            </div>

            {/* Navigation */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-stone-300 bg-black/50 backdrop-blur-sm p-3 rounded-full transition-all duration-300 hover:bg-black/70 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-stone-300 bg-black/50 backdrop-blur-sm p-3 rounded-full transition-all duration-300 hover:bg-black/70 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <div className="bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg inline-block">
                <p className="font-medium">{filteredImages[currentImage]?.alt}</p>
                <p className="text-sm text-stone-300 mt-1">
                  {currentImage + 1} de {filteredImages.length}
                </p>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 max-w-full overflow-x-auto px-4">
              {filteredImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                    index === currentImage
                      ? "ring-2 ring-white scale-110"
                      : "opacity-70 hover:opacity-100 hover:scale-105"
                  }`}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
              }
