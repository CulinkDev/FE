import React from "react";

export default function SearchBtn() {
  return (
    <div className="z-10">
      {/* 검색 버튼 */}
      <div className=" w-[124px] h-[124px] bg-gradient-to-r from-[#FF7070] to-[#FF9999] rounded-[30px] flex items-center justify-center z-10">
        <svg
          width="68"
          height="68"
          viewBox="0 0 68 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.17 53.83c12.5 0 22.66-10.16 22.66-22.66S43.67 8.51 31.17 8.51 8.51 18.67 8.51 31.17s10.16 22.66 22.66 22.66zM59.49 59.49l-12.33-12.33"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
