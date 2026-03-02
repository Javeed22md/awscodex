import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Clock, BarChart2, ChevronRight } from 'lucide-react';
import { Project } from '../types';
import { ServiceBadge } from './ServiceBadge';
import { cn } from '../lib/utils';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const difficultyColor = {
    Beginner: 'text-emerald-400 bg-emerald-400/10',
    Intermediate: 'text-aws-orange bg-aws-orange/10',
    Advanced: 'text-rose-400 bg-rose-400/10',
  }[project.difficulty];

  return (
    <motion.div
      layoutId={project.id}
      onClick={onClick}
      className="glass-card p-6 cursor-pointer hover:border-aws-orange/30 transition-all group relative overflow-hidden"
      whileHover={{ y: -4 }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-aws-orange/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-aws-orange/10 transition-colors" />
      
      <div className="flex justify-between items-start mb-4">
        <span className={cn("px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider", difficultyColor)}>
          {project.difficulty}
        </span>
        <div className="flex gap-2">
          {project.services.slice(0, 3).map(service => (
            <ServiceBadge key={service} service={service} />
          ))}
          {project.services.length > 3 && (
            <span className="text-[10px] text-slate-500">+{project.services.length - 3}</span>
          )}
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-aws-orange transition-colors">
        {project.title}
      </h3>
      
      <p className="text-slate-400 text-sm line-clamp-2 mb-6">
        {project.description}
      </p>

      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <Clock size={14} />
            {project.estimatedTime}
          </div>
        </div>
        
        <div className="flex items-center gap-1 text-aws-orange font-medium text-sm group-hover:translate-x-1 transition-transform">
          View Details
          <ChevronRight size={16} />
        </div>
      </div>
    </motion.div>
  );
};
