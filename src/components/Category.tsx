import React from "react";
import Image from "next/image";

export default function Category() {
  return (
    <section className=" py-20">
      <div className="flex items-center justify-center gap-[100px]">
        <div className="flex flex-col items-center gap-6">
          <div className="w-[110px] h-[110px] bg-[#EDEDED] rounded-[40px] flex items-center justify-center">
            <Image
              src="/Category/paper-scroll.svg"
              alt="아트 아이콘"
              width={56}
              height={56}
            />
          </div>
          <span className="text-2xl font-medium text-black">연극</span>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="w-[110px] h-[110px] bg-[#EDEDED] rounded-[40px] flex items-center justify-center">
            <Image
              src="/Category/theater.svg"
              alt="영화 아이콘"
              width={56}
              height={56}
            />
          </div>
          <span className="text-2xl font-medium text-black">뮤지컬</span>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="w-[110px] h-[110px] bg-[#EDEDED] rounded-[40px] flex items-center justify-center">
            <Image
              src="/Category/dance.svg"
              alt="무용 아이콘"
              width={56}
              height={56}
            />
          </div>
          <span className="text-2xl font-medium text-black">무용</span>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="w-[110px] h-[110px] bg-[#EDEDED] rounded-[40px] flex items-center justify-center">
            <Image
              src="/Category/micro-sing.svg"
              alt="무용 아이콘"
              width={56}
              height={56}
            />
          </div>
          <span className="text-2xl font-medium text-black">라이브</span>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="w-[110px] h-[110px] bg-[#EDEDED] rounded-[40px] flex items-center justify-center">
            <Image
              src="/Category/saxophone.svg"
              alt="마이크 아이콘"
              width={56}
              height={56}
            />
          </div>
          <span className="text-2xl font-medium text-black">클래식 공연</span>
        </div>
      </div>
    </section>
  );
}
