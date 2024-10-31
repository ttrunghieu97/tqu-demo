import Header from '@/components/Header/Header'
import Banner from '@/components/Banner/Banner'
import BlogPostsGrid from '@/components/Home/Section1';
import Section5 from '@/components/Home/Section5';
import Section6 from '@/components/Home/Section6';
import Section7 from '@/components/Home/Section7';
import Partner from '@/components/Home/Partner';
import Footer from '@/components/Footer/Footer';
import SEO from '@/components/seo';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trường Đại Học Tân Trào',
}

export default function Home() {
  return (
    <>
      <SEO
        title="Demo TQU Website bt TTH "
        description="Demo For Learning"
        image="/img/logo.png"
        url=""
      />
      <main>
        <Header />
        <Banner />
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
