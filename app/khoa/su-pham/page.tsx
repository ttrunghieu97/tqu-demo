import Header from '@/components/khoa-su-pham/Header'
import Image from 'next/image';
import Footer from '@/components/Footer'

import BlogPostsGrid from '@/components/khoa-su-pham/Section1';
export default function Home() {
  return (
    <div>
      <Header />
      <Image src="/img/khoa/su-pham/banner.png"
        alt="alt" width={2000} height={2000} />
      <div className='container mx-auto'>
        I      </div>



      <BlogPostsGrid />


      <Footer />
    </div>
  );
}
