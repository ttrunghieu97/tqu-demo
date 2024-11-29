"use client"

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Image from "next/image"

export default function Partner() {
  const partners = [
    { src: "/img/partner/1.png", alt: "Trung tâm kết nối Tri thức số", title: "Trung tâm kết nối Tri thức số", link: "https://hub.idk.org.vn/" },
    { src: "/img/partner/2.png", alt: "Sở GD-ĐT Tuyên Quang", title: "Sở GD-ĐT Tuyên Quang", link: "http://tuyenquang.edu.vn/" },
    { src: "/img/partner/3.png", alt: "Study Smart Read anytime, anywhere", title: "Study Smart Read anytime, anywhere", link: "https://bookshelf.vitalsource.com/" },
    { src: "/img/partner/4.png", alt: "Thư Viện Số", title: "Trường Đại học sư phạm kỹ thuật TP.HCM", link: "https://thuvienso.hcmute.edu.vn/" },
    { src: "/img/partner/5.png", alt: "Thư viện Trường Đại học Hùng Vương", title: "Thư viện Trường Đại học Hùng Vương", link: "https://thuvien.hvu.edu.vn/" },
    { src: "/img/partner/6.png", alt: "Trung Tâm Số - Đại học Thái Nguyên", title: "Trung Tâm Số - Đại học Thái Nguyên", link: "https://lrc.tnu.edu.vn/" },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      partialVisibilityGutter: 30
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      partialVisibilityGutter: 30
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 bg-white dark:bg-gray-900 transition-colors duration-300">
      <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center relative">
        <div className="w-1/3 h-1 bg-gradient-to-r from-transparent via-green-500 dark:via-green-600 to-transparent" />
        <span className="px-4 z-10 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 transition-colors duration-300">
          ĐƠN VỊ HỢP TÁC
        </span>
        <div className="w-1/3 h-1 bg-gradient-to-l from-transparent via-green-500 dark:via-green-600 to-transparent" />
      </h2>

      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={1000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        customTransition="all 1s linear"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
        transitionDuration={1000}
      >
        {partners.map((partner, index) => (
          <div key={index} className="p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-gray-700 p-6 h-32 flex items-center justify-center transition-colors duration-300">
              <a href={partner.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={150}
                  height={150}
                  className="object-contain dark:filter dark:brightness-90"
                />
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}