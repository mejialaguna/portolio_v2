"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Mail } from "lucide-react";

import { AboutMe } from "@/components/ui/aboutMe";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Footer } from "@/components/ui/footer";
import { HeroSection } from "@/components/ui/heroSection";
import { Skills } from "@/components/ui/skills";

import { about } from "../../portfolio";

export default function Portfolio() {
  const { name, role, description, social } = about;
  return (
    <main className="flex-col">
      {/* Hero Section */}
      <HeroSection name={name} role={role} social={social.linkedin} />

      {/* AboutMe Section */}
      <AboutMe about={description} />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <section className="py-24 justify-items-center">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              A selection of my recent work
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "E-commerce Platform",
                description:
                  "A full-featured online store built with Next.js and Stripe integration.",
                image: "/placeholder.svg?height=400&width=600",
                tags: ["Next.js", "Stripe", "Tailwind CSS"],
              },
              {
                title: "Task Management App",
                description:
                  "A collaborative task manager with real-time updates using WebSockets.",
                image: "/placeholder.svg?height=400&width=600",
                tags: ["React", "Node.js", "Socket.io"],
              },
              {
                title: "Portfolio Website",
                description:
                  "A creative portfolio for a digital artist with advanced animations.",
                image: "/placeholder.svg?height=400&width=600",
                tags: ["Next.js", "Framer Motion", "Three.js"],
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" className="gap-1">
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" className="gap-1">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-muted/30 py-24 justify-items-center">
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
                href="#"
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
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
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

      <Footer />
    </main>
  );
}
