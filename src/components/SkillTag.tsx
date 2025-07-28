import { motion } from 'framer-motion';

interface SkillTagProps {
  name: string;
  icon?: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  delay?: number;
}

const levelColors = {
  beginner: 'from-yellow-500 to-orange-500',
  intermediate: 'from-blue-500 to-purple-500',
  advanced: 'from-purple-500 to-pink-500',
  expert: 'from-cyan-400 to-blue-500'
};

export function SkillTag({ name, icon, level = 'intermediate', delay = 0 }: SkillTagProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{
        delay,
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 15,
        z: 10
      }}
      className="group relative"
    >
      <div className={`
        relative px-4 py-2 rounded-lg border border-border
        bg-gradient-to-r ${levelColors[level]}
        text-white font-code text-sm font-medium
        shadow-lg transition-all duration-300
        group-hover:shadow-cyber group-hover:border-primary
        before:absolute before:inset-0 before:rounded-lg
        before:bg-gradient-to-r before:from-primary/20 before:to-secondary/20
        before:opacity-0 group-hover:before:opacity-100
        before:transition-opacity before:duration-300
        overflow-hidden
      `}>
        <div className="relative z-10 flex items-center gap-2">
          {icon && <span className="text-lg">{icon}</span>}
          <span className="tracking-wide">{name}</span>
        </div>
        
        {/* Animated background effect */}
        <div className="
          absolute inset-0 opacity-0 group-hover:opacity-100
          bg-gradient-to-r from-transparent via-white/10 to-transparent
          transform -translate-x-full group-hover:translate-x-full
          transition-all duration-700 ease-out
        " />
      </div>
      
      {/* Glow effect */}
      <div className="
        absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100
        bg-gradient-to-r from-primary/30 to-secondary/30
        blur-md -z-10 transition-opacity duration-300
      " />
    </motion.div>
  );
}