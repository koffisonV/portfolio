import React from 'react';

type Section = 'about' | 'experience' | 'projects' | 'contact';

interface NavBarProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

export default function NavBar({ activeSection, onSectionChange }: NavBarProps) {
  const navItems: { id: Section; label: string }[] = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] sm:w-auto">
      <div className="bg-foreground/10 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full">
        <ul className="flex justify-around sm:justify-start sm:gap-8">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => {
                  onSectionChange(id);
                  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`text-xs sm:text-sm font-medium transition-all px-2 sm:px-3 py-1 sm:py-1.5 rounded-full whitespace-nowrap ${
                  activeSection === id
                    ? 'text-black bg-white'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
} 