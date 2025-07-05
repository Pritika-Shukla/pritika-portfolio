import { cn } from '@/lib/utils';
import React from 'react'

type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper = ({ children, className }: SectionWrapperProps) => {
  return (
    <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  )
}

export default SectionWrapper 
