import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Wrench, Award, Brain, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages & CS Fundamentals",
      icon: Code,
      skills: ["C", "Python", "Java", "Data Structures and Algorithms", "Computer Networks", "Object-Oriented Programming"],
      color: "bg-blue-500"
    },
    {
      title: "Web Technologies",
      icon: Code,
      skills: ["HTML", "CSS", "JavaScript", "React.js","Node.js"],
      color: "bg-green-500"
    },
    {
      title: "Database",
      icon: Database,
      skills: ["SQL", "MongoDB"],
      color: "bg-purple-500"
    },
    {
      title: "Tools & Libraries",
      icon: Wrench,
      skills: ["Excel", "GitHub", "Git", "VS Code", "Matplotlib"],
      color: "bg-orange-500"
    },
    {
      title: "Additional Skills",
      icon: Users,
      skills: ["Leadership", "Technical Documentation", "Business Development"],
      color: "bg-teal-500"
    }
  ];

  const certifications = [
    "AWS Academy Graduate - AWS Academy Cloud Foundations",
    "Fundamentals of generative AI (Microsoft Ignite)",
    "Effective Problem-Solving and Decision-Making - Coursera"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Skills & Certifications
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technical expertise and professional certifications
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <Card key={index} className="card-hover glass-card neon-border">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 ${category.color} rounded-lg`}>
                      <category.icon className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="text-xs bg-secondary/50 hover:bg-secondary transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <Card className="card-hover glass-card neon-border">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-2xl">Certifications</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="p-4 bg-secondary/30 rounded-lg border border-border/50">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{cert}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Problem Solving Stats */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Card className="card-hover glass-card neon-border">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-primary/10 rounded-lg inline-block mb-4">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-gradient mb-2">150+</h3>
                <p className="text-muted-foreground">Coding Problems Solved</p>
                <p className="text-xs text-muted-foreground mt-2">LeetCode, HackerRank & Others</p>
              </CardContent>
            </Card>
            
            <Card className="card-hover glass-card neon-border">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-accent/10 rounded-lg inline-block mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-3xl font-bold text-gradient mb-2">45+</h3>
                <p className="text-muted-foreground">Team Members Led</p>
                <p className="text-xs text-muted-foreground mt-2">Throwball SIG Design Team</p>
              </CardContent>
            </Card>
            
            <Card className="card-hover glass-card neon-border">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-primary/10 rounded-lg inline-block mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-gradient mb-2">100+</h3>
                <p className="text-muted-foreground">Volunteer Hours</p>
                <p className="text-xs text-muted-foreground mt-2">Care and Love Foundation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;