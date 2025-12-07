import Introduce from "./_components/Contents/Introduce";

export default async function ResumePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return (
    <div>
      <Introduce params={params} />
    </div>
  );
}
