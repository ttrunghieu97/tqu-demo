import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, MessageSquare } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Section2() {
  const sections = [
    {
      title: "Sự kiện sắp diễn ra",
      items: [
        {
          image: "/placeholder.svg",
          title: "Hội thi Văn nghệ và Đại sứ Sinh viên VTTU lần 3, năm 2025",
          date: "09/10/2024",
          comments: 0,
        },
      ],
    },
    {
      title: "Hoạt động VTTU",
      items: [
        {
          image: "/placeholder.svg",
          title: "Lễ ký kết hợp tác với Trường Đại học Udon Thani Rajabhat (Thái Lan)",
          date: "19/10/2024",
        },
        {
          image: "/placeholder.svg",
          title: "Trang trọng và nhiều cảm xúc tại Lễ Tuyên thệ Y khoa và Phát bằng tốt nghiệp năm 2024",
          date: "22/09/2024",
          comments: 0,
        },
      ],
    },
    {
      title: "Hội nghị - Hội thảo",
      items: [
        {
          image: "/placeholder.svg",
          title: "Hội thảo hướng nghiệp ĐỊNH HƯỚNG THỰC TẠI – PHÁT TRIỂN TƯƠNG LAI",
          date: "24/06/2024",
        },
        {
          image: "/placeholder.svg",
          title: "Tuần sinh hoạt Công dân – Sinh viên ngành Dược học Lần 1, năm 2024",
          date: "08/06/2024",
        },
      ],
    },
    {
      title: "Các cuộc thi",
      items: [
        {
          image: "/placeholder.svg",
          title: "Lễ Bế mạc Hội thao VTTU 2024",
          date: "25/04/2024",
        },
        {
          image: "/placeholder.svg",
          title: "Giải chạy việt dã VTTU – WE ARE ONE (Chúng ta là một) lần I, năm 2024",
          date: "26/03/2024",
        },
      ],
    },
  ]

  return (
    <div className="container mx-auto grid gap-6 py-8 md:grid-cols-2">
      {sections.map((section) => (
        <Card key={section.title}>
          <CardHeader className="bg-yellow-500 py-2">
            <CardTitle className="flex items-center justify-center gap-2 text-white">
              <ChevronRight className="h-4 w-4" />
              <span>{section.title}</span>
              <ChevronLeft className="h-4 w-4" />
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-4">
              {section.items.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <Image
                    src={item.image}
                    alt=""
                    className="h-24 w-32 rounded object-cover"
                    width={128}
                    height={96}
                  />
                  <div className="space-y-1">
                    <Link href="#" className="font-medium hover:text-[#8B1818]">
                      {item.title}
                    </Link>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{item.date}</span>
                      {typeof item.comments !== "undefined" && (
                        <span className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" />
                          {item.comments}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-right">
              <Link href="#" className="text-sm text-[#8B1818] hover:underline">
                Xem thêm
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}