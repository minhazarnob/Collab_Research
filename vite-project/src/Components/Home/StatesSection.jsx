
const StatesSection = () => {
    return (
        <section className="py-16 px-4 bg-blue-600 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="p-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <div className="text-4xl font-bold mb-2">5,000+</div>
                        <p className="opacity-90">Active Researchers</p>
                    </div>
                    <div className="p-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <div className="text-4xl font-bold mb-2">120+</div>
                        <p className="opacity-90">Institutions</p>
                    </div>
                    <div className="p-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                        <div className="text-4xl font-bold mb-2">2,500+</div>
                        <p className="opacity-90">Collaborations</p>
                    </div>
                    <div className="p-6 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                        <div className="text-4xl font-bold mb-2">95%</div>
                        <p className="opacity-90">Success Rate</p>
                    </div>
                </div>
            </div>
      </section>
    );
};

export default StatesSection;