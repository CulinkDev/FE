import React from "react";
import CardInformation from "./CardInformation";

// Card 컴포넌트에 전달될 props 타입 정의
interface CardProps {
  imageUrl: string; // 임시로 그래디언트를 사용하지만, 실제 이미지 URL을 위함
  tags: string[];
  title: string;
  location: string;
  rating: number;
  reviewCount: number;
  price: number;
}

export default function Card({
  imageUrl,
  tags,
  title,
  location,
  rating,
  reviewCount,
  price,
}: CardProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full h-[320px] bg-gray-300 rounded-[42px] relative overflow-hidden">
        {/* 실제 이미지로 교체될 부분 */}
        <div className={`w-full h-full ${imageUrl}`}></div>
      </div>
      <CardInformation
        tags={tags}
        title={title}
        location={location}
        rating={rating}
        reviewCount={reviewCount}
        price={price}
      />
    </div>
  );
}
