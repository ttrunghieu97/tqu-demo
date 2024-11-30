import Partner from '../../components/Home/Partner';
import Image from 'next/image';
import GetPostList from '@/components/Home/GetPostList';
import TinTuc from '@/components/post/tintuc';
import { UndergraduateCourses, PostgraduateCourses } from '../../components/Home/nganhdaotao'
import ThuVien from '@/components/thuvien/ThuVien';

export default function HomeComponent() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="grid place-items-center">
        <Image
          src="/img/banner/home-banner.png"
          alt="Description of image"
          width={2000}
          height={2000}
          priority
          className="dark:opacity-80"
        />
      </div>
      <div className="bg-gradient-to-r from-yellow-500 to-white dark:from-yellow-700 dark:to-gray-800 text-white dark:text-gray-200 p-2 font-extrabold font-sans flex items-center mt-5 transition-colors duration-300">
        <div className='container mx-auto flex items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
          </svg>
          <h2 className="text-4xl font-extrabold uppercase text-red-600 dark:text-red-400">Tin tức</h2>
        </div>
      </div>
      <TinTuc />
      <GetPostList />
      <UndergraduateCourses />
      <PostgraduateCourses />
      <ThuVien />
      <Partner />
    </div>
  );
}