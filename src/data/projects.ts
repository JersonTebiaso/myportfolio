export type ProjectStatus = "Academic / Capstone" | "Personal Project / In Development";

export interface ProjectDetails {
  overview: string;
  problem: string;
  solution: string;
  role: string;
  challenges: string[];
  outcome: string;
}

export interface Project {
  id: string;
  name: string;
  fullTitle: string;
  status: ProjectStatus;
  description: string;
  problemSolved: string;
  technologies: string[];
  features: string[];
  details: ProjectDetails;
  // Add a real repository URL to enable the GitHub button, e.g. "https://github.com/yourusername/smartwash".
  githubUrl: string;
  // Add a live URL (e.g. a deployed demo) to enable the Live Demo button.
  liveUrl: string;
  // Add a real screenshot at public/projects/ (e.g. smartwash.png) and update this path.
  image: string;
  imageAlt: string;
}

export const projects: Project[] = [
  {
    id: "smartwash",
    name: "SmartWash",
    fullTitle:
      "AI-Powered Laundry Booking and Tracking System with Predictive Time Estimation",
    status: "Academic / Capstone",
    description:
      "SmartWash is a web-based laundry booking and management system designed to improve laundry appointment scheduling, machine monitoring, transaction management, and time estimation.",
    problemSolved:
      "Replaces manual scheduling with a digital booking and tracking workflow for laundry shops.",
    technologies: ["Python", "Django", "MySQL", "JavaScript", "HTML", "CSS", "Machine Learning"],
    features: [
      "User authentication",
      "Laundry appointment booking",
      "Date and time-slot selection",
      "Machine availability monitoring",
      "Machine management",
      "Booking management",
      "Transaction records",
      "Machine status monitoring",
      "Real-time status updates",
      "AI-based laundry time estimation",
      "Responsive dashboard",
    ],
    details: {
      overview:
        "SmartWash is a web-based laundry booking and management system. It helps laundry shops and their customers handle appointments, monitor machine availability, record transactions, and get an estimated time for when laundry will be finished.",
      problem:
        "Laundry shops typically manage bookings, machine usage, and transactions manually. This makes scheduling confusing, leaves machine availability unclear to customers, and gives customers little idea of when their laundry will be ready.",
      solution:
        "SmartWash digitizes the entire workflow. Customers book appointments with date and time-slot selection, staff manage machines and bookings through a dashboard, transactions are recorded, and a machine-learning-based time estimation suggests when laundry will be ready.",
      role: "Lead Full Stack Developer — I developed the web application using Python (Django) for the backend, HTML, CSS, and JavaScript for the interface, and MySQL for the database. I also integrated the machine-learning-based time estimation into the booking flow.",
      challenges: [
        "Designing a database schema that ties bookings, machines, and transactions together without redundant data",
        "Integrating the machine-learning time-estimation logic into the booking flow",
        "Keeping the user and admin dashboards consistent while sharing the same data",
      ],
      outcome:
        "The completed system demonstrates my ability to design and build a full-stack, database-driven web application and to apply machine learning to a practical business problem.",
    },
    githubUrl: "",
    liveUrl: "",
    image: "./projects/smartwash.svg",
    imageAlt: "SmartWash laundry booking and tracking system preview",
  },
];

export const comingSoon = {
  title: "More Projects Coming Soon",
  description:
    "I am actively building new projects — including a full-stack Point-of-Sale system. This space will be updated as they are completed.",
};
