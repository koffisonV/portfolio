import React, { useState } from "react";
import { motion } from "framer-motion";
import CustomCursor from "./CustomCursor";
import useIsLargeScreen from "../hooks/useIsLargeScreen";
import ScreenSizeToast from "./ScreenSizeToast";
import { useTheme } from "@/hooks/useTheme";

const SpinningXIcon = () => (
  <motion.div
    className="w-6 h-6 flex items-center justify-center"
    animate={{ rotate: 360 }}
    transition={{ 
      duration: 3, 
      ease: "linear", 
      repeat: Infinity 
    }}
  >
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="4" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="w-full h-full"
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  </motion.div>
);

const experienceData = [
  {
    company: "The New York Stem Cell Foundation 🦠",
    role: "Software Engineer Intern",
    duration: "June 2025 – August 2025",
    responsibilities: [
      "Developed new feature in company’s web application using React, Redux, SQL Server, and C# that allows scientists to customize experiment inputs for a gene editing method on automated liquid handling robots, reducing manual input and automating 60% of scientists' workflows to streamline lab operations—for stem cell research advancement."
    ],
  },
  {
    company: "Vngle: The Civic Insight Company 📱",
    role: "Mobile Engineer",
    duration: "Jun 2024 - Present",
    responsibilities: [
      "Developed Vngle’s mobile reporter app—an authenticity tool that reduced misinformation by 50% and enables reporters to capture, annotate, and securely upload field media with metadata, blockchain-hash storage and media processing for mobile devices."
    ],
  },
  {
    company: "NYC Tech Talent Pipeline 👨🏾‍💻",
    role: "Full-stack Developer Fellow",
    duration: "Jun 2023 - Feb 2024",
    responsibilities: [
      "Completed bootcamps in full-stack development and cybersecurity, building a single web app for a capstone project using React, Express.js, PostgreSQL, REST API, and a self-hosted VPN using AWS EC2."
    ],
  },
  {
    company: "RecProf 👔",
    role: "Web Developer",
    duration: "May 2021 - Jul 2022",
    responsibilities: [
      "Designed and developed an engaging landing page aimed at attracting new clients and showcasing the consulting firm’s services. This highlighted the company’s value, strengthened site security and reliability to maintain 99.9% uptime, and managed ongoing updates to ensure accurate content, appealing design, and alignment with business goals."
    ],
  },
];

export default function Experience() {
  const [hovered] = useState(false);
  const isLargeScreen = useIsLargeScreen();
  const theme = useTheme();

  return (
    <>
      {isLargeScreen && <CustomCursor hovered={hovered} />}
      {!isLargeScreen && <ScreenSizeToast />}
      <section
        id="experience"
        className="min-h-screen flex items-center justify-center p-4 sm:p-8"
        // style={isLargeScreen ? { cursor: "none" } : {}}
      >
        <div className="max-w-4xl w-full">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Experiences
          </motion.h2>
          <div className={`space-y-8 rounded-xl bg-transparent p-6 shadow-[inset_4px_4px_10px_#cfcfcf,inset_-4px_-4px_10px_#ffffff] 
            ${theme === "dark"
              ? "dark:shadow-[inset_4px_4px_10px_#262626,inset_-4px_-4px_10px_#262626]"
              : ""
            }`}>
            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="border-l-2 border-foreground/30 pl-6 relative">
                  <div className="absolute left-[-9px] top-2 bg-background w-4 h-4 flex items-center justify-center">
                    <SpinningXIcon />
                  </div>
                  <div className="group">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-1 transition-colors">
                      {item.company}
                    </h3>
                    <p className="text-base sm:text-lg text-foreground/80 font-medium mb-1">
                      {item.role}
                    </p>
                    <p className="text-sm text-foreground/60 mb-4 font-light">
                      {item.duration}
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {item.responsibilities.map((responsibility, idx) => (
                      <motion.li
                        key={idx}
                        className="text-sm sm:text-base text-foreground/70 leading-relaxed pl-4 relative"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 + idx * 0.1 }}
                      >
                        <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-foreground/30" />
                        {responsibility}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
