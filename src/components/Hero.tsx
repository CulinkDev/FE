"use client";
import React from "react";
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperCore } from "swiper";

// Import Swiper styles
import "swiper/css";
export default function Hero() {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 8;

  return (
    <section className="relative w-full h-[530px] bg-gray-200 bg-cover bg-center flex items-end">
      {/* <div className="absolute inset-0 bg-black/20"></div> */}
      <div className="relative z-10 px-[101px] pb-16 w-full">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={(s) => setCurrentSlide(s.activeIndex + 1)}
          onSwiper={setSwiper}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
        </Swiper>
        <div className="mt-4 flex justify-between items-center">
          <div className="flex gap-4">
            <button
              onClick={() => swiper?.slidePrev()}
              className="text-white p-3 rounded-full bg-black/30 hover:bg-black/50"
            >
              &lt;
            </button>
            <button
              onClick={() => swiper?.slideNext()}
              className="text-white p-3 rounded-full bg-black/30 hover:bg-black/50"
            >
              &gt;
            </button>
          </div>
          <div className="rounded-[30px] px-4 py-2 inline-block">
            <span className="text-white text-xl font-medium">
              {currentSlide} / {totalSlides}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
