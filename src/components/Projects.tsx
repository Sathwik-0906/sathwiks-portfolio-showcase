import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, Github, Users, TrendingUp, Database, Shield } from "lucide-react";

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
      link: "Deployed on Render"
    }
  ];

  return (
    <section className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Innovative solutions and applications I've built
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover border-none shadow-lg bg-card/50 backdrop-blur-sm h-full">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-1">
                        {project.title}
                      </CardTitle>
                      <p className="text-muted-foreground text-sm font-medium">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium text-white ${project.statusColor}`}>
                      {project.status}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{feature}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs bg-secondary/50">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-accent/20 text-accent">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {project.link && (
                    <div className="pt-4 border-t border-border">
                      <Button variant="outline" size="sm" className="w-full">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {project.link}
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;