import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-gradient-glass backdrop-blur-glass shadow-glass">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="font-playfair text-2xl font-bold text-primary">Serene Homes</span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a
              className="transition-colors hover:text-primary"
              href="#properties"
            >
              Properties
            </a>
            <a
              className="transition-colors hover:text-primary"
              href="#about"
            >
              About
            </a>
            <a
              className="transition-colors hover:text-primary"
              href="#services"
            >
              Services
            </a>
            <a
              className="transition-colors hover:text-primary"
              href="#contact"
            >
              Contact
            </a>
          </nav>
        </div>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <span className="font-playfair text-xl font-bold text-primary md:hidden">Serene Homes</span>
          </div>
          <nav className="hidden items-center space-x-2 md:flex">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>hello@serenehomes.com</span>
              </div>
            </div>
            <Button variant="default" size="sm" className="ml-4">
              Get Started
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;