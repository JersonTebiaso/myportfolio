export type SkillLevel = "Familiar" | "Intermediate" | "Currently Learning";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillGroup {
  title: string;
  description: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming",
    description: "Core languages used to build software.",
    skills: [
      { name: "Java", level: "Intermediate" },
      { name: "Python", level: "Intermediate" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "Dart", level: "Familiar" },
    ],
  },
  {
    title: "Web Development",
    description: "Building responsive web applications.",
    skills: [
      { name: "HTML", level: "Intermediate" },
      { name: "CSS", level: "Intermediate" },
      { name: "React", level: "Intermediate" },
      { name: "Django", level: "Intermediate" },
      { name: "REST APIs", level: "Intermediate" },
    ],
  },
  {
    title: "Mobile Development",
    description: "Building cross-platform mobile apps.",
    skills: [
      { name: "React Native", level: "Currently Learning" },
      { name: "Flutter", level: "Familiar" },
      { name: "Android Concepts", level: "Familiar" },
    ],
  },
  {
    title: "Backend",
    description: "APIs, logic, and data handling.",
    skills: [
      { name: "Java Spring Boot", level: "Currently Learning" },
      { name: "Django", level: "Intermediate" },
      { name: "REST API", level: "Intermediate" },
      { name: "Authentication", level: "Familiar" },
    ],
  },
  {
    title: "Database",
    description: "Storing and querying data.",
    skills: [
      { name: "MySQL", level: "Intermediate" },
      { name: "MariaDB", level: "Familiar" },
      { name: "SQL", level: "Intermediate" },
    ],
  },
  {
    title: "Tools",
    description: "Tools I use for development and workflows.",
    skills: [
      { name: "Git", level: "Intermediate" },
      { name: "GitHub", level: "Intermediate" },
      { name: "VS Code", level: "Intermediate" },
      { name: "XAMPP", level: "Familiar" },
      { name: "Postman", level: "Familiar" },
    ],
  },
  {
    title: "Documentation & Support",
    description: "Skills gained from my OJT as a Technical Documentation Intern.",
    skills: [
      { name: "Technical Documentation", level: "Intermediate" },
      { name: "User Manual Creation", level: "Intermediate" },
      { name: "Troubleshooting & Support", level: "Intermediate" },
      { name: "Microsoft Office", level: "Intermediate" },
    ],
  },
];
