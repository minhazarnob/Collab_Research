
import pustlogo from "../../assets/Images/pustlogo.png"

const Affiliations = () => {
    return (
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

    );
};

export default Affiliations;