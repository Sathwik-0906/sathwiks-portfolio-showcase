import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  const handleMouseEnter = (index: number) => {
    const link = linksRef.current[index];
    if (link && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const linkRect = link.getBoundingClientRect();
      setIndicatorStyle({
        width: `${linkRect.width}px`,
        transform: `translateX(${linkRect.left - navRect.left}px) scale(1)`,
        opacity: 1,
      });
    }
  };

  const handleMouseLeave = () => {
    const currentStyle = indicatorStyle as any;
    setIndicatorStyle({
      ...currentStyle,
      transform: `${currentStyle.transform || ''} scale(0)`,
      opacity: 0,
    });
  };

  return (
    <>
      {/* Desktop Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center">
        <nav 
          ref={navRef}
          onMouseLeave={handleMouseLeave}
          className="glass-nav mt-4 hidden md:flex items-center p-2 relative"
        >
          <div className="magnetic-indicator" style={indicatorStyle}></div>
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              ref={el => linksRef.current[index] = el}
              onMouseEnter={() => handleMouseEnter(index)}
              className="nav-link-3d z-10"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="bg-black/30 backdrop-blur-sm rounded-full w-12 h-12">
              <Menu className="h-6 w-6 text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="bg-background/80 backdrop-blur-lg border-t border-neon-purple/20 h-[60vh] rounded-t-3xl">
            <nav className="flex flex-col items-center justify-center h-full gap-6">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-2xl text-white/80 hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Header;
