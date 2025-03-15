'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface ProjectsProps {
  projects: {
    name: string;
    description: string;
    stack: string[];
    DeploymentSite: string;
    sourceCode: string;
    livePreview: string;
    image: string;
    shouldShow: boolean;
  }[];
}

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section className='py-24 justify-items-center'>
      <div className='container'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='mb-12 text-center'
        >
          <h2 className='text-3xl font-bold'>Featured Projects</h2>
          <p className='mx-auto mt-4 max-w-2xl text-lg text-muted-foreground'>
            A selection of my recent work
          </p>
        </motion.div>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className='h-full'
            >
              <Card className='overflow-hidden flex flex-col h-full pt-0 pb-6'>
                <div className='aspect-video overflow-hidden'>
                  <motion.img
                    src={project.image}
                    alt={project.name}
                    className='h-full w-full object-cover'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className='flex-grow'>
                  <div className='flex flex-wrap gap-2'>
                    {project.stack.map((tag, i) => (
                      <span
                        key={i}
                        className='rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className='flex justify-between mt-auto'>
                  <Link
                    href={project.sourceCode}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex flex-row gap-2 cursor-pointer p-[5px_12px]
                    content-center rounded-md text-black border text-sm'
                  >
                    Code
                  </Link>
                  {project?.shouldShow ? (
                    <Link
                      href={project.livePreview}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex flex-row gap-2 cursor-pointer p-[5px_12px]
                    content-center rounded-md text-white bg-black border text-sm'
                    >
                      Live Demo
                      <ExternalLink className='h-4 w-4' />
                    </Link>
                  ) : (
                    <p
                      className='flex flex-row gap-2 p-[5px_12px]
                    content-center rounded-md text-white bg-black border text-sm'
                    >
                      Under Maintenance
                    </p>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
