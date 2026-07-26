export interface Wing {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  color: string;
  accentGlow: string;
  skills: string[];
  leadName: string;
  memberCount: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  wing: string;
  year: string;
  avatar: string;
  bio: string;
  linkedin: string;
  github: string;
  instagram: string;
  featured?: boolean;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  icon: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export const PISTOL_STATS: StatItem[] = [
  {
    id: "members",
    label: "Active Members",
    value: 150,
    suffix: "+",
    icon: "Users",
    description: "Passionate college innovators across tech, design, & management",
  },
  {
    id: "wings",
    label: "Specialized Wings",
    value: 6,
    suffix: "",
    icon: "Layers",
    description: "Dedicated verticals driving specialized skills & execution",
  },
  {
    id: "workshops",
    label: "Workshops Conducted",
    value: 35,
    suffix: "+",
    icon: "BookOpen",
    description: "Hands-on tech bootcamps, hackathons & masterclasses",
  },
  {
    id: "awards",
    label: "National Trophies",
    value: 18,
    suffix: "+",
    icon: "Trophy",
    description: "Inter-college hackathons, robotics, & design victories",
  },
];

export const PISTOL_WINGS: Wing[] = [
  {
    id: "tech-software",
    name: "Tech & Software Development",
    shortDesc: "Architecting web apps, backend microservices, mobile apps, and open-source systems.",
    fullDesc: "The digital spine of Pistol Group. We build cutting-edge web applications, mobile platforms, and enterprise solutions for real-world campus problems.",
    iconName: "Code2",
    color: "from-rose-500 to-rose-700",
    accentGlow: "rgba(244, 63, 94, 0.4)",
    skills: ["Next.js", "TypeScript", "Node.js", "Python", "Cloud Architecture", "DevOps"],
    leadName: "Aarav Sharma",
    memberCount: 45,
  },
  {
    id: "robotics-hardware",
    name: "Robotics & Hardware",
    shortDesc: "Designing autonomous rovers, IoT networks, embedded circuits, and drone platforms.",
    fullDesc: "Merging electronics, mechanics, and embedded programming to construct autonomous bots, drone systems, and smart IoT campus hardware.",
    iconName: "Cpu",
    color: "from-cyan-400 to-blue-600",
    accentGlow: "rgba(0, 240, 255, 0.4)",
    skills: ["ROS2", "Arduino / ESP32", "CAD Design", "PCB Layout", "Sensory Fusion"],
    leadName: "Rohan Varma",
    memberCount: 30,
  },
  {
    id: "ai-research",
    name: "AI & Data Research",
    shortDesc: "Exploring Generative AI, Computer Vision, LLM fine-tuning, and predictive models.",
    fullDesc: "Pushing the boundary of machine intelligence. Our research team publishes papers, builds custom neural models, and deploys AI tools.",
    iconName: "BrainCircuit",
    color: "from-purple-500 to-indigo-600",
    accentGlow: "rgba(112, 0, 255, 0.4)",
    skills: ["PyTorch", "OpenCV", "LangChain", "Transformers", "Data Engineering"],
    leadName: "Ananya Iyer",
    memberCount: 28,
  },
  {
    id: "creative-media",
    name: "Design & Creative Media",
    shortDesc: "Crafting visually hypnotic UI/UX, 3D animations, brand identities, and video visuals.",
    fullDesc: "Shaping the aesthetic essence of Pistol Group. We produce high-level UX designs, 3D renders, video teasers, and festival brandings.",
    iconName: "Palette",
    color: "from-amber-400 to-orange-600",
    accentGlow: "rgba(255, 215, 0, 0.4)",
    skills: ["Figma", "Blender 3D", "After Effects", "UI/UX Systems", "Motion Design"],
    leadName: "Siddharth Roy",
    memberCount: 25,
  },
  {
    id: "events-pr",
    name: "Events & Operations",
    shortDesc: "Executing mega hackathons, tech fests, industry keynotes, and logistical operations.",
    fullDesc: "The heartbeat of our events. We organize 24-hour hackathons, guest lectures with industry leaders, and inter-college symposiums.",
    iconName: "Calendar",
    color: "from-emerald-400 to-teal-600",
    accentGlow: "rgba(16, 185, 129, 0.4)",
    skills: ["Event Planning", "Sponsorships", "Schedules", "Public Relations", "Stage Tech"],
    leadName: "Neha Kulkarni",
    memberCount: 22,
  },
  {
    id: "entrepreneurship",
    name: "E-Cell & Venture Studio",
    shortDesc: "Incubating student startups, pitch deck refinement, funding networks, and market research.",
    fullDesc: "Turning student ideas into scalable ventures. We provide seed mentoring, pitch deck reviews, and connect founders with alumni investors.",
    iconName: "Rocket",
    color: "from-fuchsia-500 to-pink-600",
    accentGlow: "rgba(217, 70, 239, 0.4)",
    skills: ["Startup Growth", "Pitch Decks", "Financial Modeling", "Market Analysis"],
    leadName: "Vikramaditya Rao",
    memberCount: 20,
  },
];

export const PISTOL_TEAM: TeamMember[] = [
  {
    id: "1",
    name: "Prathmesh Duraphe",
    role: "Chief Technology Officer (CTO)",
    wing: "tech-ai",
    year: "3rd Year CSE",
    avatar: "/leadership/prathmesh_duraphe.jpg",
    bio: "Chief Technology Officer driving high-performance engineering & machine intelligence initiatives.",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    instagram: "https://instagram.com",
    featured: true,
  },
  {
    id: "2",
    name: "Rajveer Singh Chouhan",
    role: "Chief Content Officer (CCO)",
    wing: "content",
    year: "3rd Year CSE",
    avatar: "/leadership/rajveer_singh_chouhan.jpg",
    bio: "Chief Content Officer orchestrating brand strategies, creative storytelling, and official media communications.",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    instagram: "https://instagram.com",
    featured: true,
  },
  {
    id: "3",
    name: "Jay Menaria",
    role: "Head of Content",
    wing: "content",
    year: "3rd Year CSE",
    avatar: "/leadership/jay_menaria.jpg",
    bio: "Managing content vertical executions, digital media design, and campus branding narratives.",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    instagram: "https://instagram.com",
    featured: true,
  },
  {
    id: "4",
    name: "Manvendra Singh Panwar",
    role: "Chief Security Officer (CSO)",
    wing: "security",
    year: "3rd Year CSE",
    avatar: "/leadership/manvendra_singh_panwar.jpg",
    bio: "Chief Security Officer auditing deployment frameworks, security compliance, and network safety across all platforms.",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    instagram: "https://instagram.com",
    featured: true,
  },
  {
    id: "5",
    name: "Akshay Raj Singh",
    role: "Head of Production",
    wing: "production",
    year: "3rd Year CSE",
    avatar: "/leadership/akshay_raj_singh.jpg",
    bio: "Overseeing production timelines, manufacturing, and rapid prototyping workflows for robotics & hardware solutions.",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    instagram: "https://instagram.com",
    featured: true,
  },
  {
    id: "6",
    name: "Devraj Singh Rathore",
    role: "Lead, Production",
    wing: "production",
    year: "3rd Year CSE",
    avatar: "/leadership/devraj_singh_rathore.jpg",
    bio: "Managing component operations, hardware quality audits, and logistics for national-level challenges.",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    instagram: "https://instagram.com",
    featured: true,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote: "Joining Pistol Group was the defining milestone of my college journey. I gained hands-on software experience and built friendships for life.",
    name: "Devika Deshmukh",
    role: "Alumni '25 @ Software Engineer at Google",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "2",
    quote: "The energy in Pistol Group's robotics lab is electric. You get the freedom to experiment with real hardware and compete nationally.",
    name: "Kabir Mehta",
    role: "Robotics Core Member (3rd Year)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "3",
    quote: "Pistol Group isn't just a college group; it's an innovation hub where ideas turn into reality overnight during hackathons.",
    name: "Tanvi Saxena",
    role: "Design Lead (2nd Year)",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
  },
];
