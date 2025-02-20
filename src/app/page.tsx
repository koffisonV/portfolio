'use client';

import { useEffect, useState } from 'react';
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import NavBar from "@/components/NavBar";

export default function Home() {
  const [activeSection, setActiveSection] = useState<'about' | 'experience' | 'skills' | 'projects' | 'contact'>('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection as 'about' | 'experience' | 'skills' | 'projects' | 'contact');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="w-full">
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <NavBar activeSection={activeSection} onSectionChange={setActiveSection} />
    </main>
  );
}
