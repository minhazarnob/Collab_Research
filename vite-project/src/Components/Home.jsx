
import { useState } from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };




  return (
    <div className="min-h-screen bg-gray-100">
      


      {/* Collaboration Tools Section 1 - Research Networking */}


{/* Collaboration Tools Section 2 - Project Management */}


{/* Collaboration Tools Section 3 - Publication Tools */}


{/* Research Tools Section */}

      

      {/* Stats Section with Animation */}
      

      {/* FAQ Section */}
      

      {/* Testimonials */}
      
      {/* Final CTA */}
      
      {/* Footer */}
      

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