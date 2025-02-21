import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

export default function Contact() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:koffison29@gmail.com';
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-4xl w-full">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Contact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Email Card */}
          <button
            onClick={handleEmailClick}
            className="bg-foreground/5 bg-stone-800/30 rounded-lg p-6 text-left transition-all hover:bg-stone-800/50 hover:scale-[1.02]"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaEnvelope className="text-2xl" />
              <h3 className="text-lg font-semibold">Email</h3>
            </div>
            <p className="text-sm text-foreground/70">Koffison29@gmail.com</p>
          </button>

          {/* LinkedIn Card */}
          <Link
            href="https://www.linkedin.com/in/koffison-voumadi/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-foreground/5 bg-stone-800/30 rounded-lg p-6 transition-all hover:bg-stone-800/50 hover:scale-[1.02]"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaLinkedin className="text-2xl" />
              <h3 className="text-lg font-semibold">LinkedIn</h3>
            </div>
            <p className="text-sm text-foreground/70">Connect with me on LinkedIn</p>
          </Link>
        </div>
      </div>
    </section>
  );
} 