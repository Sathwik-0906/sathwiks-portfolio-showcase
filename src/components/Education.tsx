import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  return (
    <section className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Education
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic background and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="card-hover border-none shadow-lg bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">
                      GITAM (Deemed to be University)
                    </CardTitle>
                    <p className="text-muted-foreground font-medium">
                      Visakhapatnam, Andhra Pradesh
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary rounded-full px-3 py-1">
                  <Calendar className="h-4 w-4" />
                  <span>08/2022 – 2026</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    Bachelor of Technology (B.Tech)
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Computer Science Engineering
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">CGPA</p>
                    <p className="text-2xl font-bold text-gradient">8.39/10.00</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;