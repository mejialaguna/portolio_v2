"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { User } from "lucide-react";
import React, { useRef } from "react";

interface AboutMeProps {
  about: string[];
}

export const AboutMe = ({ about }: AboutMeProps) => {
  // References for scroll animations
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  return (
    <section ref={targetRef} className="relative py-24 justify-items-center">
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 -z-10 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover
          bg-fixed bg-center"
      />
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl rounded-xl bg-background/80 p-8 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-3">
              <User className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">About Me</h2>
            </div>
            {about.map((text) => (
              <p key={text} className="text-lg text-muted-foreground">
                {text}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
