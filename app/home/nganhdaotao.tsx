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

interface CoursesCarouselProps {
  title: string
  items: CarouselItemProps[]
  autoplayDelay?: number
  backgroundColor?: string
}

function CarouselCard({ headline, image, link }: CarouselItemProps) {
  return (
    <Link href={link} className="block h-full">
      <Card className="h-full transition-transform duration-300 ease-in-out hover:scale-105 bg-white dark:bg-gray-800">
        <CardContent className="p-0">
          <Image
            src={image}
            alt={headline}
            width={800}
            height={600}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-2xl font-bold mb-2 text-center text-gray-800 dark:text-gray-200">{headline}</h3>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export default function CoursesCarousel({ title, items, autoplayDelay = 5000, backgroundColor = "bg-yellow-300" }: CoursesCarouselProps) {
  return (
    <main className={`${backgroundColor} dark:bg-gray-800 mx-auto py-8 mb-3 transition-colors duration-300`}>
      <div className='container mx-auto'>
        <h2 className="text-4xl font-extrabold uppercase text-red-600 dark:text-red-400 mb-5 font-sans text-center">{title}</h2>
        <Carousel
          plugins={[
            Autoplay({
              delay: autoplayDelay,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {items.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <CarouselCard {...item} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200" />
          <CarouselNext className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200" />
        </Carousel>
      </div>
    </main>
  )
}

export function UndergraduateCourses() {
  const undergraduateItems: CarouselItemProps[] = [
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

  return (
    <CoursesCarousel
      title="ngành đào tạo đại học"
      items={undergraduateItems}
    />
  )
}

export function PostgraduateCourses() {
  const postgraduateItems: CarouselItemProps[] = [
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

  return (
    <CoursesCarousel
      title="ngành đào tạo sau đại học"
      items={postgraduateItems}
      autoplayDelay={4000}
    />
  )
}