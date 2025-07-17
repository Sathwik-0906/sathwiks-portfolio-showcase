import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            GURUGUBELLI
            <br />
            <span className="text-white/90">SATHWIK</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-light">
            Full Stack Developer & Computer Science Student
          </p>
          <p className="text-lg mb-12 text-white/80 max-w-2xl mx-auto leading-relaxed">
            Passionate about building innovative web applications and exploring cutting-edge technologies. 
            Currently pursuing B.Tech in Computer Science with hands-on experience in AWS, MERN stack, and full-stack development.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              asChild
            >
              <a href="mailto:sathwikgurugubellipm@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              asChild
            >
              <a href="tel:+916303804889">
                <Phone className="mr-2 h-4 w-4" />
                Call Me
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-white/80 animate-scale-in">
            <div className="flex items-center gap-2">
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Visakhapatnam</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default Hero;