'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { AiFillHome } from 'react-icons/ai'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

// Map segment to titles
const segmentTitles: Record<string, string> = {
  'khoa': 'Khoa',
  'tuyen-sinh': 'Thông tin tuyển sinh',
  'gioi-thieu': 'Giới thiệu',
  'gioi-thieu-chung': "Giới thiệu chung",
  'ban-giam-hieu': "Ban giám hiệu",
  'hoi-dong-truong': "Hội Đồng trường",
  'triet-li-giao-duc': "Triết lí giáo dục",
  "Sinh-vien-tieu-bieu": "Sinh viên tiêu biểu",
  "he-dai-hoc": "Hệ Đại học",
  "category": "Danh mục",
  "tin-tuc": "Tin tức",
  "dao-tao": "Đào tạo",
  "dang-ki-hoc-tin-chi": "Đăng kí học tín chỉ",
  "ma-nganh-va-vb-lien-quan": "Mã ngành và văn bản liên quan",
  "chuong-trinh-dao-tao": "Chương trình đào tạo",
  "sau-dai-hoc": "Sau Đại học",
  "tai-chuc": "Tại chức",
  "cao-dang": "Cao đẳng",
  "ke-hoach-chuyen-mon": "Kế hoạch chuyên môn",
  "thoi-khoa-bieu": "Thời khóa biểu",
  "ql-chat-luong-thanh-tra": "Quản lí chất lượng - Thanh Tra",
  "khao-thi": "Khảo thí",
  "quy-dinh-khao-thi": "Quy định khảo thí",
  "gioi-thieu-dblc": "Giới thiệu ĐBCL",
  "chuc-nang-nhiem-vu": "Chức năng - nhiệm vụ",
  "he-thong-dblc": "Hệ thống ĐBCL",
  "lien-he-dblc": "Liên hệ ĐBCL",
  "huong-dan-khao-thi": "Hướng dẫn khảo thí",
  "van-ban-thi-hoc-phan": "Văn bản thi học phần",
  "dam-bao-clgd": "Đảm bảo CLGD",
  "chien-luoc-chinh-sach": "Chiến lược - chính sách",
  "qui-dinh-huong-dan": "Qui định - Hướng dẫn",
  "ke-hoach-khao-sat": "Kế hoạch - khảo sát",
  "cong-khai-clgd": "Công khai CLGD",
  "cong-khai-hang-nam": "Công khai hàng năm",
  "van-ban-phap-quy": "Văn bản pháp quy",
  "van-bang-chung-chi": "Văn bằng - Chứng chỉ",
  "chuan-dau-ra": "Chuẩn đầu ra",
  "cac-nganh-dai-hoc": "Các ngành Đại học",
  "cac-nganh-cao-dang": "Các ngành Cao đẳng",
  "thanh-tra-noi-bo": "Thanh tra nội bộ",
  "vb-phap-quy": "VB pháp quy",
  "ke-hoach-thanh-tra": "Kế hoạch thanh tra",
  "bao-cao-thanh-tra": "Báo cáo thanh tra",
  "ho-so-thanh-tra": "Hồ sơ thanh tra",
  "quy-dinh-huong-dan": "Quy định - Hướng dẫn",
  "don-vi-truc-thuoc": "Đơn vị trực thuộc",
  "truong-pt-tuyen-quang": "Trường PT Tuyên Quang",
  "cac-doan-the": "Các đoàn thể",
  "cong-doan": "Công Đoàn",
  "ban-vi-su-tien-bo-phu-nu": "Ban Vì sự Tiến bộ Phụ nữ",
  "doan-thanh-nien-hoi-sinh-vien": "Đoàn thanh niên - Hội sinh viên",
  "supham": "Khoa Sư Phạm",
  "vanhoadulich": "Khoa Văn hóa - Du lịch",
  "yduoc": "Khoa Y Dược",
  "chinhtritamli": "Khoa Chính trị và TLGD",
  "kinhtequantri": "Khoa Kinh tế & Quản trị KD",
  "nonglamngu": "Khoa Nông - Lâm - Ngư nghiệp",
  "don-vi": "Đơn vị",
  "phong-ban": "Phòng - Ban",
  "van-phong": "Văn Phòng",
  "phong-qlcl-thanh-tra": "Phòng QLCL & Thanh tra",
  "phong-qlkh-hop-tac-quoc-te": "Phòng QLKH & Hợp tác QT",
  "phong-dao-tao": "Phòng Đào tạo",
  "phong-ke-hoach-tai-vu": "Phòng Kế hoạch - Tài vụ",
  "phong-quan-ly-sinh-vien": "Phòng Quản lý Sinh viên",
  "bo-mon-trung-tam": "Bộ môn - Trung tâm",
  "tt-thnn-tv-ptnn": "TT THNN-TV và PTNN",
  "tt-thuc-nghiem-chuyen-giao-cong-nghe": "TT Thực nghiệm & Chuyển giao Công nghệ",
  "tt-the-duc-the-thao": "TT Thể dục - Thể thao",
  "co-cau-to-chuc": "Cơ cấu tổ chức",
  "thu-vien-anh": "Thư viện ảnh",
  "tai-nguyen": "Tài nguyên",
  "thu-tuc-hanh-chinh": "Thủ tục hành chính",
  "van-ban": "Văn bản",
  "van-ban-dao-tao": "Văn bản đào tạo",
  "pho-bien-giao-duc-phap-luat": "Phổ biến giáo dục pháp luật",
  "tai-lieu": "Tài liệu",
  "bai-bao-khoa-hoc": "Bài báo khoa học",
  "hoat-dong": "Hoạt động",
  "gioi-thieu-dbcl": "Giới thiệu ĐBCL",
  "nckh": "Nghiên cứu khoa học",
  "tuyen-dung": "Tuyển dụng",
  "cong-tac-hssv": "Công tác HSSV",
  "thuc-nghiem-chuyen-giao-cong-nghe": "Trung tâm thực nghiệm và chuyển giao công nghệ",
  "thnn-ptnn": "Trung tâm ngoại ngữ - phát triển nghề nghiệp",
  "the-duc-the-thao": "Trung tâm thể dục thể thao",
  // Add more mappings as needed  // Add more mappings as needed
}

export default function AutoBreadcrumbs() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(segment => segment !== '')

  // Loại bỏ phần cuối (slug)
  const filteredSegments = segments.slice(0, -1)

  const getSegmentTitle = (segment: string) => {
    return segmentTitles[segment.toLowerCase()] ||
      segment.charAt(0).toUpperCase() + segment.slice(1)
  }

  const renderBreadcrumbItems = () => {
    const items = []

    // Add home item
    items.push(
      <BreadcrumbItem key="home">
        <BreadcrumbLink asChild>
          <Link href="/" className="flex items-center gap-2">
            <AiFillHome className="h-4 w-4" />
            <span>Trang chủ</span>
          </Link>
        </BreadcrumbLink>
      </BreadcrumbItem>
    )

    // Add segment items
    filteredSegments.forEach((segment, index) => {
      const href = `/${filteredSegments.slice(0, index + 1).join('/')}`
      const title = getSegmentTitle(segment)

      // Add separator first
      items.push(
        <BreadcrumbSeparator key={`sep-${href}`} />
      )

      // Add the segment item
      items.push(
        <BreadcrumbItem key={href}>
          <BreadcrumbLink asChild>
            <Link href={href}>{title}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
      )
    })

    return items
  }

  return (
    <div className="container mx-auto mt-5 font-bold text-2xl">
      <Breadcrumb>
        <BreadcrumbList>
          {renderBreadcrumbItems()}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
