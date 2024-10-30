import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, image, url }) => {
  return (
    <Head>
      {/* Thẻ Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Thẻ Open Graph (OG) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Demo TQU Website by TTH" />

      {/* Tiêu đề trang */}
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default SEO;
