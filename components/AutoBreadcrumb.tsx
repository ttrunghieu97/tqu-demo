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

const segmentTitles: Record<string, string> = {
  'vanhoadulich': 'Văn Hóa & Du Lịch',
  'supham': 'Sư Phạm',
  'khoa': 'Khoa',
  'tuyen-sinh': 'Thông tin tuyển sinh',
  'gioi-thieu': 'Giới thiệu',
  'gioi-thieu-chung': "Giới thiệu chung",
  'ban-giam-hieu': "Ban giám hiệu",
  'hoi-dong-truong': "Hội Đồng trường",
  'triet-li-giao-duc': "Triết lí giáo dục",
  'tin-tuc': "Tin Tức",
  'category': 'Danh mục',
  // Add more mappings as needed
}

export default function AutoBreadcrumbs() {
  const pathname = usePathname()

  // Filter out dynamic segments (like [id], [slug]) and empty segments
  const segments = pathname
    .split('/')
    .filter(segment => segment !== '' && !segment.startsWith('[') && !segment.endsWith(']'))

  // Get breadcrumb minus one by removing the last segment
  const breadcrumbMinusOne = segments.slice(0, -1)

  const getSegmentTitle = (segment: string) => {
    return segmentTitles[segment.toLowerCase()] ||
      segment.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
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

    // Add segment items for breadcrumb -1
    breadcrumbMinusOne.forEach((segment, index) => {
      const href = `/${breadcrumbMinusOne.slice(0, index + 1).join('/')}`
      const title = getSegmentTitle(segment)

      // Add separator first for all items except the first one
      items.push(
        <BreadcrumbSeparator key={`sep-${href}`} />
      )

      // Add the segment item (all segments will have a link)
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
    <div className="container mx-auto mt-5 font-bold text-2xl ">
      <Breadcrumb>
        <BreadcrumbList>
          {renderBreadcrumbItems()}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
