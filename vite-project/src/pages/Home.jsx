
import HeroSection from "../Components/Home/HeroSection";
import NewsTicker from "../Components/Home/NewsTicker";
import FeaturesSection from "../Components/Home/FeaturesSection";
import NetworkSection from "../Components/Home/NetworkSection";
import ProjectSection from "../Components/Home/ProjectSection";
import PublicationTools from "../Components/Home/PublicationTools";
import ResearchTools from "../Components/Home/ResearchTools";
import CoursesSection from "../Components/home/CoursesSection";
import StatesSection from "../Components/Home/StatesSection";
import FaqSection from "../Components/Home/FaqSection";
import Testimonials from "../Components/Home/Testimonials";
import CTASection from "../Components/Home/CTASection";
import Footer from "../Components/Home/Footer";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar/>
      <HeroSection />
      <NewsTicker />
      <FeaturesSection />
      <NetworkSection />
      <ProjectSection />
      <PublicationTools />
      <ResearchTools/>
      <CoursesSection />
      <StatesSection />
      <FaqSection />
      <Testimonials/>
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;