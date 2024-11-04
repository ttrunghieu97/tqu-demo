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

export default function AutoBreadcrumbs() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(segment => segment !== '')

  return (
    <div className='container mx-auto mt-5 font-bold text-2xl'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <AiFillHome className="h-4 w-4" />
            <BreadcrumbLink>
              {/* Link component must be used without nesting another <a> */}
              <Link href="/"> Trang chủ</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {segments.map((segment, index) => {
            const href = `/${segments.slice(0, index + 1).join('/')}`
            const isLast = index === segments.length - 1

            // Custom title for 'vanhoadulich'
            const title = segment === 'vanhoadulich' ? 'Văn Hóa & Du Lịch' : segment.charAt(0).toUpperCase() + segment.slice(1)

            return (
              <BreadcrumbItem key={href}>
                {isLast ? (
                  <BreadcrumbPage>{title}</BreadcrumbPage>
                ) : (
                  <>
                    <BreadcrumbLink>
                      {/* Ensure that <Link> wraps the text, not another <a> */}
                      <Link href={href}>{title}</Link>
                    </BreadcrumbLink>
                    <BreadcrumbSeparator />
                  </>
                )}
              </BreadcrumbItem>
            )
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
