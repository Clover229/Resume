import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ko"], // 지원하는 언어 목록
  defaultLocale: "ko", // 기본 언어 설정
  localeDetection: true, // 브라우저 언어 자동 감지
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"], // 미들웨어를 적용할 경로 패턴
};
