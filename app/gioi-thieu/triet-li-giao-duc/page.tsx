import Header from "@/components/Header/Header";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Suspense, lazy } from 'react'
import Link from "next/link";
// import Markdown from 'react-markdown';



const AiFillHome = lazy(() => import('react-icons/ai').then(mod => ({ default: mod.AiFillHome })))

export default function ThongTinChung() {
  return (
    <div>
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
                <BreadcrumbLink href="/khoa">Giới thiệu</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Thông tin chung</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase">
          trường đh tân trào
        </h1>

      </div>    </div>
  );
}
