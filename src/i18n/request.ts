import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) || "ko";
  if (!locale) {
    throw new Error("Locale must be defined");
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
