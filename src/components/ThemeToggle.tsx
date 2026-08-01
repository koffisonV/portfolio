'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useThemeControls } from '@/context/ThemeContext';

export default function ThemeToggle() {
  const { theme, setTheme } = useThemeControls();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-foreground/10 backdrop-blur-sm border border-foreground/20 hover:bg-foreground/20 transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'light' ? (
          <FaSun className="w-5 h-5 text-foreground" />
        ) : (
          <FaMoon className="w-5 h-5 text-foreground" />
        )}
      </motion.div>
    </motion.button>
  );
} 