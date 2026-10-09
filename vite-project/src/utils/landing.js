

import profileImage from "../assets/Images/Team1.jpg";
import mahadi from "../assets/Images/mahaadi.jpg";
import israt from "../assets/Images/Israt.jpg";
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