import { motion } from 'framer-motion';

export function CleanBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95" />
      
      {/* Minimal geometric accents */}
      <div className="absolute inset-0">
        {/* Top-right accent */}
        <motion.div 
          className="absolute top-20 right-20 w-32 h-32 border border-primary/20 rounded-lg"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Bottom-left accent */}
        <motion.div 
          className="absolute bottom-32 left-16 w-24 h-24 border border-primary/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Center subtle glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
      </div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,224,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,224,255,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>
    </div>
  );
}