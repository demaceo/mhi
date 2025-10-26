'use client';
import { forwardRef, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface ButtonProps {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'gradient' | 'cyber';
  size?: 'sm' | 'default' | 'lg' | 'xl';
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const buttonVariants = {
  default: 'bg-brand-900 text-white hover:bg-brand-800 shadow-lg hover:shadow-xl',
  secondary: 'bg-brand-100 text-brand-900 hover:bg-brand-200',
  outline: 'border-2 border-brand-300 text-brand-700 hover:bg-brand-50 hover:border-brand-400',
  ghost: 'text-brand-700 hover:bg-brand-100 hover:text-brand-900',
  gradient: 'bg-gradient-to-r from-mountain-teal to-mountain-emerald text-white shadow-lg hover:shadow-mountain-teal/25',
  cyber: 'bg-gradient-to-r from-mountain-cyan via-mountain-teal to-mountain-green text-white shadow-lg hover:shadow-glow border border-mountain-teal/30',
};

const sizeVariants = {
  sm: 'h-9 px-4 text-sm',
  default: 'h-12 px-6 text-base',
  lg: 'h-14 px-8 text-lg',
  xl: 'h-16 px-10 text-xl',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', children, ...props }, ref) => {
    const buttonClasses = cn(
      // Base styles
      'inline-flex items-center justify-center rounded-2xl font-semibold',
      'transition-all duration-200 ease-out',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-mountain-teal focus-visible:ring-opacity-50 focus-visible:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'relative overflow-hidden group',
      // Variants
      buttonVariants[variant],
      sizeVariants[size],
      className
    );

    return (
      <motion.button
        className={buttonClasses}
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        {...props}
      >
        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out" />
        
        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
