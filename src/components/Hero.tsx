"use client";
import React from "react";
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperCore } from "swiper";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
export default function Hero() {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);
  const [currentSlide, setCurrentSlide] = useState(1);

  const totalSlides = 8;

  return (
    <section className="relative w-full h-[530px]">
      <Swiper
        className="w-full h-full"
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={(s) => {
          setCurrentSlide(s.realIndex + 1);
        }}
        onSwiper={setSwiper}
        loop={true}
      >
        <SwiperSlide>
          <Image
            src="/images/banner.png"
            alt="Slide 1"
            fill
            className="object-cover"
            priority
          />
          {/* 위치를 left와 bottom으로 직접 지정하여 수정 */}
          <p className="absolute bottom-32 left-[101px] text-white text-3xl font-bold max-w-2xl">
            포항 양덕 알터즈 공연장 <br />
            12월 22일 OPEN 특가 이벤트 진행중
          </p>
        </SwiperSlide>
        {/* 예시: 다른 슬라이드들도 이미지로 채울 수 있습니다. */}
        <SwiperSlide>
          <div className="w-full h-full bg-slate-500 flex items-center justify-center text-white text-4xl">
            Slide 2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full bg-slate-600 flex items-center justify-center text-white text-4xl">
            Slide 3
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full bg-slate-700 flex items-center justify-center text-white text-4xl">
            Slide 4
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full bg-slate-800 flex items-center justify-center text-white text-4xl">
            Slide 5
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full bg-slate-900 flex items-center justify-center text-white text-4xl">
            Slide 6
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full bg-slate-950 flex items-center justify-center text-white text-4xl">
            Slide 7
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white text-4xl">
            Slide 8
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute bottom-16 left-0 right-0 z-10 w-full px-[101px]">
        <div className="flex justify-between items-center">
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
          <div className="rounded-[30px] bg-black/30 px-4 py-2 inline-block">
            <span className="text-white text-xl font-medium">
              {currentSlide} / {totalSlides}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
