import React from "react";
interface CardInformationProps {
    tags: string[];
    title: string;
    location: string;
    rating: number;
    reviewCount: number;
    price: number;
}

export default function CardInformation({ tags, title, location, rating, reviewCount, price }: CardInformationProps) {
  return (
    <div className="flex justify-between items-end">
      <div className="flex flex-col gap-1">
        <div className="flex gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-2 bg-[#EDEDED] rounded-xl text-lg font-medium text-black"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold text-black">{title}</h3>
        <div className="flex items-center gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 8.33c0 5.83-7.5 10.84-7.5 10.84S2.5 14.16 2.5 8.33a7.5 7.5 0 0115 0z"
              fill="#000000"
            />
          </svg>
          <span className="text-xl font-medium text-black">{location}</span>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 15l-5.5-3.5L10 5l5.5 6.5L10 15z" fill="#FCDC33" />
          </svg>
          <span className="text-xl font-normal text-black">
            {rating} ({reviewCount})
          </span>
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
