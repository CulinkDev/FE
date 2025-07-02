import CardList from "@/components/CardList";
import Category from "@/components/Category";
import Hero from "@/components/Hero";
import SearchBtn from "@/components/SearchBtn";
import SearchSection from "@/components/SearchSection";
export default function Home() {
  return (
    <div className="w-full">
      {/* 히어로 섹션과 검색 섹션을 묶는 컨테이너 */}
      <div className="relative">
        <Hero />
        {/* 검색 섹션: 히어로 하단 중앙에 위치 */}
        <div className="absolute bottom-0 left-1/2 z-10 flex w-full max-w-max -translate-x-1/2 translate-y-1/2 items-center gap-6">
          <SearchSection />
          <SearchBtn />
        </div>
      </div>

      {/* 카테고리 섹션: 검색창 아래에 충분한 공간을 주기 위해 mt-32 추가 */}
      <div className="mt-32">
        <Category />
      </div>

      {/* 공연장 카드 그리드 */}
      <CardList />

      {/* 플러스 버튼 */}
      <div className="fixed bottom-8 right-8">
        <button className="w-28 h-28 bg-[#FF7070] rounded-full flex items-center justify-center shadow-lg hover:bg-[#FF5555] transition-colors">
          <svg
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36 15v42M15 36h42"
              stroke="white"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
