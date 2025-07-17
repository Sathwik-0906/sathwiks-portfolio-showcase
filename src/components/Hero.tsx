import { Button } from "@/components/ui/button";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [typedTitle, setTypedTitle] = useState("");
  const fullTitle = "Full Stack Developer";

  useEffect(() => {
    // Typewriter effect
    if (typedTitle.length < fullTitle.length) {
      const timeout = setTimeout(() => {
        setTypedTitle(fullTitle.slice(0, typedTitle.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [typedTitle]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center animated-grid-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 uppercase text-white animate-fade-in tracking-wider">
            Sathwik Gurugubelli
          </h1>
          <p className="text-2xl md:text-4xl mb-8 text-neon-cyan font-mono animate-fade-in stagger-1">
            {typedTitle}
            <span className="blinking-cursor">|</span>
          </p>
          <p className="text-lg md:text-xl mb-12 text-white/70 max-w-2xl mx-auto leading-relaxed animate-fade-in stagger-2">
            Crafting robust and scalable web applications with a passion for clean code and user-centric design.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in stagger-3">
            <Button asChild variant="gradient" size="lg" className="neon-glow group">
              <a href="#contact">
                Get In Touch
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10 hover:text-neon-cyan hover:border-neon-cyan group">
                <a href="YOUR_RESUME_LINK_HERE" download>
                Download Resume
                </a>
            </Button>
          </div>

          <div className="flex justify-center gap-8 animate-fade-in stagger-4">
            <a href="YOUR_GITHUB_LINK_HERE" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-transform duration-300 hover:scale-110">
              <Github className="h-8 w-8" />
            </a>
            <a href="YOUR_LINKEDIN_LINK_HERE" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-transform duration-300 hover:scale-110">
              <Linkedin className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
      <a href="#projects" className="absolute bottom-10 animate-bounce">
        <ArrowDown className="h-8 w-8 text-white/50"/>
      </a>
    </section>
  );
};

export default Hero;