import { getTranslations } from "next-intl/server"; //각 컴포넌트에서

export default async function ResumePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale });

  return <p>{t("common.hello")}</p>;
}
