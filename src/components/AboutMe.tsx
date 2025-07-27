import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const name = "Koffison Voumadi";

const ShineEffect = ({ isVisible }: { isVisible: boolean }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </motion.div>
    )}
  </AnimatePresence>
);

export default function AboutMe() {
  const [shineStates, setShineStates] = useState([false, false, false]);

  useEffect(() => {
    const triggerRandomShine = () => {
      const randomCard = Math.floor(Math.random() * 3);
      setShineStates(prev => {
        const newStates = [...prev];
        newStates[randomCard] = true;
        return newStates;
      });

      setTimeout(() => {
        setShineStates(prev => {
          const newStates = [...prev];
          newStates[randomCard] = false;
          return newStates;
        });
      }, 1000);

      const nextDelay = Math.random() * 3000 + 2000; // 2-5 seconds
      setTimeout(triggerRandomShine, nextDelay);
    };

    const initialDelay = Math.random() * 2000 + 1000; // 1-3 seconds initial delay
    const timer = setTimeout(triggerRandomShine, initialDelay);

    return () => clearTimeout(timer);
  }, []);

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
            className="flex-1 p-4 sm:p-6 rounded-lg bg-[var(--box-background)] text-[var(--box-foreground)] relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ShineEffect isVisible={shineStates[0]} />
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Development</h3>
            <p className="text-sm sm:text-base text-foreground/70">
              3 years of hands-on experience in Full-stack web and mobile development. Skilled in building responsive and scalable applications using modern technologies.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex-1 p-4 sm:p-6 rounded-lg bg-[var(--box-background)] text-[var(--box-foreground)] relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ShineEffect isVisible={shineStates[1]} />
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Education</h3>
            <p className="text-sm sm:text-base text-foreground/70">
              B.S. in Computer Science from John Jay College. Knowledgeable in: <br/> Agile &mdash;LinkedIn Learning.<br/>IT Support Specialist&mdash;IBM.
            </p>
          </motion.div>

          <motion.div 
            className="flex-1 p-4 sm:p-6 rounded-lg bg-[var(--box-background)] text-[var(--box-foreground)] relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ShineEffect isVisible={shineStates[2]} />
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Creative</h3>
            <p className="text-sm sm:text-base text-foreground/70">
              Freelance experience in graphic design and videography, including pre-production and post-production work. Passionate about gaming, traveling and spending quality time with people.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 