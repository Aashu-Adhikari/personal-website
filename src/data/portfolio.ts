export type Project = {
  slug: string;
  name: string;
  tagline: string;
  stack: string[];
  timeframe?: string;
  role?: string;
  link?: { label: string; url: string };
  problem: string;
  approach: string[];
  features?: { category: string; items: string[] }[];
  outcomes?: string[];
};

export const projects: Project[] = [
  {
    slug: "agentic-qa",
    name: "Agentic QA",
    tagline: "Backend-driven platform orchestrating automated browser workflows.",
    stack: ["Python", "FastAPI", "Docker", "Playwright", "AWS", "VNC"],
    timeframe: "2025 — present",
    role: "Backend / ML Engineer",
    problem:
      "AI agents and automated test suites need a reliable way to run browser-based workflows in isolated, observable environments — with full lifecycle control and reproducibility.",
    approach: [
      "Designed FastAPI services for job scheduling, execution lifecycle, and artifact management.",
      "Integrated Playwright for browser automation with both headless and headed execution support.",
      "Implemented Docker-based isolated execution environments for reproducibility and security.",
      "Enabled GUI-based execution via VNC for real-time visualization and debugging of running agents.",
      "Architected the system so AI-driven agents and automated testing workflows share the same runtime.",
    ],
    outcomes: [
      "Single platform supporting both autonomous agents and traditional QA flows.",
      "Reproducible, sandboxed runs with live observability.",
    ],
  },
  {
    slug: "tabsense",
    name: "TabSense — AI Browser Assistant",
    tagline: "Privacy-focused Chrome extension for AI-powered tab management and research.",
    stack: ["React", "TensorFlow.js", "Chrome MV3", "RAG", "Webpack"],
    role: "Creator",
    link: {
      label: "Chrome Web Store",
      url: "https://chromewebstore.google.com/detail/hnacpdbfpmihgnelkcjcimmnnnlnelhf?utm_source=item-share-cb",
    },
    problem:
      "Browser tab overload kills focus. Most assistants ship data off to remote servers — TabSense keeps inference and learning local.",
    approach: [
      "Architected a Manifest V3 extension using React + Webpack with a non-blocking service-worker architecture.",
      "Implemented on-device ML using TensorFlow.js (Universal Sentence Encoder) to classify and group tabs.",
      "Designed an adaptive online learning system that incrementally retrains the local model from manual grouping actions.",
      "Integrated streaming LLM APIs (OpenAI, OpenRouter) with real-time token streaming and Markdown rendering.",
    ],
    features: [
      {
        category: "AI-Powered Organization",
        items: [
          "Smart Classification: 10 predefined categories using TensorFlow.js",
          "Auto-Learning: Local model improves from manual tab assignments",
          "Fallback System: Rule-based classification when ML is unavailable"
        ]
      },
      {
        category: "Intelligent Grouping",
        items: [
          "Domain Grouping: Automatic organization by website domain",
          "Pattern-based Content Grouping",
          "Custom Emojis: Personalize domain group names and icons"
        ]
      },
      {
        category: "Advanced Search",
        items: [
          "Real-time search across titles and URLs",
          "Highlighted matching terms with instant results"
        ]
      },
      {
        category: "Chat with Tabs",
        items: [
          "Ask questions about webpage content using RAG",
          "Streaming LLM responses with source citations",
          "Support for OpenRouter, OpenAI, and custom providers"
        ]
      },
      {
        category: "Advanced Analytics",
        items: [
          "Time Tracking: Active browsing time per domain",
          "Memory Estimation: Heuristic RAM consumption tracking",
          "Focus Score: Productive vs. distracting time classification",
          "Historical Habbit Visualization (7-day period)"
        ]
      },
      {
        category: "Dual Interface",
        items: [
          "Popup View for quick access",
          "Side Panel for deep research and persistent chat"
        ]
      }
    ],
    outcomes: ["Published on the Chrome Web Store.", "All tab embeddings stay on-device."],
  },
  {
    slug: "visa-processing",
    name: "Visa Processing System",
    tagline: "End-to-end visa application processing with dynamic forms and secure storage.",
    stack: ["Python", "FastAPI", "SurveyJS", "MongoDB", "AWS S3"],
    role: "Backend Engineer",
    problem:
      "Visa workflows change constantly across countries and categories. The system needed dynamic forms, validation, secure document handling, and an admin pipeline.",
    approach: [
      "Integrated SurveyJS for dynamic, customizable visa application forms with validation.",
      "Built RESTful APIs using FastAPI for collecting and processing application data.",
      "Implemented MongoDB for storing form responses and application data.",
      "Created an admin dashboard for processing applications and generating reports.",
      "Designed a secure file upload system with AWS S3 integration.",
    ],
  },
  {
    slug: "aslead-search",
    name: "Aslead Search",
    tagline: "ML-powered enterprise search built for Nomura Research Institute.",
    stack: ["Python", "FastAPI", "PyTorch", "AWS SageMaker", "LLMs", "XAI"],
    role: "ML Engineer",
    problem:
      "NRI required a semantic search system over a large corpus of Japanese technical documents — with classification, similarity, and explainability.",
    approach: [
      "Built a technical document classification system reaching ~95% accuracy.",
      "Implemented transformer-based models for document classification and semantic similarity.",
      "Integrated LLM-based approaches for enterprise search use cases.",
      "Applied XAI techniques for model interpretability of transformer predictions.",
      "Developed scalable training and inference pipelines on AWS SageMaker.",
    ],
    outcomes: ["Shipped to Japan's top fintech research institute."],
  },
  {
    slug: "relative-analyzer",
    name: "Relative Analyzer",
    tagline: "Web app for visualizing graph data stored in Neo4j.",
    stack: ["React", "Sigma.js", "Neo4j", "Docker", "Elasticsearch"],
    role: "Full-stack Engineer",
    problem:
      "Relationship-heavy datasets are hard to read in tables. The team needed an interactive graph view with sub-second query performance.",
    approach: [
      "Developed the visualization interface using React and Sigma.js.",
      "Optimized Neo4j queries, improving performance by over 50×.",
      "Executed Python services inside Docker containers on client servers.",
      "Integrated Elasticsearch for enhanced search capabilities.",
    ],
  },
  {
    slug: "melody-synthesis",
    name: "Melody Synthesis",
    tagline: "Prototype system for music synthesis using machine learning.",
    stack: ["Python", "Magenta.js", "TensorFlow"],
    role: "Research Intern",
    problem: "Explore how generative ML models can synthesize new melodies and how to expose that to non-technical users.",
    approach: [
      "Built an ML-based system to synthesize new melodies.",
      "Evaluated and implemented state-of-the-art AI research for music generation.",
      "Developed a user-friendly interface for music synthesis.",
    ],
  },
];

export const profile = {
  name: "Ashutosh Adhikari",
  role: "Backend / Machine Learning Engineer",
  location: "New Baneshwor, Kathmandu, Nepal",
  phone: "+977 9865018229",
  email: "ashutoshadhikari141@gmail.com",
  status: "available",
  focus: "backend ml // agentic systems",
  links: {
    linkedin: "https://www.linkedin.com/in/ashutosh-adhikari/",
    github: "https://github.com/Aashu-Adhikari",
    gitlab: "https://gitlab.com/ashutoshadhikari",
    website: "https://www.adhikariashutosh.com.np/",
  },
  summary:
    "Backend-focused Machine Learning Engineer with extensive experience designing, building, and deploying production-grade ML systems and APIs. Specialized in FastAPI-based backend services, Dockerized microservices, and scalable cloud deployments on AWS. Proficient in NLP, LLM-powered search systems, and enterprise data platforms with a strong emphasis on reliability, performance, and maintainability. Currently developing agentic execution platforms with browser automation and workflow orchestration.",
};

export const experience = [
  {
    company: "TAI Inc.",
    role: "Backend / Machine Learning Engineer",
    period: "Jan 2022 — Present",
    bullets: [
      "Designed and developed backend ML services using FastAPI to expose search, NLP, and inference APIs for enterprise applications.",
      "Built and maintained Dockerized microservices for ML models and backend workflows with production deployment.",
      "Developed ML-powered search systems for Nomura Research Institute (Japan's top fintech research institute).",
      "Designed scalable data ingestion, indexing, and retrieval pipelines for large Japanese text datasets.",
      "Implemented model training and inference pipelines using AWS SageMaker with CI/CD automation.",
      "Integrated AWS services (EC2, S3, ECR, IAM, CloudWatch) for secure and observable deployments.",
      "Researched and integrated LLM-based solutions for semantic search and NLP use cases.",
      "Applied Explainable AI (XAI) techniques to improve transparency of transformer-based models.",
      "Collaborated with frontend teams to support graph-based visualization using React and Sigma.js.",
      "Currently developing an agentic execution platform with Playwright automation and FastAPI orchestration.",
    ],
  },
  {
    company: "TAI Inc.",
    role: "Machine Learning Intern",
    period: "Sep 2021 — Dec 2021",
    bullets: [
      "Conducted research on integrating machine learning techniques with music-based applications.",
      "Implemented and evaluated state-of-the-art AI techniques for music analysis and synthesis.",
    ],
  },
  {
    company: "CloudFactory",
    role: "Annotation QA",
    period: "Jul 2020 — Aug 2021",
    bullets: [
      "Ensured quality and consistency of annotated image datasets for machine learning models.",
      "Reviewed and validated labeling accuracy against project standards.",
    ],
  },
];

export const skills: { category: string; items: string[] }[] = [
  { category: "Backend & APIs", items: ["FastAPI", "Flask", "REST APIs", "Async Python"] },
  { category: "Languages", items: ["Python", "JavaScript", "SQL", "Java"] },
  { category: "ML & NLP", items: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face Transformers", "LLMs", "LangChain", "FAISS", "XAI"] },
  { category: "Cloud & DevOps", items: ["AWS SageMaker", "EC2", "S3", "ECR", "IAM", "CloudWatch", "Docker"] },
  { category: "Databases & Search", items: ["Neo4j", "Elasticsearch", "MongoDB", "PostgreSQL"] },
  { category: "Frontend", items: ["React", "Sigma.js", "SurveyJS"] },
  { category: "CI/CD", items: ["Jenkins", "GitLab CI/CD"] },
  { category: "Tools", items: ["Git", "Jupyter", "Pandas", "Matplotlib", "Seaborn", "Playwright", "VNC"] },
];

export const education = {
  school: "The British College",
  period: "2017 — 2021",
  degree: "BSc (Hons) Information Technology",
  courses: ["Data Structures", "Discrete Systems", "Cognitive Science", "Artificial Intelligence", "Database Administration"],
};
