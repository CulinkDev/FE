import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm ">
      <div className="max-w-[1920px] mx-auto px-[58px] py-6">
        <div className="flex items-center justify-between">
          {/* 로고와 네비게이션을 함께 묶기 */}
          <div className="flex items-center gap-48">
            {/* 로고 */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/크몽로고.png"
                  width={160}
                  height={80}
                  alt="Culink Logo"
                  className=" "
                />
              </Link>
            </div>

            {/* 네비게이션 메뉴 */}
            <nav className="flex items-start gap-11">
              <Link
                href="/"
                className="text-xl font-semibold text-black hover:text-gray-700"
              >
                홈
              </Link>
              <Link
                href="/mypage"
                className="text-xl font-semibold text-black hover:text-gray-700"
              >
                마이페이지
              </Link>
              <Link
                href="/register"
                className="text-xl font-semibold text-black hover:text-gray-700"
              >
                프로젝트 등록
              </Link>
              <Link
                href="/host"
                className="text-xl font-semibold text-[#494949] hover:text-gray-700"
              >
                호스트센터
              </Link>
            </nav>
          </div>

          {/* 우측 메뉴 */}
          <div className="flex items-center gap-7">
            {/* 채팅 버튼 */}
            <button className="w-5 h-5 flex items-center justify-center">
              <Image
                src="/images/채팅이모티콘.svg"
                alt="채팅이모티콘"
                height={20}
                width={20}
              />
            </button>

            {/* 공연 로그 */}
            <Link
              href="/performance-log"
              className="text-xl font-normal text-black hover:text-gray-700"
            >
              공연 로그
            </Link>

            {/* 로그인 */}
            <Link
              href="/login"
              className="text-xl font-normal text-black hover:text-gray-700"
            >
              로그인
            </Link>
          </div>
        </div>
      </div>

    </header>
  );
}
