import { Link } from "react-router-dom";

const sections = [
  {
    title: "2. Information We Collect",
    color: "from-blue-500 to-indigo-600",
    content: (
      <>
        <h4 className="text-lg font-semibold text-gray-800 mb-2">2.1 Personal Information</h4>
        <p className="text-gray-700 mb-2">When you register, we may collect:</p>
        <ul className="list-disc pl-6 text-gray-600 mb-5 space-y-1">
          <li>Full name and academic title</li>
          <li>Email address and institutional affiliation</li>
          <li>Research interests and publication history</li>
          <li>Profile picture and contact information</li>
        </ul>
        <h4 className="text-lg font-semibold text-gray-800 mb-2">2.2 Usage Data</h4>
        <p className="text-gray-700 mb-2">We automatically collect:</p>
        <ul className="list-disc pl-6 text-gray-600 space-y-1">
          <li>IP address and browser type</li>
          <li>Pages visited and time spent</li>
          <li>Collaboration patterns and research connections</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. How We Use Your Information",
    color: "from-emerald-500 to-teal-600",
    content: (
      <ul className="list-disc pl-6 text-gray-600 space-y-1">
        <li>Facilitate academic collaborations</li>
        <li>Personalize your research matching experience</li>
        <li>Improve our platform and services</li>
        <li>Send important notifications and updates</li>
        <li>Comply with legal obligations</li>
      </ul>
    ),
  },
  {
    title: "4. Data Sharing",
    color: "from-orange-500 to-pink-600",
    content: (
      <>
        <p className="text-gray-700 mb-2">We may share information with:</p>
        <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-1">
          <li>Other researchers in your collaboration network</li>
          <li>Academic institutions for verification purposes</li>
          <li>Service providers who assist our operations</li>
          <li>When required by law or to protect rights</li>
        </ul>
        <p className="text-gray-800 font-medium">We never sell your personal data to third parties.</p>
      </>
    ),
  },
  {
    title: "5. Data Security",
    color: "from-purple-500 to-fuchsia-600",
    content: (
      <>
        <p className="text-gray-700 mb-2">
          We implement appropriate technical and organizational measures including:
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-1">
          <li>SSL/TLS encryption for data transmission</li>
          <li>Regular security audits</li>
          <li>Access controls and authentication protocols</li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Your Rights",
    color: "from-sky-500 to-cyan-600",
    content: (
      <>
        <p className="text-gray-700 mb-2">You have the right to:</p>
        <ul className="list-disc pl-6 text-gray-600 space-y-1">
          <li>Access and request a copy of your data</li>
          <li>Rectify inaccurate information</li>
          <li>Request deletion of your data</li>
          <li>Withdraw consent for processing</li>
          <li>Lodge complaints with regulatory authorities</li>
        </ul>
      </>
    ),
  },
  {
    title: "7. Changes to This Policy",
    color: "from-amber-500 to-orange-600",
    content: (
      <p className="text-gray-700">
        We may update this policy periodically. We will notify you of significant changes
        through platform notifications or email.
      </p>
    ),
  },
  {
    title: "8. Contact Us",
    color: "from-rose-500 to-red-600",
    content: (
      <>
        <p className="text-gray-700">
          For privacy-related inquiries, please contact our Data Protection Officer at:
        </p>
        <p className="text-orange-600 font-medium mt-2">privacy@collabresearch.edu</p>
      </>
    ),
  },
];

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">CollabResearch</Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Title + Introduction */}
        <div className="bg-white shadow rounded-xl px-6 py-8 sm:p-10 mb-10">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-pink-800">
            Privacy Policy
          </h1>
          <p className="text-gray-700 mb-6">
            Last updated:{" "}
            <span className="text-gray-600 font-bold">{new Date().toLocaleDateString()}</span>
          </p>
          <h2 className="text-2xl font-semibold text-pink-600 mb-3">1. Introduction</h2>
          <p className="text-gray-700 text-lg">
            Welcome to CollabResearch ("we," "our," or "us"). We are committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your
            information when you use our academic collaboration platform.
          </p>
        </div>

        {/* Section Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className={`bg-gradient-to-r ${section.color} px-6 py-4`}>
                <h3 className="text-xl font-semibold text-white text-center">
                  {section.title}
                </h3>
              </div>

              <div className="bg-white p-6 flex-grow text-base">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-white text-2xl font-bold mb-2">CollabResearch</h3>
              <p className="text-lg font-normal">© {new Date().getFullYear()} All rights reserved</p>
            </div>
            <div className="flex space-x-6">
              <Link to="/about" className="hover:text-white text-lg">About</Link>
              <Link to="/privacy" className="hover:text-white text-lg">Privacy</Link>
              <Link to="/terms" className="hover:text-white text-lg">Terms</Link>
              <Link to="/contact" className="hover:text-white text-lg">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;