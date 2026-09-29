
import { useState } from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };


const faqs = [
  {
    question: "What is CollabResearch?",
    answer: (
      <div className="space-y-2">
        <p>CollabResearch is a research collaboration platform connecting students, teachers, and global scientists. Our platform provides:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Best collaborator matching</li>
          <li>Real-time research impact tracking</li>
          <li>Access to 160,000+ publications</li>
          <li>End-to-end project management tools</li>
          <li>Localized Bengali language support</li>
        </ul>
      </div>
    )
  },
  {
    question: "How is this different from ResearchGate/Academia.edu?",
    answer: (
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left border-b">Feature</th>
              <th className="px-4 py-2 text-left border-b">CollabResearch</th>
              <th className="px-4 py-2 text-left border-b">Others</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border-b">Bangladesh Focus</td>
              <td className="px-4 py-2 border-b font-medium">✓ Local resources, Bengali support</td>
              <td className="px-4 py-2 border-b text-gray-500">Global focus</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">Task Management</td>
              <td className="px-4 py-2 border-b font-medium">✓ Built-in timelines, supervisor tools</td>
              <td className="px-4 py-2 border-b text-gray-500">Limited</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">AI Tools</td>
              <td className="px-4 py-2 border-b font-medium">✓ Paper drafting, citation suggestions</td>
              <td className="px-4 py-2 border-b text-gray-500">Rare</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
  {
    question: "Is there a cost to join?",
    answer: (
      <div className="grid md:grid-cols-2 gap-4">
        <div className="border rounded-lg p-4 bg-blue-50">
          <h4 className="font-bold text-blue-700">Free Tier</h4>
          <ul className="mt-2 space-y-1">
            <li>✓ Access to publications</li>
            <li>✓ Basic collaboration tools</li>
            <li>✓ Public profile</li>
          </ul>
        </div>
        <div className="border rounded-lg p-4 bg-purple-50">
          <h4 className="font-bold text-purple-700">Premium (৳1,499/month)</h4>
          <ul className="mt-2 space-y-1">
            <li>✓ Advanced analytics</li>
            <li>✓ Exclusive courses</li>
            <li>✓ 1-on-1 mentor access</li>
            <li>✓ Private workspaces</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    question: "How do I find research partners?",
    answer: (
      <div className="space-y-3">
        <div className="flex items-start">
          <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</span>
          <p>Use our <strong>"Match Researcher"</strong> tool that suggests partners based on your field, skills, and publication history</p>
        </div>
        <div className="flex items-start">
          <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</span>
          <p>Join our <strong>50+ topic-specific groups</strong> (e.g., "Bioinformatics Dhaka", "AI Researchers BD")</p>
        </div>
      </div>
    )
  },
  {
    question: "How do I track my research impact?",
    answer: (
      <div className="space-y-2">
        <p>Your personalized dashboard provides:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-gray-50 p-3 rounded-lg">
            <span className="font-medium">📊 Real-time Metrics</span>
            <p className="text-sm">Citations, h-index, i10-index</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <span className="font-medium">🌍 Geographic Reach</span>
            <p className="text-sm">See where your work is being cited</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <span className="font-medium">🔔 Smart Alerts</span>
            <p className="text-sm">Get notified about new citations</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <span className="font-medium">📈 Trend Analysis</span>
            <p className="text-sm">6-month impact projections</p>
          </div>
        </div>
      </div>
    )
  },
  {
    question: "What if I'm new to research?",
    answer: (
      <div className="space-y-3">
        <div className="flex items-start">
          <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">📘</span>
          <div>
            <h4 className="font-medium">Beginner's Guide</h4>
            <p className="text-sm">Available in both Bangla and English</p>
          </div>
        </div>
        <div className="flex items-start">
          <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">🎓</span>
          <div>
            <h4 className="font-medium">Micro-courses</h4>
            <p className="text-sm">"How to Write Your First Paper", "Research Methodology 101"</p>
          </div>
        </div>
        <div className="flex items-start">
          <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">👨‍🏫</span>
          <div>
            <h4 className="font-medium">Mentor Network</h4>
            <p className="text-sm">200+ volunteer mentors from top universities</p>
          </div>
        </div>
      </div>
    )
  },
 
      
  {
    question: "How do you verify researchers?",
    answer: (
      <div className="space-y-3">
        <div className="flex items-start">
          <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</span>
          <p><strong>Institutional email verification</strong> (.edu.bd domains)</p>
        </div>
        <div className="flex items-start">
          <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</span>
          <p><strong>ORCID/Google Scholar</strong> profile linking with publication verification</p>
        </div>
        <div className="flex items-start">
          <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">3</span>
          <p><strong>Manual verification</strong> for senior researchers (Professor level and above)</p>
        </div>
      </div>
    )
  },
  
  
  {
    question: "Do you offer mobile access?",
    answer: (
      <div className="space-y-3">
        <div className="flex items-center">
          <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          <div>
            <h4 className="font-medium">Mobile Web</h4>
            <p className="text-sm">Full-featured responsive website</p>
          </div>
        </div>
        <div className="flex items-center">
          <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          <div>
            <h4 className="font-medium">Android App</h4>
            <p className="text-sm">Coming Soon</p>
          </div>
        </div>
        <div className="flex items-center">
          <svg className="w-6 h-6 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          <div>
            <h4 className="font-medium">iOS App</h4>
            <p className="text-sm">Coming Soon</p>
          </div>
        </div>
      </div>
    )
  },
  {
    question: "How do you handle intellectual property?",
    answer: (
      <div className="space-y-3">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong>Important:</strong> CollabResearch does not claim ownership of your research. We recommend establishing clear collaboration agreements with partners.
              </p>
            </div>
          </div>
        </div>
        <ul className="list-disc pl-5 space-y-1">
          <li>All uploaded content remains your property</li>
          <li>Private projects are never displayed publicly</li>
          <li>Downloadable collaboration templates available</li>
          <li>Option to patent through our partner legal services</li>
        </ul>
      </div>
    )
  },
  {
    question: "What support options are available?",
    answer: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border rounded-lg p-4">
          <h4 className="font-bold text-blue-600">📞 Live Support</h4>
          <p className="mt-1 text-sm">9AM-5PM (GMT+6) via chat/email</p>
          <p className="text-xs text-gray-500 mt-2">Response time:  30 minutes</p>
        </div>
        <div className="border rounded-lg p-4">
          <h4 className="font-bold text-purple-600">📚 Knowledge Base</h4>
          <p className="mt-1 text-sm">200+ help articles and video tutorials</p>
          <p className="text-xs text-gray-500 mt-2">Available 24/7</p>
        </div>
        <div className="border rounded-lg p-4">
          <h4 className="font-bold text-green-600">👨‍💻 Premium Support</h4>
          <p className="mt-1 text-sm">Dedicated account manager</p>
          <p className="text-xs text-gray-500 mt-2">For institutional partners</p>
        </div>
        <div className="border rounded-lg p-4">
          <h4 className="font-bold text-orange-600">🤝 Community Forum</h4>
          <p className="mt-1 text-sm">Get help from other researchers</p>
          <p className="text-xs text-gray-500 mt-2">5,000+ active members</p>
        </div>
      </div>
    )
  }
];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section with Background Image */}
      <section className="relative py-20 px-4 bg-blue-50">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="../assets/Images/Research.jpg" 
            alt="background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Connect. <span className="text-blue-600">Collaborate</span> Create
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


      {/* Collaboration Tools Section 1 - Research Networking */}
<section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row items-center gap-12">
      <div className="lg:w-1/2 space-y-8" data-aos="fade-right">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Build Your Research Network
        </h2>
        <ul className="space-y-8">
          <li className="flex items-start group">
            <div className="bg-white p-3 rounded-xl mr-6 shadow-md group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div className="group-hover:translate-x-2 transition-transform duration-300">
              <h3 className="font-semibold text-xl mb-2 text-gray-800">Smart Matching</h3>
              <p className="text-gray-600">You can connects with ideal collaborators based on research interests, expertise, and publication history.</p>
            </div>
          </li>
          <li className="flex items-start group">
            <div className="bg-white p-3 rounded-xl mr-6 shadow-md group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="group-hover:translate-x-2 transition-transform duration-300">
              <h3 className="font-semibold text-xl mb-2 text-gray-800">Direct Communication</h3>
              <p className="text-gray-600">Integrated messaging and video call features to easily connect with potential collaborators worldwide.</p>
            </div>
          </li>
          <li className="flex items-start group">
            <div className="bg-white p-3 rounded-xl mr-6 shadow-md group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="group-hover:translate-x-2 transition-transform duration-300">
              <h3 className="font-semibold text-xl mb-2 text-gray-800">Verified Credentials</h3>
              <p className="text-gray-600">Academic verification helps confirm that you're working with real researchers and trusted institutions.</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="lg:w-1/2" data-aos="fade-left">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Researchers networking"
            className="rounded-xl w-full h-auto shadow-2xl transform hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg w-2/3">
            <h4 className="font-bold text-blue-600 mb-1">Join 5,000+ Researchers</h4>
            <p className="text-sm text-gray-600">Expand your academic network today</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Collaboration Tools Section 2 - Project Management */}
<section className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
      <div className="lg:w-1/2 space-y-8" data-aos="fade-left">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Streamlined Project Management
        </h2>
        <ul className="space-y-8">
          <li className="flex items-start group">
            <div className="bg-white p-3 rounded-xl mr-6 shadow-md group-hover:bg-indigo-100 group-hover:scale-110 transition-all duration-300">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <div className="group-hover:translate-x-2 transition-transform duration-300">
              <h3 className="font-semibold text-xl mb-2 text-gray-800">Task Automation</h3>
              <p className="text-gray-600">Automate repetitive tasks like literature reviews and data collection with our smart tools.</p>
            </div>
          </li>
          <li className="flex items-start group">
            <div className="bg-white p-3 rounded-xl mr-6 shadow-md group-hover:bg-indigo-100 group-hover:scale-110 transition-all duration-300">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="group-hover:translate-x-2 transition-transform duration-300">
              <h3 className="font-semibold text-xl mb-2 text-gray-800">Milestone Tracking</h3>
              <p className="text-gray-600">Visual timelines keep your project on schedule with automated deadline reminders.</p>
            </div>
          </li>
          <li className="flex items-start group">
            <div className="bg-white p-3 rounded-xl mr-6 shadow-md group-hover:bg-indigo-100 group-hover:scale-110 transition-all duration-300">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="group-hover:translate-x-2 transition-transform duration-300">
              <h3 className="font-semibold text-xl mb-2 text-gray-800">Analytics Dashboard</h3>
              <p className="text-gray-600">Real-time insights into project progress, team contributions, and research impact.</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="lg:w-1/2" data-aos="fade-right">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Project management dashboard"
            className="rounded-xl w-full h-auto shadow-2xl transform hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg w-2/3">
            <h4 className="font-bold text-indigo-600 mb-1">Increase Productivity by 40%</h4>
            <p className="text-sm text-gray-600">Our users report significant efficiency gains</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Collaboration Tools Section 3 - Publication Tools */}
<section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row items-center gap-12">
      <div className="lg:w-1/2 space-y-8" data-aos="fade-right">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Advanced Publication Tools
        </h2>
        <ul className="space-y-8">
          <li className="flex items-start group">
            <div className="bg-white p-3 rounded-xl mr-6 shadow-md group-hover:bg-purple-100 group-hover:scale-110 transition-all duration-300">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <div className="group-hover:translate-x-2 transition-transform duration-300">
              <h3 className="font-semibold text-xl mb-2 text-gray-800">Real-time Co-authoring</h3>
              <p className="text-gray-600">Multiple researchers can work simultaneously with version control and change tracking.</p>
            </div>
          </li>
          <li className="flex items-start group">
            <div className="bg-white p-3 rounded-xl mr-6 shadow-md group-hover:bg-purple-100 group-hover:scale-110 transition-all duration-300">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div className="group-hover:translate-x-2 transition-transform duration-300">
              <h3 className="font-semibold text-xl mb-2 text-gray-800">Citation Wizard</h3>
              <p className="text-gray-600">Automatically format references in any style (APA, MLA, Chicago, etc.) with one click.</p>
            </div>
          </li>
          <li className="flex items-start group">
            <div className="bg-white p-3 rounded-xl mr-6 shadow-md group-hover:bg-purple-100 group-hover:scale-110 transition-all duration-300">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="group-hover:translate-x-2 transition-transform duration-300">
              <h3 className="font-semibold text-xl mb-2 text-gray-800">Journal Matching</h3>
              <p className="text-gray-600">Our algorithm suggests the best journals for your research based on content and impact factor.</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="lg:w-1/2" data-aos="fade-left">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Publication tools interface"
            className="rounded-xl w-full h-auto shadow-2xl transform hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg w-2/3">
            <h4 className="font-bold text-purple-600 mb-1">Accepted by Top Journals</h4>
            <p className="text-sm text-gray-600">Increase your publication success rate</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Research Tools Section */}
<section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
        Essential Research Tools
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Curated collection of powerful tools used by researchers worldwide
      </p>
    </div>

    {/* Tools Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 auto-rows-[minmax(300px,auto)]">
      {/* Google Scholar - Blue */}
      <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" 
         className="bg-blue-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-blue-100">
        <div className="flex items-center mb-4">
          <img src="../src/assets/Images/Google schooler.jpg" alt="Google Scholar" className="w-12 h-12 mr-4" />
          <h3 className="text-xl font-bold text-gray-800">Google Scholar</h3>
        </div>
        <p className="text-gray-600 mb-4">A free, comprehensive academic search engine for scholarly articles, theses, and books.</p>
        <div className="flex items-center text-blue-600 font-medium">
          Visit Tool
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </a>

      {/* NetworkAnalyst - Purple */}
      <a href="https://www.networkanalyst.ca" target="_blank" rel="noopener noreferrer" 
         className="bg-purple-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-purple-100">
        <div className="flex items-center mb-4">
          <img src="..\src\assets\Images\Network.png" alt="NetworkAnalyst" className="w-12 h-12 mr-4" />
          <h3 className="text-xl font-bold text-gray-800">NetworkAnalyst</h3>
        </div>
        <p className="text-gray-600 mb-4">A powerful web tool for analyzing and visualizing gene expression and biological networks.</p>
        <div className="flex items-center text-purple-600 font-medium">
          Visit Tool
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </a>

      {/* ResearchRabbit - Pink */}
      <a href="https://www.researchrabbit.ai" target="_blank" rel="noopener noreferrer" 
         className="bg-pink-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-pink-100">
        <div className="flex items-center mb-4">
          <img src="..\src\assets\Images\ResearchRabbit.png" alt="ResearchRabbit" className="w-12 h-12 mr-4" />
          <h3 className="text-xl font-bold text-gray-800">ResearchRabbit</h3>
        </div>
        <p className="text-gray-600 mb-4">Visualizes research paper and author connections to help you explore related literature.</p>
        <div className="flex items-center text-pink-600 font-medium">
          Visit Tool
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </a>

      {/* Zotero - Green */}
      <a href="https://www.zotero.org" target="_blank" rel="noopener noreferrer" 
         className="bg-green-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-green-100">
        <div className="flex items-center mb-4">
          <img src="..\src\assets\Images\Zotero.png" alt="Zotero" className="w-12 h-12 mr-4" />
          <h3 className="text-xl font-bold text-gray-800">Zotero</h3>
        </div>
        <p className="text-gray-600 mb-4">A reference manager that helps you collect, organize, and cite research sources easily.</p>
        <div className="flex items-center text-green-600 font-medium">
          Visit Tool
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </a>

      {/* Mendeley - Indigo */}
      <a href="https://www.mendeley.com" target="_blank" rel="noopener noreferrer" 
         className="bg-indigo-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-indigo-100">
        <div className="flex items-center mb-4">
          <img src="../src/assets/Images/Mendeley.png" alt="Mendeley" className="w-12 h-12 mr-4" />
          <h3 className="text-xl font-bold text-gray-800">Mendeley</h3>
        </div>
        <p className="text-gray-600 mb-4">An academic reference manager for organizing papers and collaborating with other researchers.

</p>
        <div className="flex items-center text-indigo-600 font-medium">
          Visit Tool
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </a>

      {/* Grammarly - Teal */}
      <a href="https://www.grammarly.com" target="_blank" rel="noopener noreferrer" 
         className="bg-teal-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-teal-100">
        <div className="flex items-center mb-4">
          <img src="..\src\assets\Images\grammarly.JPG" alt="Grammarly" className="w-12 h-12 mr-4" />
          <h3 className="text-xl font-bold text-gray-800">Grammarly</h3>
        </div>
        <p className="text-gray-600 mb-4">An AI-powered writing assistant for improving grammar, clarity, and tone in research writing.</p>
        <div className="flex items-center text-teal-600 font-medium">
          Visit Tool
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </a>

      {/* QuillBot - Amber */}
      <a href="https://www.quillbot.com" target="_blank" rel="noopener noreferrer" 
         className="bg-amber-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-amber-100">
        <div className="flex items-center mb-4">
          <img src="..\src\assets\Images\quillbot.png" alt="QuillBot" className="w-12 h-12 mr-4" />
          <h3 className="text-xl font-bold text-gray-800">QuillBot</h3>
        </div>
        <p className="text-gray-600 mb-4">An AI paraphrasing tool that helps rewrite and refine your academic writing effectively.</p>
        <div className="flex items-center text-amber-600 font-medium">
          Visit Tool
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </a>

      {/* STRING - Red */}
      <a href="https://string-db.org" target="_blank" rel="noopener noreferrer" 
         className="bg-red-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-red-100">
        <div className="flex items-center mb-4">
          <img src="..\src\assets\Images\String.png" alt="STRING" className="w-12 h-12 mr-4" />
          <h3 className="text-xl font-bold text-gray-800">STRING</h3>
        </div>
        <p className="text-gray-600 mb-4">A database that reveals known and predicted protein-protein interactions.</p>
        <div className="flex items-center text-red-600 font-medium">
          Visit Tool
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </a>

      {/* Cytoscape - Cyan */}
      <a href="https://cytoscape.org" target="_blank" rel="noopener noreferrer" 
         className="bg-cyan-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-cyan-100">
        <div className="flex items-center mb-4">
          <img src="../src/assets/Images/cytoscape.png" alt="Cytoscape" className="w-12 h-12 mr-4" />
          <h3 className="text-xl font-bold text-gray-800">Cytoscape</h3>
        </div>
        <p className="text-gray-600 mb-4">A desktop software for visualizing and analyzing complex biological networks.</p>
        <div className="flex items-center text-cyan-600 font-medium">
          Visit Tool
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </a>

      {/* Enrichr - Lime */}
      <a href="https://maayanlab.cloud/Enrichr" target="_blank" rel="noopener noreferrer" 
         className="bg-lime-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-lime-100 min-h-[200px]">
        <div className="flex items-center mb-4">
          <img src="..\src\assets\Images\enrichr.png" alt="Enrichr" className="w-12 h-12 mr-4" />
          <h3 className="text-xl font-bold text-gray-800">Enrichr</h3>
        </div>
        <p className="text-gray-600 mb-4">A fast and user-friendly tool for gene list enrichment and pathway analysis.

</p>
        <div className="flex items-center text-lime-600 font-medium">
          Visit Tool
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </a>
    </div>

    {/* Explore More Button - Now a Link to Registration */}
<div className="text-center mt-8">
  <Link
    to="/login"
    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-colors duration-200 hover:shadow-md"
  >
    Explore More Tools
    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  </Link>
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
              to="/login"
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