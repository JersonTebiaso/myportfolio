export interface ExperienceEntry {
  type: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

export const experience: ExperienceEntry[] = [
  {
    type: "IT On-the-Job Training (OJT)",
    company: "Doña Alejandra Incorporated",
    position: "Technical Documentation Intern",
    duration: "Jan 2026 – April 2026",
    location: "Diliman, Quezon City, Metro Manila",
    responsibilities: [
      "Created clear, user-friendly manuals and documentation to support system implementation and end-user training",
      "Developed step-by-step user guides, standard operating procedures (SOPs), and system documentation for internal use",
      "Performed system validation to verify documentation matched actual system functionality",
      "Simplified complex technical concepts into easy-to-understand instructions for non-technical users",
    ],
  },
];
