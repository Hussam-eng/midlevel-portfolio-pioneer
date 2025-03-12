
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Briefcase } from "lucide-react";

interface Experience {
  id: number;
  role: string;
  company: string;
  date: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    role: "Senior .NET Developer",
    company: "Tech Solutions Inc.",
    date: "Jan 2022 - Present",
    description: [
      "Developed and maintained multiple web applications using .NET Core and ASP.NET MVC",
      "Implemented CI/CD pipelines using Azure DevOps for automated testing and deployment",
      "Led a team of 3 junior developers, providing mentorship and code reviews",
      "Redesigned legacy systems to improve performance by 40% and reduce technical debt"
    ],
    technologies: ["C#", ".NET Core", "ASP.NET MVC", "SQL Server", "Entity Framework", "Azure", "React"]
  },
  {
    id: 2,
    role: ".NET Developer",
    company: "Digital Innovations",
    date: "Mar 2020 - Dec 2021",
    description: [
      "Collaborated with cross-functional teams to deliver enterprise-grade web applications",
      "Designed and implemented RESTful APIs using ASP.NET Web API",
      "Optimized database queries and stored procedures to improve application performance",
      "Participated in Agile development process with daily stand-ups and sprint planning"
    ],
    technologies: ["C#", ".NET Framework", "ASP.NET Web API", "SQL Server", "Entity Framework", "Angular", "JavaScript"]
  },
  {
    id: 3,
    role: "Junior Developer",
    company: "WebCraft Solutions",
    date: "Jun 2018 - Feb 2020",
    description: [
      "Assisted in developing and maintaining web applications using .NET Framework",
      "Created and maintained SQL Server databases and stored procedures",
      "Implemented front-end interfaces using HTML, CSS, and JavaScript",
      "Fixed bugs and implemented new features for existing applications"
    ],
    technologies: ["C#", ".NET Framework", "ASP.NET MVC", "SQL Server", "JavaScript", "jQuery", "Bootstrap"]
  }
];

const WorkExperience = () => {
  const [activeExperience, setActiveExperience] = useState<number>(1);

  return (
    <section id="experience" className="section bg-secondary/50">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            My professional journey building enterprise applications with .NET technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_2fr] gap-6 lg:gap-12">
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible hide-scrollbar p-1">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveExperience(exp.id)}
                className={cn(
                  "relative min-w-[200px] px-4 py-3 text-left rounded-lg transition-all duration-300",
                  activeExperience === exp.id
                    ? "bg-white shadow-md"
                    : "hover:bg-white/50"
                )}
              >
                <span className="block text-sm font-medium">{exp.company}</span>
                <span className="block text-xs text-muted-foreground mt-1">{exp.date}</span>
                {activeExperience === exp.id && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-primary rounded-r-full md:w-1" />
                )}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6 animate-scale-in">
            {experiences
              .filter((exp) => exp.id === activeExperience)
              .map((exp) => (
                <div key={exp.id}>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mr-4">
                      <Briefcase size={18} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl">{exp.role}</h3>
                      <p className="text-muted-foreground">{exp.company} | {exp.date}</p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/70 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div>
                    <h4 className="font-medium text-sm mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
