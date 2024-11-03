'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"
import Image from "next/image"
import Header from '@/components/Header'
import Footer from "@/components/Footer"
import AutoBreadcrumbs from '@/components/AutoBreadcrumb'

const leaders = [
  {
    name: "NGUYỄN MINH ANH TUẤN",
    position: "HIỆU TRƯỞNG",
    rank: "Giảng viên chính",
    politicalTheory: "Cao cấp",
    education: "Tiến sĩ",
    email: "",
    phone: "",
    imageUrl: "https://daihoctantrao.edu.vn/media/news/2024/nmat.jpg"
  },
  {
    name: "PHẠM DUY HƯNG",
    position: "Phó Hiệu trưởng",
    rank: "Giảng viên chính",
    politicalTheory: "Cao cấp",
    education: "Tiến sĩ",
    email: "",
    phone: "",
    imageUrl: "https://daihoctantrao.edu.vn/media/news/2024/Anh-the-6_2023.jpg"
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header department="Home" />
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center space-x-2 text-sm mb-8">
          <AutoBreadcrumbs />
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 ">
          <span> BAN GIÁM HIỆU </span>
        </h1>

        <div className="grid gap-8 max-w-5xl mx-auto">
          {leaders.map((leader, index) => (
            <Card
              key={index}
              className="transition-all duration-300 ease-in-out 
                hover:shadow-lg hover:bg-accent
                bg-white p-4 rounded-md"
            >
              <CardContent className="p-10">
                <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
                  <div className="w-60 h-60 relative shrink-0">
                    <Image
                      src={leader.imageUrl}
                      alt={leader.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain object-top rounded-lg"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-3">{leader.name}</h2>
                    <p className="text-xl text-muted-foreground mb-6">{leader.position}</p>
                    <div className="space-y-4">
                      <div className="flex items-center justify-center md:justify-start gap-3">
                        <span className="font-semibold">Ngạch viên chức:</span>
                        <span className="text-lg">{leader.rank}</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-3">
                        <span className="font-semibold">Lý luận chính trị:</span>
                        <span className="text-lg">{leader.politicalTheory}</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-3">
                        <span className="font-semibold">Trình độ chuyên môn:</span>
                        <span className="text-lg">{leader.education}</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-3">
                        <Phone className="h-5 w-5 text-muted-foreground" />
                        <span className="text-lg">{leader.phone}</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-3">
                        <Mail className="h-5 w-5 text-muted-foreground" />
                        <a
                          href={`mailto:${leader.email}`}
                          className="text-lg text-primary hover:underline"
                        >
                          {leader.email}
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