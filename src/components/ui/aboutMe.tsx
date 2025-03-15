'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { User } from 'lucide-react';
import { useRef } from 'react';

interface AboutMeProps {
  about: string[];
}

export const AboutMe = ({ about }: AboutMeProps) => {
  // References for scroll animations
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  // Multiple parallax layers with different speeds
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const midLayerY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const frontLayerY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  // Opacity transforms for different elements
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const contentScale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  return (
    <section
      ref={targetRef}
      className='relative overflow-hidden min-h-[80vh] flex items-center'
    >
      {/* Background layer - moves fastest */}
      <motion.div
        style={{ y: bgY, opacity: bgOpacity }}
        className="absolute inset-0 -z-30 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center"
      />

      {/* Middle layer with particles/shapes - moves at medium speed */}
      <motion.div
        style={{ y: midLayerY }}
        className='absolute inset-0 -z-20 opacity-30'
      >
        <div className='absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/20 blur-xl' />
        <div className='absolute top-3/4 right-1/3 w-40 h-40 rounded-full bg-secondary/20 blur-xl' />
        <div className='absolute bottom-1/4 left-2/3 w-24 h-24 rounded-full bg-accent/20 blur-xl' />
      </motion.div>

      {/* Front layer with gradient overlay - moves slowest */}
      <motion.div
        style={{ y: frontLayerY }}
        className='absolute inset-0 -z-10 bg-gradient-to-b from-background/0 via-background/50 to-background/80'
      />

      <div className='container relative z-10 mx-auto'>
        <motion.div
          style={{ opacity: contentOpacity, scale: contentScale }}
          className='mx-auto max-w-3xl rounded-xl bg-background/70 p-8
          backdrop-blur-md shadow-lg border border-primary/10'
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              staggerChildren: 0.1,
              delayChildren: 0.2,
            }}
            viewport={{ once: true }}
            className='flex flex-col gap-6'
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className='flex items-center gap-3'
            >
              <div className='relative'>
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: 'reverse',
                  }}
                >
                  <User className='h-6 w-6 text-primary' />
                </motion.div>
                <motion.div
                  className='absolute inset-0 rounded-full bg-primary/20'
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: 'reverse',
                  }}
                />
              </div>
              <h2 className='text-3xl font-bold'>About Me</h2>
            </motion.div>

            {about.map((text, index) => (
              <motion.p
                key={text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * index,
                }}
                className='text-lg text-muted-foreground'
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
