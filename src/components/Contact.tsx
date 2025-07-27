import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailClick = async () => {
    const email = 'koffison29@gmail.com';
    
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = email;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
          document.execCommand('copy');
          setEmailCopied(true);
          setTimeout(() => setEmailCopied(false), 2000);
        } catch (err) {
          console.error('Fallback copy failed: ', err);
        } finally {
          document.body.removeChild(textArea);
        }
      }
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-4xl w-full">
        <motion.h2 
          className="text-2xl sm:text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.button
            onClick={handleEmailClick}
            className="bg-[var(--box-background)] text-[var(--box-foreground)] rounded-lg p-6 text-left transition-all hover:opacity-90"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div 
              className="flex items-center gap-4 mb-4"
              initial={{ x: -20 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <FaEnvelope className="text-2xl" />
              <h3 className="text-lg font-semibold">Email</h3>
            </motion.div>
            <AnimatePresence mode="wait">
              {emailCopied ? (
                <motion.p 
                  key="copied"
                  className="text-sm text-green-500 font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  Copied to clipboard!
                </motion.p>
              ) : (
                <motion.p 
                  key="email"
                  className="text-sm text-foreground/70"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  Koffison29@gmail.com
                </motion.p>
              )}
            </AnimatePresence>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="https://www.linkedin.com/in/koffison-voumadi/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                className="bg-[var(--box-background)] text-[var(--box-foreground)] rounded-lg p-6 transition-all hover:opacity-90"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div 
                  className="flex items-center gap-4 mb-4"
                  initial={{ x: 20 }}
                  whileInView={{ x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <FaLinkedin className="text-2xl" />
                  <h3 className="text-lg font-semibold">LinkedIn</h3>
                </motion.div>
                <motion.p 
                  className="text-sm text-foreground/70"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Connect with me on LinkedIn
                </motion.p>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 