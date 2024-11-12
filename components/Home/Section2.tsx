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
            </div>
          </div>
        </div>
      </div>

    </>
  );
}