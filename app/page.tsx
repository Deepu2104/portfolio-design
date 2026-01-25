import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Articles from "@/components/Articles";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { CommandMenu } from "@/components/CommandMenu";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Articles />
      <Contact />
      <Footer />
      <CommandMenu />
    </main>
  );
}
