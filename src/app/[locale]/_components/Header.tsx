import LangToggle from "./LangToggle";
import SectionNav from "./SectionNav";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-white shadow flex items-center justify-between px-6 z-50">
      <h1 className="text-xl font-bold">Resume</h1>
      <div className="flex gap-5">
        <SectionNav />
        <LangToggle />
      </div>
    </header>
  );
}
