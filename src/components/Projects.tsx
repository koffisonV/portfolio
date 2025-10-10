import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaClipboardList,
  FaDesktop,
  FaGithub,
  FaExternalLinkAlt,
  FaRobot,
} from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";

export default function Projects() {
  const theme = useTheme();
  const projects = [
    {
      title: "LaundriFi",
      description:
        "A web-based laundry scheduler that reduces congestion in apartments with limited machines by enabling real-time availability checks and reservations.",
      technologies: [
        "Next.js",
        "Supabase",
        "Docker",
        "Postgres",
        "Tailwind CSS",
        "Restful API",
        "CronJob",
      ],
      image: "images/laundrifi.jpg",
      github: "https://github.com/koffisonV/laundrifi",
      external: "https://laundrifi.vercel.app",
    },
    {
      title: "MyVPN",
      description:
        "This exploratory project involves building a self-hosted VPN and using Wireshark to analyze its efficiency compared to commercial VPN protocols like NordVPN.",
      technologies: ["OpenVPN - protocol", "EC2 server", "Shell Scripting"],
      image: "images/openvpn.jpg",
      github: "https://github.com/koffisonV/myvpn",
      external: "https://youtu.be/xHemKKHjR0s",
    },
    {
      title: "Vngle Reporter",
      description:
        "A blockchain media provenance system for reporting and verifying the authenticity of media content among content delivery networks.",
      technologies: [
        "React native",
        "AWS",
        "Expo.js",
        "Tailwind CSS",
        "Blockchain API",
      ],
      image: "images/vngle2.jpg",
      github: null,
      external: "https://www.vngle.com/",
    },
    {
      title: "Rick and Morty",
      description:
        "An interactive web application that delves into the fantastic world of the beloved TV series, Rick and Morty—Made Possible using the Rick and Morty API.",
      technologies: ["React", "RESTful API", "Tailwind CSS"],
      image: "images/rickandmorty.gif",
      github: "https://github.com/koffisonV/rickandmortywiki",
      external: "https://koffisonv.github.io/rickandmortywiki/",
    },
  ];

  const skills = [
    { src: "images/img1.png", alt: "AWS" },
    { src: "images/img2.png", alt: "Android Studio" },
    { src: "images/img3.png", alt: "Docker" },
    { src: "images/img4.png", alt: "Expo.js" },
    { src: "images/img5.png", alt: "Git" },
    { src: "images/img6.png", alt: "JAVA" },
    { src: "images/img7.png", alt: "Next.js" },
    { src: "images/img8.png", alt: "Node.js" },
    { src: "images/img9.png", alt: "Postgres" },
    { src: "images/img10.png", alt: "Python" },
    { src: "images/img11.png", alt: "React" },
    { src: "images/img12.png", alt: "Tailwind CSS" },
    { src: "images/img13.png", alt: "VMWare" },
    { src: "images/img14.png", alt: "Wordpress" },
    { src: "images/img15.png", alt: "Xcode" },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center p-4 sm:p-8"
    >
      <div className="max-w-4xl w-full">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects & Contributions
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="block bg-[var(--box-background)] text-[var(--box-foreground)] rounded-lg overflow-hidden transition-all hover:opacity-90 h-full">
                <motion.div
                  className="relative w-full h-48"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </motion.div>
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground/70 mb-4">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="text-xs px-2 py-1 bg-foreground/10 rounded-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-4">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-foreground/10 hover:bg-foreground/20 rounded-lg transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        <FaGithub className="w-5 h-5" />
                      </motion.a>
                    )}

                    {project.external && (
                      <motion.a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 flex items-center justify-center bg-foreground/10 hover:bg-foreground/20 rounded-lg transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.h3
          className="text-lg sm:text-xl text-center font-semibold pt-9"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Specializations
        </motion.h3>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-y-4 mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* <motion.div
          className="flex justify-center items-center gap-8 mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        > */}
          <Link
            href="https://www.coursera.org/account/accomplishments/professional-cert/CWADNU3V88LL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="flex flex-col items-center cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 bg-[var(--box-background)] text-[var(--box-foreground)] rounded-full flex items-center justify-center mb-2 group-hover:opacity-90 transition-colors">
                <FaRobot className="h-8 w-8 text-foreground/70 group-hover:text-foreground/90 transition-colors" />
              </div>
              <h4 className="text-sm font-medium group-hover:text-foreground/90 transition-colors">
                AI Developer Specialist
              </h4>
              <p className="text-xs text-foreground/70 group-hover:text-foreground/90 transition-colors">
                IBM
              </p>
            </motion.div>
          </Link>
          <Link
            href="https://www.coursera.org/account/accomplishments/specialization/0JBR7GT6IEJU"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="flex flex-col items-center cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 bg-[var(--box-background)] text-[var(--box-foreground)] rounded-full flex items-center justify-center mb-2 group-hover:opacity-90 transition-colors">
                <FaDesktop className="h-8 w-8 text-foreground/70 group-hover:text-foreground/90 transition-colors" />
              </div>
              <h4 className="text-sm font-medium group-hover:text-foreground/90 transition-colors">
                IT Support Specialist
              </h4>
              <p className="text-xs text-foreground/70 group-hover:text-foreground/90 transition-colors">
                IBM
              </p>
            </motion.div>
          </Link>
          {/* <Link 
            href="https://www.linkedin.com/learning/certificates/0fcf10cfd0b58b18c9cd46652b6e19edb1a0f2c2df4d4442dda7a6ea7e9c1bf3"
            target="_blank"
            rel="noopener noreferrer"
          > */}
          <motion.div
            className="flex flex-col items-center cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-16 h-16 bg-[var(--box-background)] text-[var(--box-foreground)] rounded-full flex items-center justify-center mb-2 group-hover:opacity-90 transition-colors">
              <FaClipboardList className="h-8 w-8 text-foreground/70 group-hover:text-foreground/90 transition-colors" />
            </div>
            <h4 className="text-sm font-medium group-hover:text-foreground/90 transition-colors">
              Agile Methodology
            </h4>
            <p className="text-xs text-foreground/70 group-hover:text-foreground/90 transition-colors">
              LinkedIn
            </p>
          </motion.div>
        </motion.div>

        <motion.h3
          className="text-lg sm:text-xl text-center font-semibold pt-9"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Skills
        </motion.h3>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Marquee
            gradient={true}
            gradientWidth={50}
            gradientColor={theme === "light" ? "#fff" : "#0a0a0a"}
            speed={50}
            className="mt-8 h-24 -z-10"
          >
            <div className="flex gap-10 sm:gap-16 px-12 items-center h-full">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center h-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={skill.src}
                    alt={skill.alt}
                    width={48}
                    height={48}
                    className={`object-contain ${
                      theme === "light"
                        ? skill.alt === "Next.js"
                          ? "filter invert"
                          : "filter invert-0 grayscale brightness-0"
                        : ""
                    }`}
                    sizes="48px"
                  />
                  <p
                    className={`text-xs text-center mt-1 ${
                      theme === "light" ? "text-black" : "text-white"
                    }`}
                  >
                    {skill.alt}
                  </p>
                </motion.div>
              ))}
            </div>
          </Marquee>
        </motion.div>
      </div>
    </section>
  );
}
