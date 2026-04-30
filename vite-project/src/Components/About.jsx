import React from 'react';
import { Link } from 'react-router-dom';
import UniversityImage from '../assets/Images/aboutus.jpeg';
import BadolHossen from '../assets/images/Team1.jpg'; // Add your team images
import IsratJahan from '../assets/images/Israt.jpg';
import MahadiHasan from '../assets/images/mahaadi.jpg';
import pustlogo from '../assets/images/pustlogo2.png';

const About = () => {
  const teamMembers = [
  {
    name: "Israt Jahan",
    role: "Project Manager",
    image: IsratJahan,
    bio: "Turning ideas into action — leading with clarity, planning with purpose.",
    social: {
      facebook: "https://www.facebook.com/Israt.CSE.PUST",
      linkedin: "https://www.linkedin.com/in/israt-jahan-50054427a/",
      github: "https://github.com/Isratjahan16"
    }
  },
  {
    name: "Badol Hossen",
    role: "Frontend Developer",
    image: BadolHossen,
    bio: "The creative mind behind the user experience, turning ideas into interactive, intuitive, and beautiful interfaces.",
    social: {
      facebook: "https://www.facebook.com/badolhosen.CSE.PUST/",
      linkedin: "https://www.linkedin.com/in/badolhossen661/",
      github: "https://github.com/badolhosen661"
    }
  },
  {
    name: "Mahadi Hassan",
    role: "Backend Developer",
    image: MahadiHasan,
    bio: "The powerhouse behind the scenes, building the logic, database, and infrastructure.",
    social: {
      facebook: "https://www.facebook.com/mahadi.hasan.CSE.PUST",
      linkedin: "https://www.linkedin.com/in/mahadi-hasan-0259b7276/",
      github: "https://github.com/Mahadi210110"
    }
  }
];

  const investors = [
    "Pabna University Research Fund",
    "Bangladesh Science Foundation",
    "PUST Research Society"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-32 px-4 text-center bg-blue-600 text-white">
        <div className="absolute inset-0 bg-black opacity-100">
          <img 
            src={UniversityImage} 
            alt="Pabna University Campus" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About CollabResearch</h1>
          <p className="text-xl md:text-2xl mb-8">
            Bridging researchers across disciplines to solve complex problems
          </p>
        </div>
      </section>

      {/* The Idea */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">The Idea</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Born at Pabna University of Science and Technology, CollabResearch started as a student project to connect researchers across departments. We recognized that groundbreaking discoveries happen at the intersection of disciplines.
              </p>
              <p className="text-gray-600 text-lg">
                Our platform breaks down academic silos by creating a digital space where computer scientists can find biologists, where physicists can collaborate with sociologists, and where innovative ideas can flourish.
              </p>
            </div>
            <div className="lg:w-1/2 bg-gray-100 p-8 rounded-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-100 p-6 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-2">2019</h3>
                  <p>Concept Development</p>
                </div>
                <div className="bg-green-100 p-6 rounded-lg">
                  <h3 className="font-bold text-green-800 mb-2">2020</h3>
                  <p>First Prototype</p>
                </div>
                <div className="bg-purple-100 p-6 rounded-lg">
                  <h3 className="font-bold text-purple-800 mb-2">2021</h3>
                  <p>University Adoption</p>
                </div>
                <div className="bg-yellow-100 p-6 rounded-lg">
                  <h3 className="font-bold text-yellow-800 mb-2">2022</h3>
                  <p>National Expansion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-lg">
                To accelerate scientific discovery by removing barriers to collaboration, providing researchers with the tools they need to work together across institutions and disciplines, regardless of geographical boundaries.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg">
                A world where knowledge flows freely between researchers, where interdisciplinary collaboration is the norm rather than the exception, and where scientific breakthroughs happen faster through shared effort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Growth & Results */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Our Growth & Results</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-5xl font-bold text-blue-600 mb-3">250+</div>
              <h3 className="text-xl font-semibold mb-2">Research Teams</h3>
              <p className="text-gray-600">Formed through our platform</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-5xl font-bold text-green-600 mb-3">40+</div>
              <h3 className="text-xl font-semibold mb-2">Institutions</h3>
              <p className="text-gray-600">Using CollabResearch</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="text-5xl font-bold text-purple-600 mb-3">100+</div>
              <h3 className="text-xl font-semibold mb-2">Publications</h3>
              <p className="text-gray-600">Resulting from collaborations</p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">The Future</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-3 flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                  Short-Term Goals
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Expand to all major Bangladeshi universities
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Mobile app development
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    AI-powered collaboration matching
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3 flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                  Long-Term Vision
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    International research network
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Integrated funding platform
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Virtual research environments
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
<section className="py-20 px-4 bg-gray-50">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Our Team</h2>
    
    <div className="grid md:grid-cols-3 gap-8">
      {teamMembers.map((member, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
          <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-md">
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
          <p className="text-blue-600 font-medium mb-3">{member.role}</p>
          <p className="text-gray-600">{member.bio}</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a 
              href={member.social.facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
              aria-label={`${member.name} Facebook`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </a>
            <a 
              href={member.social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600"
              aria-label={`${member.name} LinkedIn`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
              </svg>
            </a>
            <a 
              href={member.social.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
              aria-label={`${member.name} GitHub`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Our Investors */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Our Investors</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {investors.map((investor, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">{investor}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* University Affiliation */}
      {/* University Affiliation */}
<section className="py-16 px-4 bg-blue-600 text-white">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6">Proudly Developed at</h2>
    <div className="flex flex-col items-center">
      <div className="w-32 h-32 mb-6 bg-white rounded-full flex items-center justify-center shadow-lg p-4">
        <img 
          src={pustlogo} 
          alt="Pabna University of Science and Technology Logo" 
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-2xl font-bold mb-2">Pabna University of Science and Technology</h3>
      <p className="text-xl opacity-90 max-w-2xl mx-auto">
        A leading institution in Bangladesh for scientific research and technological innovation
      </p>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-white text-xl font-bold mb-2">CollabResearch</h3>
              <p>© {new Date().getFullYear()} All rights reserved</p>
            </div>
            <div className="flex space-x-6">
              <Link to="/about" className="hover:text-white">About</Link>
              <Link to="/contact" className="hover:text-white">Contact</Link>
              <Link to="/privacy" className="hover:text-white">Privacy</Link>
              <Link to="/terms" className="hover:text-white">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;