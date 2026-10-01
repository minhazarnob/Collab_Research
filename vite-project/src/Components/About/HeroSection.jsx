
import AboutResearch from "../../assets/Images/AboutResearch.jpg";

const HeroSection = () => {
    return (
      <section className="relative py-32 px-4 text-center bg-blue-50 text-white">
        <div className="absolute inset-0 bg-black opacity-100">
          <img 
            src={AboutResearch} 
            alt="About Research" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-4xl mx-auto">
          <h3 className="text-4xl md:text-6xl font-bold mb-6 text-orange-600">About CollabResearch</h3>
          <p className="text-xl md:text-2xl mb-8">
            Bridging researchers across disciplines to solve complex problems
          </p>
        </div>
      </section>
    );
};
export default HeroSection;