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
    headline: "Giáo dục Mầm non",
    image: "/img/nganhdaotao/Giáo dục Mầm non.jpg",
    link: ""
  },
  {
    headline: "Giáo dục Tiểu học",
    image: "/img/nganhdaotao/Giáo dục Tiểu học.jpg",
    link: ""
  },
  {
    headline: "Sư phạm Toán học",
    image: "/img/nganhdaotao/Sư phạm Toán học.jpg",
    link: ""
  },
  {
    headline: "Sư phạm ngữ văn",
    image: "/img/nganhdaotao/Sư phạm ngữ văn.jpg",
    link: ""
  },
  {
    headline: "Sư phạm Khoa học tự nhiên",
    image: "/img/nganhdaotao/Sư phạm Khoa học tự nhiên.jpg",
    link: ""
  },
  {
    headline: "Quản lý văn hoá ",
    image: "/img/nganhdaotao/Quản lý văn hoá.jpg",
    link: ""
  },
  {
    headline: "Kế toán ",
    image: "/img/nganhdaotao/Kế toán.jpg",
    link: ""
  },
  {
    headline: "Công nghệ thông tin",
    image: "/img/nganhdaotao/Công nghệ thông tin.jpg",
    link: ""
  },
  {
    headline: "Dược học",
    image: "/img/nganhdaotao/Dược học.jpg",
    link: ""
  },
  {
    headline: "Điều dưỡng ",
    image: "/img/nganhdaotao/Điều dưỡng.jpg",
    link: ""
  },
  {
    headline: "Công tác xã hội ",
    image: "/img/nganhdaotao/Công tác xã hội.jpg",
    link: ""
  },
  {
    headline: "Quản trị dịch vụ du lịch và lữ hành",
    image: "/img/nganhdaotao/Quản trị dịch vụ du lịch và lữ hành.jpg",
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

export default function Section5() {
  return (
    <main className="bg-yellow-300 mx-auto py-8 mb-3">
      <div className='container mx-auto'>

        <h2 className="text-4xl font-extrabold  uppercase text-red-600 mb-5 font-sans text-center">ngành đào tạo đại học</h2>


        <Carousel
          plugins={[
            Autoplay({
              delay: 5000,
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