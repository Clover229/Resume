import Header from "./_components/Header";
import Footer from "./_components/Footer";
import SectionNav from "./_components/SectionNav";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import "@/src/app/globals.css";

const locales = ["en", "ko"];

export default async function ResumeLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale)) {
    notFound();
  }
  let messages;
  try {
    messages = (await import(`../../../public/locales/${locale}/messages.json`))
      .default;
  } catch (e) {
    notFound();
  }
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="relative flex flex-col items-center">
        <Header />

        {/* 본문 */}
        <main className="w-full max-w-3xl px-6 pt-24">{children}</main>

        {/* 오른쪽 목차 */}
        <SectionNav />

        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
