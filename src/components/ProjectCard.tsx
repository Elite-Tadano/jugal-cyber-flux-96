import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ExternalLink, Github, Shield, Code } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  type: 'security' | 'web' | 'tool';
  featured?: boolean;
}

const typeIcons = {
  security: Shield,
  web: Code,
  tool: Code
};

const typeColors = {
  security: 'from-red-500 to-orange-500',
  web: 'from-blue-500 to-purple-500',
  tool: 'from-green-500 to-cyan-500'
};

export function ProjectCard({ 
  title, 
  description, 
  tech, 
  github, 
  demo, 
  type,
  featured = false 
}: ProjectCardProps) {
  const IconComponent = typeIcons[type];
  
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`group relative ${featured ? 'md:col-span-2' : ''}`}
    >
      <Card className="
        relative h-full p-6 bg-card/50 backdrop-blur-sm
        border-border hover:border-primary
        transition-all duration-500
        overflow-hidden
      ">
        {/* Background gradient overlay */}
        <div className={`
          absolute inset-0 opacity-0 group-hover:opacity-10
          bg-gradient-to-br ${typeColors[type]}
          transition-opacity duration-500
        `} />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`
                p-2 rounded-lg bg-gradient-to-br ${typeColors[type]}
                shadow-lg group-hover:shadow-glow
                transition-all duration-300
              `}>
                <IconComponent className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-orbitron font-bold text-foreground">
                {title}
              </h3>
            </div>
            
            {featured && (
              <span className="px-2 py-1 text-xs font-code bg-primary/20 text-primary rounded-full border border-primary/30">
                FEATURED
              </span>
            )}
          </div>
          
          {/* Description */}
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {description}
          </p>
          
          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((item, index) => (
              <span
                key={index}
                className="
                  px-2 py-1 text-xs font-code
                  bg-muted/50 text-muted-foreground
                  rounded border border-border
                  group-hover:border-primary/30
                  transition-colors duration-300
                "
              >
                {item}
              </span>
            ))}
          </div>
          
          {/* Action buttons */}
          <div className="flex gap-3">
            {github && (
              <Button
                variant="outline"
                size="sm"
                className="
                  group/btn border-border hover:border-primary
                  hover:bg-primary/10 transition-all duration-300
                "
                asChild
              >
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
            )}
            
            {demo && (
              <Button
                size="sm"
                className="
                  bg-primary hover:bg-primary/90
                  shadow-lg hover:shadow-cyber
                  transition-all duration-300
                "
                asChild
              >
                <a href={demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </a>
              </Button>
            )}
          </div>
        </div>
        
        {/* Hover glow effect */}
        <div className="
          absolute inset-0 opacity-0 group-hover:opacity-100
          bg-gradient-to-r from-transparent via-primary/5 to-transparent
          transition-opacity duration-500
        " />
      </Card>
    </motion.div>
  );
}