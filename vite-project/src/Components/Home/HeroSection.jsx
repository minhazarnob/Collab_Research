
import { Link } from "react-router-dom";
import Research from "../../assets/Images/Research.jpg";

const HeroSection = () => {
    return (
         <section className="relative py-20 px-4 bg-blue-50">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                src={Research}
                alt="Research collaboration background"
                className="w-full h-full object-cover opacity-60"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
                    Connect. <span className="text-orange-600">Collaborate.</span> Create.
                </h2>

                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
                    Join thousands of researchers sharing publications, forming teams, and collaborating on groundbreaking projects
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        to="/register"
                        className="bg-orange-600 hover:bg-orange-700 text-white text-xl font-medium py-3 px-8 rounded-full transition duration-300"
                    >
                        Get Started 
                    </Link>
                    <button
                        onClick={() => {
                        const element = document.getElementById("features-section");
                        if (element) element.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="border-2 border-orange-600 text-black text-xl bg-blue-50 hover:cursor-pointer font-medium py-3 px-8 rounded-full transition duration-300"
                    >
                        Explore Features
                    </button>
                </div>
            </div>
    </section>
    );
};

export default HeroSection;