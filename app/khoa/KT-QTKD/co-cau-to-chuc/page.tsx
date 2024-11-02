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
import Header from "@/components/khoa/su-pham/Header"
import Footer from '@/components/Footer'

const AiFillHome = lazy(() => import('react-icons/ai').then(mod => ({ default: mod.AiFillHome })))

const lecturers = [
  {
    name: "Vũ Thị Kiều Trang",
    position: "Trưởng khoa - Giảng viên chính",
    phone: "0915395113",
    email: "baotrangvk@gmail.com",
    imageUrl: "https://daihoctantrao.edu.vn/media/news/2020/New-Picture(1).png",
  },
  {
    name: "Lê Trung Hiếu",
    position: "Giảng viên - Phó Trưởng khoa",
    phone: "0902255989",
    email: "letrunghieu8577@gmail.com",
    imageUrl: "https://daihoctantrao.edu.vn/media/news/2024/cc.jpg",
  },
  {
    name: "Nguyễn Tuyết Nga",
    position: "Phó trưởng khoa - Giảng viên chính",
    phone: "0945737088",
    email: "tuyetnga.sp@gmail.com",
    imageUrl: "https://daihoctantrao.edu.vn/media/news/2015/Khoa%20tieu%20hoc/nga-t-khoa.jpg",
  },
  {
    name: "Nguyễn Thị Hải Yến",
    position: "Giảng viên",
    phone: "0942155698",
    email: "haiyentq1978@gmail.com",
    imageUrl: "https://daihoctantrao.edu.vn/media/news/z3758863364224_f53690dd06f5de3f5dfc85851a9dc01f.jpg",
  },
  {
    name: "Phạm Thị Thu Thủy",
    position: "Giảng viên chính",
    phone: "0914 786 357",
    email: "thuykmn@gmail.com",
    imageUrl: "https://daihoctantrao.edu.vn/media/news/26(38).jpg",
  },
  {
    name: 'Nguyễn Thị Hương',
    position: 'Giảng viên',
    phone: '0915905499',
    email: 'huongkiencdtq@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/media/news/2015/Khoa%20M%E1%BA%A7m%20non/huong.jpg",


  },
  {
    name: 'Vũ Thị Lan',
    position: 'Giảng viên',
    phone: '0916844333',
    email: 'lansptq@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/media/news/2015/Khoa%20M%E1%BA%A7m%20non/Lan.jpg",


  },
  {
    name: 'Phạm Thị Xuân',
    position: 'Giảng viên chính',
    phone: '0398474905',
    email: 'xuandungcdsptq@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/media/news/2015/Khoa%20M%E1%BA%A7m%20non/Xuan.jpg",
  },
  {
    name: 'Bùi Khánh Ly',
    position: 'Giảng viên',
    phone: '0916844253',
    email: 'buikhanhlytq@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/media/news/2015/Khoa%20M%E1%BA%A7m%20non/ly.jpg",
  },
  {
    name: 'Nông Thị Huyên',
    position: 'Giảng viên',
    phone: '0944 710 887',
    email: 'nonghuyencdtq@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/media/news/2015/Khoa%20M%E1%BA%A7m%20non/Huyen.jpg",
  },
  {
    name: 'Đinh Thị Lương',
    position: 'Giảng viên - Trợ lý Khoa',
    phone: '0387 373 085',
    email: 'dinhthiluong83@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/media/news/2015/Khoa%20M%E1%BA%A7m%20non/Luong.jpg",
  },
  {
    name: 'Chu Thị Thùy Phương',
    position: 'Giảng viên chính',
    phone: '0915081005',
    email: 'hoahuetay83tq@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/media/news/2015/Khoa%20tieu%20hoc/phuong.jpg",
  },
  {
    name: 'Nguyễn Thị Thu Thuỳ',
    position: 'Giảng viên',
    phone: '0966 33 88 28',
    email: 'nguyenthuycdtq88@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/media/news/IMG_7634.jpg",
  },
  {
    name: 'Nguyễn Thị Vui',
    position: 'Giảng viên',
    phone: '0393003743',
    email: 'nguyenvuisp@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/MEDIA/NEWS/2015/KHOA%20M%E1%BA%A7M%20NON/VUI.JPG",
  },
  {
    name: 'Nguyễn Như Mai',
    position: 'Giảng viên, Trợ lý khoa',
    phone: '0913194889',
    email: 'nguyennhumaicdtq@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/MEDIA/NEWS/2015/KHOA%20M%E1%BA%A7M%20NON/MAI.JPG",
  },
  {
    name: 'Nguyễn Thị Hồng Chuyên',
    position: 'Giảng viên',
    phone: '0964 873 284',
    email: 'hongchuyennnvn.tn@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/media/news/2020/NGUY%E1%BB%84N-TH%E1%BB%8A-H%E1%BB%92NG-CHUY%C3%8AN.jpg",
  },
  {
    name: 'Linh Thị Thanh Loan',
    position: 'Giảng viên - Trợ lý Khoa',
    phone: '0985172862',
    email: 'linhloan862@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/media/news/2020/IMG-3448.JPG",
  },
  {
    name: 'Phạm Thị Huyền',
    position: 'Giảng viên chính',
    phone: '0977 157 527',
    email: 'phamhuyen369@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/media/news/2020/Huyen-Tieu-hoc.jpg",
  },
  {
    name: 'Nguyễn Thị Ánh Nguyệt',
    position: 'Giảng viên, Trợ lý khoa',
    phone: '0979986993',
    email: 'anhnguyetk61gdmn@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/media/news/unnamed(25).jpg",
  },
  {
    name: 'Lê Danh Tuyên',
    position: 'Giảng viên - Trợ lý Khoa',
    phone: '0964943379',
    email: 'ledanhtuyen28987@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/media/news/2024/z4077361555351_cfb4d5ed3c9f8dfde20fb7189e449122.jpg",
  },
  {
    name: 'Nguyễn Thảo Mi',
    position: 'Giảng viên',
    phone: '0375 685 293',
    email: 'thaomikmn@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/media/news/2015/Khoa%20KH%20XH%20%26%20NV/Giang.jpg",
  },
  {
    name: 'Nguyễn Thị Giang',
    position: 'Giảng viên - Trợ lý giáo vụ',
    phone: '0915242669',
    email: 'giangnguyen.tq@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/media/news/2015/Khoa%20KH%20XH%20%26%20NV/Giang.jpg",
  },
  {
    name: 'Vũ Thị Hương',
    position: 'Giảng viên chính',
    phone: '0989504152',
    email: 'huongvu1985@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/media/news/2022/z3667440500644_8e3d44c24d8babdf4887154142d7b134.jpg",
  },
  {
    name: 'Nguyễn Thị Tuyết',
    position: 'Giảng viên chính',
    phone: '0983045661',
    email: 'tuyettq71@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/media/news/unnamed.png",
  },
  {
    name: 'Hoàng Thị Lệ Thương',
    position: 'Giảng viên chính',
    phone: '0983586193',
    email: 'hoangthilethuong@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/media/news/2015/Khoa%20TN-KT-CN/3.jpg",
  },
  {
    name: 'Trần Thị Hồng Dung',
    position: 'Giảng viên',
    phone: '0949198118',
    email: 'tranhongdungcdtq@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/media/news/2015/Khoa%20TN-KT-CN/1.jpg",
  },
  {
    name: 'Nguyễn Thị Hương Lan',
    position: 'Giảng viên chính',
    phone: '0983981399',
    email: 'nguyenlancdtq@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/media/news/2015/Khoa%20TN-KT-CN/2.jpg",
  },
  {
    name: 'Mai Thị Hiền',
    position: 'Giảng viên chính',
    phone: '0862093368',
    email: 'maihiencdtq@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/media/news/2022/z3961065145539_e393efbed74be2540fb07a28433f9d54.jpg",
  },
  {
    name: 'Hà Thị Chuyên',
    position: 'Giảng viên chính',
    phone: '0356265953',
    email: 'hoahoctro8387@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/media/news/2015/Khoa%20KH%20XH%20%26%20NV/ChuyOn.jpg",
  },
  {
    name: 'Dương Thị Ngữ',
    position: 'Giảng viên',
    phone: '0988.015.621',
    email: 'duongthingu@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/media/news/2015/khoa%20XH/%3D3x4.jpg",
  },
  {
    name: 'Bùi Thị Lan',
    position: 'Giảng viên chính',
    phone: '0163 3103 938',
    email: 'builan.ngoaingu@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/media/news/2015/khoa%20NN/Lan(1).jpg",
  },
  {
    name: 'Phạm Thục Anh',
    position: 'Giảng viên',
    phone: '0915 591 268',
    email: 'thucanhcdtq@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/media/news/2015/khoa%20NN/th%E1%BB%A5c-anh.jpg",
  },
  {
    name: 'Đồng Thị Xuân Dung',
    position: 'Trưởng bộ môn Ngoại ngữ - Giảng viên',
    phone: '0914 599 982',
    email: 'dongdungtq@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/media/news/2015/khoa%20NN/Dung.jpg",
  },
  {
    name: 'Nguyễn Thị Thùy Dung',
    position: 'Giảng viên',
    phone: '0356.506.319',
    email: 'thuydungthnn@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/media/news/2015/TT%20TH%26NN/4.jpg",
  },
  {
    name: 'Tạ Thị Thanh Huyền',
    position: 'Giảng viên chính',
    phone: '0978 090 131',
    email: 'icystar150884@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/media/news/New-Picture(39).png",
  },
  {
    name: 'Lê Văn Hùng',
    position: 'Giảng viên chính',
    phone: '0973512275',
    email: 'lehung231187@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/media/news/H%C3%B9ng(1).png",
  },
  {
    name: 'Lương Mạnh Hà',
    position: 'Giảng viên',
    phone: '0846979588',
    email: 'ha.cdtq@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/media/news/2015/khoa%20NN/New-Picture-(1).png",
  },
  {
    name: 'Nguyễn Kiều Linh',
    position: 'Giảng viên',
    phone: '0917317467',
    email: 'nguyenkieulinh@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/media/news/%E1%BA%A2nh-Nguy%E1%BB%85n-Ki%E1%BB%81u-Linh.jpg",
  },
  {
    name: 'Phạm Thị Thu Huyền',
    position: '',
    phone: '0985.737.082',
    email: 'phamhuyendhtt@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/media/news/2020/6f81e6f06dcf9091c9de.jpg",
  },
  {
    name: 'Lê Thị Ngọc Anh',
    position: 'Giảng viên',
    phone: '0989.893.757',
    email: 'leanh.dhtt@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/media/news/1(524).jpg",
  },
  {
    name: 'Vũ Quang Thọ',
    position: 'Giảng viên',
    phone: '0962 915 110',
    email: 'quangthogv@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/media/news/6(271).jpg",
  },
  {
    name: 'Vũ Thanh Bình',
    position: 'Giảng viên',
    phone: '0359 460 491',
    email: 'vuthanhbinhdhtt@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/media/news/%E1%BA%A2nh-Nguy%E1%BB%85n-Ki%E1%BB%81u-Linh.jpg",
  },
  {
    name: 'Tống Văn Trường',
    position: 'Giảng viên',
    phone: '0336.101.931',
    email: 'cntruongty@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/media/news/7(233).jpg",
  },
  {
    name: 'Ma Thị Hồng Thu',
    position: 'Giảng viên',
    phone: '0978.066.984',
    email: 'thutq7@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/media/news/11(153).jpg",
  },
  {
    name: 'Đào Thị Hồng',
    position: 'Giảng viên',
    phone: '0353.160.095',
    email: 'daohong.027@gmail.com',
    imageUrl: "https://daihoctantrao.edu.vn/media/news/12(198).jpg",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background dark:bg-gray-900 text-black dark:text-white"> {/* Add dark mode classes */}
      <Header />
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center space-x-2 text-sm mb-8">
          <Link href="/" className="text-muted-foreground hover:text-primary">
            <Suspense fallback={<div className="w-4 h-4" />}>
              <AiFillHome className="h-4 w-4" />
            </Suspense>
          </Link>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/khoa">Khoa</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/khoa/su-pham">Sư phạm</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Cơ cấu tổ chức</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase">
          danh sách giảng viên
        </h1>

        <div className="grid gap-8 max-w-5xl mx-auto">
          {lecturers.map((lecturer, index) => (
            <Card
              key={index}
              className="transition-all duration-300 ease-in-out 
                hover:shadow-lg hover:bg-accent
                bg-white dark:bg-gray-800 p-4 rounded-md" // Adjust background for dark mode
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
                    <h2 className="text-3xl font-bold mb-3">{lecturer.name}</h2>
                    <p className="text-xl text-muted-foreground mb-6">{lecturer.position}</p>
                    <div className="space-y-4">
                      <div className="flex items-center justify-center md:justify-start gap-3">
                        <Phone className="h-5 w-5 text-muted-foreground" />
                        <span className="text-lg">{lecturer.phone}</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-3">
                        <Mail className="h-5 w-5 text-muted-foreground" />
                        <a
                          href={`mailto:${lecturer.email}`}
                          className="text-lg text-primary hover:underline"
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
