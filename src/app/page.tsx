"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

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
import { ContactMe } from "@/components/ui/contactMe";
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
      <ContactMe social={social.linkedin} />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
