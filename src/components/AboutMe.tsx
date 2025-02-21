import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function AboutMe() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center p-4 sm:p-8 pb-24">
      <div className="max-w-4xl w-full">
        <h3 className="font-bold mb-6">Hello I'm</h3>
        <h1 className="text-3xl sm:text-3xl font-bold mb-6">Koffison Voumadi</h1>
        <span className="text-md text-foreground/60 opacity-80">Full Stack Software Engineer</span>
        <p className="text-sm opacity-70">📍 New York, NY</p>

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-4">
          <a href="https://www.linkedin.com/in/koffison-voumadi/" target="_blank" rel="noopener noreferrer"
              className="text-2xl hover:text-blue-400 transition-colors">
            <FaLinkedin />
          </a>
          <a href="https://github.com/koffisonV" target="_blank" rel="noopener noreferrer" 
             className="text-2xl hover:text-gray-400 transition-colors">
            <FaGithub />
          </a>
        </div>
        {/* Add your about me content here */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-8">
          <div className="flex-1 p-4 sm:p-6 rounded-lg bg-foreground/5 bg-stone-800/30">
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Development</h3>
            <p className="text-sm sm:text-base text-foreground/70">
              3 years of hands-on experience in Full-stack web and mobile development. Skilled in building responsive and scalable applications using modern technologies.
            </p>
          </div>
          
          <div className="flex-1 p-4 sm:p-6 rounded-lg bg-foreground/5 bg-stone-800/30">
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Education</h3>
            <p className="text-sm sm:text-base text-foreground/70">
              Bachelor's of Science in Computer Science from John Jay College. Professional certificates in: <br/> Agile Framework–– LinkedIn Learning.<br/>IT Support Specialist–– IBM.
            </p>
          </div>

          <div className="flex-1 p-4 sm:p-6 rounded-lg bg-foreground/5 bg-stone-800/30">
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Creative</h3>
            <p className="text-sm sm:text-base text-foreground/70">
              Freelance experience in graphic design and videography, including pre-production and post-production work. Passionate about gaming and spending quality time with family.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 