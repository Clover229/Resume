import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = (await requestLocale) as "en" | "ko";
  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale;
  }

  const messages = (
    await import(`../../public/locales/${locale}/messages.json`)
  ).default;

  return {
    messages,
    locale,
    timeZone: "Asia/Seoul",
  };
});
