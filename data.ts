import { Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export const DATA = {
  name: "Deepak",
  role: "Backend Software Engineer",
  email: "ds1354586@gmail.com",
  linkedin: "https://www.linkedin.com/in/-deepak-singhh/",
  github: "https://github.com/Deepu2104",
  resumeUrl: "https://drive.google.com/file/d/1dJ5DFR-ulVi_p-Oy-oCs1G6oK17pq_Du/view?usp=sharing",
  hero: {
    title: "I build scalable backend systems, APIs, and distributed services.",
    description:
      "Focused on performance, reliability, and solving complex system design challenges.",
    badges: [
      { text: "Backend Engineer", color: "bg-blue-500/10 text-blue-500" },
      { text: "System Design", color: "bg-purple-500/10 text-purple-500" },
      { text: "High Performance", color: "bg-green-500/10 text-green-500" },
    ],
  },
  about: {
    title: "About Me",
    description: [
      "I am a Backend Software Engineer with a passion for building robust, scalable systems. I love diving deep into database internals, optimizing API latency, and designing distributed architectures that can handle high throughput.",
      "My approach is rooted in engineering excellence—writing clean, maintainable code and prioritizing observability from day one. I enjoy solving hard problems, whether it's sharding a database or debugging a race condition.",
      "Currently, I am focusing on advanced system design patterns, distributed consensus algorithms, and cloud-native observability stacks. I am looking for roles where I can contribute to core infrastructure and backend services.",
    ],
  },
  skills: {
    title: "Tech Stack",
    categories: [
      {
        name: "Backend",
        skills: ["REST APIs", "Microservices", "gRPC", "GraphQL", "Auth (OAuth/JWT)", "Rate Limiting", "Caching Strategies"],
      },
      {
        name: "Databases",
        skills: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "Elasticsearch", "Schema Design", "Query Optimization"],
      },
      {
        name: "System Design",
        skills: ["Scalability", "Load Balancing", "Consistent Hashing", "Message Queues (Kafka/RabbitMQ)", "CAP Theorem"],
      },
      {
        name: "DevOps / Infrastructure",
        skills: ["Docker", "Kubernetes", "AWS", "CI/CD (GitHub Actions)", "Linux", "Prometheus/Grafana"],
      },
      {
        name: "Languages",
        skills: ["Java", "Python", "Go", "C++", "SQL", "Bash"],
      },
    ],
  },
  experience: [
    {
      company: "Infosys",
      role: "Specialist Programmer",
      period: "Jan2024 - Present",
      description: [
        "Architected and deployed a microservices-based notification system handling 1M+ events/day using Kafka and Go.",
        "Optimized database queries decreasing average response time by 40% for critical endpoints.",
        "Implemented automated CI/CD pipelines reducing deployment time from 20 minutes to 5 minutes.",
      ],
    },
    {
      company: "Infosys",
      role: "Software Engineer Trainee",
      period: "Oct 2023 - Dec 2023",
      description: [
        "Developed RESTful APIs for the user management service using Python/FastAPI.",
        "Integrated Redis caching to offload read-heavy traffic from the primary database.",
        "Collaborated with frontend teams to define API contracts and ensure seamless integration.",
      ],
    },
  ],
  projects: [
    {
      name: "Resume Screening System",
      description: "An intelligent resume screening system powered by RAG and semantic embeddings that automates candidate evaluation.",
      tech: ["Python", "Streamlit", "Groq API", "RAG", "SentenceTransformers"],
      details: [
        "Process 100+ resumes/hour with 95%+ accuracy, reducing hiring time by 90%.",
        "Implemented RAG-based ranking with dual-scoring (semantic + technical context).",
        "Integrated Groq LLM (llama-3.3-70b) for actionable candidate insights and summaries.",
      ],
      links: {
        github: "https://github.com/Deepu2104/resume-screener.git",
        demo: "https://resume-screener-1-bls7.onrender.com/",
      },
    },
    {
      name: "Event Driven Payment System",
      description: "A payment system that processes payments in an event-driven architecture, uses kafka for fraud detection, redis for auth tokens and idempotency transactions with locks",
      tech: ["Java", "Spring Boot", "Kafka", "Redis", "PostgreSQL"],
      details: [
        "Architected an {event-driven payment engine} using Spring Boot 3 and Kafka, decoupling core transaction processing",
        "from fraud detection to reduce API p99 latency by 40% through non-blocking asynchronous validation.",
      ],
      links: {
        github: "https://github.com/Deepu2104/payment-wallet",
        demo: "https://payment-wallet-eight.vercel.app/login",
      },
    },
    {
      name: "Build With me",
      description: "The aim of this project is to develop a platform for college students to address the challenge of finding suitable peers with similar skill sets for collaborative projects and team-based activities.",
      tech: ["Javascript", "Node.js", "Express", "MongoDB", "Redis"],
      details: [
        "This website serves as a solution by providing a comprehensive platform where students can easily find and connect with other students within their college",
      ],
      links: {
        github: "https://github.com/Deepu2104/Build-with-me",
        demo: "https://build-with-me-100fc.web.app/",
      },
    }
  ],
  articles: [
    {
      title: "Designing a Distributed Rate Limiter",
      summary: "A deep dive into implementing high-throughput rate limiting using Redis, Lua scripts, and the Token Bucket algorithm.",
      link: "https://medium.com/@ds1354586/scaling-under-pressure-designing-a-production-grade-rate-limiter-2b03a4064151",
      date: "Oct 12, 2025",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Understanding Database Sharding",
      summary: "Exploring horizontal scaling strategies, consistent hashing, and how to handle cross-shard transactions effectively.",
      link: "https://medium.com/@ds1354586/data-without-borders-a-senior-engineers-guide-to-database-sharding-d1a245dba9cc",
      date: "Jan 25, 2026",
      image: "https://images.unsplash.com/photo-1483736762161-1d107f3c78e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Multithreading in Java",
      summary: "To leverage multithreading in Java effectively, I move away from managing individual Thread objects and instead utilize the ExecutorService to manage a pool of reusable workers. This prevents resource exhaustion. I prioritize thread-safe data structures like ConcurrentHashMap or AtomicInteger over manual synchronized blocks whenever possible to reduce the risk of deadlocks and improve performance. In high-throughput systems, I'd also consider Virtual Threads (Project Loom) to handle millions of concurrent tasks with minimal overhead.",
      link: "https://medium.com/@ds1354586/parallel-power-a-senior-engineers-guide-to-java-multithreading-1769e642a02e",
      date: "Jan 25, 2026",
      image: "https://plus.unsplash.com/premium_photo-1667862137140-de63672e69fe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVsdGl0aHJlYWRpbmd8ZW58MHx8MHx8fDA%3D",
    },
  ],
  socials: [
    {
      name: "Email",
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=ds1354586@gmail.com",
      icon: Mail,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/-deepak-singhh/",
      icon: SiLinkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/Deepu2104",
      icon: SiGithub,
    },
  ],
};
