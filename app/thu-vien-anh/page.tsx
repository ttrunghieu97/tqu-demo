'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { ImageIcon, X, ChevronLeft, ChevronRight, Download, Share2, Maximize2 } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { motion, AnimatePresence } from 'framer-motion'
import Image from "next/image"
import { readItems } from '@directus/sdk'
import directus from '@/lib/directus'

interface ImageSet {
  id: string
  title: string
  img: {
    id: number
    img_id: string
    directus_files_id: string
  }[]
}

export default function Component() {
  const [imageSets, setImageSets] = useState<ImageSet[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedAlbum, setSelectedAlbum] = useState<ImageSet | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [showFullImage, setShowFullImage] = useState(false)
  const [direction, setDirection] = useState(0)

  // Memoize fetch function
  const fetchImages = useCallback(async () => {
    try {
      const response = await directus.request(
        readItems('img', {
          fields: ['id', 'title', 'img.id', 'img.img_id', 'img.directus_files_id'],
          limit: 10,
        })
      ) as ImageSet[]
      setImageSets(response)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching images:', error)
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchImages()
  }, [fetchImages])

  const handlePreviousImage = useCallback((event?: React.MouseEvent) => {
    event?.stopPropagation()
    if (selectedAlbum) {
      setDirection(-1)
      setSelectedImageIndex((prev) =>
        prev === 0 ? selectedAlbum.img.length - 1 : prev - 1
      )
    }
  }, [selectedAlbum])

  const handleNextImage = useCallback((event?: React.MouseEvent) => {
    event?.stopPropagation()
    if (selectedAlbum) {
      setDirection(1)
      setSelectedImageIndex((prev) =>
        prev === selectedAlbum.img.length - 1 ? 0 : prev + 1
      )
    }
  }, [selectedAlbum])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!showFullImage) return

      switch (event.key) {
        case 'ArrowLeft':
          handlePreviousImage()
          break
        case 'ArrowRight':
          handleNextImage()
          break
        case 'Escape':
          setShowFullImage(false)
          setSelectedAlbum(null)
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [showFullImage, handlePreviousImage, handleNextImage])

  const handleDownload = async (event: React.MouseEvent) => {
    event.stopPropagation()
    if (selectedAlbum) {
      const imageUrl = `${process.env.NEXT_PUBLIC_API_URL}assets/${selectedAlbum.img[selectedImageIndex].directus_files_id}`
      try {
        const response = await fetch(imageUrl)
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = `${selectedAlbum.title}-${selectedImageIndex + 1}.jpg`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        window.URL.revokeObjectURL(url)
      } catch (error) {
        console.error('Error downloading image:', error)
      }
    }
  }

  const handleFullSize = (event: React.MouseEvent) => {
    event.stopPropagation()
    if (selectedAlbum) {
      const imageUrl = `${process.env.NEXT_PUBLIC_API_URL}assets/${selectedAlbum.img[selectedImageIndex].directus_files_id}`
      window.open(imageUrl, '_blank')
    }
  }

  // Memoize transition variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    )
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {imageSets.map((imageSet) => (
            <Card
              key={imageSet.id}
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => {
                setSelectedAlbum(imageSet)
                setSelectedImageIndex(0)
                setShowFullImage(true)
              }}
            >
              <CardContent className="p-0 relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center z-10">
                  <ImageIcon className="w-8 h-8" />
                </div>
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}assets/${imageSet.img[0].directus_files_id}?width=400&height=300`}
                  alt={imageSet.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                  priority={true}
                  loading="eager"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-background/0 p-4">
                  <h3 className="text-sm font-medium line-clamp-2 text-foreground">
                    {imageSet.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {imageSet.img.length} images
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog
          open={showFullImage}
          onOpenChange={() => {
            setShowFullImage(false)
            setSelectedAlbum(null)
          }}
        >
          <DialogContent className="max-w-7xl w-full p-0 overflow-hidden bg-black/95 backdrop-blur-lg scale-100 transition-all duration-300">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {selectedAlbum && (
                <>
                  <DialogTitle>
                    <VisuallyHidden>{selectedAlbum.title}</VisuallyHidden>
                  </DialogTitle>

                  <div className="relative w-full h-[70vh]">
                    <div className="absolute top-4 right-4 flex gap-2 z-20">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="bg-black/50 hover:bg-black/70 text-white rounded-full"
                        onClick={handleFullSize}
                      >
                        <Maximize2 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="bg-black/50 hover:bg-black/70 text-white rounded-full"
                        onClick={handleDownload}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="bg-black/50 hover:bg-black/70 text-white rounded-full"
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="bg-black/50 hover:bg-black/70 text-white rounded-full"
                        onClick={() => {
                          setShowFullImage(false)
                          setSelectedAlbum(null)
                        }}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                      <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                          key={selectedImageIndex}
                          custom={direction}
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                          }}
                          drag="x"
                          dragConstraints={{ left: 0, right: 0 }}
                          dragElastic={1}
                          onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x)

                            if (swipe < -swipeConfidenceThreshold) {
                              handleNextImage()
                            } else if (swipe > swipeConfidenceThreshold) {
                              handlePreviousImage()
                            }
                          }}
                          className="absolute w-full h-full"
                        >
                          <Image
                            src={`${process.env.NEXT_PUBLIC_API_URL}assets/${selectedAlbum.img[selectedImageIndex].directus_files_id}`}
                            alt={`${selectedAlbum.title} - Image ${selectedImageIndex + 1}`}
                            fill
                            className="object-contain"
                            priority={true}
                            loading="eager"
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full z-30"
                      onClick={handlePreviousImage}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full z-30"
                      onClick={handleNextImage}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>

                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <h2 className="text-lg font-semibold text-white">{selectedAlbum.title}</h2>
                      <p className="text-sm text-gray-300">
                        Image {selectedImageIndex + 1} of {selectedAlbum.img.length}
                      </p>
                    </div>
                  </div>

                  <div className="bg-neutral-900 p-4">
                    <div className="max-w-3xl mx-auto overflow-x-auto">
                      <div className="flex gap-2 justify-center">
                        {selectedAlbum.img.map((image, index) => (
                          <motion.button
                            key={image.id}
                            onClick={() => {
                              setDirection(index > selectedImageIndex ? 1 : -1)
                              setSelectedImageIndex(index)
                            }}
                            className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden transition-all ${index === selectedImageIndex ? 'ring-2 ring-white opacity-100' : 'opacity-50 hover:opacity-75'
                              }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Image
                              src={`${process.env.NEXT_PUBLIC_API_URL}assets/${image.directus_files_id}?width=80&height=80`}
                              alt={`Thumbnail ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}