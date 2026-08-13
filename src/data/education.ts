export interface EducationEntry {
  school: string;
  degree: string;
  year: string;
  // Add the coursework relevant to this degree.
  coursework: string[];
  // Leave empty until you have real achievements to list.
  achievements: string[];
}

export const education: EducationEntry[] = [
  {
    school: "City of Malabon University",
    degree: "Bachelor of Science in Information Technology",
    year: "Sep 2022 – June 2026",
    coursework: [
      "Programming Fundamentals",
      "Object-Oriented Programming",
      "Database Management",
      "Web Development",
      "System Analysis and Design",
      "Capstone Project",
    ],
    achievements: [],
  },
];
