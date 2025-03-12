
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Code, ExternalLink, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  technologies,
  liveUrl,
  githubUrl,
  featured
}: ProjectProps) => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <div 
      className={cn(
        "group rounded-lg overflow-hidden bg-white border shadow-sm transition-all duration-300",
        featured ? "md:col-span-2" : "",
        "hover:shadow-md hover:translate-y-[-2px]"
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className={cn(
            "w-full h-full object-cover transition-transform duration-500 ease-out",
            isHovering ? "scale-105" : "scale-100"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="font-display font-bold text-xl mb-2">{title}</h3>
        
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, i) => (
            <span 
              key={i}
              className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-3">
          {liveUrl && (
            <Button size="sm" asChild>
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5"
              >
                <Monitor size={16} />
                <span>Live Demo</span>
              </a>
            </Button>
          )}
          
          {githubUrl && (
            <Button size="sm" variant="outline" asChild>
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5"
              >
                <Code size={16} />
                <span>Code</span>
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
