import React from "react";

export default function Category() {
  return (
    <section className="px-[491px] py-20">
      <div className="flex items-center justify-center gap-[206px]">
        <div className="flex flex-col items-center gap-6">
          <div className="w-[110px] h-[110px] bg-[#EDEDED] rounded-full"></div>
          <span className="text-2xl font-medium text-black">연극</span>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="w-[110px] h-[110px] bg-[#EDEDED] rounded-full"></div>
          <span className="text-2xl font-medium text-black">뮤지컬</span>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="w-[110px] h-[110px] bg-[#EDEDED] rounded-full"></div>
          <span className="text-2xl font-medium text-black">무용</span>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="w-[110px] h-[110px] bg-[#EDEDED] rounded-full"></div>
          <span className="text-2xl font-medium text-black">라이브</span>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="w-[110px] h-[110px] bg-[#EDEDED] rounded-full"></div>
          <span className="text-2xl font-medium text-black">클래식 공연</span>
        </div>
      </div>
    </section>
  );
}
