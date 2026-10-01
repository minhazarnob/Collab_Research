
import {Users, TrendingUp, MessageCircle} from "lucide-react";
import {Wrench, GraduationCap, BarChart3} from "lucide-react";
import {Share2,Rabbit,BookMarked,SpellCheck} from "lucide-react";
import {Feather,BookOpen,Dna} from "lucide-react";
import ResearchWrite from "../assets/Images/Reaearch-write.jpg";
import ResearchReview from "../assets/Images/Research-review.jpg";
import DataAnalytics from "../assets/Images/Data_Analytics.jpg";
import Minhaz from "../assets/Images/minhaz.jpg";
import Johurul from "../assets/Images/zohurul.jpg"
import Zohab from "../assets/Images/zohab.jpg"

export const features = [
  {
    icon: Users,
    title: "Collaborate Easily",
    description: "Connect with researchers across disciplines and institutions"
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    description: "Visualize your research milestones and achievements"
  },
  {
    icon: Wrench,
    title: "Build Teams",
    description: "Form ideal research groups with skill matching"
  },
  {
    icon: MessageCircle,
    title: "Group Chat",
    description: "Real-time communication with your research teams"
  },
  {
    icon: GraduationCap,
    title: "Premium Courses",
    description: "Access exclusive research methodology courses"
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Get insights on your research impact"
  }
];

export const testimonials = [
  {
    quote: "CollabResearch helped me find the perfect team for my bioinformatics project",
    author: "Md Toukir Ahamed, Pabna University of Science and Technology"
  },
  {
    quote: "Our publication quality improved significantly using the collaboration tools",
    author: "Md Niyaz Imtiaz, Pabna University of Science and Technology"
  }
];

export const newsItems = [
  "New: Collaborative writing tool now available!",
  "Research grant opportunities updated weekly",
  "Join our webinar on effective academic collaboration - July 15th",
  "50+ new researchers joined this month",
  "Version 2.0 released with enhanced analytics"
];

export const courses = [
  {
    title: "How to write a Research Paper",
    instructor: "Dr. Monirul Islam",
    price: "$150",
    duration: "6 weeks",
    rating: "4.8",
    image: ResearchWrite
  },
  {
    title: "Literature Review & Reference Management",
    instructor: "Dr. Imdadul Haque",
    price: "$120",
    duration: "4 weeks",
    rating: "4.9",
    image: ResearchReview
  },
  {
    title: "Data Analysis and Interpretation for Research",
    instructor: "Dr. Mijanur Rahman",
    price: "$180",
    duration: "8 weeks",
    rating: "4.7",
    image: DataAnalytics
  }
];


export const researchTools = [
  {
    name: "Google Scholar",
    url: "https://scholar.google.com",
    icon: GraduationCap,
    color: "blue",
    description: "A free, comprehensive academic search engine for scholarly articles, theses, and books.",
  },
  {
    name: "Network Analyst",
    url: "https://www.networkanalyst.ca",
    icon: Share2,
    color: "purple",
    description: "A powerful web tool for analyzing and visualizing gene expression and biological networks.",
  },
  {
    name: "Research Rabbit",
    url: "https://www.researchrabbit.ai",
    icon: Rabbit,
    color: "pink",
    description: "Visualizes research paper and author connections to help you explore related literature.",
  },
  {
    name: "Zotero",
    url: "https://www.zotero.org",
    icon: BookMarked,
    color: "green",
    description: "A reference manager that helps you collect, organize, and cite research sources easily.",
  },
  {
    name: "Mendeley",
    url: "https://www.mendeley.com",
    icon: BookOpen,
    color: "indigo",
    description: "An academic reference manager for organizing papers and collaborating with other researchers.",
  },
  {
    name: "Grammarly",
    url: "https://www.grammarly.com",
    icon: SpellCheck,
    color: "teal",
    description: "An AI-powered writing assistant for improving grammar, clarity, and tone in research writing.",
  },
  {
    name: "QuillBot",
    url: "https://www.quillbot.com",
    icon: Feather,
    color: "amber",
    description: "An AI paraphrasing tool that helps rewrite and refine your academic writing effectively.",
  },
  {
    name: "Stelth Writer",
    url: "https://string-db.org",
    icon: Dna,
    color: "red",
    description: "A database that reveals known and predicted protein-protein interactions.",
  },
];

export const teamMembers = [
  {
    name: "Minhaz Arnob",
    role: "Project Manager",
    image: Minhaz,
    bio: "Turning ideas into action — leading with clarity, planning with purpose.",
    social: {
      facebook: "https://www.facebook.com/Israt.CSE.PUST",
      linkedin: "https://www.linkedin.com/in/israt-jahan-50054427a/",
      github: "https://github.com/Isratjahan16"
    }
  },
  {
    name: "Johurul Islam",
    role: "Researcher",
    image: Johurul,
    bio: "The creative mind behind the user experience, turning ideas into interactive, intuitive, and beautiful interfaces.",
    social: {
      facebook: "https://www.facebook.com/badolhosen.CSE.PUST/",
      linkedin: "https://www.linkedin.com/in/badolhossen661/",
      github: "https://github.com/badolhosen661"
    }
  },
  {
    name: "Abu Zohab",
    role: "Researcher",
    image: Zohab,
    bio: "The powerhouse behind the scenes, building the logic, database, and infrastructure.",
    social: {
      facebook: "https://www.facebook.com/mahadi.hasan.CSE.PUST",
      linkedin: "https://www.linkedin.com/in/mahadi-hasan-0259b7276/",
      github: "https://github.com/Mahadi210110"
    }
  }
];

export const investors = [
    "Pabna University Research Fund",
    "Bangladesh Science Foundation",
    "PUST Research Society"
];

