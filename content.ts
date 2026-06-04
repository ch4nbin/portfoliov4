export const content = {
  name: "chanbin park",

  links: {
    email: "cp5721@princeton.edu",
    linkedin: "https://www.linkedin.com/in/chanbinp/",
    github: "https://github.com/ch4nbin",
  },

  about: `I'm a sophomore at Princeton studying computer science with minors in statistics & machine learning and visual arts. I'm interested in AI systems, high-performance computing, and the occasional creative project.`,

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
      company: "Together AI (Dao AI Lab)",
      role: "Undergraduate Researcher",
      date: "Sep 2026 – Present (Incoming)",
      location: "Princeton, NJ",
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
  ],

  skills: {
    languages: "Python, Java, TypeScript, JavaScript, Go, SQL, C, C++, HTML/CSS",
    frameworks: "React, Spring Boot, Node.js, Express.js, PyTorch, TensorFlow, WebGPU/WGSL, scikit-learn",
    tools: "Git/GitHub, Docker, Linux/Bash, AWS, PostgreSQL, MongoDB, SQLite, Redis, Jira, GitHub Actions, Jupyter",
  },

  art: `I have a minor in visual arts at Princeton. I paint, draw, and occasionally make things with code. More here soon.`,

  writing: `Nothing published yet. Working on it.`,

  more: `I grew up in the San Gabriel Valley. I play chess badly and cook better than I code. If you want to talk, reach me at cp5721@princeton.edu.`,
};
