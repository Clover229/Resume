"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function LangToggle() {
  const locale = useLocale(); // 현재 언어 (ko / en)
  const router = useRouter();
  const pathname = usePathname();

  const toggleLang = () => {
    const nextLocale = locale === "ko" ? "en" : "ko";

    // 현재 경로에서 locale 부분만 교체
    const newPath = pathname.replace(`/${locale}`, `/${nextLocale}`);

    router.push(newPath);
  };

  return (
    <button onClick={toggleLang} className="border rounded px-3 py-1 text-sm">
      {locale === "ko" ? "🇰🇷 한국어" : "🇺🇸 English"}
    </button>
  );
}
