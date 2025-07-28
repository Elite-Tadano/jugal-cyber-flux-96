import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CleanBackground } from '@/components/CleanBackground';
import { AnimatedText, GlitchText, TypingText } from '@/components/AnimatedText';
import { SkillTag } from '@/components/SkillTag';
import { ProjectCard } from '@/components/ProjectCard';

import { CodeSnippet } from '@/components/CodeSnippet';
import { 
  Shield, 
  Code, 
  Terminal, 
  Download, 
  Mail, 
  Github, 
  Linkedin,
  MapPin,
  Briefcase,
  GraduationCap,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

const skills = [
  { name: 'Python', icon: '🐍', level: 'expert' as const },
  { name: 'Splunk', icon: '📊', level: 'advanced' as const },
  { name: 'React', icon: '⚛️', level: 'advanced' as const },
  { name: 'TypeScript', icon: '📘', level: 'advanced' as const },
  { name: 'Bash', icon: '💻', level: 'intermediate' as const },
  { name: 'SIEM', icon: '🛡️', level: 'expert' as const },
  { name: 'EDR', icon: '🔍', level: 'advanced' as const },
  { name: 'Incident Response', icon: '🚨', level: 'expert' as const },
  { name: 'Threat Hunting', icon: '🎯', level: 'advanced' as const },
  { name: 'Digital Forensics', icon: '🔬', level: 'intermediate' as const },
  { name: 'Network Security', icon: '🌐', level: 'advanced' as const },
  { name: 'Malware Analysis', icon: '🦠', level: 'intermediate' as const }
];

const projects = [
  {
    title: "SOC EDR Lab",
    description: "Complete Security Operations Center lab environment with endpoint detection and response capabilities, SIEM integration, and threat simulation scenarios.",
    tech: ["Splunk", "CrowdStrike", "Windows Server", "Linux", "PowerShell"],
    github: "#",
    demo: "#",
    type: "security" as const,
    featured: true
  },
  {
    title: "ParamNinja",
    description: "Advanced parameter discovery tool for web application security testing, featuring automated fuzzing and vulnerability detection.",
    tech: ["Python", "Requests", "Threading", "JSON"],
    github: "#",
    type: "tool" as const
  },
  {
    title: "Firewall Analyzer",
    description: "Network security analysis tool for parsing and analyzing firewall logs, detecting anomalies and potential threats.",
    tech: ["Python", "Pandas", "NetworkX", "Matplotlib"],
    github: "#",
    type: "security" as const
  },
  {
    title: "Threat Intel Dashboard",
    description: "Real-time threat intelligence dashboard aggregating multiple feeds with automated IOC enrichment and threat scoring.",
    tech: ["React", "TypeScript", "D3.js", "API Integration"],
    github: "#",
    demo: "#",
    type: "web" as const
  }
];

const certifications = [
  {
    name: "TryHackMe SOC Level 1",
    issuer: "TryHackMe",
    date: "2024",
    badge: "🛡️"
  },
  {
    name: "VTF Bootcamp Graduate",
    issuer: "Veterans Tech Fellowship",
    date: "2024",
    badge: "🎓"
  },
  {
    name: "IBM Frontend Developer",
    issuer: "IBM",
    date: "2023",
    badge: "💻"
  }
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className="relative min-h-screen bg-background">
      <CleanBackground />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
      >
        
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start h-full relative z-10 pt-20">
          
          {/* Left Side - Purple Card with Code Snippet */}
          <div className="relative max-w-md mx-auto lg:mx-0">
            {/* Corner Numbers */}
            <div className="absolute -top-12 -left-4 text-white text-2xl font-mono opacity-60 z-20">
              01
            </div>
            <div className="absolute -top-12 -right-4 text-white text-2xl font-mono opacity-60 z-20">
              ro
            </div>
            
            {/* Purple Rounded Card with Code Snippet */}
            <motion.div 
              className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl h-[500px] relative overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <CodeSnippet />
            </motion.div>
            
            {/* Bottom Navigation Elements */}
            <div className="flex justify-between items-center mt-8 text-white/60 text-sm">
              <div className="flex flex-col space-y-1">
                <span>Behance</span>
                <span>LinkedIn</span>
              </div>
              <ChevronDown className="w-5 h-5" />
              <div className="flex-1 mx-6">
                <div className="h-px bg-white/20"></div>
                <p className="text-center mt-2 text-xs tracking-wider">EXPLORE THE SCROLL</p>
                <div className="h-px bg-white/20 mt-2"></div>
              </div>
              <ChevronDown className="w-5 h-5" />
              <div className="text-right">
                <span className="text-xs">DISCOVER</span>
                <br />
                <span className="text-xs opacity-70">0110 STUDIO</span>
              </div>
            </div>
          </div>

          {/* Right Side - Large Text */}
          <div className="space-y-8 relative">
            <AnimatedText delay={0.4}>
              <div className="space-y-2 relative">
                <div className="absolute -left-8 top-0 text-white/20 text-8xl font-mono">
                  &lt;
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-[0.85] text-white relative z-10">
                  <span className="block opacity-90">HEY</span>
                  <span className="block opacity-95">THIS</span>
                  <span className="block opacity-100 flex items-center">
                    IS
                    <span className="ml-4 w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></span>
                  </span>
                  <span className="block text-white font-black relative">
                    JUGAL
                    <div className="absolute -right-4 top-4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                  </span>
                </h1>
                <div className="absolute -right-8 bottom-0 text-white/20 text-8xl font-mono">
                  /&gt;
                </div>
              </div>
            </AnimatedText>

            <AnimatedText delay={0.8}>
              <div className="space-y-3 mt-12 relative">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full shadow-lg relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full transform scale-75 opacity-60"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-blue-400 rounded-full transform scale-50 opacity-40"></div>
                  </div>
                  <div className="h-0.5 w-16 bg-gradient-to-r from-primary to-transparent"></div>
                </div>
                
                <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"></div>
                  
                  <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-wide leading-tight">
                    <span className="text-cyan-400 font-mono text-lg">&gt;</span>
                    <span className="ml-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      THAT CYBERSECURITY
                    </span>
                  </p>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-wide mt-2">
                    <span className="text-cyan-400 font-mono text-lg">&gt;</span>
                    <span className="ml-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      ANALYST
                    </span>
                  </p>
                  
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    </div>
                    <div className="text-cyan-400 font-mono text-sm opacity-70">
                      status: active
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedText>

            <AnimatedText delay={1.2}>
              <div className="relative">
                <p className="text-lg md:text-xl lg:text-2xl font-medium text-white/80 mt-6 font-mono">
                  <span className="text-cyan-400">[</span>
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">
                    I GO BY
                  </span>
                  <span className="text-cyan-400">]</span>
                  <span className="ml-2 text-white">SOC Analyst</span>
                  <span className="text-cyan-400"> &amp; </span>
                  <span className="text-white">Developer</span>
                </p>
                <div className="mt-2 w-32 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
              </div>
            </AnimatedText>

            {/* Scroll Indicator - Below the analyst text */}
            <AnimatedText delay={1.6}>
              <motion.div 
                className="mt-12"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex flex-col items-center gap-3 text-muted-foreground hover:text-primary group transition-colors duration-300"
                  onClick={() => scrollToSection('about')}
                >
                  <span className="text-sm font-mono tracking-wider">SCROLL TO EXPLORE</span>
                  <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
                    <motion.div 
                      className="w-1 h-3 bg-current rounded-full mt-2"
                      animate={{ y: [0, 12, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                </Button>
              </motion.div>
            </AnimatedText>

            {/* Small geometric icon - positioned relative to right side */}
            <div className="absolute -top-8 -right-4 lg:-right-8">
              <div className="w-10 h-10 border border-white/30 rounded transform rotate-45 flex items-center justify-center">
                <span className="text-white text-xs transform -rotate-45 font-mono">W.</span>
              </div>
            </div>

            {/* Honors text - positioned better */}
            <div className="absolute right-0 top-1/3 transform rotate-90 origin-center translate-x-8">
              <span className="text-white/40 text-sm tracking-widest font-mono">Honors</span>
            </div>
          </div>
        </div>
        
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <span className="text-sm font-mono text-primary tracking-widest opacity-60">02</span>
              <h2 className="text-5xl lg:text-7xl font-hero font-black tracking-tight leading-none text-white mt-2">
                <span className="block">ABOUT</span>
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  ME
                </span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-space font-semibold mb-3">Security Analyst</h3>
                <p className="text-muted-foreground">
                  SOC operations, incident response, and threat hunting with hands-on experience in enterprise security tools.
                </p>
              </Card>
              
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300">
                <Code className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-space font-semibold mb-3">Developer</h3>
                <p className="text-muted-foreground">
                  Full-stack development with focus on React, TypeScript, and building secure, scalable applications.
                </p>
              </Card>
              
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-space font-semibold mb-3">Location</h3>
                <p className="text-muted-foreground">
                  Based in the United States, available for remote opportunities and collaboration.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="mb-8">
              <span className="text-sm font-mono text-primary tracking-widest opacity-60">03</span>
              <h2 className="text-5xl lg:text-7xl font-hero font-black tracking-tight leading-none text-white mt-2">
                <span className="block">SKILLS &</span>
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  EXPERTISE
                </span>
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for cybersecurity analysis and modern web development
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <SkillTag
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                level={skill.level}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="mb-8">
              <span className="text-sm font-mono text-primary tracking-widest opacity-60">04</span>
              <h2 className="text-5xl lg:text-7xl font-hero font-black tracking-tight leading-none text-white mt-2">
                <span className="block">FEATURED</span>
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  PROJECTS
                </span>
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Security tools, analysis platforms, and web applications that showcase my expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="mb-8">
              <span className="text-sm font-mono text-primary tracking-widest opacity-60">05</span>
              <h2 className="text-5xl lg:text-7xl font-hero font-black tracking-tight leading-none text-white mt-2">
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  CERTIFICATIONS
                </span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300 group">
                  <div className="text-4xl mb-4">{cert.badge}</div>
                  <h3 className="text-lg font-space font-semibold mb-2">{cert.name}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                  <Badge variant="outline" className="text-xs">{cert.date}</Badge>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="mb-8">
              <span className="text-sm font-mono text-primary tracking-widest opacity-60">06</span>
              <h2 className="text-5xl lg:text-7xl font-hero font-black tracking-tight leading-none text-white mt-2">
                <span className="block">LET'S</span>
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  CONNECT
                </span>
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Ready to discuss cybersecurity challenges or development opportunities
            </p>

            <div className="flex justify-center gap-6 mb-12">
              <Button
                size="lg"
                className="magnetic bg-primary hover:bg-primary/90 shadow-cyber hover:shadow-glow"
                asChild
              >
                <a href="mailto:jugal@example.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Me
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="magnetic border-border hover:border-primary hover:bg-primary/10"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5 mr-2" />
                  Resume
                </a>
              </Button>
            </div>

            <div className="flex justify-center gap-8">
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Github className="w-8 h-8" />
              </motion.a>
              
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Linkedin className="w-8 h-8" />
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground font-code">
            © 2024 Jugal Chaudhary. Built with React, Three.js & lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
}
