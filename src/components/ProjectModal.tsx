import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Server, Layers, Cpu } from 'lucide-react';
import { Project } from '../types';
import { ServiceBadge } from './ServiceBadge';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        layoutId={project.id}
        className="glass-card w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors z-10"
        >
          <X size={20} />
        </button>

        <div className="p-8 md:p-12">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.services.map(service => (
              <ServiceBadge key={service} service={service} className="text-sm px-3 py-1" />
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{project.title}</h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">{project.description}</p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="flex items-center gap-2 text-white font-bold mb-4">
                <CheckCircle2 className="text-aws-orange" size={20} />
                Learning Objectives
              </h4>
              <ul className="space-y-3">
                {project.learningObjectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-aws-orange mt-1.5 flex-shrink-0" />
                    {obj}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="flex items-center gap-2 text-white font-bold mb-4">
                  <Layers className="text-aws-orange" size={20} />
                  Architecture
                </h4>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-slate-400 text-sm leading-relaxed">
                  {project.architecture}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-slate-500 text-[10px] uppercase font-bold mb-1">Difficulty</div>
                  <div className="text-white font-bold">{project.difficulty}</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-slate-500 text-[10px] uppercase font-bold mb-1">Time Est.</div>
                  <div className="text-white font-bold">{project.estimatedTime}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4">
            <button className="flex-1 px-6 py-4 rounded-xl aws-gradient text-white font-bold hover:shadow-[0_0_20px_rgba(255,153,0,0.4)] transition-all">
              Start Project Guide
            </button>
            <button className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all">
              View Sample Code
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
