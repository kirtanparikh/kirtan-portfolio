/**
 * @fileoverview This file contains all the static data for the portfolio website.
 * By centralizing the data, the components remain clean and the site is easy to update.
 */

// --- Social Links ---
export const socialLinks = [
  { name: "GitHub", url: "https://github.com/Kirtan134", icon: "Github" },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/kirtan-parikh",
    icon: "Linkedin",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/kirtan134parikh",
    icon: "Code",
  },
  { name: "X", url: "https://x.com/kirtan134", icon: "Twitter" },
];

// --- Hero Section Data ---
export const heroData = {
  name: "Kirtan Parikh",
  tagline:
    "Full-Stack & DevOps Enthusiast | Building Scalable Systems & Cloud Infra",
  cvUrl: "/assets/cv.pdf",
};

// --- About Section Data ---
export const aboutData = {
  title: "About Me",
  description: [
    "I'm a final-year Computer Science student at Gujarat Technological University with a passion for building scalable, high-performance systems. My expertise spans full-stack development, cloud-native architecture, and DevOps practices.",
    "I specialize in modern web technologies like React, Next.js, and Node.js, combined with cloud platforms like AWS. I enjoy solving complex problems and building solutions that make a real impact.",
    "Currently seeking opportunities as a Software Engineer where I can contribute to innovative projects and continue growing my technical expertise.",
  ],
};

// --- Skills Data ---
export const skillsData = {
  languages: [
    { name: "JavaScript", icon: "Code" },
    { name: "TypeScript", icon: "Code" },
    { name: "Python", icon: "Code" },
    { name: "Java", icon: "Code" },
    { name: "C++", icon: "Code" },
    { name: "SQL", icon: "Database" },
  ],
  frameworks: [
    { name: "React", icon: "Atom" },
    { name: "Next.js", icon: "Zap" },
    { name: "Node.js", icon: "Server" },
    { name: "Express.js", icon: "Globe" },
    { name: "Tailwind CSS", icon: "Palette" },
    { name: "Socket.IO", icon: "Wifi" },
  ],
  cloudAndDevOps: [
    { name: "AWS", icon: "Cloud" },
    { name: "Docker", icon: "Package" },
    { name: "Kubernetes", icon: "Box" },
    { name: "Terraform", icon: "Settings" },
    { name: "Git", icon: "GitBranch" },
    { name: "CI/CD", icon: "GitCommit" },
  ],
  databasesAndAI: [
    { name: "MongoDB", icon: "Database" },
    { name: "PostgreSQL", icon: "Database" },
    { name: "MySQL", icon: "Database" },
    { name: "Gemini AI", icon: "Brain" },
    { name: "RESTful APIs", icon: "Link" },
  ],
};

// --- Experience Data ---
export const experienceData = [
  {
    role: "Software Engineer Intern",
    company: "Helium Consulting",
    duration: "May 2025 - Jul 2025",
    description: [
      "Designed and developed a production-grade, real-time customer support chat application using Node.js, Express.js, and PostgreSQL.",
      "Built and deployed a cloud-native backend on AWS (EC2, RDS, S3), ensuring high availability.",
      "Implemented secure user authentication using AWS Cognito and JWT.",
      "Implemented real-time messaging with Socket.io and secure file sharing via S3 Presigned URLs.",
    ],
    certificateUrl: "https://heliumconsulting.com/certificates/kirtan-parikh", // Example URL
  },
];

// --- Projects Data ---
export const projectsData = [
  {
    title: "TruVoice",
    description:
      "An innovative platform for anonymous feedback, enhanced with AI-generated constructive responses.",
    tags: ["Next.js", "MongoDB", "AWS", "Kubernetes", "Gemini AI", "CI/CD"],
    imageUrl: "/assets/truvoice.jpg",
    liveUrl: "https://truvoice.kirtanparikh.tech/",
    githubUrl: "https://github.com/Kirtan134/TruVoice",
    details:
      "TruVoice supports both authenticated and unauthenticated feedback, using Gemini 2.5 Flash for intelligent content generation. The infrastructure is fully automated with Terraform and monitored with Prometheus & Grafana.",
  },
  {
    title: "TrackSnap",
    description:
      "A real-time, privacy-first location tracking system supporting thousands of concurrent users.",
    tags: ["Node.js", "Express.js", "Socket.io", "Leaflet.js", "EJS"],
    imageUrl: "/assets/tracksnap.jpg",
    liveUrl: "https://tracksnap.kirtanparikh.tech/",
    githubUrl: "https://github.com/Kirtan134/TrackSnap",
    details:
      "Features a stateless architecture ensuring no location data is stored. Optimized WebSocket connections provide sub-100ms latency for a seamless cross-device experience.",
  },
  {
    title: "Homeland Cakes",
    description:
      "An e-commerce gallery for a custom cake shop with WhatsApp ordering integration.",
    tags: ["Next.js", "Tailwind CSS", "Cloudinary", "Vercel"],
    imageUrl: "/assets/homelandcakes.jpg",
    liveUrl: "https://homelandcakes.vercel.app/",
    githubUrl: "https://github.com/Kirtan134/cake-shop",
    details:
      "A fully responsive gallery showcasing over 150 custom cake images. Built with Next.js for performance and deployed on Vercel.",
  },
];

// --- Education Data ---
export const educationData = [
  {
    degree: "Bachelor of Technology in Computer Science Engineering",
    institution: "Indian Institute of Information Technology Vadodara",
    location: "Vadodara, Gujarat, India",
    duration: "2021 - 2025",
    grade: "8.5 CGPA",
    description: [
      "Pursuing B.Tech in Computer Science Engineering with specialization in software development, algorithms, and AI/ML.",
      "Final year project on cloud-native application development with microservices architecture.",
    ],
    coursework: [
      "5G Communication",
      "Advanced Programming",
      "Algorithms",
      "Compiler Design",
      "Computer Architecture",
      "Computer Networks",
      "Database Management Systems",
      "Digital Electronics",
      "Linear Algebra",
      "Machine Learning",
      "Operating Systems",
      "Software Engineering",
      "Theory of Computation",
      "Number Theory",
    ],
    icon: "GraduationCap",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Science Stream",
    location: "Gujarat, India",
    duration: "2019 - 2021",
    grade: "97.69 PR",
    description: [
      "Physics, Chemistry, Mathematics, and Computer Science",
      "Strong foundation in mathematics and logical reasoning",
    ],
    icon: "BookOpen",
  },
];

// --- Academic Achievements Data ---
export const achievementsData = [
  {
    title: "JEE Advanced",
    score: "AIR 8318",
    date: "September 2022",
    description: "All India Rank in Joint Entrance Examination Advanced",
    icon: "Trophy",
  },
  {
    title: "JEE Mains",
    score: "AIR 15929",
    date: "August 2022",
    description: "All India Rank in Joint Entrance Examination Mains",
    icon: "Award",
  },
  {
    title: "Class XII",
    score: "97.69 PR",
    date: "March 2022",
    description: "Gujarat State Board Higher Secondary Certificate",
    icon: "GraduationCap",
  },
  {
    title: "Class X",
    score: "99.47 PR",
    date: "March 2020",
    description: "Gujarat State Board Secondary School Certificate",
    icon: "BookOpen",
  },
];

// --- Courses & Certifications Data ---
export const coursesData = [
  {
    title: "Smart India Hackathon (SIH)",
    provider: "Government of India",
    duration: "2023",
    status: "Completed",
    description:
      "National level hackathon organized by Ministry of Education, Government of India to solve real-world problems through innovative technology solutions.",
    skills: [
      "Problem Solving",
      "Innovation",
      "Team Leadership",
      "Full Stack Development",
      "AI/ML",
    ],
    certificateUrl: "https://sih.gov.in/",
    icon: "Award",
  },
  {
    title: "Deep Learning Specialization",
    provider: "NVIDIA Deep Learning Institute",
    duration: "2024",
    status: "Completed",
    description:
      "Comprehensive deep learning course covering neural networks, CNNs, RNNs, and practical implementation using modern frameworks.",
    skills: [
      "Deep Learning",
      "Neural Networks",
      "TensorFlow",
      "PyTorch",
      "Computer Vision",
      "NLP",
    ],
    certificateUrl: "https://www.nvidia.com/en-us/training/",
    icon: "Brain",
  },
];

// --- Contact Data ---
export const contactData = {
  email: "kirtan134parikh@gmail.com",
  phone: "+91 9638525664",
  location: "Ahmedabad, Gujarat, India",
};
