import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t shadow-sm">
      <div className="max-w-[1920px] mx-auto px-[100px] py-20">
        <div className="flex justify-between">
          {/* 링크 섹션들 */}
          <div className="flex gap-16">
            {/* 컬링 */}
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-semibold text-[#5E5E5E]">컬링</h3>
              <div className="flex flex-col gap-4">
                <Link
                  href="/notice"
                  className="text-base text-[#5E5E5E] hover:text-gray-700"
                >
                  컬링 소개
                </Link>
                <Link
                  href="/faq"
                  className="text-base text-[#5E5E5E] hover:text-gray-700"
                >
                  인스타그램
                </Link>
              </div>
            </div>
            {/* 서비스 정책 */}
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-semibold text-[#5E5E5E]">
                서비스 정책
              </h3>
              <div className="flex flex-col gap-4">
                <Link
                  href="/terms"
                  className="text-base text-[#5E5E5E] hover:text-gray-700"
                >
                  이용약관
                </Link>
                <Link
                  href="/privacy"
                  className="text-base text-[#5E5E5E] hover:text-gray-700"
                >
                  개인정보 처리방침
                </Link>
                <Link
                  href="/refund"
                  className="text-base text-[#5E5E5E] hover:text-gray-700"
                >
                  환불규정
                </Link>
                <Link
                  href="/instagram"
                  className="text-base text-[#5E5E5E] hover:text-gray-700"
                >
                  FAQ
                </Link>
              </div>
            </div>

            {/* 고객지원 */}
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-semibold text-[#5E5E5E]">
                고객지원
              </h3>
              <div className="flex flex-col gap-4">
                <Link
                  href="/notice"
                  className="text-base text-[#5E5E5E] hover:text-gray-700"
                >
                  공지사항
                </Link>
              </div>
            </div>
          </div>

          {/* 회사 정보 */}
          <div className="flex flex-col gap-8 text-left">
            <div className="flex flex-col gap-2">
              <p className="text-base text-[#5E5E5E]">
                통신판매업 신고번호 : 2023-경북포항-1323
              </p>
              <p className="text-base text-[#5E5E5E]">
                상호 : (주)알터즈 | 대표자명: 김광현 | 사업자등록번호 :
                707-24-01862
              </p>
              <p className="text-base text-[#5E5E5E]">
                주소 : 경상북도 포항시 북구 한동로 558 창업보육센터(2)
              </p>
              <p className="text-base text-[#5E5E5E]">
                고객센터 : artause23@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
