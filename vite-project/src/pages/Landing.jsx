import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/Images/Team1.jpg';
import mahadi from '../assets/Images/mahaadi.jpg';
import israt from '../assets/Images/Israt.jpg';
import AIImage from '../assets/Images/AIImagenew.JPG';
import machineLearning from '../assets/Images/machinelearning.JPG';
import deeplearing from '../assets/Images/deeplearning.jpeg';
import bio from '../assets/Images/bioinfor.jpg';
import computervision from '../assets/Images/Computervision.JPG';
import quantumimage from '../assets/Images/quantum.jpg';



const categoryImages = {
  "AI": profileImage,
  "Machine Learning": profileImage,
  "Deep Learning": profileImage,
  "Bioinformatics": profileImage,
  "Quantum Computing": profileImage,
  "Computer Vision": profileImage,
  "default": profileImage
};

// Sample data - in a real app, this would come from an API
const sampleResearchers = [
  {
    "id": 1,
    "name": "Mahadi Hasan",
    "affiliation": "PUST CSE",
    "avatar": mahadi,
    "expertise": ["AI", "Machine Learning"],
    "recentWork": "Neural Networks for Image Recognition",
    "collaborationStatus": "Active",
    "sharedProjects": 3
  },
  {
    "id": 2,
    "name": "Badol Hossen",
    "affiliation": "PUST CSE",
    "avatar": profileImage,
    "expertise": ["Quantum Computing", "Physics"],
    "recentWork": "Quantum Algorithms for Drug Discovery",
    "collaborationStatus": "Active",
    "sharedProjects": 2
  },
  {
    "id": 3,
    "name": "Israt Jahan",
    "affiliation": "PUST CSE",
    "avatar": israt,
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
]
;


const sampleResearchArticles = [
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

const sampleEvents = [
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

const Landing = () => {

  
const [researchArticles, setResearchArticles] = useState(() => {
    const savedArticles = JSON.parse(localStorage.getItem('researchArticles'));
    return savedArticles || sampleResearchArticles;
  });

useEffect(() => {
  const updateFromStorage = () => {
    try {
      const saved = JSON.parse(localStorage.getItem('researchArticles'));
      if (saved) setResearchArticles(prev => {
        // Remove duplicates by ID
        const merged = [...saved, ...sampleResearchArticles];
        return merged.filter((v,i,a)=>a.findIndex(t=>(t.id===v.id))===i);
      });
    } catch (error) {
      console.error("Error updating from storage:", error);
    }
  };

  // Set up event listener for storage changes
  window.addEventListener('storage', updateFromStorage);
  
  // Also check immediately in case changes happened in same tab
  updateFromStorage();

  return () => window.removeEventListener('storage', updateFromStorage);
}, []);
  // State management
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('research');
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'Dr. Smith commented on your research', time: '2h ago', read: false, type: 'comment' },
    { id: 2, text: 'New collaboration request from Prof. Johnson', time: '1d ago', read: true, type: 'collab' },
    { id: 3, text: 'Your paper got 5 new citations', time: '3d ago', read: true, type: 'citation' },
      { 
    id: 4, 
    text: 'Prof. Johnson wants to connect', 
    time: '1d ago', 
    read: false, 
    type: 'friend-request',
    senderId: 101,
    senderName: 'Prof. Johnson',
    senderAffiliation: 'MIT'
  }
  ]);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [messageContent, setMessageContent] = useState('');
  const [selectedResearcher, setSelectedResearcher] = useState(null);
  const [unreadCount, setUnreadCount] = useState(0);
  const [showCreateGroupModal, setShowCreateGroupModal] = useState(false);
  const [groupName, setGroupName] = useState('');
  const [groupDescription, setGroupDescription] = useState('');
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [groups, setGroups] = useState([]);
  const [activeGroup, setActiveGroup] = useState(null);
 
  const [groupMessages, setGroupMessages] = useState([]);
  const [groupMessage, setGroupMessage] = useState('');
  const [groupFiles, setGroupFiles] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [connections, setConnections] = useState([]); // Track connected researchers


  // Analytics data
  const [analyticsData, setAnalyticsData] = useState({
    citations: {
      total: 842,
      monthlyTrend: [45, 60, 52, 70, 85, 90, 110, 95, 80, 75, 85, 100],
      topPapers: [
        { title: "Genomic DL", citations: 142 },
        { title: "Quantum Drug", citations: 95 },
        { title: "AI in Medicine", citations: 87 }
      ],
      byField: [
        { field: "AI", citations: 320 },
        { field: "Bioinformatics", citations: 280 },
        { field: "Quantum", citations: 242 }
      ]
    },
    collaborations: {
      active: 12,
      completed: 23,
      byCountry: [
        { country: "USA", count: 8 },
        { country: "UK", count: 5 },
        { country: "Germany", count: 4 },
        { country: "Japan", count: 3 },
        { country: "Others", count: 3 }
      ],
      byInstitution: [
        { institution: "MIT", projects: 4 },
        { institution: "Stanford", projects: 3 },
        { institution: "Oxford", projects: 2 }
      ]
    },
    publications: {
      total: 34,
      byYear: [
        { year: 2020, count: 4 },
        { year: 2021, count: 8 },
        { year: 2022, count: 10 },
        { year: 2023, count: 11 }
      ],
      byType: [
        { type: "Journal", count: 22 },
        { type: "Conference", count: 9 },
        { type: "Book Chapter", count: 3 }
      ]
    },
    engagement: {
      profileViews: 1245,
      researchGateScore: 86,
      hIndex: 18,
      i10Index: 32
    }
  });

  const ToolCard = ({ tool }) => {
  const colorMap = {
    'Literature Search': 'bg-blue-50 border-blue-100 text-blue-800',
    'Reference Management': 'bg-purple-50 border-purple-100 text-purple-800',
    'Writing': 'bg-green-50 border-green-100 text-green-800',
    'Bioinformatics': 'bg-orange-50 border-orange-100 text-orange-800'
  };

  return (
    <a 
      href={tool.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border ${colorMap[tool.category]}`}
    >
      <div className="flex items-start">
        <div className="text-2xl mr-4">{tool.icon}</div>
        <div>
          <h4 className="text-lg font-bold mb-1">{tool.name}</h4>
          <p className="text-sm mb-3">{tool.description}</p>
          <span className="inline-flex items-center text-xs font-medium">
            Visit Tool
            <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </span>
        </div>
      </div>
    </a>
  );
};
const researchTools = [
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

  // Calculate unread notifications
  useEffect(() => {
    setUnreadCount(notifications.filter(n => !n.read).length);
  }, [notifications]);

  // Put this with your other useEffect hooks
useEffect(() => {
  if (activeGroup) {
    setGroupMessages(activeGroup.messages || []);
  } else {
    setGroupMessages([]);
  }
}, [activeGroup]);
  

  // Filter articles based on search query
  const filteredArticles = sampleResearchArticles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Mark notification as read
  const markAsRead = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? {...n, read: true} : n
    ));
  };

  // Group functions
  const createGroup = () => {
    if (!groupName || selectedMembers.length === 0) return;
    
    const newGroup = {
      id: Date.now(),
      name: groupName,
      description: groupDescription,
      members: selectedMembers,
      creator: "Badol Hossen",
      createdAt: new Date().toISOString(),
      messages: [],
      files: []
    };
    
    setGroups([...groups, newGroup]);
    setGroupName('');
    setGroupDescription('');
    setSelectedMembers([]);
    setShowCreateGroupModal(false);
  };

  const addGroupMessage = () => {
    if (!groupMessage || !activeGroup) return;
    
    const updatedGroups = groups.map(group => {
      if (group.id === activeGroup.id) {
        return {
          ...group,
          messages: [
            ...group.messages,
            {
              id: Date.now(),
              sender: "Badol Hossen",
              content: groupMessage,
              timestamp: new Date().toISOString()
            }
          ]
        };
      }
      return group;
    });
    
    setGroups(updatedGroups);
    setGroupMessage('');
  };
  // Put this with your other handler functions like createGroup, etc.
const handleSendMessage = () => {
  if (!groupMessage.trim() || !activeGroup) return;
  
  const newMessage = {
    id: Date.now(),
    sender: "You",
    content: groupMessage,
    timestamp: new Date().toISOString()
  };

  setGroupMessages(prev => [...prev, newMessage]);
  
  const updatedGroups = groups.map(group => {
    if (group.id === activeGroup.id) {
      return {
        ...group,
        messages: [...group.messages, newMessage]
      };
    }
    return group;
  });

  setGroups(updatedGroups);
  localStorage.setItem('groups', JSON.stringify(updatedGroups));
  setGroupMessage('');
};

  const handleFileUpload = (e) => {
    if (!activeGroup) return;
    
    const files = Array.from(e.target.files);
    const newFiles = files.map(file => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: (file.size / 1024).toFixed(2) + ' KB',
      type: file.type,
      uploadedBy: "Dr. Badol Hossen",
      uploadedAt: new Date().toISOString()
    }));
    
    const updatedGroups = groups.map(group => {
      if (group.id === activeGroup.id) {
        return {
          ...group,
          files: [...group.files, ...newFiles]
        };
      }
      return group;
    });
    
    setGroups(updatedGroups);
  };


const handleAddResearch = (newArticle) => {
  // Determine the image based on the first tag
  const firstTag = newArticle.tags?.[0] || "default";
  const articleImage = categoryImages[firstTag] || categoryImages.default;

  const articleWithId = {
    ...newArticle,
    id: Date.now(),
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' }),
    reads: 0,
    citations: 0,
    image: articleImage // Set the image based on category
  };

  setResearchArticles(prev => {
    const updatedArticles = [articleWithId, ...prev];
    localStorage.setItem('researchArticles', JSON.stringify(updatedArticles));
    return updatedArticles;
  });
};

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-xl font-bold text-blue-600">CollabResearch</h1>
           {/* In your header */}
<div className="hidden md:flex space-x-6">
  {['Research', 'Collaborators', 'Groups', 'Events', 'Tools', 'Analytics'].map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab.toLowerCase())}
      className={`font-medium ${
        activeTab === tab.toLowerCase() 
          ? 'text-blue-600' 
          : 'text-gray-700 hover:text-blue-600'
      }`}
    >
      {tab}
    </button>
  ))}
</div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search research, authors, tags..."
                className="border pl-10 pr-4 py-2 rounded-full text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            
           <div className="relative">
              <button 
                className="p-1 rounded-full hover:bg-gray-100 relative"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                </svg>
                {unreadCount > 0 && (
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                )}
              </button>
              
              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-200">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <p className="text-sm font-medium text-gray-700">Notifications</p>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {notifications.length === 0 ? (
                      <p className="px-4 py-3 text-sm text-gray-500">No notifications</p>
                    ) : (
                      notifications.map(notification => (
                        <div 
                          key={notification.id} 
                          className={`px-4 py-3 hover:bg-gray-50 cursor-pointer ${!notification.read ? 'bg-blue-50' : ''}`}
                          onClick={() => markAsRead(notification.id)}
                        >
                          <p className="text-sm text-gray-800">{notification.text}</p>
                          <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                        </div>
                      ))
                    )}
                  </div>
                  <div className="px-4 py-2 border-t border-gray-200 text-center">
                    <Link 
                      to="/notifications" 
                      className="text-xs text-blue-600 hover:text-blue-800"
                      onClick={() => setShowNotifications(false)}
                    >
                      View all notifications
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/profile" className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 pb-20">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-6 mb-8 text-white relative overflow-hidden">
          <div className="relative">
            <h2 className="text-2xl font-bold mb-2">Welcome back, Badol Hossen!</h2>
            <p className="opacity-90">You have {unreadCount} new notifications and {sampleResearchArticles.length} research updates</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex space-x-8">
            {['Research', 'Collaborators', 'Groups', 'Events', 'Tools', 'Analytics'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === tab.toLowerCase() ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'research' && (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {researchArticles
      .sort((a, b) => new Date(b.date) - new Date(a.date)) // Newest first
      .map(article => (
        <ResearchCard key={`${article.id}-${article.title}`} article={article} />
      ))}
  </div>
)}

        {activeTab === 'collaborators' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sampleResearchers.map(researcher => (
            <CollaboratorCard 
              key={researcher.id} 
              researcher={researcher}
              connections={connections}
              setConnections={setConnections}
              onMessage={() => {
                setSelectedResearcher(researcher.id);
                setShowMessageModal(true);
              }}
            />
          ))}
          </div>
        )}

        {activeTab === 'groups' && (
          <div className="flex flex-col md:flex-row gap-6">
            {/* Groups List */}
            <div className="w-full md:w-1/3 bg-white rounded-xl shadow-sm p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Research Groups</h3>
                <button 
                  onClick={() => setShowCreateGroupModal(true)}
                  className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700"
                >
                  Create Group
                </button>
              </div>
              
              <div className="space-y-3">
                {groups.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">No groups yet. Create your first research group!</p>
                ) : (
                  groups.map(group => (
                    <div 
                      key={group.id}
                      onClick={() => setActiveGroup(group)}
                      className={`p-3 rounded-lg cursor-pointer ${activeGroup?.id === group.id ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-50'}`}
                    >
                      <h4 className="font-medium">{group.name}</h4>
                      <p className="text-sm text-gray-500 truncate">{group.description}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-gray-500">{group.members.length} members</span>
                        <span className="text-xs text-gray-500">
                          {new Date(group.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
            
            {/* Group Chat */}
            {activeGroup ? (
              <div className="flex-1 bg-white rounded-xl shadow-sm p-4 flex flex-col">
                <div className="border-b pb-3 mb-3">
                  <h3 className="text-lg font-semibold">{activeGroup.name}</h3>
                  <p className="text-sm text-gray-500">{activeGroup.description}</p>
                  
                  <div className="mt-2 flex flex-wrap gap-2">
                    {activeGroup.members.map((memberId) => {
                      const member = sampleResearchers.find(r => r.id === memberId);
                      return member ? (
                        <span key={memberId} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                          {member.name}
                        </span>
                      ) : null;
                    })}
                  </div>
                </div> 
                
                {/* Messages */}
                <div className="flex-1 overflow-y-auto mb-4 px-2">
  {groupMessages.length === 0 ? (
    <div className="h-full flex items-center justify-center">
      <p className="text-gray-400 text-center py-8">
        No messages yet. Start the conversation!
      </p>
    </div>
  ) : (
    <div className="space-y-2">
      {groupMessages.map((message) => (
        <div 
          key={message.id} 
          className={`flex ${message.sender === "You" ? 'justify-end' : 'justify-start'}`}
        >
          <div className={`max-w-[80%] p-3 rounded-lg relative ${
            message.sender === "You"
              ? 'bg-blue-100 rounded-tr-none'
              : 'bg-gray-100 rounded-tl-none'
          }`}>
            {message.sender !== "You" && (
              <p className="font-medium text-sm text-blue-600">
                {message.sender}
              </p>
            )}
            <p className="text-gray-800 whitespace-pre-wrap break-words">
              {message.content}
            </p>
            <p className="text-xs text-gray-500 mt-1 text-right">
              {new Date(message.timestamp).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>
        </div>
      ))}
    </div>
  )}
</div>
                
                {/* Message Input */}
                <div className="border-t pt-3">
  <textarea
    rows="2"
    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 mb-2"
    placeholder="Type your message..."
    value={groupMessage}
    onChange={(e) => setGroupMessage(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSendMessage();
      }
    }}
  ></textarea>
  <div className="flex justify-between items-center">
    <div>
      <input 
        type="file" 
        id="group-file-upload"
        className="hidden"
        onChange={handleFileUpload}
        multiple
        accept=".pdf,.doc,.docx,.ppt,.pptx,.jpg,.jpeg,.png"
      />
      <label 
        htmlFor="group-file-upload"
        className="text-gray-500 hover:text-gray-700 cursor-pointer p-2"
        title="Upload files"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
        </svg>
      </label>
    </div>
    <button
      onClick={handleSendMessage} 
      disabled={!groupMessage.trim()}
      className={`px-4 py-2 rounded-md ${
        !groupMessage.trim() 
          ? 'bg-blue-400 cursor-not-allowed' 
          : 'bg-blue-600 hover:bg-blue-700'
      } text-white transition-colors`}
    >
      Send
    </button>
  </div>
</div>
                
                {/* Files Section */}
                {activeGroup.files.length > 0 && (
                  <div className="mt-6 border-t pt-4">
                    <h4 className="font-medium mb-3">Shared Files</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeGroup.files.map(file => (
                        <div key={file.id} className="p-3 border rounded-lg hover:bg-gray-50">
                          <div className="flex items-center">
                            <div className="bg-blue-100 p-2 rounded-lg mr-3">
                              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 01-2-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div>
                              <p className="font-medium text-sm">{file.name}</p>
                              <p className="text-xs text-gray-500">{file.size} • {file.uploadedBy}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex-1 bg-white rounded-xl shadow-sm p-8 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">No group selected</h3>
                  <p className="mt-1 text-gray-500">Select a group from the list or create a new one</p>
                  <button
                    onClick={() => setShowCreateGroupModal(true)}
                    className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  >
                    Create Group
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'events' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sampleEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}

        
{activeTab === 'tools' && (
  <div className="space-y-8">
    {/* Search and Filter Section */}
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
      <div className="relative w-full md:w-96">
        <input
          type="text"
          placeholder="Search tools..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
      <div className="flex flex-wrap gap-2">
        <button className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
          All Categories
        </button>
        {[
          "Literature Search",
          "Writing",
          "Bioinformatics",
          "Machine Learning",
          "Publications"
        ].map((category) => (
          <button 
            key={category}
            className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200"
          >
            {category}
          </button>
        ))}
      </div>
    </div>

    {/* Dynamically render ALL categories */}
    <div className="space-y-12">
      {Array.from(new Set(researchTools.map(tool => tool.category))).map((category) => (
        <div key={category}>
          <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
            {category}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchTools
              .filter(tool => tool.category === category)
              .map(tool => (
                <ToolCard key={tool.name} tool={tool} />
              ))}
          </div>
        </div>
      ))}
    </div>
  </div>
)}
        

        {activeTab === 'analytics' && (
          <div className="space-y-6">
            {/* Research Impact Summary */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <StatCard 
                title="Total Citations" 
                value={analyticsData.citations.total} 
                icon={<CitationIcon />}
                trend="up"
                percentage="12%"
              />
              <StatCard 
                title="H-Index" 
                value={analyticsData.engagement.hIndex} 
                icon={<HIndexIcon />}
                trend="up"
                percentage="5%"
              />
              <StatCard 
                title="Active Collaborations" 
                value={analyticsData.collaborations.active} 
                icon={<CollaborationIcon />}
                trend="steady"
              />
              <StatCard 
                title="Publications" 
                value={analyticsData.publications.total} 
                icon={<PublicationIcon />}
                trend="up"
                percentage="8%"
              />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Citation Trend Chart */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Citation Trend (Last 12 Months)</h3>
                <LineChart data={analyticsData.citations.monthlyTrend} />
                <div className="mt-4 flex justify-between text-sm text-gray-600">
                  <span>Jan</span>
                  <span>Dec</span>
                </div>
              </div>

              {/* Publications by Type */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Publications by Type</h3>
                <DonutChart data={analyticsData.publications.byType} />
              </div>
            </div>

            {/* Detailed Analytics */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Top Cited Papers */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Top Cited Papers</h3>
                <div className="space-y-4">
                  {analyticsData.citations.topPapers.map((paper, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-800 rounded-full mr-3">
                          {index + 1}
                        </span>
                        <span className="font-medium">{paper.title}</span>
                      </div>
                      <span className="text-gray-600">{paper.citations} citations</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Collaborations by Country */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Collaborations by Country</h3>
                <BarChart data={analyticsData.collaborations.byCountry} />
              </div>

              {/* Citations by Field */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Citations by Research Field</h3>
                <HorizontalBarChart data={analyticsData.citations.byField} />
              </div>
            </div>

            {/* Publication Timeline */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Publication Timeline</h3>
              <TimelineChart data={analyticsData.publications.byYear} />
            </div>
          </div>
        )}
      </main>

      {/* Create Group Modal */}
      {showCreateGroupModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30 p-4">
          <div className="bg-white rounded-xl w-full max-w-md">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">Create New Group</h3>
                <button 
                  onClick={() => setShowCreateGroupModal(false)}
                  className="text-gray-400 hover:text-gray-500"
                  aria-label="Close"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Group Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g. Quantum Computing Research"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    rows="3"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Brief description of the group's purpose"
                    value={groupDescription}
                    onChange={(e) => setGroupDescription(e.target.value)}
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Add Members</label>
                  <div className="space-y-2">
                    {sampleResearchers.map(researcher => (
                      <div key={researcher.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`member-${researcher.id}`}
                          checked={selectedMembers.includes(researcher.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedMembers([...selectedMembers, researcher.id]);
                            } else {
                              setSelectedMembers(selectedMembers.filter(id => id !== researcher.id));
                            }
                          }}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor={`member-${researcher.id}`} className="ml-2 flex items-center">
                          <img 
                            src={researcher.avatar} 
                            alt={researcher.name} 
                            className="w-8 h-8 rounded-full mr-2"
                          />
                          <span>{researcher.name} ({researcher.affiliation})</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    onClick={() => setShowCreateGroupModal(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={createGroup}
                    disabled={!groupName || selectedMembers.length === 0}
                    className={`px-4 py-2 rounded-md text-sm font-medium text-white ${!groupName || selectedMembers.length === 0 ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
                  >
                    Create Group
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      

      {/* Message Modal */}
      <MessageModal 
        show={showMessageModal}
        onClose={() => {
          setShowMessageModal(false);
          setSelectedResearcher(null);
        }}
        researchers={sampleResearchers}
        selectedResearcher={selectedResearcher}
        onSelectResearcher={setSelectedResearcher}
        messageContent={messageContent}
        onMessageChange={setMessageContent}
        onSend={() => {
          console.log(`Message sent to ${selectedResearcher}: ${messageContent}`);
          setShowMessageModal(false);
          setMessageContent('');
          setSelectedResearcher(null);
        }}
      />

      {/* Footer */}
      <Footer />

      {/*<button 
  onClick={() => {
    localStorage.removeItem('researchArticles');
    window.location.reload();
  }}
  className="fixed bottom-20 right-6 bg-red-500 text-white p-2 rounded-full z-20"
>
  Reset Storage
</button> */}

      {/* Floating Action Buttons */}
        <div className="fixed right-6 bottom-6 z-20 flex flex-col space-y-3">
          <button 
            onClick={() => setShowMessageModal(true)}
            className="w-14 h-14 bg-blue-600 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-blue-700 transition-transform hover:scale-110"
            title="New Message"
            aria-label="New Message"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
          
          <Link 
  to={{
    pathname: "/add-research",
    state: { onAddResearch: handleAddResearch }
  }}
  className="w-14 h-14 bg-indigo-600 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-indigo-700 transition-transform hover:scale-110"
  title="Add Research"
  aria-label="Add Research"
>
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
</Link>
        </div>
    </div>
  );
};

// Componentized parts
const ResearchCard = ({ article }) => {
  const imageUrl = article.image || "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
          }}
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex flex-wrap gap-2 mb-3">
          {(article.tags || ['Uncategorized']).map(tag => (
            <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{article.title}</h3>
        <p className="text-gray-600 mb-3">{article.authors || "Unknown authors"}</p>
        
        {/* Updated: Show description if available, otherwise fall back to abstract */}
        <p className="text-sm text-gray-500 mb-4 line-clamp-3 flex-grow">
          {article.description || article.abstract || "No description available"}
        </p>
        
        <div className="mt-auto">
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>{article.journal || "Unpublished"} • {article.date || "No date"}</span>
            <span>{article.reads || 0} reads • {article.citations || 0} citations</span>
          </div>
          <div className="mt-4 flex space-x-3">
            <button className="text-blue-600 hover:text-blue-800 font-medium">
              Download
            </button>
            <button className="text-blue-600 hover:text-blue-800 font-medium">
              Cite
            </button>
            {(article.collaborators?.length > 0) && (
              <button className="text-blue-600 hover:text-blue-800 font-medium">
                Collaborators ({article.collaborators.length})
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const CollaboratorCard = ({ researcher, onMessage }) => {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    setIsConnected(!isConnected);
    // In a real app, you would also update the connections state here
    console.log(isConnected ? 'Disconnected from' : 'Connected to', researcher.name);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-4 mb-4">
        <img 
          src={researcher.avatar} 
          alt={researcher.name} 
          className="w-16 h-16 rounded-full object-cover border-2 border-blue-100"
        />
        <div>
          <h3 className="font-medium text-gray-900">{researcher.name}</h3>
          <p className="text-sm text-gray-500">{researcher.affiliation}</p>
        </div>
      </div>
      <div className="mb-3">
        <p className="text-sm text-gray-600 mb-1">Recent work:</p>
        <p className="text-sm font-medium text-gray-800">{researcher.recentWork}</p>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {researcher.expertise.map(skill => (
          <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
            {skill}
          </span>
        ))}
      </div>
      <div className="flex space-x-2">
        <button 
          onClick={onMessage}
          className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700"
        >
          Message
        </button>
        <button
          onClick={handleConnect}
          className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium ${
            isConnected
              ? 'bg-green-500 text-white'
              : 'border border-blue-600 text-blue-600 hover:bg-blue-50'
          }`}
        >
          {isConnected ? 'Connected ✓' : 'Connect'}
        </button>
      </div>
    </div>
  );
};

const EventCard = ({ event }) => (
  <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
    <div className="h-48 overflow-hidden">
      <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
          Upcoming
        </span>
      </div>
      <p className="text-gray-600 mb-3">{event.organizer}</p>
      <div className="flex items-center text-sm text-gray-500 mb-3">
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        {new Date(event.date).toLocaleDateString()} • {event.time}
      </div>
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        {event.location}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-wrap gap-2">
          {event.tags.map(tag => (
            <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
              {tag}
            </span>
          ))}
        </div>
        <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
          Register
        </button>
      </div>
    </div>
  </div>
);

const StatCard = ({ title, value, icon, trend, percentage }) => {
  const trendColor = {
    up: 'text-green-600',
    down: 'text-red-600',
    steady: 'text-yellow-600'
  };

  const trendIcon = {
    up: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    ),
    down: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    ),
    steady: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5h7m-7 7h7m-7 7h7M4 5h7m-7 7h7m-7 7h7" />
      </svg>
    )
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
          {icon}
        </div>
      </div>
      {trend && (
        <div className={`flex items-center mt-3 text-sm ${trendColor[trend]}`}>
          {trendIcon[trend]}
          {percentage && <span className="ml-1">{percentage}</span>}
          <span className="ml-1">vs last year</span>
        </div>
      )}
    </div>
  );
};

const LineChart = ({ data }) => {
  const maxValue = Math.max(...data);
  
  return (
    <div className="h-48 flex items-end space-x-1">
      {data.map((value, index) => (
        <div 
          key={index}
          className="flex-1 bg-blue-500 hover:bg-blue-600 transition-colors relative"
          style={{ height: `${(value / maxValue) * 100}%` }}
        >
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs">
            {value}
          </div>
        </div>
      ))}
    </div>
  );
};

const DonutChart = ({ data }) => {
  const total = data.reduce((sum, item) => sum + item.count, 0);
  const colors = ['#3B82F6', '#10B981', '#F59E0B'];
  
  return (
    <div className="flex items-center justify-center">
      <div className="w-48 h-48 relative">
        {/* Simplified donut chart */}
        {data.map((item, index) => {
          const percentage = (item.count / total) * 100;
          const offset = data.slice(0, index).reduce((sum, i) => sum + (i.count / total) * 100, 0);
          
          return (
            <div 
              key={index}
              className="absolute inset-0 rounded-full border-8"
              style={{
                borderColor: colors[index],
                clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 100%)`,
                transform: `rotate(${offset * 3.6}deg)`,
                borderWidth: '16px'
              }}
            />
          );
        })}
      </div>
      <div className="ml-6 space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: colors[index] }} />
            <span className="text-sm">{item.type}: {(item.count / total * 100).toFixed(0)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const BarChart = ({ data }) => {
  const maxValue = Math.max(...data.map(item => item.count));
  
  return (
    <div className="h-48 mt-6 flex items-end space-x-2">
      {data.map((item, index) => (
        <div key={index} className="flex-1 flex flex-col items-center">
          <div 
            className="w-full bg-blue-500 hover:bg-blue-600 transition-colors"
            style={{ height: `${(item.count / maxValue) * 80}%` }}
          />
          <span className="text-xs mt-1 text-gray-600">{item.count}</span>
          <span className="text-xs text-gray-500">{item.country}</span>
        </div>
      ))}
    </div>
  );
};

const HorizontalBarChart = ({ data }) => {
  const maxValue = Math.max(...data.map(item => item.citations));
  
  return (
    <div className="space-y-3 mt-4">
      {data.map((item, index) => (
        <div key={index} className="space-y-1">
          <div className="flex justify-between">
            <span className="text-sm font-medium">{item.field}</span>
            <span className="text-sm text-gray-600">{item.citations}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full" 
              style={{ width: `${(item.citations / maxValue) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const TimelineChart = ({ data }) => {
  return (
    <div className="mt-6">
      <div className="flex items-start">
        <div className="border-r-2 border-gray-200 h-32 absolute ml-4" />
        {data.map((item, index) => (
          <div key={index} className="relative pb-8 pl-8">
            {index !== data.length - 1 && (
              <div className="border-r-2 border-gray-200 h-16 absolute ml-4 top-5" />
            )}
            <div className="absolute -left-1 top-1 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
              <span className="text-white text-xs">{item.count}</span>
            </div>
            <div className="ml-6">
              <p className="text-sm font-medium">{item.year}</p>
              <p className="text-sm text-gray-500">{item.count} publications</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CitationIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
  </svg>
);

const HIndexIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const CollaborationIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const PublicationIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const MessageModal = ({ show, onClose, researchers, selectedResearcher, onSelectResearcher, messageContent, onMessageChange, onSend }) => (
  show && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30 p-4">
      <div className="bg-white rounded-xl w-full max-w-md">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">New Message</h3>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
              aria-label="Close"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
            <select
              value={selectedResearcher || ''}
              onChange={(e) => onSelectResearcher(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select researcher</option>
              {researchers.map(researcher => (
                <option key={researcher.id} value={researcher.id}>
                  {researcher.name} ({researcher.affiliation})
                </option>
              ))}
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your message here..."
              value={messageContent}
              onChange={(e) => onMessageChange(e.target.value)}
            ></textarea>
          </div>
          
          <div className="flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={onSend}
              disabled={!selectedResearcher || !messageContent}
              className={`px-4 py-2 rounded-md text-sm font-medium text-white ${!selectedResearcher || !messageContent ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  )
);

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8 px-6 sm:px-12 lg:px-18">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Main footer content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Brand column */}
        <div className="space-y-4">
          <div className="flex items-center">
            <svg className="h-8 w-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2zm0 2.8L18 10v9h-2v-6h-8v6H6v-9l6-5.2z"/>
            </svg>
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              CollabResearch
            </span>
          </div>
          <p className="text-gray-400 text-sm">
            Accelerating scientific discovery through collaborative research tools and resources.
          </p>
          <div className="flex space-x-4 pt-2">
            <a href="#" className="text-gray-400 hover:text-blue-400">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-4">Research Tools</h3>
          <ul className="space-y-3">
            <li><Link to="/tools" className="text-gray-400 hover:text-white transition-colors">Literature Search</Link></li>
            <li><Link to="/tools" className="text-gray-400 hover:text-white transition-colors">Reference Management</Link></li>
            <li><Link to="/tools" className="text-gray-400 hover:text-white transition-colors">Data Analysis</Link></li>
            <li><Link to="/tools" className="text-gray-400 hover:text-white transition-colors">Collaboration</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-4">Support</h3>
          <ul className="space-y-3">
            <li><Link to="/help" className="text-gray-400 hover:text-white transition-colors">Documentation</Link></li>
            <li><Link to="/tutorials" className="text-gray-400 hover:text-white transition-colors">Video Tutorials</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Researchers</Link></li>
            <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-4">Stay Updated</h3>
          <p className="text-gray-400 mb-4 text-sm">
            Subscribe to our newsletter for the latest research tools and collaboration opportunities.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 text-white-800 border border-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-r-lg font-medium transition-all">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>

      {/* Copyright and legal */}
      <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} CollabResearch. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="/privacy" className="text-gray-500 hover:text-gray-300 text-sm">Privacy Policy</Link>
          <Link to="/terms" className="text-gray-500 hover:text-gray-300 text-sm">Terms of Service</Link>
          <Link to="/cookies" className="text-gray-500 hover:text-gray-300 text-sm">Cookie Policy</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Landing;