import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const codeSnippets = [
  {
    language: 'python',
    title: 'Port Scanner',
    code: `# Simple Port Scanner
import socket

def scan_port(target_ip, port):
    try:
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(1)
        result = sock.connect_ex((target_ip, port))
        sock.close()
        return "OPEN" if result == 0 else "CLOSED"
    except:
        return "ERROR"

# Scan common ports
common_ports = [22, 80, 443, 8080]
for port in common_ports:
    status = scan_port("192.168.1.1", port)
    print(f"Port {port}: {status}")`
  },
  {
    language: 'bash',
    title: 'Log Analyzer',
    code: `#!/bin/bash
# Failed login attempt analyzer

echo "Analyzing failed login attempts..."
grep "Failed password" /var/log/auth.log | \\
awk '{print $1, $2, $3, $9, $11}' | \\
sort | uniq -c | sort -nr | head -10

echo "Top failed IPs:"
grep "Failed password" /var/log/auth.log | \\
awk '{print $11}' | sort | uniq -c | \\
sort -nr | head -5`
  },
  {
    language: 'python',
    title: 'Packet Sniffer',
    code: `# Network Packet Sniffer
from scapy.all import sniff, IP, TCP, UDP

def packet_handler(packet):
    if IP in packet:
        src_ip = packet[IP].src
        dst_ip = packet[IP].dst
        protocol = packet[IP].proto
        
        if TCP in packet:
            print(f"TCP: {src_ip}:{packet[TCP].sport} -> {dst_ip}:{packet[TCP].dport}")
        elif UDP in packet:
            print(f"UDP: {src_ip}:{packet[UDP].sport} -> {dst_ip}:{packet[UDP].dport}")

# Sniff 10 packets on eth0
sniff(iface="eth0", prn=packet_handler, count=10)`
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
    <div className="relative w-full h-full flex flex-col justify-center px-6 py-8">
      {/* Code Container with Background */}
      <div className="bg-black/20 rounded-lg backdrop-blur-sm border border-white/5 p-6">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-6 pb-3 border-b border-white/10">
          <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm"></div>
          <span className="text-white/70 text-sm ml-4 font-mono font-medium">
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
              className="text-white/90 mb-2 flex items-start hover:bg-white/5 rounded px-2 py-1 transition-colors duration-200"
            >
              <span className="text-cyan-400 mr-4 select-none min-w-[2rem] text-right opacity-60">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="flex-1" dangerouslySetInnerHTML={{
                __html: line
                  .replace(/(def |class |import |from |return |if |else |for |while |try |except )/g, '<span class="text-purple-400">$1</span>')
                  .replace(/(\/\/.*|#.*)/g, '<span class="text-green-400">$1</span>')
                  .replace(/(".*?"|'.*?')/g, '<span class="text-yellow-400">$1</span>')
                  .replace(/(const |let |var |function |async |await )/g, '<span class="text-blue-400">$1</span>')
                  .replace(/(sudo |grep |nmap |tcpdump |awk |sort |uniq |head )/g, '<span class="text-red-400">$1</span>')
              }} />
            </motion.div>
          ))}
        </motion.div>

        {/* Language indicator */}
        <div className="mt-6 flex items-center justify-between">
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
      </div>

      {/* Floating geometric elements */}
      <div className="absolute top-4 right-4 w-6 h-6 border border-cyan-400/30 rounded rotate-45"></div>
      <div className="absolute bottom-4 left-4 w-4 h-4 bg-purple-400/20 rounded-full"></div>
      <div className="absolute top-1/2 right-6 w-2 h-8 bg-gradient-to-b from-cyan-400/40 to-transparent"></div>
    </div>
  );
}