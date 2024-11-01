import Header from '@/components/Header';
import BlogPostsGrid from '@/components/Home/BlogPostsGrid';
import Section5 from '@/components/Home/Section5';
import Section6 from '@/components/Home/Section6';
import Section7 from '@/components/Home/Section7';
import Partner from '@/components/Home/Partner';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Trường Đại Học Tân Trào',
  description: 'Demo For Learning',
  openGraph: {
    title: 'Demo TQU Website by TTH',
    description: 'Demo For Learning',
    images: [
      {
        url: '/img/logo.png',
        width: 800,
        height: 600,
        alt: 'Demo TQU Website Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Demo TQU Website by TTH',
    description: 'Demo For Learning',
    images: [
      {
        url: '/img/logo.png',
        width: 800,
        height: 600,
        alt: 'Demo TQU Website Logo',
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <div className="grid place-items-center">
          <Image
            src="https://vttu.edu.vn/wp-content/uploads/2024/10/Asset-24.jpg"
            alt="Description of image"
            width={2000}
            height={2000}
            priority
          />
        </div>
        <BlogPostsGrid />
        <Section5 />
        <Section6 />
        <Section7 />
        <Partner />
        <Footer />
      </main>
    </>
  );
}
