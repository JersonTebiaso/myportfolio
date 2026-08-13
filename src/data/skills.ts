export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming",
    skills: ["Java", "Python", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Technologies",
    skills: ["Django", "React", "Vite", "REST APIs"],
  },
  {
    title: "Database",
    skills: ["MySQL", "MariaDB"],
  },
  {
    title: "Development Tools",
    skills: ["Git", "GitHub", "VS Code", "XAMPP"],
  },
  {
    title: "Software Development Concepts",
    skills: [
      "Object-Oriented Programming",
      "Database Design",
      "REST API Concepts",
      "SDLC",
      "Agile",
      "Responsive Web Design",
    ],
  },
  {
    title: "Troubleshooting & Support",
    skills: [
      "Software Troubleshooting",
      "Application Debugging",
      "System Diagnostics",
      "Network Troubleshooting",
      "Hardware Troubleshooting",
      "Basic PC Maintenance",
      "Printer & Peripheral Troubleshooting",
    ],
  },
];
