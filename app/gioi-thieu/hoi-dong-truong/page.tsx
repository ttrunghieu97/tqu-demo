'use client'

import { Suspense, lazy } from 'react'
import { Mail, Phone } from "lucide-react"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/Header"
import Footer from '@/components/Footer'

const AiFillHome = lazy(() => import('react-icons/ai').then(mod => ({ default: mod.AiFillHome })))

const lecturers = [
  {
    name: "TS. Nguyễn Minh Anh Tuấn",
    position: "Chủ tịch Hội đồng Trường",
    phone: "",
    email: "",
    imageUrl: "https://daihoctantrao.edu.vn/media/news/2024/nmat.jpg",
  },
  {
    name: "TS. Vũ Đình Hưng",
    position: "Giám đốc Sở Giáo dục và Đào tạo tỉnh Tuyên Quang",
    phone: "",
    email: "",
    imageUrl: "",
  },
  {
    name: "Bác sĩ CKII  La Đăng Tái",
    position: "Phó Giám đốc Sở Y tế  tỉnh Tuyên Quang",
    phone: "",
    email: "",
    imageUrl: "",
  },
  {
    name: "Ths. Phạm Mạnh Hà",
    position: "Trưởng phòng Tổ chức – Chính trị, Trường Đại học Tân Trào",
    phone: "",
    email: "",
    imageUrl: "https://daihoctantrao.edu.vn/media/news/z2609248503771_85c428ee129b3d4844cf0c7f9eae4044.jpg",
  },
  {
    name: "TS. Khổng Chí Nguyện",
    position: "Trưởng phòng Quản lý khoa học và Hợp tác quốc tế, Trường Đại học Tân Trào",
    phone: "",
    email: "",
    imageUrl: "https://daihoctantrao.edu.vn/media/news/2013/IMG_2799%20copy.jpg",
  },
  {
    name: "TS. Vũ Thị Kiều Trang",
    position: "Trưởng Khoa Giáo dục Tiểu học – Mầm non, Trường Đại học Tân Trào",
    phone: "",
    email: "",
    imageUrl: "https://daihoctantrao.edu.vn/media/news/2020/New-Picture(1).png",
  },
  {
    name: "TS. Nguyễn Văn Giáp",
    position: "Giám đốc Trung tâm Thực nghiệm Thực hành và Chuyển giao khoa học công nghệ, Trường Đại học Tân Trào",
    phone: "",
    email: "",
    imageUrl: "https://daihoctantrao.edu.vn/media/news/2015/Nguy%E1%BB%85n-V%C4%83n-Gi%C3%A1p.JPG",
  },
  {
    name: "Ths. Lê Thị Thu Hà",
    position: "Chủ tịch Công đoàn Trường Đại học Tân Trào",
    phone: "",
    email: "",
    imageUrl: "https://daihoctantrao.edu.vn/media/news/%E1%BA%A2nh-L%C3%AA-Th%E1%BB%8B-Thu-H%C3%A0.jpg",
  },
  {
    name: "TS. Trần Xuân Bộ",
    position: "Chánh văn phòng, Thanh tra tỉnh Tuyên Quang",
    phone: "",
    email: "",
    imageUrl: "https://daihoctantrao.edu.vn/media/news/2015/Phong%20Thanh%20tra%20phap%20che/8.jpg",
  },
  {
    name: "Ông Nguyễn Hồng Minh",
    position: "Tổng Giám đốc Công ty cổ phần Mía đường Sơn Dương",
    phone: "",
    email: "",
    imageUrl: "",
  },
  {
    name: "TS. Nguyễn Văn Cương",
    position: "Nguyên Phó Hiệu trưởng Trường Đại học Tân Trào",
    phone: "",
    email: "",
    imageUrl: "https://daihoctantrao.edu.vn/media/news/2015/khoa%20NL/6.jpg",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center space-x-2 text-sm mb-8">
          <Link href="/" className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-blue-400">
            <Suspense fallback={<div className="w-4 h-4" />}>
              <AiFillHome className="h-4 w-4" />
            </Suspense>
          </Link>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="dark:text-gray-400">
                  Trang chủ
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="" className="dark:text-gray-400">
                  Giới thiệu
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="" className="dark:text-gray-400">
                  Tỉnh Tuyên Quang
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="dark:text-gray-400">
                  Hội đồng trường
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase dark:text-white">
          Hội đồng trường
        </h1>

        <div className="grid gap-8 max-w-5xl mx-auto">
          {lecturers.map((lecturer, index) => (
            <Card
              key={index}
              className="transition-all duration-300 ease-in-out 
                hover:shadow-lg hover:bg-accent
                bg-white dark:bg-gray-800 p-4 rounded-md"
            >
              <CardContent className="p-10">
                <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
                  <div className="w-60 h-60 relative shrink-0">
                    <Image
                      src={lecturer.imageUrl}
                      alt={lecturer.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top rounded-lg"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-3 dark:text-white">{lecturer.name}</h2>
                    <p className="text-xl text-muted-foreground dark:text-gray-400 mb-6">{lecturer.position}</p>
                    <div className="space-y-4">
                      <div className="flex items-center justify-center md:justify-start gap-3">
                        <Phone className="h-5 w-5 text-muted-foreground dark:text-gray-400" />
                        <span className="text-lg">{lecturer.phone}</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-3">
                        <Mail className="h-5 w-5 text-muted-foreground dark:text-gray-400" />
                        <a
                          href={`mailto:${lecturer.email}`}
                          className="text-lg text-primary hover:underline dark:text-blue-400"
                        >
                          {lecturer.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
