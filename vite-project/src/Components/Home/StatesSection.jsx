
const StatesSection = () => {
    return (
        <section className="py-16 px-4 bg-red-50 text-black">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

                    <div className="p-6 animate-fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-600" style={{ animationDelay: '0.1s' }}>
                        <div className="text-4xl font-bold mb-2 ">100+</div>
                        <p className="opacity-90">Active Researchers</p>
                    </div>

                    <div className="p-6 animate-fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-600" style={{ animationDelay: '0.3s' }}>
                        <div className="text-4xl font-bold mb-2">120+</div>
                        <p className="opacity-90">Institutions</p>
                    </div>

                    <div className="p-6 animate-fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-600" style={{ animationDelay: '0.5s' }}>
                        <div className="text-4xl font-bold mb-2">250+</div>
                        <p className="opacity-90">Collaborations</p>
                    </div>

                    <div className="p-6 animate-fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-600" style={{ animationDelay: '0.7s' }}>
                        <div className="text-4xl font-bold mb-2">90%</div>
                        <p className="opacity-90">Success Rate</p>
                    </div>

                </div>
            </div>
      </section>
    );
};

export default StatesSection;