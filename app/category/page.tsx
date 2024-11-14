import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Newspaper, Book, Globe, Microscope, Palette, Calculator } from "lucide-react"

const category = [
  {
    name: "Tin tức mới nhất",
    description: "Khám phá các thông tin mới nhất",
    icon: Newspaper,
  },
  {
    name: "Khoa học Xã hội",
    description: "Nghiên cứu về con người, xã hội, và văn hóa",
    icon: Globe,
  },
  {
    name: "Kỹ thuật",
    description: "Phát triển công nghệ và giải pháp kỹ thuật",
    icon: Calculator,
  },
  {
    name: "Nghệ thuật và Nhân văn",
    description: "Khám phá sáng tạo và di sản văn hóa",
    icon: Palette,
  },
  {
    name: "Y học",
    description: "Đào tạo các chuyên gia chăm sóc sức khỏe tương lai",
    icon: Microscope,
  },
  {
    name: "Giáo dục",
    description: "Đào tạo giáo viên và nghiên cứu phương pháp giảng dạy",
    icon: Book,
  },
]

export default function Category() {
  return (
    <>
      <div className="container mx-auto min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Trường Đại học Tân Trào</h1>
            <p className="text-xl text-gray-600">Khám phá các ngành học và cơ hội</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center space-x-4">
                  <div className="bg-primary rounded-full p-3">
                    <category.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle>{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{category.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}