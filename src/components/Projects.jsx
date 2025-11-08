import React from 'react';
import { motion } from 'framer-motion';
import { Boxes, Shield, Workflow } from 'lucide-react';

const works = [
  {
    title: 'Realtime Vector Search Platform',
    tag: 'AI Infrastructure',
    desc: 'Streaming ingestion, hybrid search, and semantic ranking powering multi-tenant AI apps.',
  },
  {
    title: 'Story-driven Analytics Engine',
    tag: 'Narrative Intelligence',
    desc: 'Transforms raw telemetry into actionable story arcs for product growth and ops visibility.',
  },
  {
    title: 'Resilient Payments API',
    tag: 'Backend Systems',
    desc: 'Idempotent design, observability, and fault tolerance at scale with strict SLOs.',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Featured Work
        </motion.h2>
        <p className="text-white/80 max-w-3xl">
          A selection of systems and experiments that blend robust engineering with expressive storytelling.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {works.map((w) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 backdrop-blur-sm hover:from-white/20 hover:to-white/10 transition-all"
            >
              <div className="flex items-center gap-3 text-cyan-300 text-sm">
                <Boxes className="w-4 h-4" />
                {w.tag}
              </div>
              <h3 className="mt-3 text-xl font-semibold">{w.title}</h3>
              <p className="mt-2 text-sm text-white/75">{w.desc}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-cyan-300/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <Workflow className="w-4 h-4" />
                Case study coming soon
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-6 flex items-start gap-4">
          <Shield className="w-5 h-5 text-cyan-300 mt-1" />
          <p className="text-sm text-white/75">
            Built with security, observability, and performance in mind. Every project includes automated testing, tracing, and sensible rollout strategies.
          </p>
        </div>
      </div>
    </section>
  );
}
