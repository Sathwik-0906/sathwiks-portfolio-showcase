import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* 3D Animated Background */}
      <div className="absolute inset-0 z-0 perspective-1000">
        <div className="stars-background">
          {/* More stars for a denser starfield */}
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>
        <div className="orbit-container">
          <div className="orbit-ring ring-1"></div>
          <div className="orbit-ring ring-2"></div>
          <div className="orbit-ring ring-3"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center p-4">
        <h1 
          className="text-6xl md:text-8xl font-black uppercase text-white animate-fade-in tracking-wider hero-title"
        >
          Sathwik Gurugubelli
        </h1>
        <p className="hero-subtitle text-2xl md:text-3xl mt-4 mb-8 text-neon-cyan font-mono animate-fade-in stagger-1">
          Full Stack Developer
        </p>
        <div className="flex justify-center gap-4 animate-fade-in stagger-2">
            <a href="#contact" className="glass-button-3d"><span>Get In Touch</span></a>
            <a href="https://drive.google.com/file/d/1vffiYX1lNLBsZcMhIQmKkla9qMKYF8Qn/view?usp=sharing" download className="glass-button-3d"><span>My Resume</span></a>
        </div>
      </div>
    </section>
  );
};
export default Hero;