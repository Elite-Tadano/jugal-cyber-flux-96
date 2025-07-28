import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const codeSnippets = [
  {
    language: 'python',
    title: 'Threat Detection',
    code: `# SOC Threat Hunter
def analyze_logs(event_data):
    if detect_anomaly(event_data):
        alert = create_alert()
        escalate_incident(alert)
        return "THREAT_DETECTED"
    return "CLEAN"`
  },
  {
    language: 'bash',
    title: 'Network Analysis',
    code: `# Network Forensics
sudo tcpdump -i eth0 -w capture.pcap
grep "MALWARE" /var/log/security.log
nmap -sS -O target_ip`
  },
  {
    language: 'javascript',
    title: 'Security Dashboard',
    code: `// Real-time monitoring
const monitorThreats = async () => {
  const alerts = await fetchAlerts();
  alerts.filter(a => a.severity > 7)
        .forEach(processAlert);
};`
  }
];

export function CodeSnippet() {
  const [currentSnippet, setCurrentSnippet] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const snippet = codeSnippets[currentSnippet];

  return (
    <div className="relative w-full h-full flex flex-col justify-center p-6">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="text-white/60 text-sm ml-3 font-mono">
          {snippet.title}
        </span>
      </div>

      {/* Code Content */}
      <motion.div
        key={currentSnippet}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
        className="font-mono text-sm leading-relaxed"
      >
        {snippet.code.split('\n').map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="text-white/90 mb-1"
          >
            <span className="text-cyan-400 mr-3 select-none">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span dangerouslySetInnerHTML={{
              __html: line
                .replace(/(def |class |import |from |return |if |else |for |while |try |except )/g, '<span class="text-purple-400">$1</span>')
                .replace(/(\/\/.*|#.*)/g, '<span class="text-green-400">$1</span>')
                .replace(/(".*?"|'.*?')/g, '<span class="text-yellow-400">$1</span>')
                .replace(/(const |let |var |function |async |await )/g, '<span class="text-blue-400">$1</span>')
                .replace(/(sudo |grep |nmap |tcpdump )/g, '<span class="text-red-400">$1</span>')
            }} />
          </motion.div>
        ))}
      </motion.div>

      {/* Language indicator */}
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-cyan-400 font-mono bg-cyan-400/10 px-2 py-1 rounded">
          {snippet.language}
        </span>
        <div className="flex gap-1">
          {codeSnippets.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSnippet 
                  ? 'bg-cyan-400 w-6' 
                  : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating geometric elements */}
      <div className="absolute top-4 right-4 w-6 h-6 border border-cyan-400/30 rounded rotate-45"></div>
      <div className="absolute bottom-4 left-4 w-4 h-4 bg-purple-400/20 rounded-full"></div>
      <div className="absolute top-1/2 right-6 w-2 h-8 bg-gradient-to-b from-cyan-400/40 to-transparent"></div>
    </div>
  );
}