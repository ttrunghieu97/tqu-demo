import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Newspaper, Book, Globe, Microscope } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    name: "Hệ Đại học",
    description: "Khám phá các tin tức quan trọng và mới nhất tại trường.",
    icon: Newspaper,
    link: "/tuyen-sinh/he-dai-hoc",
  },
  {
    name: "Sau Đại học",
    description: "Khám phá các tin tức quan trọng và mới nhất tại trường.",
    icon: Book,
    link: "/tuyen-sinh/sau-dai-hoc",
  },
  {
    name: "Tại chức - VLVH - Liên kết",
    description: "Khám phá các tin tức quan trọng và mới nhất tại trường.",
    icon: Globe,
    link: "/tuyen-sinh/tai-chuc",
  },
  {
    name: "Hệ Cao đẳng",
    description: "Khám phá các tin tức quan trọng và mới nhất tại trường.",
    icon: Microscope,
    link: "/tuyen-sinh/he-cao-dang",
  },
]

export default function Category() {
  return (
    <>
      <div className="container mx-auto min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Trường Đại học Tân Trào</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">Các thông tin tuyển sinh</p>
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
