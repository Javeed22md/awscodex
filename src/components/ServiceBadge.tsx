import React from 'react';
import { AWSService } from '../types';
import { cn } from '../lib/utils';

interface ServiceBadgeProps {
  service: AWSService;
  className?: string;
}

export const ServiceBadge: React.FC<ServiceBadgeProps> = ({ service, className }) => {
  return (
    <span className={cn(
      "px-2 py-1 text-[10px] font-mono font-medium rounded-full border border-white/10 bg-white/5 text-slate-400",
      className
    )}>
      {service}
    </span>
  );
};
