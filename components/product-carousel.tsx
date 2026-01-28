'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Product {
  id: number
  name: string
  description: string
  image: string
}

const products: Product[] = [
  {
    id: 1,
    name: 'Fresh Es Kopyor',
    description: 'Young, tender coconut with creamy jelly interior',
    image: '/product/eskopyor.jpg',
  },
  {
    id: 2,
    name: 'Pisang Rambak, Talas,& Sukun',
    description: 'Pure, refreshing natural coconut water',
    image: '/product/pisangrambak.png',
  },
  {
    id: 3,
    name: 'Virgin Coconut Oil',
    description: 'Crispy, nutrient-rich coconut chips',
    image: '/product/virgincoconutoil.jpg',
  },
]

export function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)
    setAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
    setAutoPlay(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setAutoPlay(false)
  }

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden bg-accent/10 border border-foreground/10">
        {/* Carousel Container */}
        <div className="relative h-96 md:h-[500px] w-full">
          {/* Images */}
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority={index === currentIndex}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          ))}

          {/* Product Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-background z-10">
            <div
              className={`transition-all duration-700 ${
                currentIndex >= 0 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <h2 className="font-serif text-3xl md:text-4xl mb-2">{products[currentIndex].name}</h2>
              <p className="text-background/80 text-lg font-light">{products[currentIndex].description}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-background/20 hover:bg-background/40 text-background rounded-full p-3 transition-all"
            aria-label="Previous product"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-background/20 hover:bg-background/40 text-background rounded-full p-3 transition-all"
            aria-label="Next product"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 p-6 bg-accent/5">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-primary w-8'
                  : 'bg-foreground/20 w-2 hover:bg-foreground/40'
              }`}
              aria-label={`Go to product ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
