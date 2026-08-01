import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";
import { EXPERIENCE_DATA } from "@/constants";

const SpinningXIcon = () => (
  <motion.div
    className="w-6 h-6 flex items-center justify-center"
    animate={{ rotate: 360 }}
    transition={{
      duration: 3,
      ease: "linear",
      repeat: Infinity,
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

export default function Experience() {
  const theme = useTheme();

  return (
    <>
      <section
        id="experience"
        className="min-h-screen flex items-center justify-center p-4 sm:p-8"
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
          <div
            className={`space-y-8 rounded-xl bg-transparent p-6 shadow-[inset_4px_4px_10px_#cfcfcf,inset_-4px_-4px_10px_#ffffff] 
            ${theme === "dark"
                ? "dark:shadow-[inset_4px_4px_10px_#262626,inset_-4px_-4px_10px_#262626]"
                : ""
              }`}
          >
            {EXPERIENCE_DATA.map((item, index) => (
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
                    {item.responsibilities?.map((responsibility, idx) => (
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
