import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-4xl w-full">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project 1 */}
          <div className="bg-foreground/5 bg-stone-800/30 rounded-lg p-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Rick and Morty</h3>
            <p className="text-sm text-foreground/70 mb-4">
              An interactive web application that delves into the fantastic world of the beloved TV series, Rick and Morty—Made Possible using the Rick and Morty API.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs px-2 py-1 bg-foreground/10 rounded-full">React</span>
              <span className="text-xs px-2 py-1 bg-foreground/10 rounded-full">TypeScript</span>
              <span className="text-xs px-2 py-1 bg-foreground/10 rounded-full">Tailwind</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-foreground/5 bg-stone-800/30 rounded-lg p-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">MyVPN</h3>
            <p className="text-sm text-foreground/70 mb-4">
            The goal of the project is to analyze network traffic through VPNs using Wireshark, to see the efficiency of different vpn protocols used in existing VPN software like NordVPN as well as a self-hosted VPN built from scratch..
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs px-2 py-1 bg-foreground/10 rounded-full">OpenVPN - protocol</span>
              <span className="text-xs px-2 py-1 bg-foreground/10 rounded-full">EC2 server</span>
              <span className="text-xs px-2 py-1 bg-foreground/10 rounded-full">Shell Scripting</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
