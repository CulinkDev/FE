import React from "react";
import Card from "./Card";

// 카드 데이터 예시 (수정됨)
const cardData = [
  {
    imageUrl: "/images/example-image-1.png",
    tags: ["공연장", "다목적홀"],
    title: "모든 날 모든 순간",
    location: "서초동",
    rating: 4.8,
    reviewCount: 122,
    price: 70000,
  },
  {
    imageUrl: "/images/example-image-2.png",
    tags: ["연습실", "밴드"],
    title: "열정의 무대",
    location: "홍대",
    rating: 4.9,
    reviewCount: 210,
    price: 50000,
  },
  {
    imageUrl: "/images/example-image-3.png",
    tags: ["스튜디오", "촬영"],
    title: "빛과 그림자",
    location: "강남",
    rating: 4.7,
    reviewCount: 88,
    price: 90000,
  },
  {
    imageUrl: "/images/example-image-4.png",
    tags: ["스튜디오", "촬영"],
    title: "빛과 그림자",
    location: "강남",
    rating: 4.7,
    reviewCount: 88,
    price: 90000,
  },
  {
    imageUrl: "/images/example-image-2.png",
    tags: ["스튜디오", "촬영"],
    title: "빛과 그림자",
    location: "강남",
    rating: 4.7,
    reviewCount: 88,
    price: 90000,
  },
  {
    imageUrl: "/images/example-image-1.png",
    tags: ["스튜디오", "촬영"],
    title: "빛과 그림자",
    location: "강남",
    rating: 4.7,
    reviewCount: 88,
    price: 90000,
  },

  // ... 더 많은 카드 데이터
];

export default function CardList() {
  return (
    <section className="px-[100px] pb-20">
      <div className="grid grid-cols-3 gap-x-8 gap-y-12">
        {cardData.map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </div>
    </section>
  );
}