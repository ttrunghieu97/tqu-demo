'use client'

import { Suspense, lazy } from 'react'
import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Header from '@/components/Header'
import Footer from "@/components/Footer"

const AiFillHome = lazy(() => import('react-icons/ai').then(mod => ({ default: mod.AiFillHome })))

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
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
                <BreadcrumbLink href="">Giới thiệu</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="">Tỉnh Tuyên Quang</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Thông tin chung</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 ">
          <span> TỈNH TUYÊN QUANG</span>
        </h1>
        {/* //////////////////////////////// */}
        <div>
          <div className="max-w-6xl mx-auto p-4 space-y-6">
            <div className='text-2xl text-justify'>
              <div>
                <h2 className="text-2xl font-semibold mb-2">1. Vị trí địa lý</h2>
                <p>Tuyên Quang là tỉnh miền núi phía Bắc, phía Bắc giáp tỉnh Hà Giang, phía Đông giáp Thái Nguyên và Bắc Kạn, phía Tây giáp Yên Bái, phía Nam giáp Phú Thọ và Vĩnh Phúc. Diện tích tự nhiên toàn tỉnh là 586.800 ha, trong đó có 70% diện tích là đồi núi.</p>
                <p> Tuyên Quang chưa có đường sắt và đường không vì vậy việc thông thương sang các tỉnh khác và ra nước ngoài nhờ vào hệ thống đường bộ quốc lộ 2 và quốc lộ 37; tỉnh có sông Lô chảy qua nên rất thuận lợi cho việc phát triển giao thông đường thuỷ.</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mt-2 mb-2">2. Đặc điểm địa hình</h2>
                <p>Tuyên Quang mang đặc điểm khí hậu nhiệt đới gió mùa, một năm có hai mùa rõ rệt: mùa đông lạnh – khô hanh; mùa hè nóng ẩm mưa nhiều. Đặc điểm khí hậu này thích ứng cho sự sinh trưởng, phát triển của các loại cây trồng nhiệt đới. Nhiệt độ trung bình trong năm từ 22 – 240C, lượng mưa trung bình từ 1.500 mm – 1.800 mm; độ ẩm trung bình là 85%.
                  Hệ thống sông suối của Tuyên Quang khá dày đặc, phân phối tương đối đều giữa các vùng, có thể chia làm 3 vùng trong đó sông Lô có khả năng vận tải tốt, đây là điều kiện thuận lợi cho phát triển giao thông đường thuỷ của tỉnh.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2 mt-2">3. Khí hậu</h2>
                <p>Tuyên Quang mang đặc điểm khí hậu nhiệt đới gió mùa, một năm có hai mùa rõ rệt: mùa đông lạnh – khô hanh; mùa hè nóng ẩm mưa nhiều. Đặc điểm khí hậu này thích ứng cho sự sinh trưởng, phát triển của các loại cây trồng nhiệt đới. Nhiệt độ trung bình trong năm từ 22 – 240C, lượng mưa trung bình từ 1.500 mm – 1.800 mm; độ ẩm trung bình là 85%.
                  Hệ thống sông suối của Tuyên Quang khá dày đặc, phân phối tương đối đều giữa các vùng, có thể chia làm 3 vùng trong đó sông Lô có khả năng vận tải tốt, đây là điều kiện thuận lợi cho phát triển giao thông đường thuỷ của tỉnh.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-2 mt2">4. Hành chính</h2>
                <p>Tuyên Quang gồm có 1 thành phố và 6 huyện: Chiêm Hoá, Hàm Yên, Lâm Bình, Na Hang, Sơn Dương, Yên Sơn, với 141 đơn vị cấp xã gồm 7 phường, 5 thị trấn và 129 xã.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-2 mt-2">5. Kinh tế</h2>
                <p>Tuyên Quang là tỉnh miền núi, nền kinh tế nông-lâm nghiệp chiếm ưu thế, mô hình kinh tế trang trại kết hopwj nông lâm. Trong bảng xếp hạng về Chỉ số năng lực cạnh tranh cấp tỉnh của Việt Nam năm 2011 tỉnh Tuyên Quang xếp ở vị trí thứ 56/63 tỉnh thành.
                  Nông nghiệp: lúa là cây lương thực chính, sau đó là các cây ngô, sắn, khoai lang. Cây công nghiệp gồm có: chè (nhà máy chè Tuyên Quang, Tháng Mười, Tân Trào), cây sả làm tinh dầu, lạc, đậu tương. Cây ăn quả có: cam, quýt, nhãn, vải, chanh. Chăn nuôi có: trâu, bò, lợn, dê, gia cầm,...
                  Công nghiệp: có quặng kẽm, quặng mangan, quặng thiếc, bột kẽm, khai thác awntimoan... Sản xuất giấy, bột giấy, xi măng, vôi.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}