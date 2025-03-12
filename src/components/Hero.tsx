
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="about" 
      className="relative min-h-screen flex flex-col justify-center items-center pt-16"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary),0.05),transparent)] pointer-events-none" />
      
      <div className="container relative z-10 flex flex-col items-center text-center">
        <span className="inline-block px-3 py-1 mb-6 text-sm font-medium text-primary/80 bg-primary/5 rounded-full animate-fade-in">
          .NET Fullstack Developer
        </span>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6 animate-fade-up [animation-delay:200ms]">
          John Doe
        </h1>
        
        <p className="max-w-[600px] text-lg md:text-xl text-muted-foreground mb-8 animate-fade-up [animation-delay:400ms] text-balance">
          Building robust and scalable web applications with .NET, C#, 
          and modern front-end technologies.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-up [animation-delay:600ms]">
          <Button asChild>
            <a href="#contact">
              Get in touch
            </a>
          </Button>
          
          <Button variant="outline" asChild>
            <a href="#projects">
              View projects
            </a>
          </Button>
        </div>
        
        <div className="flex items-center space-x-4 animate-fade-up [animation-delay:800ms]">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          
          <a 
            href="mailto:john@example.com" 
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#experience" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
          <ArrowDown size={20} />
          <span className="sr-only">Scroll down</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
