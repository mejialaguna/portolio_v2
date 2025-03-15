import { AboutMe } from "@/components/ui/aboutMe";
import { ContactMe } from "@/components/ui/contactMe";
import { Footer } from "@/components/ui/footer";
import { HeroSection } from "@/components/ui/heroSection";
import { Projects } from "@/components/ui/projects";
import { Skills } from "@/components/ui/skills";
import { Toaster } from "@/components/ui/sonner";

import { about, projects } from "../../portfolio";

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
      <Projects projects={projects} />

      {/* Contact Section */}
      <ContactMe social={social.linkedin} />

      {/* Footer Section */}
      <Footer />
      <Toaster />
    </main>
  );
}
