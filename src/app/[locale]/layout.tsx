import Header from "./_components/Header";
import Footer from "./_components/Footer";
import SectionNav from "./_components/SectionNav";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import "@/src/app/globals.css";
import { getMessages } from "next-intl/server";
import { routing } from "@/src/i18n/routing";

export default async function ResumeLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: "en" | "ko" }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="relative flex flex-col items-center">
        <Header />

        {/* 본문 */}
        <main className="w-full max-w-3xl px-6 pt-24">{children}</main>

        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
