export const profile = {
  name: 'SYED SAAD HAIDER',
  shortName: 'Saad',
  role: 'Full Stack & Applied AI Developer',
  headline: 'Full Stack Developer',
  location: 'Delhi, India',
  phone: '+91 9984149991',
  whatsapp: 'https://wa.me/919984149991',
  email: 'syedsaadhaider18@gmail.com',
  github: 'https://github.com/d7rev',
  linkedin: 'https://www.linkedin.com/in/syed-saad-haider-03973130a/',
  twitter: 'https://x.com/Saad187939',
  instagram: 'https://www.instagram.com/syedsaad_19/',
  spotify: 'https://open.spotify.com/user/hqb0y8na0prjh0055so11j6x1?si=6c1e339328ad481d',
  summary:
    'Computer Science Engineering student focused on full-stack web development with a strong foundation in software engineering, AI/ML, and computer vision. Experienced in building responsive web applications, real-time systems, and data-driven applications using HTML, CSS, JavaScript, Node.js, Firebase, and SQL. Interested in developing practical software products and scalable web solutions.',
  bioIntro:
    'Computer Science Engineering student at VIT Bhopal focused on full-stack architecture, applied AI/ML, and computer vision.',
  institution: 'VIT Bhopal University',
  degree: 'Bachelor of Technology (B.Tech) in Computer Science Engineering',
  term: '2024 — 2028',
}

export const technicalSkills = [
  { category: 'Frontend', skills: 'HTML5, CSS3, JavaScript (ES6+)' },
  { category: 'Backend', skills: 'Node.js, Firebase' },
  { category: 'Database', skills: 'SQL, Firebase Cloud Firestore (NoSQL)' },
  { category: 'Deployment', skills: 'Netlify' },
  { category: 'Programming', skills: 'C++, Java, Python, C#' },
  { category: 'AI / ML', skills: 'PyTorch, Scikit-learn, LangChain, NLP' },
  { category: 'Computer Vision', skills: 'OpenCV, DeepFace, Haar Cascade' },
  { category: 'Tools', skills: 'Git, GitHub' },
]

export const skillBars = [
  {
    category: 'Programming Languages',
    skillsText: 'C++, Java, Python, C#, JavaScript (ES6+), SQL',
    percentage: 95,
  },
  {
    category: 'Frontend & UI',
    skillsText: 'HTML5, CSS3, JavaScript (ES6+), PWA, Responsive Design',
    percentage: 92,
  },
  {
    category: 'Backend & Cloud',
    skillsText: 'Node.js, Firebase, Firestore (NoSQL), REST APIs, Netlify',
    percentage: 90,
  },
  {
    category: 'AI / Machine Learning',
    skillsText: 'PyTorch, Scikit-learn, LangChain, Ollama (Llama 3), NLP',
    percentage: 90,
  },
  {
    category: 'Computer Vision',
    skillsText: 'OpenCV, DeepFace, Haar Cascade, Image Processing',
    percentage: 88,
  },
  {
    category: 'Developer Tools',
    skillsText: 'Git, GitHub, VS Code, Linux CLI',
    percentage: 95,
  },
]

export const services = [
  {
    id: '01',
    title: 'Full Stack Development',
    description: 'Engineering responsive web applications with Node.js, Firebase, and real-time synchronization.',
    icon: 'code',
  },
  {
    id: '02',
    title: 'Applied AI & ML Systems',
    description: 'Building local offline inference pipelines with PyTorch, LangChain, and NLP models.',
    icon: 'cpu',
  },
  {
    id: '03',
    title: 'Computer Vision',
    description: 'Real-time video facial analysis, emotion categorization, and OpenCV stream processing.',
    icon: 'eye',
  },
  {
    id: '04',
    title: 'Database & Cloud Architecture',
    description: 'Designing structured SQL databases, Firestore NoSQL real-time listeners, and Netlify PWA deployments.',
    icon: 'server',
  },
]

export const educationData = [
  {
    institution: 'VIT Bhopal University',
    degree: 'Bachelor of Technology (B.Tech) in Computer Science Engineering',
    period: '2024 — 2028',
    year: '2028',
    current: true,
  },
  {
    institution: 'City Montessori School',
    degree: 'High School / Senior Secondary Education',
    period: 'Graduated 2024',
    year: '2024',
    current: false,
  },
]

export type ProjectCategory = 'all' | 'fullstack' | 'ai' | 'cv'

export type ProjectImage = {
  url: string
  label?: string
}

export type DemoLink = {
  label: string
  url: string
}

export type Project = {
  id: string
  title: string
  subtitle: string
  category: ProjectCategory
  badge: string
  year: string
  points: string[]
  tech: string[]
  github: string
  demo: string | null
  demos?: DemoLink[]
  image: string
  images?: ProjectImage[]
}

export const projectsData: Project[] = [
  {
    id: 'PRJ-01',
    title: 'VIT Canteen – Smart Queue & Pre-Order System',
    subtitle: 'Campus dining workflow with real-time Firestore listeners',
    category: 'fullstack',
    badge: 'NEW! (2026)',
    year: '2026',
    points: [
      'Developed a real-time campus canteen platform with separate customer and vendor applications to improve ordering and queue management.',
      'Implemented real-time order synchronization using Firebase Cloud Firestore listeners, allowing customers and vendors to receive live order status updates.',
      'Built token generation, real-time queue position and ETA, pickup-slot scheduling, cross-canteen food search, order history, ratings, and UPI payment functionality.',
      'Developed a vendor dashboard with live order management, stock updates, auto-accept controls, daily sales summaries, and top-selling item insights.',
      'Deployed the application using Netlify and packaged it as an installable Progressive Web App (PWA).',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Firebase Cloud Firestore', 'Netlify', 'PWA'],
    github: 'https://github.com/d7rev',
    demo: 'https://customer-001.netlify.app/',
    demos: [
      { label: 'Customer Demo', url: 'https://customer-001.netlify.app/' },
      { label: 'Vendor Demo', url: 'https://vendor-001.netlify.app/' },
    ],
    image: '/projects/vit-canteen.png',
    images: [
      {
        url: '/projects/vit-canteen-1.png',
        label: 'Campus Canteen · Stalls & Live Queue Status',
      },
      {
        url: '/projects/vit-canteen-2.png',
        label: 'Bistro Stall · Food Menu & Customization',
      },
      {
        url: '/projects/vit-canteen-3.png',
        label: 'Mayuri Stall · Dark Theme UI & Filters',
      },
      {
        url: '/projects/vit-canteen-4.png',
        label: 'Order Modal · Real-Time ETA & UPI Checkout',
      },
    ],
  },
  {
    id: 'PRJ-02',
    title: 'AI-Powered Indian Judicial Assistant',
    subtitle: 'Local decision-support engine for statutory judgment prediction',
    category: 'ai',
    badge: 'NEW! (2026)',
    year: '2026',
    points: [
      'Developed an AI-powered decision-support system for Indian legal judgment prediction and explainable sentencing.',
      'Built the system to operate fully offline and locally, supporting privacy for sensitive legal information.',
    ],
    tech: ['Python', 'PyTorch', 'Scikit-learn', 'LangChain', 'Ollama (Llama 3)', 'NLP'],
    github: 'https://github.com/d7rev',
    demo: null,
    image: '/projects/indian-judicial-assistant.jpg',
    images: [
      {
        url: '/projects/indian-judicial-assistant.jpg',
        label: 'Statutory Judgment Prediction & Neural Legal Intelligence Engine',
      },
    ],
  },
  {
    id: 'PRJ-03',
    title: 'Live Emotion Tracker',
    subtitle: 'Low-latency streaming facial detection and emotion inference',
    category: 'cv',
    badge: '2025',
    year: '2025',
    points: [
      'Built an application for real-time facial emotion tracking and categorization using computer vision and facial analysis.',
      'Integrated image processing and facial analysis components to process visual input and identify emotions.',
    ],
    tech: ['Python', 'OpenCV', 'DeepFace', 'Haar Cascade'],
    github: 'https://github.com/d7rev',
    demo: null,
    image: '/projects/emotion-tracker.png',
    images: [
      {
        url: '/projects/emotion-tracker.png',
        label: 'Real-Time Facial Emotion Detection & Confidence HUD',
      },
    ],
  },
]
