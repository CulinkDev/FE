import React from "react";
import Image from "next/image";

interface CardInformationProps {
  tags: string[];
  title: string;
  location: string;
  rating: number;
  reviewCount: number;
  price: number;
}

export default function CardInformation({
  tags,
  title,
  location,
  rating,
  reviewCount,
  price,
}: CardInformationProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex gap-2 mb-1">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-[#EDEDED] rounded-xl text-lg font-medium text-black"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-between w-full">
        <h3 className="text-xl font-semibold text-black">{title}</h3>
        <div className="flex items-center gap-2">
          <Image
            src={"/images/Card_Star.svg"}
            alt="별 아이콘"
            width={20}
            height={20}
          />
          <span className="text-xl font-normal text-black">
            {rating} <span className="text-gray-500">({reviewCount})</span>
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-2">
          <Image
            src="/images/위치이모티콘.svg"
            alt="위치 아이콘"
            width={20}
            height={20}
          />
          <span className="text-xl font-medium text-black">{location}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-2xl font-medium text-[#F04242]">
            {price.toLocaleString()}
          </span>
          <span className="text-2xl font-normal text-[#242526]">원/시간</span>
        </div>
      </div>
    </div>
  );
}
