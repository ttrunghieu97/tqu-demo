"use client"

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Image from "next/image"

export default function Partner() {
  const partners = [
    "/img/1.png",
    "/img/2.png",
    "/img/3.png",
    "/img/4.png",
    "/img/5.png",
    "/img/6.png",
    "/img/7.png",
    "/img/1.png",
    "/img/2.png",
    "/img/3.png",
    "/img/4.png",
    "/img/5.png",
    "/img/6.png",
    "/img/7.png",
    "/img/1.png",
    "/img/2.png",
    "/img/3.png",
    "/img/4.png",
    "/img/5.png",
    "/img/6.png",
    "/img/7.png",
  ]

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
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
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-center mb-8 relative flex items-center justify-center">
        <div className="absolute inset-x-20 top-1/2 h-1 bg-green-500 -z-10" />
        <span className="bg-white px-4 z-10">ĐƠN VỊ HỢP TÁC</span>
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
            <div className="bg-white rounded-lg shadow-sm p-6 h-32 flex items-center justify-center">
              <Image
                src={partner}
                alt={`Partner ${index + 1}`}
                width={85}
                height={85}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}