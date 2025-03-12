
import ProjectCard, { ProjectProps } from "./ProjectCard";

const projects: ProjectProps[] = [
  {
    id: 1,
    title: "Enterprise Resource Planning System",
    description: "A comprehensive ERP solution built with ASP.NET Core and SQL Server. Features include inventory management, HR module, and financial reporting.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    technologies: ["C#", "ASP.NET Core", "SQL Server", "Entity Framework", "React", "Azure"],
    liveUrl: "https://example.com/erp-demo",
    githubUrl: "https://github.com/johndoe/erp-system",
    featured: true
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "A scalable e-commerce solution with product catalog, shopping cart, and payment processing integration.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    technologies: ["C#", ".NET 6", "SQL Server", "Redis", "Azure", "Bootstrap"],
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/johndoe/ecommerce"
  },
  {
    id: 3,
    title: "CRM System",
    description: "A customer relationship management system with contact management, sales pipeline, and reporting dashboards.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
    technologies: ["C#", "ASP.NET MVC", "SQL Server", "SignalR", "Chart.js"],
    githubUrl: "https://github.com/johndoe/crm-system"
  },
  {
    id: 4,
    title: "API Gateway",
    description: "A microservice API gateway built with .NET Core that handles routing, authentication, and rate limiting.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    technologies: ["C#", ".NET Core", "Docker", "Redis", "JWT", "Ocelot"],
    githubUrl: "https://github.com/johndoe/api-gateway"
  },
  {
    id: 5,
    title: "Content Management System",
    description: "A headless CMS with custom content types, role-based access control, and a RESTful API.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    technologies: ["C#", "ASP.NET Core", "MongoDB", "React", "GraphQL"],
    liveUrl: "https://example.com/cms-demo",
    githubUrl: "https://github.com/johndoe/cms"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of projects I've built using .NET and related technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
