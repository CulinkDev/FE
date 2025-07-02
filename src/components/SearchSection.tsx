import React from "react";
import SearchInput from "./SearchInput"; // 위에서 만든 컴포넌트를 가져옵니다.

export default function SearchSection() {
  return (
    // 전체를 감싸는 컨테이너
    <div className="bg-white p-8 rounded-3xl h-[128px] shadow-lg">
      {/* 4개의 입력 필드를 가로로 나열 */}
      <div className="flex items-center justify-center gap-6">
        <SearchInput
          label="지역"
          iconSrc="/Search/location-filled.svg"
          placeholder="지역을 입력하세요"
        />
        <SearchInput
          label="날짜"
          iconSrc="/Search/date-range.svg" // 아이콘 파일 경로를 확인하세요
          placeholder="날짜를 선택하세요"
        />
        <SearchInput
          label="예산"
          iconSrc="/Search/money-bag.svg" // 아이콘 파일 경로를 확인하세요
          placeholder="예산을 입력하세요"
        />
        <SearchInput
          label="객석수"
          iconSrc="/Search/event-seat.svg" // 아이콘 파일 경로를 확인하세요
          placeholder="객석수를 입력하세요"
        />
      </div>
    </div>
  );
}
