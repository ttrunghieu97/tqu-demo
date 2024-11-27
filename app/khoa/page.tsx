import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Plane, Stethoscope, Brain, Briefcase, Leaf } from "lucide-react";
import Link from "next/link";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Khoa - Trường Đại Học Tân Trào',
  description: 'Demo For Learning',
  icons: {
    icon: "/img/logo.png",
  },
};

const categories = [
  {
    name: "Khoa Sư Phạm",
    description: "Nơi đào tạo giáo viên và cung cấp kiến thức sư phạm chuyên sâu.",
    icon: GraduationCap,
    link: "/khoa/supham",
  },
  {
    name: "Khoa Văn hóa - Du lịch",
    description: "Khám phá các ngành văn hóa, du lịch và quản lý di sản.",
    icon: Plane,
    link: "/khoa/vanhoadulich",
  },
  {
    name: "Khoa Y Dược",
    description: "Thông tin về các hoạt động và chương trình trong lĩnh vực y học và dược học.",
    icon: Stethoscope,
    link: "/khoa/yduoc",
  },
  {
    name: "Khoa Chính trị và Tâm lí giáo dục",
    description: "Nghiên cứu và giảng dạy về chính trị học và tâm lý giáo dục.",
    icon: Brain,
    link: "/khoa/chinhtritamli",
  },
  {
    name: "Khoa Kinh tế & Quản trị kinh doanh",
    description: "Học tập về kinh doanh, quản trị và các lĩnh vực tài chính hiện đại.",
    icon: Briefcase,
    link: "/khoa/kinhtequantri",
  },
  {
    name: "Khoa Nông - Lâm - Ngư nghiệp",
    description: "Phát triển các giải pháp bền vững cho nông, lâm, và ngư nghiệp.",
    icon: Leaf,
    link: "/khoa/nonglamngu",
  },
];

export default function Category() {
  return (
    <>
      <Header department="Home" />
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
      <Footer />
    </>
  );
}
