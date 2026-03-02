import React, { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Project } from '../types';
import { cn } from '../lib/utils';

export const ProjectList: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter(p => p.difficulty === filter);
  }, [filter]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold text-white mb-4">Explore Projects</h2>
          <p className="text-slate-400">
            Choose a project that matches your current skill level and the AWS services you want to learn.
          </p>
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
          {['All', 'Beginner', 'Intermediate', 'Advanced'].map((f) => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium border transition-all whitespace-nowrap",
                filter === f 
                  ? "border-aws-orange/50 bg-aws-orange/10 text-aws-orange" 
                  : "border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-white/20"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};
