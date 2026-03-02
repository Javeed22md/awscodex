import React from 'react';
import { Cloud, Github, Menu } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0f1115]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 aws-gradient rounded-lg flex items-center justify-center">
            <Cloud className="text-white" size={20} />
          </div>
          <span className="font-bold text-white tracking-tight">AWS<span className="text-aws-orange">Learn</span></span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-slate-200 hover:text-aws-orange transition-colors">Projects</a>
          <a href="#" className="text-sm font-medium text-slate-400 hover:text-aws-orange transition-colors">Roadmap</a>
          <a href="#" className="text-sm font-medium text-slate-400 hover:text-aws-orange transition-colors">Resources</a>
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
          <button className="md:hidden p-2 text-slate-400">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};
