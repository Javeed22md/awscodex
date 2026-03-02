import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectList } from './components/ProjectList';
import { ServiceExplorer } from './components/ServiceExplorer';
import { Roadmap } from './components/Roadmap';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-aws-orange/30 selection:text-aws-orange">
      <Header />
      <main>
        <Hero />
        <ProjectList />
        <Roadmap />
        <ServiceExplorer />
      </main>
      
      <footer className="border-t border-white/5 py-12 bg-[#0f1115]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 aws-gradient rounded flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">AWS</span>
            </div>
            <span className="text-slate-400 text-sm">© 2024 AWS Learning Hub. Built for builders.</span>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Documentation</a>
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
