import { getTranslations } from "next-intl/server"; //각 컴포넌트에서
import Introduce from "./_components/Contents/Introduce";

export default async function ResumePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return <Introduce params={params} />;
}
