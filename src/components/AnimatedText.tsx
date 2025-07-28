import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function AnimatedText({ children, className = "", delay = 0, duration = 0.8 }: AnimatedTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.25, 0, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function GlitchText({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <span className="glitch cyber-glow">{children}</span>
    </motion.div>
  );
}

export function TypingText({ 
  text, 
  className = "", 
  delay = 0,
  speed = 50 
}: { 
  text: string; 
  className?: string; 
  delay?: number;
  speed?: number;
}) {
  const letters = text.split('');
  
  return (
    <div className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: delay + (index * speed) / 1000,
            duration: 0.1
          }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
}