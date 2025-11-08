import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Let's collaborate
        </motion.h2>
        <p className="text-white/80 max-w-2xl">
          Tell me about the story you want to ship. I usually respond within a day.
        </p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-white/70">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                required
                className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-cyan-400"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm text-white/70">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                required
                className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-cyan-400"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label className="text-sm text-white/70">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              required
              rows={5}
              className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-cyan-400"
              placeholder="What's the challenge?"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 w-max px-5 py-3 rounded-lg bg-cyan-400 text-[#0b0f14] font-semibold hover:bg-cyan-300 transition-colors"
          >
            <Send className="w-4 h-4" /> Send message
          </button>
          {sent && (
            <div className="text-sm text-cyan-300 inline-flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Message prepared — integrate with your backend/email of choice.
            </div>
          )}
        </form>

        <footer className="mt-16 text-xs text-white/50">
          © {new Date().getFullYear()} Hafidzar — Crafted with intention.
        </footer>
      </div>
    </section>
  );
}
