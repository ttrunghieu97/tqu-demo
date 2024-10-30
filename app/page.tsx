import Header from '@/components/Header/Header'
import Banner from '@/components/Banner/Banner'
import BlogPostsGrid from '@/components/Section/Section1';
import Section5 from '@/components/Section/Section5';
import Section6 from '@/components/Section/Section6';
import Section7 from '@/components/Section/Section7';
import Partner from '@/components/Section/Partner';
import Footer from '@/components/Footer/Footer';
import SEO from '@/components/seo';

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
