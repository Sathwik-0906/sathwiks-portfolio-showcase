import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, MapPin, Sparkles, Code, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number, x: number, y: number, delay: number }>>([]);

  useEffect(() => {
    // Create floating particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3
    }));
    setParticles(newParticles);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-white/20 rounded-full floating"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Interactive glow effect following mouse */}
      <div 
        className="absolute w-96 h-96 bg-neon-purple/30 rounded-full blur-3xl opacity-20 transition-all duration-1000 ease-out"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-neon-cyan/30 rounded-lg rotate-slow" />
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-neon-pink/20 rounded-full pulse-neon" />
      <div className="absolute top-1/3 right-20 w-12 h-12 border-2 border-neon-purple/40 rotate-45 floating" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <div className="flex justify-center items-center gap-4 mb-6">
              <Code className="w-8 h-8 text-neon-cyan animate-pulse" />
              <Sparkles className="w-6 h-6 text-neon-pink floating" />
              <Zap className="w-8 h-8 text-neon-purple animate-pulse" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="block text-gradient animate-fade-in stagger-1">GURUGUBELLI</span>
              <span className="block text-white/90 animate-fade-in stagger-2">SATHWIK</span>
            </h1>
          </div>
          
          <div className="animate-slide-up stagger-3">
            <p className="text-2xl md:text-3xl mb-8 text-neon-cyan font-light">
              Full Stack Developer & Computer Science Student
            </p>
            <p className="text-lg mb-12 text-white/80 max-w-3xl mx-auto leading-relaxed">
              Passionate about building innovative web applications and exploring cutting-edge technologies. 
              Currently pursuing B.Tech in Computer Science with hands-on experience in AWS, MERN stack, and full-stack development.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-16 animate-scale-in stagger-4">
            <Button
              variant="outline"
              size="lg"
              className="glass-card neon-border text-white hover:neon-glow group"
              asChild
            >
              <a href="mailto:sathwikgurugubellipm@gmail.com">
                <Mail className="mr-2 h-5 w-5 group-hover:text-neon-cyan transition-colors" />
                Email Me
              </a>
            </Button>
            <Button
              variant="gradient"
              size="lg"
              className="neon-glow group"
              asChild
            >
              <a href="tel:+916303804889">
                <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Call Me
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-white/80 animate-float-in stagger-5">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="p-2 bg-white/10 rounded-lg group-hover:bg-neon-purple/20 transition-all">
                <Github className="h-6 w-6 group-hover:text-neon-purple" />
              </div>
              <span className="group-hover:text-white transition-colors">GitHub</span>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="p-2 bg-white/10 rounded-lg group-hover:bg-neon-cyan/20 transition-all">
                <Linkedin className="h-6 w-6 group-hover:text-neon-cyan" />
              </div>
              <span className="group-hover:text-white transition-colors">LinkedIn</span>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="p-2 bg-white/10 rounded-lg group-hover:bg-neon-pink/20 transition-all">
                <MapPin className="h-6 w-6 group-hover:text-neon-pink" />
              </div>
              <span className="group-hover:text-white transition-colors">Visakhapatnam</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;