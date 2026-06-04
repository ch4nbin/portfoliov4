export const content = {
  name: "chanbin park",

  links: {
    email: "cp5721@princeton.edu",
    linkedin: "https://www.linkedin.com/in/chanbinp/",
    github: "https://github.com/ch4nbin",
  },

  about: `I'm a sophomore at Princeton University studying computer science with minors in statistics & machine learning and visual arts. I'm interested broadly in AI, high-performance computing, and the pursuit of understanding.`,

  education: [
    {
      school: "Princeton University",
      degree: "Bachelor of Arts in Computer Science",
      minors: "Minors in Statistics & Machine Learning and Visual Arts",
      date: "Expected May 2028",
      location: "Princeton, NJ",
      courses: [
        "Data Structures and Algorithms",
        "Programming Systems",
        "Software Engineering",
        "System Design",
        "Distributed Systems",
        "Machine Learning",
        "Natural Language Processing",
        "Discrete Math",
        "Linear Algebra",
        "Multivariable Calculus",
        "Computational Physics",
      ],
    },
  ],

  experience: [
    {
      company: "Princeton University COS",
      role: "Undergraduate Researcher",
      date: "Sep 2026 – Present (Incoming)",
      location: "Princeton, NJ",
      recent: true,
      summary: "Researching LLM-based GPU kernel generation and parallel algorithm design for frontier AI systems under Tri Dao.",
      bullets: [
        "Researching LLM-based GPU kernel generation and parallel algorithm design for frontier AI systems under Tri Dao.",
        "Studying CUDA, Triton, GPU architectures, and high-performance compute for model training and inference at scale.",
        "Investigating frontier ML systems research on FlashAttention, kernel optimization, and LLM-driven code synthesis.",
      ],
    },
    {
      company: "T-Mobile",
      role: "Software Engineer Intern",
      date: "May 2026 – Aug 2026",
      location: "Frisco, TX",
      recent: true,
      summary: "Built AI agents and multi-agent systems using LLMs, LangGraph, and RAG to automate T-Mobile business platforms.",
      bullets: [
        "Developed AI agents powered by LLMs, tool calling, and multi-agent systems to automate T-Mobile business platforms.",
        "Built Python and FastAPI services to power agent execution and workflow orchestration across production AI systems.",
        "Enabled autonomous planning and task delegation through LangGraph-based agents augmented with RAG pipelines.",
      ],
    },
    {
      company: "Princeton Center for Digital Humanities",
      role: "Software Engineer Intern",
      date: "Feb 2026 – Apr 2026",
      location: "Princeton, NJ",
      summary: "Built a text–image alignment pipeline for 1.5M+ pages in the Princeton Prosody Archive on Princeton's HPC cluster.",
      bullets: [
        "Built a text–image alignment pipeline in Python (RapidFuzz) for 1.5M+ pages in the Princeton Prosody Archive.",
        "Executed pipelines on Princeton's Della HPC cluster using Linux/Bash processing 100GB+ of ZIP and TIFF data.",
        "Developed streaming validation over JSONL ensuring full-corpus checks on ordering, gaps, duplicates, and empty OCR.",
      ],
    },
    {
      company: "Princeton Stigma and Social Perception Lab",
      role: "Machine Learning Research Intern",
      date: "Jan 2026 – Present",
      location: "Princeton, NJ",
      summary: "Applied NLP embeddings and ML pipelines to analyze 30K+ conversational text segments and quantify social patterns.",
      bullets: [
        "Applied TensorFlow ML/NLP embeddings to analyze 30K+ conversational text segments and quantify social patterns.",
        "Built Python pipelines (pandas, NumPy) to process 50K+ embeddings reducing preprocessing time by 40%.",
        "Used scikit-learn to evaluate embedding quality through clustering and cosine similarity analysis of conversational text.",
      ],
    },
    {
      company: "WIT Sports",
      role: "Software Engineer Intern",
      date: "Aug 2025 – Dec 2025",
      location: "New York City, NY",
      summary: "Engineered a production web app and backend API with Redis caching serving 200+ partners at ~45ms latency.",
      bullets: [
        "Engineered a \"Guess the Player\" web app using JavaScript with React deployed in production for 200+ partners.",
        "Designed a backend API with Express and MongoDB achieving ~45ms leaderboard fetch latency at 10K+ records.",
        "Added read-through Redis caching to leaderboard endpoints to reduce database load and stabilize response latency.",
      ],
    },
    {
      company: "Cambridge University Digital Humanities",
      role: "Software Engineer Intern",
      date: "Jun 2025 – Aug 2025",
      location: "Remote",
      summary: "Built an NLP pipeline to summarize 85+ research papers and a React app for exploring 1K+ entities with FTS search.",
      bullets: [
        "Built a Python NLP pipeline to convert 85+ research papers into structured summaries reducing review time by 50%.",
        "Implemented a TypeScript and React web application for exploration of 1K+ entities with dynamic filtering.",
        "Indexed extracted PDF text using SQLite FTS5 to enable fast keyword search across 750+ research documents.",
      ],
    },
  ],

  projects: [
    {
      name: "Atlas",
      subtitle: "HackPrinceton Spring '26 — Best AI-Powered App",
      tech: "Next.js, TypeScript, Express.js, Three.js, Google Gemini",
      links: {
        devpost: "https://devpost.com/software/atlas-kb2cnu",
        github: "https://github.com/ch4nbin/atlas",
      },
      bullets: [
        "Built an AI-powered 3D learning platform that uses Gaussian splatting to turn prompts into explorable worlds.",
        "Engineered Node.js/Express APIs for a Photon AI iMessage world recommendation agent with 100ms latency.",
        "Used Google Gemini and World Labs for contextual tutoring and 3D generation, increasing engagement by 65%+.",
        "Won Best AI-Powered App sponsored by Orchids at HackPrinceton Spring 2026 among 410+ participants.",
      ],
    },
    {
      name: "Lumenta",
      subtitle: "SB Hacks XII — Grand Prize (Second Place)",
      tech: "Next.js, TypeScript, Node.js, MongoDB, YOLOv8",
      links: {
        devpost: "https://devpost.com/software/lumenta",
        github: "https://github.com/BhargavJakkaraju/Lumenta",
      },
      bullets: [
        "Built an AI video surveillance platform that analyzes live security footage and triggers automated MCP actions.",
        "Combined on-device YOLOv8 detection with a blob-tracking motion algorithm achieving 85% stable object tracking.",
        "Built an event-driven pipeline storing 5K+ timestamped detections in MongoDB Atlas for real-time querying.",
        "Won Grand Prize (Second Place) at Santa Barbara Hacks XII among 340+ participants and 100+ teams.",
      ],
    },
  ],

  skills: {
    languages: "Python, Java, TypeScript, JavaScript, Go, SQL, C, C++, HTML/CSS",
    frameworks: "React, Spring Boot, Node.js, Express.js, PyTorch, TensorFlow, WebGPU/WGSL, scikit-learn",
    tools: "Git/GitHub, Docker, Linux/Bash, AWS, PostgreSQL, MongoDB, SQLite, Redis, Jira, GitHub Actions, Jupyter",
  },

  art: `More here soon.`,

  writing: `Nothing published yet. Working on it.`,

  more: `Personal Credo`,

  credo: [
    {
      line: "I. I place the highest weight on my own judgment.",
      text: "By all accounts, I was born to be average. I'm an average person born to two average parents. But I've come to believe that being average is a choice, not a circumstance or a destiny. And perhaps destiny, in its strange and unknowable way, has a tendency to conspire for those who refuse to settle. I've been fortunate enough that luck has found me at the right moments in my life. But I've been even more fortunate to learn that the elusive phenomenon we call luck is something you have to be prepared to receive. So, when I wake up, I decide that no one knows any better than myself and that my limits are largely self-imposed. Self-imposed by what I choose to accept as my truth.",
    },
    {
      line: "II. Until death, all defeat is psychological.",
      text: "I have died many times, and yet I am still here. If the death of a dream is enough to convince you to stop dreaming altogether, then they will always be just dreams. If there is one thing I know to be true about human beings, it is that we are capable of creativity and resilience, capable of great things. An overnight success takes thousands of nights. We owe it to ourselves to see things through, to keep getting back up, again and again, because that is ultimately what is required to live a beautiful life, in every sense of the word.",
    },
    {
      line: "III. No one is ever ready until they are.",
      text: "So pull the lever. And tread on.",
    },
  ],
};
