'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { AiFillHome } from 'react-icons/ai'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const segmentTitles: Record<string, string> = {
  'vanhoadulich': 'Văn Hóa & Du Lịch',
  'supham': 'Sư Phạm',
  'khoa': 'Khoa',
  'tuyen-sinh': 'Thông tin tuyển sinh',
  'gioi-thieu': 'Giới thiệu',
  'gioi-thieu-chung': "Giới thiệu chung",
  'ban-giam-hieu': "Ban giám hiệu",
  'hoi-dong-truong': "Hội Đồng trường",
  'triet-li-giao-duc': "Triết lí giáo dục"
  // Add more mappings as needed
}

export default function AutoBreadcrumbs() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(segment => segment !== '')

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
    segments.forEach((segment, index) => {
      const href = `/${segments.slice(0, index + 1).join('/')}`
      const isLast = index === segments.length - 1
      const title = getSegmentTitle(segment)

      // Add separator first
      items.push(
        <BreadcrumbSeparator key={`sep-${href}`} />
      )

      // Add the segment item
      items.push(
        <BreadcrumbItem key={href}>
          {isLast ? (
            <BreadcrumbPage>{title}</BreadcrumbPage>
          ) : (
            <BreadcrumbLink asChild>
              <Link href={href}>{title}</Link>
            </BreadcrumbLink>
          )}
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