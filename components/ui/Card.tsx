'use client';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface CardProps {
  variant?: 'default' | 'glass' | 'cyber' | 'gradient';
  hover?: boolean;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const cardVariants = {
  default: 'bg-white border border-brand-200 shadow-sm dark:bg-brand-900 dark:border-brand-700',
  glass: 'glass border border-white/20 backdrop-blur-xl dark:border-mountain-cyan/20',
  cyber: 'bg-brand-900/5 border border-mountain-teal/20 shadow-lg hover:shadow-xl dark:bg-brand-100/5 dark:border-mountain-cyan/30',
  gradient: 'bg-gradient-to-br from-white to-brand-50 border border-brand-200 dark:from-brand-900 dark:to-brand-800 dark:border-brand-700',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hover = true, children, ...props }, ref) => {
    const cardClasses = cn(
      'rounded-2xl p-6 transition-all duration-300',
      cardVariants[variant],
      hover && 'hover-lift cursor-pointer',
      className
    );

    return (
      <motion.div
        className={cardClasses}
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 pb-4', className)}
      {...props}
    />
  )
);
CardHeader.displayName = 'CardHeader';

export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-xl font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
);
CardTitle.displayName = 'CardTitle';

export const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm text-brand-600 dark:text-brand-400', className)}
      {...props}
    />
  )
);
CardDescription.displayName = 'CardDescription';

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('pb-4', className)} {...props} />
  )
);
CardContent.displayName = 'CardContent';

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center pt-4 border-t border-brand-200 dark:border-brand-700', className)}
      {...props}
    />
  )
);
CardFooter.displayName = 'CardFooter';