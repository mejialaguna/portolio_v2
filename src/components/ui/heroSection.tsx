'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Mail, Linkedin } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface HeroSectionProps {
  name: string;
  role: string;
  social: string;
}

export const HeroSection = ({ name, role, social }: HeroSectionProps) => {
  return (
    <section
      className="relative flex h-screen flex-col items-center overflow-hidden
      bg-gradient-to-b from-background to-background/80"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
        className="z-10 text-center absolute top-28"
      >
        <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          <span className="block">{name}</span>
          <span className="mt-2 block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {role}
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-xl text-muted-foreground">
          Crafting beautiful, interactive web experiences with modern
          technologies
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="#contactMe"
            className="flex gap-2 bg-black px-3 rounded-md cursor-pointer items-center text-white"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </Link>
          <Link
            href={social}
            target="_blank"
            rel="noopener noreferrer"
            className="gap-2 cursor-pointer bg-black p-3 content-center rounded-md"
          >
            <Linkedin className="h-4 w-4 text-white" />
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-72 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
      >
        {/* Abstract shape */}
        <div
          className="absolute left-1/2 top-1/2 h-[350px] w-[350px]
          -translate-x-1/2 -translate-y-1/2 rounded-full
          bg-gradient-to-r from-violet-600/20 to-indigo-600/20 blur-3xl"
        />
        {/* Code editor mockup */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2
            -translate-y-1/2 overflow-hidden rounded-lg border border-slate-700 bg-slate-900 shadow-2xl"
        >
          <div className="flex h-8 items-center gap-2 border-b border-slate-700 bg-slate-800 px-4">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
            <div className="ml-2 text-xs text-slate-400">portfolio.tsx</div>
          </div>
          <div className="p-4 text-sm text-slate-300">
            <pre className="font-mono">
              <code className="text-xs">
                <span className="text-blue-400">const</span>{' '}
                <span className="text-green-400">Portfolio</span> = () =&gt;{' '}
                {'{'}
                <br />
                &nbsp;&nbsp;<span className="text-blue-400">return</span> (
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;
                <span className="text-orange-400">div</span>{' '}
                <span className="text-violet-400">className</span>=
                <span className="text-green-300">&#34;container&#34;</span>
                &gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
                <span className="text-orange-400">h1</span>&gt;Jose mejia&lt;/
                <span className="text-orange-400">h1</span>&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
                <span className="text-orange-400">p</span>&gt;Creative
                Developer&lt;/<span className="text-orange-400">p</span>&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/
                <span className="text-orange-400">div</span>&gt;
                <br />
                &nbsp;&nbsp;);
                <br />
                {'}'};
              </code>
            </pre>
          </div>
        </div>
      </motion.div>

      {/* Floating elements */}
      {['React', 'Next.js', 'TypeScript', 'Tailwind'].map((tech, i) => (
        <motion.div
          key={tech}
          className="absolute rounded-full bg-slate-800 px-3 py-1 text-sm font-medium text-white shadow-lg"
          style={{
            top: `${20 + i * 20}%`,
            left: i % 2 === 0 ? '10%' : '80%',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 + i * 0.2 }}
        >
          {tech}
        </motion.div>
      ))}

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-sm text-muted-foreground">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};
