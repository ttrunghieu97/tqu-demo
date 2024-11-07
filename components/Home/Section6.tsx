'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

interface CarouselItemProps {
  headline: string
  image: string
  link: string
}

const carouselItems: CarouselItemProps[] = [
  {
    headline: "Quản lý Kinh tế",
    image: "/img/saudaihoc/Quản lý Kinh tế.jpg",
    link: ""
  },
  {
    headline: "Lý luận bộ môn Toán",
    image: "/img/saudaihoc/Toán học.jpeg",
    link: ""
  },
  {
    headline: "Giáo dục học (Tiểu học)",
    image: "/img/saudaihoc/Giáo dục học (Tiểu học).jpg",
    link: ""
  },
  {
    headline: "Sinh học",
    image: "/img/saudaihoc/Sinh học.jpg",
    link: ""
  },
  {
    headline: "Lý luận văn học",
    image: "/img/saudaihoc/Lý luận văn học.jpg",
    link: ""
  },
  {
    headline: "Khoa học cây trồng",
    image: "/img/saudaihoc/Khoa học cây trồng.jpg",
    link: ""
  },
]

function CarouselCard({ headline, image, link }: CarouselItemProps) {
  return (

    <Link href={link} className="block h-full">
      <Card className="h-full transition-transform duration-300 ease-in-out hover:scale-105">
        <CardContent className="p-0">
          <Image
            src={image}
            alt={headline}
            width={800}
            height={600}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-2xl font-bold mb-2 text-center">{headline}</h3>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export default function Section6() {
  return (
    <main className="bg-yellow-300 mx-auto py-8">
      <div className='container mx-auto'>

        <h2 className="text-4xl font-extrabold  uppercase text-red-600 mb-5 font-sans text-center">ngành đào tạo sau đại học</h2>


        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {carouselItems.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <CarouselCard {...item} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </main>
  )
}