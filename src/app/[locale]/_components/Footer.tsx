export default function Footer() {
  return (
    <footer className="w-full py-10 mt-20 border-t text-center text-sm text-gray-500">
      <p>© {new Date().getFullYear()} Sumin Jeon. All rights reserved.</p>
      <p className="mt-1">Built with Next.js & Tailwind CSS</p>
    </footer>
  );
}
