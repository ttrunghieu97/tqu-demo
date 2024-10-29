import Header from '@/components/Header/Header'
import Banner from '@/components/Banner/Banner'
import BlogPostsGrid from '@/components/Section/Section1';
import Section5 from '@/components/Section/Section5';
import Section6 from '@/components/Section/Section6';
import Section7 from '@/components/Section/Section7';

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <BlogPostsGrid />
      <Section5 />
      <Section6 />
      <Section7 />


    </main>
  );
}
