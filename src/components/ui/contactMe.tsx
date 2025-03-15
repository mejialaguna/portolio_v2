'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ContactMeProps {
  social: string;
}

export const ContactMe = ({ social }: ContactMeProps) => {
  return (
    <section className="bg-muted/30 py-24 justify-items-center" id="contactMe">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Interested in working together? Feel free to reach out!
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <Card>
              <CardContent className="pt-6">
                <form className="grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm
                          ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium
                          placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2
                          focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed
                          disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm
                          ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium
                          placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2
                          focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed
                          disabled:opacity-50"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm
                        ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium
                        placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2
                        focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed
                        disabled:opacity-50"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2
                        text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none
                        focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                        disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your message"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <div className="mt-12 flex justify-center gap-6">
            <motion.a
              href={social}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="rounded-full bg-background p-3 shadow-md transition-colors hover:bg-primary/10"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -3 }}
              className="rounded-full bg-background p-3 shadow-md transition-colors hover:bg-primary/10"
            >
              <ExternalLink className="h-6 w-6" />
              <span className="sr-only">Website</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
