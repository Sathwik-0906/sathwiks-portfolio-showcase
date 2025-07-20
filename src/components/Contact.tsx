import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin, MapPin, Download } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sathwikgurugubellipm@gmail.com",
      href: "mailto:sathwikgurugubellipm@gmail.com",
      color: "text-red-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-6303804889",
      href: "tel:+916303804889",
      color: "text-green-500"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "GitHub Profile",
      href: "https://github.com/Sathwik-0906",
      color: "text-gray-700"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/sathwikgurugubelli/",
      color: "text-blue-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Visakhapatnam, Andhra Pradesh",
      href: "#",
      color: "text-purple-500"
    }
  ];

  return (
    <section className="py-20 dark-theme-background text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, and exciting projects.
            Let's connect and create something amazing together!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="glass-effect hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-white/10 rounded-lg inline-block mb-4">
                    <contact.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{contact.label}</h3>
                  <p className="text-white/80 text-sm mb-4">{contact.value}</p>
                  {contact.href !== "#" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="glass-effect text-white hover:bg-white/20"
                      asChild
                    >
                      <a href={contact.href}>
                        Connect
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-6">
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-primary border-white hover:bg-white/90"
                asChild
              >
                <a href="mailto:sathwikgurugubellipm@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glass-effect text-white hover:bg-white/20"
                asChild
              >
                <a href="https://drive.google.com/file/d/1vffiYX1lNLBsZcMhIQmKkla9qMKYF8Qn/view?usp=sharing" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="pt-8 border-t border-white/20">
              <p className="text-white/70 text-sm">
                Ready to bring innovative ideas to life through code and creativity
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
    </section>
  );
};

export default Contact;