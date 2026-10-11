

import profileImage from "../assets/Images/minhaz.jpg";
import Zohab from "../assets/Images/zohab.jpg";
import Zohurul from "../assets/Images/zohurul.jpg";
import AIImage from "../assets/Images/AIImagenew.JPG";
import deeplearing from "../assets/Images/deeplearning.jpeg";
import bio from "../assets/Images/bioinfor.jpg";
import computervision from "../assets/Images/Computervision.JPG";
import quantumimage from "../assets/Images/quantum.jpg";

export const  categoryImages = {
  "AI": profileImage,
  "Machine Learning": profileImage,
  "Deep Learning": profileImage,
  "Bioinformatics": profileImage,
  "Quantum Computing": profileImage,
  "Computer Vision": profileImage,
  "default": profileImage
};


export const Researchers = [
  {
    "id": 1,
    "name": "Abu Zohab Jisan",
    "affiliation": "PUST CSE",
    "avatar": Zohab,
    "expertise": ["Deep learning", "Machine Learning"],
    "recentWork": "Neural Networks for Image Recognition",
    "collaborationStatus": "Active",
    "sharedProjects": 3
  },
  {
    "id": 2,
    "name": "Minhaz Shikder",
    "affiliation": "PUST CSE",
    "avatar": profileImage,
    "expertise": ["Quantum Computing", "Physics"],
    "recentWork": "Quantum Algorithms for Drug Discovery",
    "collaborationStatus": "Active",
    "sharedProjects": 2
  },
  {
    "id": 3,
    "name": "Zohurul Islam",
    "affiliation": "PUST CSE",
    "avatar": Zohurul,
    "expertise": ["Computer Vision", "Robotics"],
    "recentWork": "Autonomous Navigation Systems",
    "collaborationStatus": "Potential",
    "sharedProjects": 0
  },
  {
    "id": 4,
    "name": "Fahim Reza",
    "affiliation": "PUST CSE",
    "avatar": "https://randomuser.me/api/portraits/men/44.jpg",
    "expertise": ["Cybersecurity", "Blockchain"],
    "recentWork": "AI for Threat Detection",
    "collaborationStatus": "Pending",
    "sharedProjects": 1
  },
  {
    "id": 5,
    "name": "Nusrat Tania",
    "affiliation": "PUST CSE",
    "avatar": "https://randomuser.me/api/portraits/women/44.jpg",
    "expertise": ["Bioinformatics", "Genomics"],
    "recentWork": "Gene Expression Analysis Using Deep Learning",
    "collaborationStatus": "Active",
    "sharedProjects": 2
  },
  {
    "id": 6,
    "name": "Tanvir Ahsan",
    "affiliation": "PUST CSE",
    "avatar": "https://randomuser.me/api/portraits/men/64.jpg",
    "expertise": ["Data Science", "Statistics"],
    "recentWork": "Predictive Models for Public Health",
    "collaborationStatus": "Active",
    "sharedProjects": 4
  },
  {
    "id": 7,
    "name": "Sadia Rahman",
    "affiliation": "PUST CSE",
    "avatar": "https://randomuser.me/api/portraits/women/84.jpg",
    "expertise": ["Natural Language Processing", "AI Ethics"],
    "recentWork": "Bias Detection in Language Models",
    "collaborationStatus": "Active",
    "sharedProjects": 1
  },
  {
    "id": 8,
    "name": "Mehedi Hasan",
    "affiliation": "PUST CSE",
    "avatar": "https://randomuser.me/api/portraits/men/49.jpg",
    "expertise": ["IoT", "Embedded Systems"],
    "recentWork": "Smart Agriculture Sensor Networks",
    "collaborationStatus": "Potential",
    "sharedProjects": 0
  },
  {
    "id": 9,
    "name": "Sharmin Nahar",
    "affiliation": "PUST CSE",
    "avatar": "https://randomuser.me/api/portraits/women/49.jpg",
    "expertise": ["Human-Computer Interaction", "UX Research"],
    "recentWork": "Designing Accessible Interfaces",
    "collaborationStatus": "Active",
    "sharedProjects": 1
  },
  {
    "id": 10,
    "name": "Arif Mahmud",
    "affiliation": "PUST CSE",
    "avatar":"https://randomuser.me/api/portraits/men/18.jpg",
    "expertise": ["Cloud Computing", "DevOps"],
    "recentWork": "Optimizing Microservices on Kubernetes",
    "collaborationStatus": "Pending",
    "sharedProjects": 2
  },
  {
    "id": 11,
    "name": "Tania Kabir",
    "affiliation": "PUST CSE",
    "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    "expertise": ["Digital Health", "AI in Medicine"],
    "recentWork": "AI-Powered Diagnosis Systems",
    "collaborationStatus": "Active",
    "sharedProjects": 3
  },
  {
    "id": 12,
    "name": "Zahid Rahman",
    "affiliation": "PUST CSE",
    "avatar": "https://randomuser.me/api/portraits/men/93.jpg",
    "expertise": ["Augmented Reality", "Mobile Computing"],
    "recentWork": "AR for Remote Learning",
    "collaborationStatus": "Potential",
    "sharedProjects": 1
  }
];


export const ResearchArticles = [
    {
        id: 1,
        title: "Deep Learning Approaches for Genomic Sequence Analysis",
        authors: "Badol Hossen, Sarah Khan, Rahim Ahmed",
        journal: "Nature Computational Science",
        date: "December 2023",
        reads: 530,
        citations: 42,
        image: deeplearing,
        tags: ["AI", "Bioinformatics", "Machine Learning"],
        abstract: "This paper explores novel deep learning techniques for analyzing genomic sequences with unprecedented accuracy.",
        fullTextLink: "#",
        collaborators: ["Sarah Khan", "Rahim Ahmed"]
    },
    {
        id: 2,
        title: "Quantum Computing Applications in Pharmaceutical Research",
        authors: "Rahim Ahmed, Badol Hossen",
        journal: "Quantum Journal",
        date: "October 2023",
        reads: 320,
        citations: 28,
        image: quantumimage,
        tags: ["Quantum Computing", "Drug Discovery"],
        abstract: "Investigating the potential of quantum algorithms to accelerate drug discovery processes.",
        fullTextLink: "#",
        collaborators: ["Badol Hossen"]
    },
    {
    id: 3,
    title: "Self-Supervised Learning for Medical Image Segmentation",
    authors: "Badol Hossen, Ayesha Rahman",
    journal: "IEEE Transactions on Medical Imaging",
    date: "February 2024",
    reads: 410,
    citations: 35,
    image: computervision,
    tags: ["Computer Vision", "Medical Imaging", "Self-Supervised Learning"],
    abstract: "This study presents a self-supervised learning framework for accurate segmentation of medical images with minimal labeled data.",
    fullTextLink: "#",
    collaborators: ["Ayesha Rahman"]
    }
    ,{
    id: 4,
    title: "Hybrid Quantum-Classical Models for Real-Time Traffic Prediction",
    authors: "Badol Hossen, Tanvir Hasan",
    journal: "Journal of Quantum AI Systems",
    date: "May 2024",
    reads: 270,
    citations: 19,
    image: quantumimage,
    tags: ["Quantum Computing", "Machine Learning", "Traffic Prediction"],
    abstract: "The paper proposes a hybrid quantum-classical model that improves the speed and accuracy of urban traffic forecasting.",
    fullTextLink: "#",
    collaborators: ["Tanvir Hasan"]
    }
    ,
    {
    id: 5,
    title: "AI-Powered Anomaly Detection in Real-Time Network Traffic",
    authors: "Badol Hossen, Nafis Chowdhury",
    journal: "Journal of Cybersecurity & Artificial Intelligence",
    date: "March 2024",
    reads: 455,
    citations: 32,
    image: AIImage,
    tags: ["Cybersecurity", "Anomaly Detection", "AI"],
    abstract: "A deep learning-based method for detecting real-time anomalies in network traffic to prevent cyber-attacks proactively.",
    fullTextLink: "#",
    collaborators: ["Nafis Chowdhury"]
    },
    {
    id: 6,
    title: "Integrative Multi-Omics Analysis for Cancer Biomarker Discovery",
    authors: "Badol Hossen, Dr. Tahmina Nasrin",
    journal: "Bioinformatics Journal",
    date: "June 2024",
    reads: 495,
    citations: 39,
    image: bio,
    tags: ["Bioinformatics", "Cancer Research", "Multi-Omics"],
    abstract: "This paper presents a multi-omics integration approach combining genomics, proteomics, and transcriptomics to identify novel cancer biomarkers.",
    fullTextLink: "#",
    collaborators: ["Dr. Tahmina Nasrin"]
    }
];

export const sampleEvents = [
  {
    "id": 1,
    "title": "International AI Research Symposium",
    "date": "2023-11-15",
    "time": "09:00 - 17:00",
    "location": "Virtual",
    "organizer": "AI Research Foundation",
    "image": "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "tags": ["AI", "Machine Learning"]
  },
  {
    "id": 2,
    "title": "Bioinformatics Conference 2023",
    "date": "2023-12-05",
    "time": "10:00 - 16:00",
    "location": "Boston, MA",
    "organizer": "Bioinformatics Society",
    "image": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "tags": ["Bioinformatics", "Genomics"]
  },
  {
    "id": 3,
    "title": "Next-Gen Robotics & AI Summit",
    "date": "2024-01-20",
    "time": "11:00 - 18:00",
    "location": "Tokyo, Japan",
    "organizer": "FutureTech Labs",
    "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "tags": ["Robotics", "AI"]
  },
  {
    "id": 4,
    "title": "CRISPR and Genomic Editing Workshop",
    "date": "2024-02-15",
    "time": "09:30 - 15:30",
    "location": "Berlin, Germany",
    "organizer": "European Genome Initiative",
    "image": "../src/assets/Images/3.jpeg",
    "tags": ["Genomics", "CRISPR", "Bioinformatics"]
  },
  {
    "id": 5,
    "title": "Quantum AI and Ethics Conference",
    "date": "2024-03-08",
    "time": "13:00 - 19:00",
    "location": "London, UK",
    "organizer": "Quantum Society UK",
    "image": "../src/assets/Images/4.jpeg",
    "tags": ["Quantum Computing", "AI", "Ethics"]
  },
  {
    "id": 6,
    "title": "Neuroscience and Deep Learning Forum",
    "date": "2024-04-02",
    "time": "08:00 - 14:00",
    "location": "San Francisco, CA",
    "organizer": "BrainTech Alliance",
    "image": "../src/assets/Images/6.jpeg",
    "tags": ["Neuroscience", "Deep Learning", "Healthcare AI"]
  }
];

 export const analyticsData = {
  citations: {
    total: 842,
    monthlyTrend: [45, 60, 52, 70, 85, 90, 110, 95, 80, 75, 85, 100],
    topPapers: [
      { title: "Genomic DL", citations: 142 },
      { title: "Quantum Drug", citations: 95 },
      { title: "AI in Medicine", citations: 87 },
    ],
    byField: [
      { field: "AI", citations: 320 },
      { field: "Bioinformatics", citations: 280 },
      { field: "Quantum", citations: 242 },
    ],
  },
  collaborations: {
    active: 12,
    completed: 23,
    byCountry: [
      { country: "USA", count: 8 },
      { country: "UK", count: 5 },
      { country: "Germany", count: 4 },
      { country: "Japan", count: 3 },
      { country: "Others", count: 3 },
    ],
    byInstitution: [
      { institution: "MIT", projects: 4 },
      { institution: "Stanford", projects: 3 },
      { institution: "Oxford", projects: 2 },
    ],
  },
  publications: {
    total: 34,
    byYear: [
      { year: 2020, count: 4 },
      { year: 2021, count: 8 },
      { year: 2022, count: 10 },
      { year: 2023, count: 11 },
    ],
    byType: [
      { type: "Journal", count: 22 },
      { type: "Conference", count: 9 },
      { type: "Book Chapter", count: 3 },
    ],
  },
  engagement: {
    profileViews: 1245,
    researchGateScore: 86,
    hIndex: 18,
    i10Index: 32,
  },
};

export const researchTools = [
  // 1. Literature Search
  {
    name: "Google Scholar",
    description: "Comprehensive academic search engine for scholarly literature",
    category: "Literature Search",
    link: "https://scholar.google.com",
    icon: "🔍"
  },
  {
    name: "ResearchRabbit",
    description: "Discover and visualize paper/author connections",
    category: "Literature Search",
    link: "https://www.researchrabbit.ai",
    icon: "🐇"
  },
  {
    name: "Connected Papers",
    description: "Explore research landscapes via graph visualizations",
    category: "Literature Search",
    link: "https://www.connectedpapers.com",
    icon: "📊"
  },

  // 2. Reference Management
  {
    name: "Zotero",
    description: "Free tool to collect, organize, and cite research",
    category: "Reference Management",
    link: "https://www.zotero.org",
    icon: "📚"
  },
  {
    name: "Mendeley",
    description: "Reference manager + academic social network",
    category: "Reference Management",
    link: "https://www.mendeley.com",
    icon: "👥"
  },
  {
    name: "EndNote",
    description: "Advanced citation management for large projects",
    category: "Reference Management",
    link: "https://endnote.com",
    icon: "📑"
  },

  // 3. Writing & Editing
  {
    name: "Grammarly",
    description: "AI writing assistant for clarity/grammar",
    category: "Writing",
    link: "https://www.grammarly.com",
    icon: "✍️"
  },
  {
    name: "QuillBot",
    description: "Paraphrasing and summarizing tool",
    category: "Writing",
    link: "https://www.quillbot.com",
    icon: "🔄"
  },
  {
    name: "Turnitin",
    description: "Plagiarism detection for academic integrity",
    category: "Writing",
    link: "https://www.turnitin.com",
    icon: "🔎"
  },

  // 4. Bioinformatics
  {
    name: "Cytoscape",
    description: "Visualize biological networks",
    category: "Bioinformatics",
    link: "https://cytoscape.org",
    icon: "🧬"
  },
  {
    name: "STRING",
    description: "Protein-protein interaction database",
    category: "Bioinformatics",
    link: "https://string-db.org",
    icon: "🕸️"
  },
  {
    name: "Enrichr",
    description: "Gene list enrichment analysis",
    category: "Bioinformatics",
    link: "https://maayanlab.cloud/Enrichr",
    icon: "🧪"
  },

  // 5. Data Analysis & Visualization (New)
  {
    name: "RStudio",
    description: "Open-source IDE for R (statistics & graphs)",
    category: "Data Analysis",
    link: "https://www.rstudio.com",
    icon: "📈"
  },
  {
    name: "Tableau",
    description: "Create interactive data dashboards",
    category: "Data Analysis",
    link: "https://www.tableau.com",
    icon: "📊"
  },
  {
    name: "Plotly",
    description: "Python/R/JS library for dynamic visualizations",
    category: "Data Analysis",
    link: "https://plotly.com",
    icon: "📉"
  },

  // 6. Collaboration & Project Management (New)
  {
    name: "Notion",
    description: "All-in-one workspace for research notes",
    category: "Collaboration",
    link: "https://www.notion.so",
    icon: "🗂️"
  },
  {
    name: "Trello",
    description: "Kanban-style task organization",
    category: "Collaboration",
    link: "https://trello.com",
    icon: "📋"
  },
  {
    name: "Slack",
    description: "Team communication for labs/groups",
    category: "Collaboration",
    link: "https://slack.com",
    icon: "💬"
  },

  // 7. Machine Learning & AI (New)
  {
    name: "TensorFlow",
    description: "Open-source ML framework",
    category: "Machine Learning",
    link: "https://www.tensorflow.org",
    icon: "🤖"
  },
  {
    name: "Hugging Face",
    description: "NLP models and datasets",
    category: "Machine Learning",
    link: "https://huggingface.co",
    icon: "🦾"
  },
  {
    name: "Kaggle",
    description: "Competitions and datasets for ML practice",
    category: "Machine Learning",
    link: "https://www.kaggle.com",
    icon: "🏆"
  },

  // 8. Lab & Experiment Tools (New)
  {
    name: "Benchling",
    description: "Electronic lab notebook (ELN) for biology",
    category: "Lab Tools",
    link: "https://www.benchling.com",
    icon: "🔬"
  },
  {
    name: "LabArchives",
    description: "Cloud-based ELN for research data",
    category: "Lab Tools",
    link: "https://www.labarchives.com",
    icon: "📓"
  },
  {
    name: "SnapGene",
    description: "Molecular biology software for cloning/design",
    category: "Lab Tools",
    link: "https://www.snapgene.com",
    icon: "🧫"
  },

  // 9. Open Access & Preprints (New)
  {
    name: "arXiv",
    description: "Preprints for physics, CS, and more",
    category: "Open Access",
    link: "https://arxiv.org",
    icon: "📄"
  },
  {
    name: "bioRxiv",
    description: "Biology preprints",
    category: "Open Access",
    link: "https://www.biorxiv.org",
    icon: "🧬"
  },
  {
    name: "Zenodo",
    description: "Open-access repository for datasets/code",
    category: "Open Access",
    link: "https://zenodo.org",
    icon: "📦"
  },

  // 10. Research Publications (Existing + New)
  {
    name: "IEEE Xplore",
    description: "Engineering and computer science research",
    category: "Publications",
    link: "https://ieeexplore.ieee.org",
    icon: "⚡"
  },
  {
    name: "Elsevier ScienceDirect",
    description: "Peer-reviewed STEM literature",
    category: "Publications",
    link: "https://www.sciencedirect.com",
    icon: "📜"
  },
  {
    name: "SpringerLink",
    description: "Journals and books across disciplines",
    category: "Publications",
    link: "https://link.springer.com",
    icon: "🌐"
  }
];