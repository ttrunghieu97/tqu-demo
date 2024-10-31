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
    image: "https://vttu.edu.vn/wp-content/uploads/2023/03/NGANHYKhoa-480x360.jpg",
    link: "/article/react-carousel-part-1"
  },
  {
    headline: "Giáo dục Tiểu học",
    image: "https://vttu.edu.vn/wp-content/uploads/2023/03/POST-YK-1-1-480x360.jpg",
    link: "/article/appending-currency-sign"
  },
  {
    headline: "Sư phạm Toán học",
    image: "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    link: "/article/react-carousel-part-2"
  },
  {
    headline: "Sư phạm ngữ văn",
    image: "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    link: "/article/react-carousel-part-2"
  },
  {
    headline: "Sư phạm Khoa học tự nhiên",
    image: "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    link: "/article/react-carousel-part-2"
  },
  {
    headline: "Quản lý văn hoá ",
    image: "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    link: "/article/react-carousel-part-2"
  },
  {
    headline: "Kế toán ",
    image: "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    link: "/article/react-carousel-part-2"
  },
  {
    headline: "Công nghệ thông tin",
    image: "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    link: "/article/react-carousel-part-2"
  },
  {
    headline: "Dược học",
    image: "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    link: "/article/react-carousel-part-2"
  },
  {
    headline: "Điều dưỡng ",
    image: "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    link: "/article/react-carousel-part-2"
  },
  {
    headline: "Công tác xã hội ",
    image: "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    link: "/article/react-carousel-part-2"
  },
  {
    headline: "Quản trị dịch vụ du lịch và lữ hành",
    image: "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    link: "/article/react-carousel-part-2"
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

        <h2 className="text-4xl font-extrabold  uppercase text-red-600 mb-5 ">ngành đào tạo đại học</h2>


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