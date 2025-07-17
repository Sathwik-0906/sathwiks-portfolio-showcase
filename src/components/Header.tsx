import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderNavLinks = (isMobile = false) =>
    navLinks.map((link) => (
      <a
        key={link.href}
        href={link.href}
        className={cn(
          "glitch-link relative px-3 py-2 text-base font-medium text-neon-cyan/80 transition-colors hover:text-neon-cyan",
          isMobile && "my-4 text-2xl"
        )}
        data-text={link.label}
      >
        {link.label}
        <span className="glitch-link__layers"></span>
        <span className="glitch-link__layers"></span>
        <span className="glitch-link__layers"></span>
      </a>
    ));

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-black/30 backdrop-blur-md border-b border-neon-purple/20" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="text-2xl font-bold text-gradient">
            Sathwik
          </a>
          <nav className="hidden md:flex items-center gap-2">
            {renderNavLinks()}
          </nav>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-white" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-darker-surface/90 border-l border-neon-purple/30 p-0">
                <nav className="flex flex-col items-center justify-center h-full gap-8">
                  {renderNavLinks(true)}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;