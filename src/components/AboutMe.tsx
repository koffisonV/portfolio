import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaRegFileAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";

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
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </motion.div>
    )}
  </AnimatePresence>
);

export default function AboutMe() {
  const [shineStates, setShineStates] = useState([false, false, false]);
  const theme = useTheme();

  useEffect(() => {
    const triggerRandomShine = () => {
      const randomCard = Math.floor(Math.random() * 3);
      setShineStates((prev) => {
        const newStates = [...prev];
        newStates[randomCard] = true;
        return newStates;
      });

      setTimeout(() => {
        setShineStates((prev) => {
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
    <section
      id="about"
      className="min-h-screen flex items-center justify-center p-4 sm:p-8 pb-24"
    >
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
                ease: "easeOut",
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.span
          className="text-md font-semibold text-foreground/60 opacity-80 block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Full Stack Software Developer
        </motion.span>
        <motion.p
          className="text-sm opacity-70"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          B.S. in Computer Science & Information Security
        </motion.p>
        <motion.p
          className="text-sm font-light opacity-70"
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
          <a
            href="https://www.linkedin.com/in/koffison-voumadi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-400 transition-colors"
            title="View LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/koffisonV"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400 transition-colors"
            title="View GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://drive.google.com/file/d/1PeGuiMpnHLiUqbXsPAs3jpCryyrzQLmM/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-orange-500 transition-colors"
            title="View Resume"
          >
            <FaRegFileAlt />
          </a>
        </motion.div>
        <motion.div
          className="pt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className={`rounded-xl bg-transparent p-6 shadow-[inset_-4px_-5px_15px_#cfcfcf,inset_4px_4px_10px_#ffffff]
            ${
              theme === "dark"
                ? "dark:shadow-[inset_-4px_-5px_15px_#262626,inset_4px_4px_10px_#262626]"
                : ""
            }`}>
            <motion.h3
              className="text-2xl sm:text-3xl font-bold mt-0 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              About Me
            </motion.h3>

            <motion.p
              className="text-sm sm:text-base text-foreground/70 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              A tech enthusiast driven by curiosity and a commitment to solving
              real-world problems across industries—from media and biotech to
              consulting and beyond. My mission is to engineer solutions where
              technology, intelligence, and security converge.
            </motion.p>
          </div>
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
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-center">
              Achievements
            </h3>
            <ul className="list-none font-light text-center space-y-2">
              <li className="text-sm sm:text-base text-foreground/70">
                Automated 60% of gene editing workflow for stem cell research
              </li>
              <li className="text-sm sm:text-base text-foreground/70">
                Built a mobile app that reduced misinformation by 50%
              </li>
              <li className="text-sm sm:text-base text-foreground/70">
                Deployed landing page that boosted client acquisition
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="flex-1 p-4 sm:p-6 rounded-lg bg-[var(--box-background)] text-[var(--box-foreground)] relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ShineEffect isVisible={shineStates[1]} />
            <h3 className="text-lg text-center sm:text-xl font-semibold mb-3">
              Expertise
            </h3>
            <ul className="list-none font-light text-center space-y-6 sm:space-y-7">
              <li className="text-sm sm:text-base text-foreground/70">
                Software Development
              </li>
              <li className="text-sm sm:text-base text-foreground/70">
                AI Development
              </li>
              <li className="text-sm sm:text-base text-foreground/70">
                IT Support Specialist
              </li>
              <li className="text-sm sm:text-base text-foreground/70">
                Cyber Security
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="flex-1 p-4 sm:p-6 rounded-lg bg-[var(--box-background)] text-[var(--box-foreground)] relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ShineEffect isVisible={shineStates[2]} />
            <h3 className="text-lg text-center sm:text-xl font-semibold mb-3">
              Creative
            </h3>
            <p className="text-sm text-center font-light sm:text-base text-foreground/70">
              Freelance experience in graphic design and videography, including
              pre-production and post-production work. Passionate about gaming
              and traveling.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
