import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { School, Globe, BookOpen, Users, UserCog } from "lucide-react";
import Link from "next/link";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Giới thiệu - Trường Đại Học Tân Trào',
  description: 'Demo For Learning',
  icons: {
    icon: "/img/logo.png",
  },
};

const categories = [
  {
    name: "Thông tin chung",
    description: "Cung cấp thông tin tổng quan về trường và các khoa chuyên môn.",
    icon: School,  // Sử dụng icon phù hợp với chủ đề giáo dục
    link: "/gioi-thieu/thong-tin-chung",
  },
  {
    name: "Giới thiệu chung",
    description: "Giới thiệu về các ngành học liên quan đến văn hóa, du lịch và quản lý di sản.",
    icon: Globe,  // Icon phù hợp với ngành văn hóa, du lịch
    link: "/gioi-thieu/gioi-thieu-chung",
  },
  {
    name: "Triết lí giáo dục",
    description: "Khám phá các lý thuyết và triết lý giáo dục hiện đại.",
    icon: BookOpen,  // Icon liên quan đến triết lý và học thuật
    link: "/gioi-thieu/triet-li-giao-duc",
  },
  {
    name: "Ban giám hiệu",
    description: "Thông tin về các lãnh đạo và các hoạt động điều hành của trường.",
    icon: Users,  // Icon thích hợp cho nhóm ban giám hiệu
    link: "/gioi-thieu/ban-giam-hieu",
  },
  {
    name: "Hội đồng trường",
    description: "Cung cấp thông tin về các hoạt động và quyết định của hội đồng trường.",
    icon: UserCog,  // Icon liên quan đến quản lý và lãnh đạo
    link: "/gioi-thieu/hoi-dong-truong",
  },
];

export default function Category() {
  return (
    <>
      <div className=" py-12  sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Trường Đại học Tân Trào</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">Giới thiệu</p>
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
  );
}
