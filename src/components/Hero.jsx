import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Github, Linkedin } from 'lucide-react';

const socials = [
  { href: 'https://github.com/', label: 'GitHub', Icon: Github },
  { href: 'https://www.linkedin.com/', label: 'LinkedIn', Icon: Linkedin },
];

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f14]/30 via-[#0b0f14]/50 to-[#0b0f14] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-5"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur text-cyan-200 text-xs w-max">
            <Rocket className="w-4 h-4" />
            Innovative Storytelling in AI & Backend
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight">
            Hafidzar
            <span className="block text-2xl sm:text-3xl md:text-4xl font-medium text-cyan-300 mt-2">
              Back End Developer • AI Engineer
            </span>
          </h1>
          <p className="max-w-2xl text-white/80">
            Engineering resilient systems and intelligent agents, weaving data into narratives that move products forward.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-cyan-400 text-[#0b0f14] font-semibold hover:bg-cyan-300 transition-colors"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/20 hover:border-white/40 transition-colors"
            >
              Get in Touch
            </a>
          </div>
          <div className="flex items-center gap-4 pt-2">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
