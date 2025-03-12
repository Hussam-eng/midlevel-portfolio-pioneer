
import { cn } from "@/lib/utils";

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Backend",
    skills: [
      "C#", 
      ".NET Core", 
      ".NET Framework", 
      "ASP.NET MVC", 
      "ASP.NET Web API",
      "Entity Framework",
      "LINQ",
      "Dependency Injection",
      "Microservices"
    ]
  },
  {
    name: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Angular",
      "Bootstrap",
      "Tailwind CSS",
      "Responsive Design"
    ]
  },
  {
    name: "Database",
    skills: [
      "SQL Server",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Database Design",
      "Query Optimization",
      "ORM",
      "Stored Procedures"
    ]
  },
  {
    name: "DevOps & Tools",
    skills: [
      "Git",
      "Azure DevOps",
      "CI/CD",
      "Docker",
      "Kubernetes",
      "Visual Studio",
      "VS Code",
      "Postman",
      "Swagger"
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section bg-secondary/50">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            My expertise across .NET, web technologies, databases, and DevOps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, i) => (
            <div 
              key={category.name}
              className={cn(
                "bg-white rounded-lg shadow-sm border p-6",
                "transform transition-all duration-500 hover:shadow-md",
                "animate-fade-up",
                `[animation-delay:${i * 100}ms]`
              )}
            >
              <h3 className="font-display font-bold text-xl mb-4">{category.name}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium rounded-full bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
