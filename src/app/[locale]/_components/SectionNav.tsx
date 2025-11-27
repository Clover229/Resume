"use client";

const sections = [
  { id: "contact", label: "Contact" },
  { id: "introduce", label: "Introduce" },
  { id: "projects", label: "Projects" },
  { id: "work", label: "Work Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
];

export default function SectionNav() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed right-6 top-24 flex flex-col gap-3 text-sm p-3 bg-white shadow rounded">
      {sections.map((s) => (
        <button
          key={s.id}
          className="hover:underline text-left"
          onClick={() => scrollToSection(s.id)}
        >
          {s.label}
        </button>
      ))}
    </nav>
  );
}
