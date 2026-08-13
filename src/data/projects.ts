export type ProjectStatus =
  | "Academic / Capstone"
  | "Personal Project / In Development";

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  technologies: string[];
  features: string[];
  // Add a real repository URL to enable the GitHub button, e.g. "https://github.com/yourusername/smartwash".
  githubUrl: string;
  // Add a live URL (e.g. a deployed demo) to enable the Live Demo button.
  liveUrl: string;
  // Add a screenshot at public/projects/ (e.g. smartwash.png) and update this path.
  image: string;
  imageAlt: string;
  status: ProjectStatus;
}

export const projects: Project[] = [
  {
    id: "smartwash",
    name: "SmartWash: AI-Powered Laundry Booking and Tracking System",
    tagline: "Academic / Capstone Project",
    description:
      "A laundry booking and tracking system designed to help manage appointments, machine availability, transactions, and estimated laundry completion time. Built as an academic capstone project to demonstrate full-stack development and basic machine learning.",
    technologies: ["Django", "Python", "MySQL", "JavaScript", "HTML", "CSS", "Machine Learning", "Random Forest", "REST API"],
    features: [
      "Laundry appointment booking",
      "Machine availability monitoring",
      "Admin dashboard",
      "Booking management",
      "Transaction management",
      "Machine status monitoring",
      "AI-based time estimation",
      "Responsive interface",
    ],
    githubUrl: "",
    liveUrl: "",
    image: "./projects/smartwash.svg",
    imageAlt: "SmartWash laundry booking system project preview",
    status: "Academic / Capstone",
  },
  {
    id: "pos-mobile",
    name: "POS Mobile Application",
    tagline: "Personal Project / In Development",
    description:
      "A full-stack mobile Point-of-Sale system designed to manage products, inventory, transactions, payments, and sales reports. Currently in development as a personal project to strengthen my mobile and backend skills.",
    technologies: ["React Native", "TypeScript", "Java", "Spring Boot", "MySQL", "REST API", "JWT"],
    features: [
      "Product management",
      "Inventory management",
      "Shopping cart",
      "POS checkout",
      "Transaction management",
      "Payment processing",
      "Receipt generation",
      "Sales reports",
      "User authentication",
    ],
    githubUrl: "",
    liveUrl: "",
    image: "./projects/pos.svg",
    imageAlt: "POS mobile application project preview",
    status: "Personal Project / In Development",
  },
];

export const comingSoon = {
  title: "More Projects Coming Soon",
  description:
    "I am actively building new projects. This space will be updated as they are completed.",
};
