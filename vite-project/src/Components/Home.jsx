
import HeroSection from "../Components/Home/HeroSection";
import NewsTicker from "../components/home/NewsTicker";
import FeaturesSection from "../components/home/FeaturesSection";
import NetworkSection from "../components/home/NetworkSection";
import ProjectSection from "../Components/Home/ProjectSection";
import PublicationTools from "../components/home/PublicationTools";
import ResearchTools from "../Components/Home/ResearchTools";
import CoursesSection from "../components/home/CoursesSection";
import StatesSection from "../Components/Home/StatesSection";
import FaqSection from "../components/home/FaqSection";
import Testimonials from "../Components/Home/Testimonials";
import CTASection from "../components/home/CTASection";
import Footer from "../components/home/Footer";
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