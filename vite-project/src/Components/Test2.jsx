import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const features = [
    {
      icon: "👥",
      title: "Collaborate Easily",
      description: "Connect with researchers across disciplines and institutions"
    },
    {
      icon: "📈",
      title: "Track Progress",
      description: "Visualize your research milestones and achievements"
    },
    {
      icon: "🛠️",
      title: "Build Teams",
      description: "Form ideal research groups with skill matching"
    },
    {
      icon: "💬",
      title: "Group Chat",
      description: "Real-time communication with your research teams"
    },
    {
      icon: "🎓",
      title: "Premium Courses",
      description: "Access exclusive research methodology courses"
    },
    {
      icon: "📊",
      title: "Analytics",
      description: "Get insights on your research impact"
    }
  ];

  const testimonials = [
    {
      quote: "CollabResearch helped me find the perfect team for my bioinformatics project",
      author: "Dr. Sarah Khan, PUST"
    },
    {
      quote: "Our publication quality improved significantly using the collaboration tools",
      author: "Prof. Ahmed Rahman, DU"
    }
  ];

  const newsItems = [
    "New: Collaborative writing tool now available!",
    "Research grant opportunities updated weekly",
    "Join our webinar on effective academic collaboration - July 15th",
    "500+ new researchers joined this month",
    "Version 2.3 released with enhanced analytics"
  ];

  const researchTools = [
    {
      icon: "🔍",
      title: "Literature Review Assistant",
      description: "AI-powered tool to find relevant papers and summarize key findings",
      color: "bg-purple-100 text-purple-800"
    },
    {
      icon: "📝",
      title: "Citation Generator",
      description: "Automatically format references in APA, MLA, Chicago styles",
      color: "bg-blue-100 text-blue-800"
    },
    {
      icon: "📊",
      title: "Data Analysis Wizard",
      description: "Step-by-step guidance for statistical analysis methods",
      color: "bg-green-100 text-green-800"
    },
    {
      icon: "✍️",
      title: "Thesis Structure Helper",
      description: "Templates and outlines for research papers and dissertations",
      color: "bg-yellow-100 text-yellow-800"
    }
  ];

  const courses = [
    {
      title: "Advanced Research Methodology",
      instructor: "Prof. A. Rahman",
      price: "৳1,500",
      duration: "6 weeks",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Scientific Writing Masterclass",
      instructor: "Dr. S. Ahmed",
      price: "৳1,200",
      duration: "4 weeks",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Data Visualization Techniques",
      instructor: "Dr. M. Khan",
      price: "৳1,800",
      duration: "8 weeks",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const faqs = [
    {
      question: "How do I find collaborators for my research?",
      answer: "Use our advanced search filters to find researchers by discipline, skills, or publications. You can also post collaboration requests in our forum."
    },
    {
      question: "Is CollabResearch free to use?",
      answer: "We offer a free basic plan with essential features. Premium plans with advanced tools are available for a small subscription fee."
    },
    {
      question: "How can I ensure the quality of collaborators?",
      answer: "All members are verified academics. You can check their publication history, institutional affiliation, and ratings from previous collaborations."
    },
    {
      question: "Can I use this platform for student projects?",
      answer: "Absolutely! Many students use our platform to form project teams and find mentors for their academic work."
    },
    {
      question: "How secure is my research data on the platform?",
      answer: "We use enterprise-grade encryption and follow strict data protection protocols. You control what information you share and with whom."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
            <header className="bg-white shadow-md">
              <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
                <h1 className="text-2xl font-bold text-blue-600">CollabResearch</h1>
                <nav className="space-x-4 hidden md:flex">
                  <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                  <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
                  <Link to="/research" className="text-gray-700 hover:text-blue-600">Research</Link>
                  <Link to="/collaborators" className="text-gray-700 hover:text-blue-600">Collaborators</Link>
                  <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
                </nav>
                <div className="md:hidden">
                  <button className="text-gray-700 hover:text-blue-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </header>
      
            {/* Hero Section with Background Image */}
            <section className="relative py-20 px-4 bg-blue-50">
              {/* Background Image with Opacity */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src="/src/assets/images/Varsity.jpg" // Add your image URL here
                  alt="Research collaboration background" 
                  className="w-full h-full object-cover opacity-20"
                />
              </div>
              
              <div className="relative z-10 max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                  Connect. <span className="text-blue-600">Collaborate.</span> Create.
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
                  Join thousands of researchers sharing publications, forming teams, and collaborating on groundbreaking projects
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link 
                    to="/register" 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition duration-300"
                  >
                    Get Started Free
                  </Link>
                  <button 
        onClick={() => {
          const element = document.getElementById('features-section');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-full transition duration-300"
      >
        Explore Features
      </button>
                </div>
              </div>
            </section>
      
            {/* News Ticker */}
            <div className="bg-blue-600 text-white py-3 overflow-hidden">
              <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center">
                  <span className="font-bold mr-4 whitespace-nowrap">Latest News:</span>
                  <div className="relative overflow-hidden w-full">
                    <div className="animate-marquee whitespace-nowrap">
                      {newsItems.map((item, index) => (
                        <span key={index} className="mx-8 inline-block">
                          {item} •
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
            {/* Platform Highlights */}
            <section id="features-section" className="py-16 px-4 bg-gray-50"> 
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Researchers Choose Us</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Comprehensive tools designed specifically for academic collaboration
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="text-4xl mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
      
            {/* Collaboration Tools Section */}
            <section className="py-20 px-4 bg-white">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  <div className="lg:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Powerful Collaboration Features
                    </h2>
                    <ul className="space-y-6">
                      <li className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-full mr-4">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium text-lg mb-1">Document Collaboration</h3>
                          <p className="text-gray-600">Real-time co-authoring with version history and comments</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-full mr-4">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium text-lg mb-1">Progress Tracking</h3>
                          <p className="text-gray-600">Visual timelines and automated milestone reminders</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-full mr-4">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium text-lg mb-1">Team Formation</h3>
                          <p className="text-gray-600">Find collaborators with complementary skills and interests</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="lg:w-1/2 bg-gray-50 p-8 rounded-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                      alt="Researchers collaborating"
                      className="rounded-lg w-full h-auto shadow-md"
                    />
                  </div>
                </div>
              </div>
            </section>

      {/* Research Help Tools Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Research Help Tools</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized tools to streamline your research process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchTools.map((tool, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${tool.color}`}
              >
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                <p className="text-current opacity-90">{tool.description}</p>
                <button className="mt-4 px-4 py-2 bg-white bg-opacity-30 rounded-full text-sm font-medium hover:bg-opacity-50 transition">
                  Explore Tool
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Courses Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium Research Courses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enhance your research skills with our expert-led courses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{course.title}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{course.rating} ★</span>
                  </div>
                  <p className="text-gray-600 mb-4">By {course.instructor}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                      <span className="text-gray-500 text-sm ml-1">/{course.duration}</span>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/courses" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              View All Courses
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section with Animation */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <p className="opacity-90">Active Researchers</p>
            </div>
            <div className="p-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold mb-2">120+</div>
              <p className="opacity-90">Institutions</p>
            </div>
            <div className="p-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="text-4xl font-bold mb-2">2,500+</div>
              <p className="opacity-90">Collaborations</p>
            </div>
            <div className="p-6 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <div className="text-4xl font-bold mb-2">95%</div>
              <p className="opacity-90">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about CollabResearch
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  className={`w-full px-6 py-4 text-left flex justify-between items-center ${activeAccordion === index ? 'bg-blue-50' : 'bg-white'}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  <svg 
                    className={`w-5 h-5 text-blue-600 transform transition-transform ${activeAccordion === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeAccordion === index && (
                  <div className="px-6 pb-4 text-gray-600 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Contact Our Support
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
            <section className="py-16 px-4 bg-gray-50">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Trusted by Academic Community</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                      <svg className="w-8 h-8 text-blue-500 mb-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <p className="text-lg text-gray-700 mb-4">"{testimonial.quote}"</p>
                      <p className="font-medium text-gray-900">{testimonial.author}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
      
            {/* Final CTA */}
            <section className="py-20 px-4 bg-blue-600 text-white">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your Research?</h2>
                <p className="text-xl mb-8 opacity-90">
                  Join our growing community of researchers and academics
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link 
                    to="/register" 
                    className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-full"
                  >
                    Create Free Account
                  </Link>
                  <Link 
                    to="/login" 
                    className="border-2 border-white text-white hover:bg-blue-700 font-medium py-3 px-8 rounded-full"
                  >
                    Existing User Login
                  </Link>
                </div>
              </div>
            </section>
      
            {/* Footer */}
            <footer className="bg-gray-800 text-gray-300 py-12 px-4">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="mb-6 md:mb-0">
                    <h3 className="text-white text-xl font-bold mb-2">CollabResearch</h3>
                    <p>Pabna University of Science and Technology</p>
                  </div>
                  <div className="flex space-x-6">
                    <Link to="/about" className="hover:text-white">About</Link>
                    <Link to="/contact" className="hover:text-white">Contact</Link>
                    <Link to="/privacy" className="hover:text-white">Privacy</Link>
                    <Link to="/terms" className="hover:text-white">Terms</Link>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
                  <p>© 2025 CollabResearch. All rights reserved.</p>
                </div>
              </div>
            </footer>

      {/* Additional CSS for animations */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        .animate-fade-in {
          animation: fade-in-up 0.3s ease-out forwards;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;