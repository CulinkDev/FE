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
      <section className="px-[100px] pb-20">
        <div className="grid grid-cols-3 gap-x-[124px] gap-y-[500px]">
          {/* 공연장 카드 1 */}
          <div className="flex flex-col gap-6">
            <div className="w-[557px] h-[320px] bg-gray-300 rounded-[42px] relative overflow-hidden">
              {/* 실제 이미지로 교체 필요 */}
              <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-400"></div>
            </div>
            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-1">
                <div className="flex gap-2">
                  <span className="px-3 py-2 bg-[#EDEDED] rounded-xl text-lg font-medium text-black">
                    공연장
                  </span>
                  <span className="px-3 py-2 bg-[#EDEDED] rounded-xl text-lg font-medium text-black">
                    다목적홀
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-black">
                  모든 날 모든 순간
                </h3>
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
                  <span className="text-xl font-medium text-black">서초동</span>
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
                    <path
                      d="M10 15l-5.5-3.5L10 5l5.5 6.5L10 15z"
                      fill="#FCDC33"
                    />
                  </svg>
                  <span className="text-xl font-normal text-black">
                    4.8 (122)
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-medium text-[#F04242]">
                    70,000
                  </span>
                  <span className="text-2xl font-normal text-[#242526]">
                    원/시간
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 추가 카드들 - 동일한 구조로 반복 */}
          {Array.from({ length: 11 }, (_, i) => (
            <div key={i} className="flex flex-col gap-6">
              <div className="w-[557px] h-[320px] bg-gray-300 rounded-[42px] relative overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-purple-200 to-purple-400"></div>
                {i % 3 === 1 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-xl font-normal">
                      극단 포스터 또는 홍보 이미지
                    </span>
                  </div>
                )}
              </div>
              <div className="flex justify-between items-end">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2">
                    <span className="px-3 py-2 bg-[#EDEDED] rounded-xl text-lg font-medium text-black">
                      공연장
                    </span>
                    <span className="px-3 py-2 bg-[#EDEDED] rounded-xl text-lg font-medium text-black">
                      {i % 4 === 3 ? "파티룸" : "다목적홀"}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-black">
                    모든 날 모든 순간
                  </h3>
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
                    <span className="text-xl font-medium text-black">
                      서초동
                    </span>
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
                      <path
                        d="M10 15l-5.5-3.5L10 5l5.5 6.5L10 15z"
                        fill="#FCDC33"
                      />
                    </svg>
                    <span className="text-xl font-normal text-black">
                      4.8 (122)
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-2xl font-medium text-[#F04242]">
                      70,000
                    </span>
                    <span className="text-2xl font-normal text-[#242526]">
                      원/시간
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

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
