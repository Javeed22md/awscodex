import React from 'react';
import { motion } from 'motion/react';
import { Map, Flag, Trophy, Rocket } from 'lucide-react';

const steps = [
  {
    title: 'Phase 1: The Basics',
    desc: 'Master static hosting, global distribution, and DNS management.',
    icon: Flag,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
  },
  {
    title: 'Phase 2: Serverless Logic',
    desc: 'Learn to build APIs and handle backend logic without servers.',
    icon: Rocket,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
  },
  {
    title: 'Phase 3: Identity & Security',
    desc: 'Implement secure user authentication and granular access control.',
    icon: Shield,
    color: 'text-aws-orange',
    bg: 'bg-aws-orange/10',
  },
  {
    title: 'Phase 4: Advanced Integration',
    desc: 'Build complex, real-time, and AI-powered cloud applications.',
    icon: Trophy,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
  }
];

export const Roadmap: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
      <div className="flex items-center gap-3 mb-12">
        <div className="p-2 rounded-lg bg-aws-orange/10 text-aws-orange">
          <Map size={24} />
        </div>
        <h2 className="text-3xl font-bold text-white">Learning Roadmap</h2>
      </div>

      <div className="relative">
        {/* Connection Line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-white/5 hidden md:block" />

        <div className="space-y-12">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative flex items-start gap-8"
            >
              <div className={`relative z-10 w-16 h-16 rounded-2xl ${step.bg} ${step.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                <step.icon size={32} />
              </div>
              
              <div className="pt-2">
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 max-w-xl leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { Shield } from 'lucide-react';
