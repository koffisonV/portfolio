export const PROJECTS = [
  {
    title: "Nucleofection Worklist Gen",
    description:
      "Automated a critical step in the CRISPR-gene editing workflow for the NYSCF Global Stem Cell Array®. The new feature dynamically generates precise robot instructions to process over 100 cell lines per run, significantly reducing manual error and optimizing the use of multi-use lab hardware to maximize platform efficiency and reduce costs.",
    technologies: ["React", ".NET", "C#", "SQL Server", "Tailwind CSS"],
    image: "/images/nyscf.webp",
    github: null,
    external: "https://nyscf.org/",
  },
  {
    title: "Vngle Reporter",
    description:
      "A blockchain media provenance system for reporting and verifying the authenticity of media content among content delivery networks.",
    technologies: [
      "React native",
      "AWS",
      "Expo.js",
      "Tailwind CSS",
      "Blockchain API",
    ],
    image: "/images/vngle.webp",
    github: null,
    external: "https://www.vngle.com/",
  },
  {
    title: "Car Telemetry Platform",
    description:
      "A real-time vehicle diagnostics system that simulates and decodes live engine data — RPM, speed, coolant temperature, and fault codes — and streams it to a web dashboard, mirroring the tools used by mechanics and automotive engineers.",
    technologies: [
      "React",
      "C++",
      "Python",
      "WebSocket",
      "TimescaleDB",
      "Docker",
      "SocketCAN",
    ],
    image: "/images/car-telemetry-demo.webm",
    github: "https://github.com/koffisonV/car-telemetry",
    external: "https://github.com/koffisonV/car-telemetry",
  },
  {
    title: "LaundriFi",
    description:
      "A web-based laundry scheduler that reduces congestion in apartments with limited machines by enabling real-time availability checks and reservations.",
    technologies: [
      "Next.js",
      "Supabase",
      "Docker",
      "Postgres",
      "Tailwind CSS",
      "Restful API",
      "Bash scripts",
    ],
    image: "/images/laundrifi.webp",
    github: "https://github.com/koffisonV/laundrifi",
    external: "https://laundrifi.vercel.app",
  },
  {
    title: "OVPNet",
    description:
      "This exploratory project involves building a self-hosted VPN and analyzes its performance and reliability compared to commercial services like NordVPN.",
    technologies: ["OpenVPN - protocol", "EC2 server", "Bash scripts"],
    image: "/images/openvpn.webp",
    github: "https://github.com/koffisonV/ovpnet",
    external: "https://youtu.be/xHemKKHjR0s",
  },
  {
    title: "NoteApp",
    description:
      "A web-based note-taking app that lets users create and edit rich-text notes with automatic saving, search, filtered tags, and seamless access across multiple devices.",
    technologies: [
      "Vite",
      "Amplify",
      "DynamoDB",
      "API Gateway",
      "Lambda",
      "Tailwind CSS",
    ],
    image: "/images/note-app.webp",
    github: "https://github.com/koffisonV/note-app",
    external: "https://main.d32cz6ko1e9pr4.amplifyapp.com/dashboard",
  },
  {
    title: "Rick and Morty",
    description:
      "An interactive web application that delves into the fantastic world of the beloved TV series, Rick and Morty—Made Possible using the Rick and Morty API.",
    technologies: ["React", "RESTful API", "Tailwind CSS"],
    image: "/images/rickandmorty.webm",
    github: "https://github.com/koffisonV/rickandmortywiki",
    external: "https://koffisonv.github.io/rickandmortywiki/",
  },
  {
    title: "Sentiment & Emotion Detection",
    description:
      "A Flask web app for NLP experimentation using Hugging Face Transformers. Detects emotions in user-provided text via a pre-trained transformer model, with a web interface for real-time analysis, a chatbot script, and image captioning support.",
    technologies: ["Python", "Flask", "Hugging Face Transformers", "NLP"],
    image: "/images/sentiment-analysis.webp",
    github: "https://github.com/koffisonV/sentiment-analysis",
    external: null,
  },
];

export const SKILLS = [
  { src: "/images/img1.png", alt: "AWS" },
  { src: "/images/img2.png", alt: "Android Studio" },
  { src: "/images/img3.png", alt: "Docker" },
  { src: "/images/img4.png", alt: "Expo.js" },
  { src: "/images/img5.png", alt: "Git" },
  { src: "/images/img6.png", alt: "JAVA" },
  { src: "/images/img7.png", alt: "Next.js" },
  { src: "/images/img8.png", alt: "Node.js" },
  { src: "/images/img9.png", alt: "Postgres" },
  { src: "/images/img10.png", alt: "Python" },
  { src: "/images/img11.png", alt: "React" },
  { src: "/images/img12.png", alt: "Tailwind CSS" },
  { src: "/images/img13.png", alt: "VMWare" },
  { src: "/images/img14.png", alt: "Wordpress" },
  { src: "/images/img15.png", alt: "Xcode" },
];

export const EXPERIENCE_DATA = [
  {
    company: "Vngle",
    role: "Software Engineer",
    duration: "Jun 2024 - Present",
    responsibilities: [
      "Developed VngleReporters—a media provenance tool to track origin of digital content, reducing misinformation by 50% and enabling reporters to capture, annotate, and upload medias with metadata, blockchain contracts receipt and media processing pipeline between reporters' devices and content management systems.",
    ],
  },
  {
    company: "Miora Health",
    role: "Full-Stack Software Engineer",
    duration: "May 2026 - August 2026",
    responsibilities: [
      "Built a full-stack health diagnostics platform for at-home microbiome and metabolic testing, supporting gestational diabetes, gut health and more. Delivered role-based dashboards for patients, clinic providers, and internal admins, with end-to-end test lifecycle management from kit activation through results delivery. Developed a dynamic clinical requisition workflow for providers, implemented a role-based notification system across the testing journey, and enabled provider inventory management and analytics.",
    ],
  },
  {
    company: "The New York Stem Cell Foundation",
    role: "Software Engineer Intern",
    duration: "June 2025 – August 2025",
    responsibilities: [
      "Optimized gene editing inputs and automated 60% of scientists' workflows to streamline lab operations by developing and implementing laboratory web features using React, Redux, and C#, allowing scientists to customize experiment settings on automated liquid handling robots.",
    ],
  },
  {
    company: "NYC Tech Talent Pipeline",
    role: "Full-Stack Developer Residency",
    duration: "Jun 2023 - Feb 2025",
    responsibilities: [
      "Successfully built and deployed production-ready PERN (PostgreSQL, Express.js, React, Node.js) Stack applications, and optimized consumption of high-traffic third-party APIs, reducing redundant  requests and handling 100+ user requests/sec. Selected among 30 of 500+ candidates for a year-plus full-stack and cybersecurity residency, gaining hands-on experience through real-world projects and mentorship from experienced industry professionals.",
    ],
  },
  {
    company: "RecProf",
    role: "Web Developer",
    duration: "May 2021 - Jul 2022",
    responsibilities: [
      "Led the development and deployment of a client-acquisition landing page, ensuring 99.9% uptime through enhanced security and reliability. Managed continuous content and design updates to drive alignment with core business goals and user engagement.",
    ],
  },
];
