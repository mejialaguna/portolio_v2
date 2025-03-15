'use client';

import { motion } from 'framer-motion';
import { Code, Database, Monitor, Zap } from 'lucide-react';
import React from 'react';

export const Skills = () => {
  return (
    <section className="bg-muted/30 py-24 justify-items-center">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="mb-4 flex justify-center">
            <Code className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold">Skills & Technologies</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            The tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Frontend',
              icon: <Monitor className="h-10 w-10 text-violet-400" />,
              skills: [
                { name: 'React', level: 90 },
                { name: 'Next.js', level: 85 },
                { name: 'TypeScript', level: 80 },
                { name: 'Tailwind CSS', level: 95 },
                { name: 'Design system', level: 95 },
              ],
            },
            {
              title: 'Backend',
              icon: <Database className="h-10 w-10 text-violet-400" />,
              skills: [
                { name: 'Node.js', level: 85 },
                { name: 'Express', level: 80 },
                { name: 'PostgreSQL', level: 75 },
                { name: 'MongoDB', level: 70 },
                { name: 'Docker', level: 70 },
              ],
            },
            {
              title: 'Tools & Workflow',
              icon: <Zap className="h-10 w-10 text-violet-400" />,
              skills: [
                { name: 'Git', level: 90 },
                { name: 'AWS', level: 60 },
                { name: 'Figma', level: 75 },
                { name: 'Jira', level: 75 },
                { name: 'Postman', level: 75 },
              ],
            },
          ].map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl bg-slate-300 p-6 backdrop-blur-sm"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-lg bg-slate-700 p-3">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-700">
                      <motion.div
                        className="h-full bg-violet-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
