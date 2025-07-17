import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, Github, Users, TrendingUp, Database, Shield, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "FundConnect",
      subtitle: "Online Fundraising Platform",
      status: "In Progress",
      duration: "06/2025 – Present",
      tech: "MERN Stack",
      icon: Users,
      description: "A comprehensive platform for creating, managing, and supporting fundraising campaigns",
      features: [
        "Developing a platform to create, manage, and support fundraising campaigns with secure user authentication and token-based protected routes",
        "Implementing location-based campaign discovery to help users find and support causes within their region",
        "Currently building dashboards and admin panel to manage 10+ test users and 20+ sample campaigns during development"
      ],
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Location API"],
      highlights: ["10+ test users", "20+ sample campaigns", "Secure authentication"],
      statusColor: "bg-blue-500"
    },
    {
      title: "EmpowerFund",
      subtitle: "Investment & Financial Literacy Platform",
      status: "Deployed",
      duration: "02/2025 – 04/2025",
      tech: "Full Stack",
      icon: TrendingUp,
      description: "An AI-driven financial platform with savings plans, calculators, and live stock data",
      features: [
        "Built a web app with AI-driven savings plans, 3+ financial calculators, and live stock data via Alpha Vantage API",
        "Designed dashboards and learning modules to support 50+ test users in setting and tracking financial goals",
        "Achieved smoother performance with ~30% faster load times and 20–25% improvement in API response during testing"
      ],
      technologies: ["React.js", "Alpha Vantage API", "AI/ML", "Dashboard", "Financial APIs"],
      highlights: ["50+ test users", "30% faster load times", "20-25% API improvement"],
      statusColor: "bg-green-500",
      link: "https://empowerfund.onrender.com/" 
    }
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-neon-purple/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-neon-cyan/10 rounded-full blur-2xl floating" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-neon-pink/10 rounded-full blur-xl floating" style={{animationDelay: '2s'}} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-lg flex items-center justify-center floating">
              <Code className="w-6 h-6 text-white" />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Innovative solutions and applications I've built with cutting-edge technologies
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`card-hover glass-card neon-border p-8 h-full animate-float-in stagger-${index + 1}`}
            >
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-neon-purple/20 rounded-lg neon-glow">
                      <project.icon className="h-6 w-6 text-neon-purple" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1 text-gradient">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground font-medium">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className={`px-4 py-2 rounded-full text-sm font-medium text-white ${project.statusColor} pulse-neon`}>
                      {project.status}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-semibold mb-4 text-foreground text-lg flex items-center gap-2">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full"></div>
                    Key Features:
                  </h4>
                  <ul className="space-y-3">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-neon-cyan rounded-full mt-2 flex-shrink-0 pulse-neon"></div>
                        <p className="text-muted-foreground leading-relaxed">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 text-foreground text-lg flex items-center gap-2">
                    <div className="w-2 h-2 bg-neon-pink rounded-full"></div>
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-sm bg-secondary/80 border border-neon-purple/20 hover:border-neon-purple/40 transition-all">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 text-foreground text-lg flex items-center gap-2">
                    <div className="w-2 h-2 bg-neon-green rounded-full"></div>
                    Highlights:
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.highlights.map((highlight, i) => (
                      <Badge key={i} variant="outline" className="text-sm border-neon-cyan/40 text-neon-cyan hover:bg-neon-cyan/10 transition-all">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                {project.link && (
                  <div className="pt-6 border-t border-border/50">
                    <Button
                      variant="gradient"
                      size="lg"
                      className="w-full neon-glow group"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                        Demo
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
