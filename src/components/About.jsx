import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Server, Brain } from 'lucide-react';

const skills = [
  { icon: Server, title: 'Scalable Backends', desc: 'FastAPI, Node, microservices, observability, and performance-first APIs.' },
  { icon: Brain, title: 'AI Systems', desc: 'LLM apps, retrieval, agents, vector search, and production inference.' },
  { icon: Cpu, title: 'Data Engineering', desc: 'Pipelines, feature stores, experimentation, and MLOps best practices.' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          About
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-white/80 max-w-3xl"
        >
          I build robust services and intelligent products. My work blends distributed systems with applied AI, bringing ideas to life through intentional architecture and narrative-driven UX.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {skills.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <Icon className="w-6 h-6 text-cyan-300" />
              <h3 className="mt-3 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/75">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
