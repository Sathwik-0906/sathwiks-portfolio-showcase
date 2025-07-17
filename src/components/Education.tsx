import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-16 right-10 w-28 h-28 bg-neon-cyan/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-32 left-16 w-20 h-20 bg-neon-pink/10 rounded-full blur-2xl floating" style={{animationDelay: '1.5s'}} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg flex items-center justify-center floating">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Education
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Academic foundation and achievements in Computer Science
          </p>
        </div>

        <div className="max-w-5xl mx-auto animate-scale-in">
          <div className="glass-card neon-border p-8 card-hover">
            <div className="mb-8">
              <div className="flex items-start justify-between flex-wrap gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-neon-cyan/20 rounded-lg neon-glow">
                    <GraduationCap className="h-10 w-10 text-neon-cyan" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2 text-gradient">
                      GITAM (Deemed to be University)
                    </h3>
                    <p className="text-muted-foreground font-medium text-lg">
                      Visakhapatnam, Andhra Pradesh
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-secondary/50 rounded-full px-4 py-2 border border-neon-purple/20">
                  <Calendar className="h-5 w-5 text-neon-purple" />
                  <span className="text-foreground font-medium">08/2022 – 2026</span>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-2xl font-bold mb-3 text-foreground">
                  Bachelor of Technology (B.Tech)
                </h4>
                <p className="text-muted-foreground text-lg mb-4">
                  Computer Science Engineering
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-neon-green rounded-full pulse-neon"></div>
                  <span className="text-sm text-muted-foreground">Currently Pursuing</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center md:justify-end">
                <div className="p-6 bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 rounded-2xl neon-border text-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Award className="h-8 w-8 text-neon-cyan" />
                    <span className="text-lg font-medium text-muted-foreground">CGPA</span>
                  </div>
                  <div className="text-4xl font-bold text-gradient mb-2">8.39</div>
                  <div className="text-lg text-muted-foreground">/10.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;