import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-4 sm:py-6 px-4 mt-auto">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-xs sm:text-sm text-foreground/60 text-center sm:text-left">
          © {currentYear} Koffison Voumadi. All rights reserved.
        </div>
        <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
          <a
            href="https://github.com/koffisonV"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/koffison-voumadi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
} 