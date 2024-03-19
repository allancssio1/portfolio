'use client'

import { cn } from '@/app/lib/utils'
import { motion } from 'framer-motion'

type SectionTitleProps = {
  title: string
  subtitle: string
  className?: string
}

export const SectionTitle = ({
  subtitle,
  title,
  className,
}: SectionTitleProps) => {
  const animateProps = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  }

  return (
    <div className={cn('flex flex-col pag-4', className)}>
      <motion.span
        {...animateProps}
        transition={{ duration: 0.5 }}
        className="font-mono text-sm text-emerald-400"
      >{`../${subtitle}`}</motion.span>
      <motion.h3
        {...animateProps}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl font-medium "
      >
        {title}
      </motion.h3>
    </div>
  )
}
