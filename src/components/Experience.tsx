import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Code, Calendar, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "AWS Data Engineering Virtual Internship",
      company: "Edu skills - Cohort 11",
      duration: "04/2025 – 06/2025",
      type: "Virtual Internship",
      icon: Cloud,
      achievements: [
        "Successfully completed a virtual internship focused on AWS-based data engineering workflows",
        "Gained hands-on experience with services like Amazon S3, AWS Glue, Amazon Redshift, and AWS Lambda",
        "Demonstrated strong understanding of cloud data architecture, big data processing, and data lake concepts",
        "Secured an A Grade, reflecting outstanding performance and comprehension"
      ],
      grade: "A Grade"
    },
    {
      title: "Full Stack Web Development Intern",
      company: "Main Flow Services and Technologies",
      duration: "06/2024 – 08/2024",
      type: "Internship",
      icon: Code,
      achievements: [
        "Developed both front-end and back-end features for web applications to enhance system functionality and user experience",
        "Integrated third-party APIs to extend platform capabilities, boosting user interaction by 15%",
        "Managed databases, optimized server-side performance, reducing server response time by 20%"
      ],
      improvements: ["15% boost in user interaction", "20% reduction in server response time"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional experience and internships
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-hover glass-card neon-border">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <exp.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl md:text-2xl mb-2">
                        {exp.title}
                      </CardTitle>
                      <p className="text-muted-foreground font-medium">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary rounded-full px-3 py-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {exp.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                      </li>
                    ))}
                  </ul>
                  
                  {exp.grade && (
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <Award className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Achievement</p>
                        <p className="font-semibold text-accent">{exp.grade}</p>
                      </div>
                    </div>
                  )}
                  
                  {exp.improvements && (
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                      {exp.improvements.map((improvement, i) => (
                        <Badge key={i} variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                          {improvement}
                        </Badge>
                      ))}
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

export default Experience;