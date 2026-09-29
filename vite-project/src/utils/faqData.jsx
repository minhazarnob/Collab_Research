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