import React from 'react';
import { motion } from 'motion/react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ThemeConfig } from '../../types';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  action?: React.ReactNode;
  delay?: number;
  variant?: 'default' | 'highlight';
  theme?: ThemeConfig;
}

export const Card = ({ children, className, title, action, delay = 0, variant = 'default', theme }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      className={twMerge(
        'rounded-2xl p-5 border transition-all duration-300 flex flex-col h-full',
        theme?.cardBg || 'bg-white',
        theme?.cardBorder || 'border-gray-100',
        theme?.cardShadow || 'shadow-sm',
        theme?.cardHover,
        className
      )}
    >
      {(title || action) && (
        <div className="flex justify-between items-center mb-4">
          {title && (
            <h3 className={twMerge("font-semibold text-lg tracking-tight", theme?.textColor)}>
              {title}
            </h3>
          )}
          {action && <div>{action}</div>}
        </div>
      )}
      <div className={twMerge("flex-1", theme?.textColor)}>{children}</div>
    </motion.div>
  );
};
