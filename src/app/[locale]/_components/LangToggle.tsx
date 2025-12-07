"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
    <Select onValueChange={toggleLang} defaultValue={locale}>
      <SelectTrigger className="w-[100px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Language</SelectLabel>
          <SelectItem value="ko">한국어</SelectItem>
          <SelectItem value="en">English</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
