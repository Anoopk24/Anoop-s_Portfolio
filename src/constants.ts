import { Experience, Project, Skill, Education, Certification } from "./types";

export const PROJECTS: Project[] = [];

export const EXPERIENCES: Experience[] = [
  {
    id: "sheraton",
    role: "IT Field Support Technician",
    company: "Four Points by Sheraton",
    period: "Apr 2025 – Present",
    bullets: [
      "Provide onsite deskside support, resolving hardware, software, and network connectivity issues.",
      "Install, configure, and troubleshoot desktops, laptops, printers, and peripherals.",
      "Support Microsoft 365 applications; validate resolutions through testing and user confirmation.",
      "Maintain IT asset inventory and assist with lifecycle management.",
      "Document incidents and service requests to ensure SLA compliance and accurate reporting."
    ]
  },
  {
    id: "npb",
    role: "IT Support Technician",
    company: "NPB Technologies",
    period: "Sep 2024 – Mar 2025",
    bullets: [
      "Delivered onsite and remote technical support via phone, email, and remote access tools.",
      "Installed and configured operating systems and enterprise applications.",
      "Diagnosed software and connectivity issues; logged and tracked tickets using service management systems.",
      "Assisted users with account setup, password resets, and troubleshooting system access issues."
    ]
  },
  {
    id: "netvision",
    role: "Helpdesk Support Analyst",
    company: "Net Vision IT Solutions",
    period: "Jul 2022 – Apr 2023",
    bullets: [
      "Provided Level 1 technical support for desktops and business applications.",
      "Performed software installation, troubleshooting, and user training.",
      "Created technical documentation and knowledge base articles to improve service efficiency."
    ]
  }
];

export const SKILLS: Skill[] = [
  {
    category: "Productivity Tools",
    items: ["Microsoft 365", "Microsoft Office Suite", "Microsoft Excel"]
  },
  {
    category: "IT Support",
    items: ["Deskside Support", "Helpdesk Support", "Incident Management", "Ticketing Systems", "Remote Support Tools", "Active Directory (basic)", "User Account Management"]
  },
  {
    category: "Hardware",
    items: ["Desktop & Laptop Troubleshooting", "Printer & Peripheral Support", "Hardware Installation & Configuration"]
  },
  {
    category: "Networking",
    items: ["Basic Networking", "TCP/IP", "DNS", "DHCP", "Connectivity Troubleshooting"]
  },
  {
    category: "Database & Data",
    items: ["Microsoft SQL Server", "T-SQL", "Database Design", "Query Optimization", "Indexing", "Execution Plans", "Backup & Recovery", "Data Normalization"]
  },
  {
    category: "Programming",
    items: ["HTML", "CSS", "JavaScript", "Python", "SQL", "Node.js", "React.js"]
  },
  {
    category: "Other",
    items: ["Asset Management", "System Deployment", "Software Installation", "Performance Tuning", "Documentation"]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Diploma in Software Development",
    institution: "Southern Alberta Institute of Technology (SAIT)",
    location: "Calgary",
    period: "Completed: Aug 2024",
    gpa: "3.5",
    bullets: [
      "Object-Oriented Programming: Mastering Java and C# for robust application development.",
      "Web Development: Building responsive front-ends with HTML, CSS, and JavaScript, and dynamic back-ends with Node.js.",
      "Database Systems: Designing relational databases and writing complex SQL queries for data management.",
      "Software Engineering: Applying Agile and Scrum methodologies for efficient project lifecycle management.",
      "Mobile Development: Creating cross-platform mobile applications using modern frameworks.",
      "Data Structures & Algorithms: Optimizing code performance and solving complex computational problems.",
      "Networking & Security: Understanding core networking protocols and implementing security best practices."
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Google AI Essentials Professional Certificate",
    issuer: "Google / Coursera",
    bullets: [
      "AI Fundamentals: Understanding generative AI, large language models, and their real-world applications.",
      "Prompt Engineering: Mastering techniques to craft effective prompts for various AI tools.",
      "Responsible AI: Implementing ethical AI practices and identifying potential biases.",
      "Productivity Enhancement: Using AI to automate tasks, summarize information, and generate creative content.",
      "Data Analysis with AI: Leveraging AI tools to interpret data and gain actionable insights."
    ]
  },
  {
    title: "Microsoft SQL Server Professional Certificate",
    issuer: "Coursera",
    bullets: [
      "T-SQL Mastery: Writing and optimizing complex queries, stored procedures, and triggers.",
      "Database Design: Implementing normalized relational schemas for data integrity.",
      "Performance Tuning: Analyzing execution plans and implementing indexing strategies.",
      "Administration: Managing database security, backup, and recovery operations.",
      "Business Intelligence: Integrating SQL Server with BI tools for advanced reporting."
    ]
  },
  {
    title: "Microsoft Power BI Data Analyst Professional Certificate",
    issuer: "Coursera",
    bullets: [
      "Data Preparation: Cleaning and transforming raw data using Power Query.",
      "Data Modeling: Designing efficient data models and implementing DAX expressions.",
      "Visualization: Creating interactive dashboards and reports for business insights.",
      "Service Management: Deploying and sharing reports within the Power BI Service.",
      "Data Analysis: Identifying trends and patterns to drive data-informed decisions."
    ]
  },
  {
    title: "Google IT Support Professional Certificate",
    issuer: "Coursera",
    bullets: [
      "Technical Support: Troubleshooting hardware, software, and networking issues.",
      "Networking: Understanding TCP/IP, DNS, and DHCP protocols.",
      "Operating Systems: Managing Windows and Linux environments as a power user.",
      "System Administration: Implementing IT infrastructure services and automation.",
      "Security: Protecting systems against digital threats and implementing defense strategies."
    ]
  }
];
