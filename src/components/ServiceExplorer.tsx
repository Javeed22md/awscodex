import React from 'react';
import { motion } from 'motion/react';
import { Database, Shield, Zap, Globe, Cpu, MessageSquare } from 'lucide-react';

const services = [
  { name: 'S3', icon: Database, desc: 'Object storage for any amount of data.' },
  { name: 'Lambda', icon: Zap, desc: 'Run code without thinking about servers.' },
  { name: 'Cognito', icon: Shield, desc: 'Simple and secure user identity.' },
  { name: 'CloudFront', icon: Globe, desc: 'Fast, secure, and programmable CDN.' },
  { name: 'DynamoDB', icon: Cpu, desc: 'NoSQL database for any scale.' },
  { name: 'AppSync', icon: MessageSquare, desc: 'Real-time data with GraphQL.' },
];

export const ServiceExplorer: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">Core AWS Services</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          These are the building blocks of modern cloud applications. Master these to become a proficient cloud developer.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {services.map((service, i) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-6 text-center group hover:border-aws-orange/30 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-4 group-hover:bg-aws-orange/10 transition-colors">
              <service.icon className="text-slate-400 group-hover:text-aws-orange transition-colors" size={24} />
            </div>
            <h3 className="text-white font-bold mb-2">{service.name}</h3>
            <p className="text-[10px] text-slate-500 leading-tight">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
