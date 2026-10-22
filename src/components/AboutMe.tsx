import React, { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaRegFileAlt } from "react-icons/fa";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const name = "{ Koffison Voumadi }";

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
  const prefersReducedMotion = useReducedMotion();

  const shineTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const scheduleNext = (delay: number) => {
      shineTimerRef.current = setTimeout(() => {
        const randomCard = Math.floor(Math.random() * 3);
        setShineStates((prev) => {
          const next = [...prev];
          next[randomCard] = true;
          return next;
        });

        shineTimerRef.current = setTimeout(() => {
          setShineStates((prev) => {
            const next = [...prev];
            next[randomCard] = false;
            return next;
          });
          scheduleNext(Math.random() * 3000 + 2000);
        }, 1000);
      }, delay);
    };

    scheduleNext(Math.random() * 2000 + 1000);

    return () => {
      if (shineTimerRef.current !== null) clearTimeout(shineTimerRef.current);
    };
  }, [prefersReducedMotion]);

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
          Full-Stack Software Developer
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
          New York, NY
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
            className="text-2xl hover:text-[var(--accent)] transition-colors"
            title="View LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/koffisonV"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[var(--accent)] transition-colors"
            title="View GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://drive.google.com/file/d/1PeGuiMpnHLiUqbXsPAs3jpCryyrzQLmM/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[var(--accent)] transition-colors"
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
          <motion.h3
            className="text-2xl sm:text-3xl font-bold leading-[1.1] mt-0 mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            About Me
          </motion.h3>

          <motion.p
            className="text-sm sm:text-base text-foreground/60 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            I build production systems that solve real operational problems, from digital provenance pipelines at a civic insight company to gene-editing automation in a biotech lab. Tools that remove friction, improve the user experience, and make day-to-day processes simpler. My work spans cloud-native backend development, full-stack engineering, and workflow automation. Hands-on experience includes AWS (S3, DynamoDB, MediaConvert, EC2, CloudFormation), React, .NET, GraphQL, and RDBMS. I am drawn to environments like enterprise SaaS, biotech, fintech, and developer tooling, where software has direct, measurable impact.
          </motion.p>

          <motion.p
            className="mt-6 text-sm sm:text-base text-foreground/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Got a workflow that is worth improving, or a team building something that matters?{" "}
            I am always up for collaborating with experts and companies who want to turn real-world friction into software that works.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row gap-4 md:gap-8 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div
            className="flex-1 p-4 sm:p-6 rounded-lg bg-[var(--box-background)] text-[var(--box-foreground)] relative overflow-hidden"
          >
            <ShineEffect isVisible={shineStates[0]} />
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-center">
              Achievements
            </h3>
            <ul className="list-none font-light text-center space-y-2">
              <li className="text-sm sm:text-base text-foreground/70">
                Automated 60% of stem cell research gene editing workflows
              </li>
              <li className="text-sm sm:text-base text-foreground/70">
                Engineered CivicWire insights system supporting global 10+ editorial teams
              </li>
              <li className="text-sm sm:text-base text-foreground/70">
                Built Health Diagnostics multi-role portal with end-to-end test kit management
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="flex-1 p-4 sm:p-6 rounded-lg bg-[var(--box-background)] text-[var(--box-foreground)] relative overflow-hidden"
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
