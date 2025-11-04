export interface Project {
  id: number;
  title: string;
  category: "web" | "ai" | "dash";
  thumbnail: string;
  tech: string[];
  github: string;
  video?: string;
  description: string;
  howItWorks: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Ticket Support System",
    category: "web",
    thumbnail: "/images/ticket-support.jpg",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL"],
    github: "https://github.com/Salonii2004/Support_Ticket_System",
    video: "https://youtu.be/CjSuh40uMns",
    description:
      "A web-based ticketing system designed for customer support teams to manage and resolve user issues efficiently.",
    howItWorks:
      "Users can submit support tickets through a simple form. Admins can assign, update, and track tickets in real-time using a Node.js backend and MySQL database for storage.",
  },
  {
    id: 2,
    title: "Knowly – AI Document Intelligence Platform",
    category: "ai",
    thumbnail: "/images/knowly.jpg",
    tech: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "Sequelize",
      "PostgreSQL",
      "Ollama",
    ],
    github: "https://github.com/saloni/knowly",
    video: "/videos/knowly-demo.mp4",
    description:
      "Knowly is an AI-powered document intelligence platform that allows users to upload, search, and interact with their documents through natural language. Built with React, Node.js, and PostgreSQL, it integrates Ollama’s local LLM inference with a Retrieval-Augmented Generation (RAG) pipeline to deliver precise, context-aware answers from uploaded PDFs and text files.",
    howItWorks:
      "The app uses a React frontend and Node.js backend with Ollama integration for AI-powered text processing. Uploaded documents are stored in PostgreSQL, processed via NLP, and summarized for quick insights.",
  },
  {
    id: 3,
    title: "Blog Web Application",
    category: "web",
    thumbnail: "/images/blog-app.jpg",
    tech: ["Flask", "SQLite", "HTML", "CSS", "JavaScript", "Flask-Login", "Jinja2"],
    github: "https://github.com/Salonii2004/Blog_WebApp",
    video: "https://youtu.be/VL0D5s0NxJ4",
    description:
      "A personal blogging platform where users can create, edit, and delete blog posts with user authentication support.",
    howItWorks:
      "Built using Flask and SQLite, the app allows users to sign up and manage their posts. Flask-Login handles authentication, and Jinja2 renders dynamic content for each post page.",
  },
  {
    id: 4,
    title: "Time Zone Converter",
    category: "web",
    thumbnail: "/images/timezone-converter.jpg",
    tech: ["React", "TypeScript", "TailwindCSS", "Moment.js"],
    github: "https://github.com/Salonii2004/timezone-converter",
    video: "https://youtu.be/mEMxHsmo2gc",
    description:
      "A responsive time zone converter app that allows users to compare time across multiple cities with live synchronization.",
    howItWorks:
      "The app uses Moment.js and a world time API to fetch and display the correct time zones. Users can select cities, and the app automatically calculates their relative times with a sleek React + Tailwind interface.",
  },
  {
    id: 5,
    title: "Superstore Dashboard using Streamlit",
    category: "dash",
    thumbnail: "/images/streamlit-dashboard.jpg",
    tech: ["Python", "Streamlit", "Pandas", "Matplotlib"],
    github: "https://github.com/saloni/streamlit-dashboard",
    video: "https://youtu.be/UFcq8GY_36w",
    description:
      "An interactive dashboard that visualizes superstore sales and performance metrics using Streamlit.",
    howItWorks:
      "The app loads data from CSV files, processes it with Pandas, and displays interactive visualizations with Matplotlib. Users can apply filters and view KPIs in real time.",
  },
  {
    id: 6,
    title: "Vehicle Detection, Classification, and Counting",
    category: "ai",
    thumbnail: "/images/vehicle-detection.jpg",
    tech: ["Python", "OpenCV", "YOLOv5", "DeepSORT"],
    github: "https://github.com/saloni/vehicle-detection",
    video: "/videos/vehicle-detection.mp4",
    description:
      "A deep learning system that detects, classifies, and counts vehicles in real-time from traffic footage.",
    howItWorks:
      "The project uses YOLOv5 for detection and DeepSORT for tracking. OpenCV processes video frames, counts objects, and classifies vehicles into categories such as cars, trucks, and bikes.",
  },
  {
    id: 7,
    title: "Community Support Web Application",
    category: "web",
    thumbnail: "/images/community-support.jpg",
    tech: ["Angular", "PostgreSQL", ".NET", "JWT"],
    github: "https://github.com/saloni/community-support",
    video: "/videos/community-support.mp4",
    description:
      "A social support platform for communities to share problems, solutions, and organize events.",
    howItWorks:
      "The frontend is built using Angular, while the backend uses .NET with JWT-based authentication. PostgreSQL manages user data and posts securely.",
  },
  {
    id: 8,
    title: "Online Bus Booking System",
    category: "web",
    thumbnail: "/images/bus-booking.jpg",
    tech: ["Django", "Python", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/saloni/bus-booking",
    video: "/videos/bus-booking.mp4",
    description:
      "An online platform that allows users to search, book, and manage bus tickets conveniently.",
    howItWorks:
      "The Django backend manages routes, schedules, and user data. Customers can search buses, view availability, and book tickets with a real-time confirmation system.",
  },
];
