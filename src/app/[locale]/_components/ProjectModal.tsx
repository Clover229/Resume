export default function ProjectModal({
  project,
  onClose,
}: {
  project: { id: number; title: string; description: string };
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white w-full max-w-lg p-6 rounded shadow relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-sm">
          ✕
        </button>

        <h2 className="text-xl font-bold">{project.title}</h2>
        <p className="mt-4">{project.description}</p>
      </div>
    </div>
  );
}
