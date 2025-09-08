import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-section-accent backdrop-blur-soft border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold text-primary">Serene Homes</h3>
            <p className="text-foreground/70 font-inter">
              Your trusted partner in finding the perfect home. We specialize in luxury real estate 
              with a personal touch that makes all the difference.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-foreground hover:text-primary hover:bg-primary/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-foreground hover:text-primary hover:bg-primary/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-foreground hover:text-primary hover:bg-primary/10">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-playfair text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#properties" className="text-foreground/70 hover:text-primary transition-colors font-inter">
                Browse Properties
              </a>
              <a href="#about" className="text-foreground/70 hover:text-primary transition-colors font-inter">
                About Us
              </a>
              <a href="#services" className="text-foreground/70 hover:text-primary transition-colors font-inter">
                Our Services
              </a>
              <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors font-inter">
                Contact
              </a>
              <a href="#blog" className="text-foreground/70 hover:text-primary transition-colors font-inter">
                Blog
              </a>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-playfair text-lg font-semibold">Services</h4>
            <nav className="flex flex-col space-y-2">
              <span className="text-foreground/70 font-inter">Property Sales</span>
              <span className="text-foreground/70 font-inter">Property Rentals</span>
              <span className="text-foreground/70 font-inter">Property Management</span>
              <span className="text-foreground/70 font-inter">Investment Consulting</span>
              <span className="text-foreground/70 font-inter">Market Analysis</span>
            </nav>
          </div>

          {/* Newsletter & Contact */}
          <div className="space-y-4">
            <h4 className="font-playfair text-lg font-semibold">Stay Updated</h4>
            <p className="text-foreground/70 text-sm font-inter">
              Subscribe to our newsletter for the latest property listings and market insights.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Your email" 
                className="bg-white/10 border-white/20 text-foreground placeholder:text-foreground/50 backdrop-blur-soft"
              />
              <Button variant="secondary" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-2 pt-4">
              <div className="flex items-center space-x-2 text-foreground/70">
                <Phone className="h-4 w-4" />
                <span className="text-sm font-inter">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-foreground/70">
                <Mail className="h-4 w-4" />
                <span className="text-sm font-inter">hello@serenehomes.com</span>
              </div>
              <div className="flex items-center space-x-2 text-foreground/70">
                <MapPin className="h-4 w-4" />
                <span className="text-sm font-inter">123 Luxury Ave, Beverly Hills, CA</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
          <p className="font-inter">© 2024 Serene Homes. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-primary transition-colors font-inter">Privacy Policy</a>
            <a href="#terms" className="hover:text-primary transition-colors font-inter">Terms of Service</a>
            <a href="#cookies" className="hover:text-primary transition-colors font-inter">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;