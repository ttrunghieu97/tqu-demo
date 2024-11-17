import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Newspaper, Book, Globe, Microscope, Palette, Calculator } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    name: "Tin tức",
    description: "Khám phá các tin tức quan trọng và mới nhất tại trường.",
    icon: Newspaper,
    link: "/category/tin-tuc",
  },
  {
    name: "Sự kiện",
    description: "Khám phá các sự kiện quan trọng và mới nhất tại trường.",
    icon: Newspaper,
    link: "/category/su-kien",
  },
  {
    name: "Hoạt động",
    description: "Thông tin về các hoạt động ngoại khóa và phong trào trong trường.",
    icon: Globe,
    link: "/category/hoat-dong",
  },
  {
    name: "Hội nghị, Hội thảo",
    description: "Tổng hợp các hội nghị, hội thảo và các sự kiện học thuật.",
    icon: Book,
    link: "/category/hoi-nghi-hoi-thao",
  },
  {
    name: "Các cuộc thi",
    description: "Thông tin về các cuộc thi trong và ngoài trường.",
    icon: Calculator,
    link: "/category/cuoc-thi",
  },
  {
    name: "Nhà trường",
    description: "Giới thiệu về các hoạt động và chương trình của nhà trường.",
    icon: Palette,
    link: "/category/nha-truong",
  },
  {
    name: "Đảng bộ",
    description: "Các hoạt động và chương trình liên quan đến Đảng bộ trường.",
    icon: Microscope,
    link: "/category/dang-bo",
  },
  {
    name: "Hội đồng trường",
    description: "Thông tin về hoạt động và quyết định của Hội đồng trường.",
    icon: Book,
    link: "/category/dong-truong",
  },
  {
    name: "Công đoàn",
    description: "Thông tin về các hoạt động của công đoàn trong trường.",
    icon: Globe,
    link: "/category/cong-doan",
  },
]

export default function Category() {
  return (
    <>
      <div className="container mx-auto min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Trường Đại học Tân Trào</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">Khám phá các ngành học và cơ hội</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link href={category.link} key={index}>
                <Card className="hover:shadow-lg transition-shadow duration-300 h-full bg-white dark:bg-gray-800 rounded-lg">
                  <CardHeader className="flex flex-row items-center space-x-4">
                    <div className="bg-primary rounded-full p-3">
                      <category.icon className="h-6 w-6 text-primary-foreground dark:text-primary-foreground" />
                    </div>
                    <CardTitle className="text-gray-900 dark:text-white">{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="text-gray-700 dark:text-gray-400">{category.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
