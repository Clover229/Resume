"use client";

const sections = [
  { id: "contact", label: "Contact" },
  { id: "introduce", label: "Introduce" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
];

export default function SectionNav() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="flex gap-1 md:gap-5 text-xs md:text-sm p-3 bg-white rounded">
      {sections.map((s) => (
        <button
          key={s.id}
          className="hover:cursor-pointer text-left font-bold"
          onClick={() => scrollToSection(s.id)}
        >
          {s.label}
        </button>
      ))}
    </nav>
  );
}
