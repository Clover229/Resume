import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

export default async function Introduce({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  return (
    <div id="introduce" className="max-w-4xl mx-auto p-6 md:p-10">
      <div className="gap-10">
        <div className="md:col-span-2 space-y-12">
          <header className="space-y-2">
            <p className="text-3xl">{t("introduce.h1-1")}</p>
            <h1 className="text-4xl font-extrabold leading-tight">
              {t("introduce.h1-2")}
            </h1>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">{t("introduce.h2-1")}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t("introduce.h3-1")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">{t("introduce.h2-2")}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t("introduce.h3-2")}
            </p>
          </section>
        </div>

        <div className="md:flex md:justify-around space-y-8 mt-8">
          <Image
            src="/image/profile.jpg"
            alt="Profile Picture"
            width={200}
            height={200}
            //className="rounded-full"
          />

          <div id="contact" className="p-6 space-y-4">
            <div>
              <h3 className="text-xl font-bold mb-1 text-[#A4CBA4]">Contact</h3>
              <a
                href="mailto:jeonsumin2002@gmail.com"
                className="text-lg hover:underline"
              >
                {t("introduce.contact")}
              </a>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-1 mt-4 text-[#A4CBA4]">
                Channel
              </h3>
              <div className="flex gap-2">
                <p className="text-lg">Blog: </p>
                <Link href={t("introduce.blog")} target="_blank">
                  <p className="text-lg hover:underline">
                    {t("introduce.blog")}
                  </p>
                </Link>
              </div>
              <div className="flex gap-2">
                <p className="text-lg">Github: </p>
                <Link href={t("introduce.github")} target="_blank">
                  <p className="text-lg hover:underline">
                    {t("introduce.github")}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
