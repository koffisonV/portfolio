import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TOAST_DURATION = 4000;
const TOAST_KEY = "hasSeenScreenToast";

const ScreenSizeToast: React.FC = () => {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const hasSeen = typeof window !== 'undefined' && localStorage.getItem(TOAST_KEY);
    if (!hasSeen) setShow(true);
  }, []);

  useEffect(() => {
    if (!show) return;
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const percent = Math.max(0, 100 - (elapsed / TOAST_DURATION) * 100);
      setProgress(percent);
      if (elapsed >= TOAST_DURATION) {
        setShow(false);
        if (typeof window !== 'undefined') {
          localStorage.setItem(TOAST_KEY, 'true');
        }
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: -60, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.5, duration: 0.7 } }}
          exit={{ y: -60, opacity: 0, scale: 0.8, transition: { duration: 0.4 } }}
          className="fixed left-1/2 top-0 z-[100] -translate-x-1/2 mt-4 bg-black/90 text-white px-4 sm:px-6 py-3 rounded-xl shadow-lg flex flex-col items-center w-auto max-w-[90vw]"
        >
          <span className="font-medium text-base mb-2 text-center break-words w-full">
            For the best experience, please view this website on a larger screen.
          </span>
          <div className="w-full h-1 bg-white/20 rounded overflow-hidden">
            <motion.div
              className="h-full bg-white"
              style={{ width: `${progress}%` }}
              initial={{ width: '100%' }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.1 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScreenSizeToast; 