import React from 'react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
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
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="px-6 py-8 sm:p-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
                <p className="text-gray-600 mb-4">
                  Welcome to CollabResearch ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our academic collaboration platform.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-medium text-gray-700 mb-2">2.1 Personal Information</h3>
                <p className="text-gray-600 mb-4">
                  When you register, we may collect:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                  <li>Full name and academic title</li>
                  <li>Email address and institutional affiliation</li>
                  <li>Research interests and publication history</li>
                  <li>Profile picture and contact information</li>
                </ul>

                <h3 className="text-xl font-medium text-gray-700 mb-2">2.2 Usage Data</h3>
                <p className="text-gray-600 mb-4">
                  We automatically collect:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                  <li>IP address and browser type</li>
                  <li>Pages visited and time spent</li>
                  <li>Collaboration patterns and research connections</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                  <li>Facilitate academic collaborations</li>
                  <li>Personalize your research matching experience</li>
                  <li>Improve our platform and services</li>
                  <li>Send important notifications and updates</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Sharing</h2>
                <p className="text-gray-600 mb-4">
                  We may share information with:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                  <li>Other researchers in your collaboration network</li>
                  <li>Academic institutions for verification purposes</li>
                  <li>Service providers who assist our operations</li>
                  <li>When required by law or to protect rights</li>
                </ul>
                <p className="text-gray-600">
                  We never sell your personal data to third parties.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Data Security</h2>
                <p className="text-gray-600 mb-4">
                  We implement appropriate technical and organizational measures including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                  <li>SSL/TLS encryption for data transmission</li>
                  <li>Regular security audits</li>
                  <li>Access controls and authentication protocols</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Your Rights</h2>
                <p className="text-gray-600 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                  <li>Access and request a copy of your data</li>
                  <li>Rectify inaccurate information</li>
                  <li>Request deletion of your data</li>
                  <li>Withdraw consent for processing</li>
                  <li>Lodge complaints with regulatory authorities</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Changes to This Policy</h2>
                <p className="text-gray-600 mb-4">
                  We may update this policy periodically. We will notify you of significant changes through platform notifications or email.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contact Us</h2>
                <p className="text-gray-600">
                  For privacy-related inquiries, please contact our Data Protection Officer at:
                </p>
                <p className="text-blue-600 mt-2">privacy@collabresearch.edu</p>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-white text-xl font-bold mb-2">CollabResearch</h3>
              <p>© {new Date().getFullYear()} All rights reserved</p>
            </div>
            <div className="flex space-x-6">
              <Link to="/about" className="hover:text-white">About</Link>
              <Link to="/privacy" className="hover:text-white">Privacy</Link>
              <Link to="/terms" className="hover:text-white">Terms</Link>
              <Link to="/contact" className="hover:text-white">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;