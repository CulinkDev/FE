
import CardList from "@/components/CardList";
import Category from "@/components/Category";
import Hero from "@/components/Hero";
import SearchBtn from "@/components/SearchBtn";
export default function Home() {
  return (
    <div className="w-full">
      {/* 히어로 섹션 */}
      <Hero />

      {/* 검색 버튼 */}
      <SearchBtn />
      {/* 카테고리 섹션 */}
      <Category />

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
