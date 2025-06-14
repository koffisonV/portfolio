import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const name = "Koffison Voumadi";

export default function AboutMe() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center p-4 sm:p-8 pb-24">
      <div className="max-w-4xl w-full">
        <motion.h3 
          className="font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hello I&apos;m
        </motion.h3>
        <motion.h1 
          className="text-3xl sm:text-3xl font-bold mb-6 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          {name.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.1,
                delay: index * 0.05,
                ease: "easeOut"
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.span 
          className="text-md text-foreground/60 opacity-80 block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Full Stack Software Engineer
        </motion.span>
        <motion.p 
          className="text-sm opacity-70"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          📍 New York, NY
        </motion.p>

        <motion.div 
          className="flex gap-4 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a href="https://www.linkedin.com/in/koffison-voumadi/" 
             target="_blank" 
             rel="noopener noreferrer"
             className="text-2xl hover:text-blue-400 transition-colors">
            <FaLinkedin />
          </a>
          <a href="https://github.com/koffisonV" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="text-2xl hover:text-gray-400 transition-colors">
            <FaGithub />
          </a>
        </motion.div>

        <motion.div 
          className="flex flex-col md:flex-row gap-4 md:gap-8 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div 
            className="flex-1 p-4 sm:p-6 rounded-lg bg-[var(--box-background)] text-[var(--box-foreground)]"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Development</h3>
            <p className="text-sm sm:text-base text-foreground/70">
              3 years of hands-on experience in Full-stack web and mobile development. Skilled in building responsive and scalable applications using modern technologies.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex-1 p-4 sm:p-6 rounded-lg bg-[var(--box-background)] text-[var(--box-foreground)]"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Education</h3>
            <p className="text-sm sm:text-base text-foreground/70">
              B.S. in Computer Science from John Jay College. Knowledgeable in: <br/> Agile &mdash;LinkedIn Learning.<br/>IT Support Specialist&mdash;IBM.
            </p>
          </motion.div>

          <motion.div 
            className="flex-1 p-4 sm:p-6 rounded-lg bg-[var(--box-background)] text-[var(--box-foreground)]"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Creative</h3>
            <p className="text-sm sm:text-base text-foreground/70">
              Freelance experience in graphic design and videography, including pre-production and post-production work. Passionate about gaming and spending quality time with family.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 