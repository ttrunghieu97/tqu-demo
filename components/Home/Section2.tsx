import { Button } from '@/components/ui/button';
import BlogPostsGrid from '../../components/BlogPostsGrid2';
import Link from 'next/link';
export default function Component() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Sự kiện */}
              <section className="bg-white rounded-lg shadow-md overflow-hidden">
                <h2 className="text-2xl font-bold bg-red-800 text-white p-4 text-center">
                  ► Sự kiện ◄
                </h2>
                <div className="p-4">
                  <BlogPostsGrid blogId='cm2vu7j1a000013uh3duu7rm6' />
                  <div className="flex justify-center items-center">
                    <Link href="href">
                      <Button className="bg-gradient-to-r from-red-500 to-yellow-500 text-white py-2 px-6 rounded-lg hover:from-yellow-500 hover:to-red-500 transition-all duration-300">
                        Xem thêm
                      </Button>
                    </Link>
                  </div>
                </div>
              </section>
              {/* Hoạt động */}
              <section className="bg-white rounded-lg shadow-md overflow-hidden">
                <h2 className="text-2xl font-bold bg-red-800 text-white p-4 text-center">
                  ► Hoạt động ◄
                </h2>
                <div className="p-4">
                  {/* <BlogPostsGrid blogId='cm2978c2v0000117nhvudgliz' tag='hoat-dong' /> */}
                  <div className="flex justify-center items-center">
                    <Link href="href">
                      <Button className="bg-gradient-to-r from-red-500 to-yellow-500 text-white py-2 px-6 rounded-lg hover:from-yellow-500 hover:to-red-500 transition-all duration-300">
                        Xem thêm
                      </Button>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
            {/* Hội nghị hội thảo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className="bg-white rounded-lg shadow-md overflow-hidden">
                <h2 className="text-2xl font-bold bg-red-800 text-white p-4 text-center">
                  ► Hội nghị - Hội thảo ◄
                </h2>
                <div className="p-4">
                  {/* <BlogPostsGrid blogId='cm2978c2v0000117nhvudgliz' /> */}
                  <div className="flex justify-center items-center">
                    <Link href="href">
                      <Button className="bg-gradient-to-r from-red-500 to-yellow-500 text-white py-2 px-6 rounded-lg hover:from-yellow-500 hover:to-red-500 transition-all duration-300">
                        Xem thêm
                      </Button>
                    </Link>
                  </div>
                </div>
              </section>
              {/* Các cuộc thi */}
              <section className="bg-white rounded-lg shadow-md overflow-hidden">
                <h2 className="text-2xl font-bold bg-red-800 text-white p-4 text-center">
                  ► Các cuộc thi ◄
                </h2>
                <div className="p-4">
                  {/* <BlogPostsGrid blogId='cm2978c2v0000117nhvudgliz' /> */}
                  <div className="flex justify-center items-center">
                    <Link href="href">
                      <Button className="bg-gradient-to-r from-red-500 to-yellow-500 text-white py-2 px-6 rounded-lg hover:from-yellow-500 hover:to-red-500 transition-all duration-300">
                        Xem thêm
                      </Button>
                    </Link>
                  </div>
                </div>
              </section>
              {/* Nhà trường */}
              <section className="bg-white rounded-lg shadow-md overflow-hidden">
                <h2 className="text-2xl font-bold bg-red-800 text-white p-4 text-center">
                  ► Nhà trường ◄
                </h2>
                <div className="p-4">
                  {/* <BlogPostsGrid blogId='cm2978c2v0000117nhvudgliz' /> */}
                  <div className="flex justify-center items-center">
                    <Link href="href">
                      <Button className="bg-gradient-to-r from-red-500 to-yellow-500 text-white py-2 px-6 rounded-lg hover:from-yellow-500 hover:to-red-500 transition-all duration-300">
                        Xem thêm
                      </Button>
                    </Link>
                  </div>
                </div>
              </section>
              {/* Đảng bộ */}
              <section className="bg-white rounded-lg shadow-md overflow-hidden">
                <h2 className="text-2xl font-bold bg-red-800 text-white p-4 text-center">
                  ► Đảng Bộ ◄
                </h2>
                <div className="p-4">
                  {/* <BlogPostsGrid blogId='cm2978c2v0000117nhvudgliz' /> */}
                  <div className="flex justify-center items-center">
                    <Link href="href">
                      <Button className="bg-gradient-to-r from-red-500 to-yellow-500 text-white py-2 px-6 rounded-lg hover:from-yellow-500 hover:to-red-500 transition-all duration-300">
                        Xem thêm
                      </Button>
                    </Link>
                  </div>
                </div>
              </section>
              {/* Đoàn Trường */}
              <section className="bg-white rounded-lg shadow-md overflow-hidden">
                <h2 className="text-2xl font-bold bg-red-800 text-white p-4 text-center">
                  ► Đoàn Trường ◄
                </h2>
                <div className="p-4">
                  {/* <BlogPostsGrid blogId='cm2978c2v0000117nhvudgliz' /> */}
                  <div className="flex justify-center items-center">
                    <Link href="href">
                      <Button className="bg-gradient-to-r from-red-500 to-yellow-500 text-white py-2 px-6 rounded-lg hover:from-yellow-500 hover:to-red-500 transition-all duration-300">
                        Xem thêm
                      </Button>
                    </Link>
                  </div>
                </div>
              </section>
              {/* Công Đoàn */}
              <section className="bg-white rounded-lg shadow-md overflow-hidden">
                <h2 className="text-2xl font-bold bg-red-800 text-white p-4 text-center">
                  ► Công Đoàn ◄
                </h2>
                <div className="p-4">
                  {/* <BlogPostsGrid blogId='cm2978c2v0000117nhvudgliz' /> */}
                  <div className="flex justify-center items-center">
                    <Link href="href">
                      <Button className="bg-gradient-to-r from-red-500 to-yellow-500 text-white py-2 px-6 rounded-lg hover:from-yellow-500 hover:to-red-500 transition-all duration-300">
                        Xem thêm
                      </Button>
                    </Link>
                  </div>
                </div>
              </section>
              {/* end 4 trang đầu  */}

            </div>
          </div>
        </div>
      </div>

    </>
  );
}