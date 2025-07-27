import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface CustomCursorProps {
  hovered: boolean;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ hovered }) => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 32,
        height: 32,
        borderRadius: "50%",
        background: hovered ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.1)",
        // border: "5px solid transparent",
        pointerEvents: "none",
        zIndex: 9999,
        x: useSpring(cursorX, { stiffness: 500, damping: 30 }),
        y: useSpring(cursorY, { stiffness: 500, damping: 30 }),
        mixBlendMode: "difference",
        transition: "background 0.2s, border 0.2s"
      }}
    />
  );
};

export default CustomCursor; 