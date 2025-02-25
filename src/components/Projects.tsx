import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: "Vngle Reporter",
      description: "A blockchain-based media provenance system for reporting and verifying the authenticity of media content among content delivery networks.",
      technologies: ["React native", "AWS", "Expo.js", "Tailwind CSS", "eWitness API", "Blockchain"],
      link: "https://www.vngle.com/",
      image: "images/vngle.jpg"
    },
    {
      title: "Rick and Morty",
      description: "An interactive web application that delves into the fantastic world of the beloved TV series, Rick and Morty—Made Possible using the Rick and Morty API.",
      technologies: ["React", "RESTful API", "Tailwind"],
      link: "https://koffisonv.github.io/rickandmortywiki/",
      image: "images/rickandmorty.gif"
    },
    {
      title: "MyVPN",
      description: "The goal of the project is to analyze network traffic through VPNs using Wireshark, to see the efficiency of different vpn protocols used in existing VPN software like NordVPN as well as a self-hosted VPN built from scratch.",
      technologies: ["OpenVPN - protocol", "EC2 server", "Shell Scripting"],
      link: "https://youtu.be/xHemKKHjR0s",
      image: "images/openvpn.jpg"
    }
  ];

  const skills = [
    { src: 'images/img1.png', alt: 'AWS' },
    { src: 'images/img2.png', alt: 'Android Studio' },
    { src: 'images/img3.png', alt: 'Docker' },
    { src: 'images/img4.png', alt: 'Expo.js' },
    { src: 'images/img5.png', alt: 'Git' },
    { src: 'images/img6.png', alt: 'JAVA' },
    { src: 'images/img7.png', alt: 'Next.js' },
    { src: 'images/img8.png', alt: 'Node.js' },
    { src: 'images/img9.png', alt: 'Postgres' },
    { src: 'images/img10.png', alt: 'Python' },
    { src: 'images/img11.png', alt: 'React' },
    { src: 'images/img12.png', alt: 'Tailwind CSS' },
    { src: 'images/img13.png', alt: 'VMWare' },
    { src: 'images/img14.png', alt: 'Wordpress' },
    { src: 'images/img15.png', alt: 'Xcode' },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-4xl w-full">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Link 
              href={project.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-foreground/5 bg-stone-800/30 rounded-lg overflow-hidden transition-all hover:bg-stone-800/50 hover:scale-[1.02]"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-foreground/10 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* Sliding banner of skills */}
        <h3 className="text-lg sm:text-xl text-center font-semibold pt-9">Skills</h3>
        <Marquee 
          gradient={true}
          gradientColor="#0a0a0a"
          speed={50}
          className="mt-8 h-24 -z-10"
        >
          <div className="flex gap-10 sm:gap-16 px-12 items-center h-full">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center justify-center h-full">
                <Image
                  src={skill.src}
                  alt={skill.alt}
                  width={48}
                  height={48}
                  className="object-contain"
                  sizes="48px"
                />
                <p className="text-xs text-center text-white mt-1">{skill.alt}</p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
