import React from 'react';
import { FaRegCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const experienceData = [
  {
    company: "Vngle Grassroots News Agency",
    role: "Mobile Engineering Fellow",
    duration: "Jun 2024 - Present",
    responsibilities: [
      "Facilitated the development of a reporter application with metadata, blockchain hash storage and file compression and upload for mobile devices with improved UI.",
      "Implemented media provenance for videos and images sourced between Vngle and partners using a blockchain API and node packages.",
      "Improved CMS with optimized media processing for file compression and 50% faster upload speed using node packages, AWS services and SDK’s."
    ]
  },
  {
    company: "NYC Tech Talent Pipeline",
    role: "Full-stack Developer Fellow",
    duration: "Jun 2023 - Feb 2024",
    responsibilities: [
      "Participate in bootcamps aimed at enhancing technical skills and preparing for future career opportunities.",
      "Engaged in career readiness workshops, professional development, and networking events to build a strong foundation for transitioning into full-time tech.",
      "Developed functional apps, servers, and databases using programming tools such as React, Node.js, Git, PostgreSQL, and REST API during a 10-week bootcamp.",
      "Built and hosted a fully functional Single-page web application hosted on GitHub and presented it as capstone project to facilitators and peers.",
      "Learned cybersecurity fundamentals (e.g., network security, OS/Application security, security policies and procedures, risk management) by completing an 8-week cybersecurity bootcamp"
    ]
  },
  {
    company: "RecProf",
    role: "Web Developer",
    duration: "May 2021 - Jul 2022",
    responsibilities: [
      "Designed and developed the company's landing page using WordPress, managing dashboard plugins, creating a database using phpMyAdmin for blog posts and comments, and installing security tools",
      "Enhanced UX/UI, improving website functionality and ensuring seamless functionality for better user experience",
      "Provided creative designs and production of books for catalog improvement."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-4xl w-full">
        <motion.h2 
          className="text-2xl sm:text-3xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        <div className="space-y-8">
          {experienceData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="border-l-2 border-foreground/30 pl-6 relative">
                <div className="absolute left-[-7px] top-2 bg-background">
                  <FaRegCircle className="w-3 h-3 text-foreground/80" />
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
  );
}